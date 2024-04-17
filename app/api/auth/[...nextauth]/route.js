import NextAuth from "next-auth/next"
import  CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { log } from "console"

const prisma = new PrismaClient();

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers:[
        CredentialsProvider({
            name:'credentials',
            credentials: {
                Email: { label: 'Email', type: 'text', placeholder: 'your email' },
                Password: { label: 'Password', type: 'password' },
              },
              async authorize(credentials){

                //  Check to see if email and password are valid
                if(!credentials.Email || !credentials.Password) {
                    throw new Error("email ou password non valides")
                }

                // check to see if user exists
                const user = await prisma.utilisateur.findUnique ({
                    where : {
                        email:credentials.Email
                    }
                })

                if(!user){
                    return null
                }

                // check to see if passwords match
                const passwordsMatch = await bcrypt.compare(credentials.Password, user.motDePasse)

                if(!passwordsMatch) {
                    return null;
                }

                // return user object 
                return user;
              }
        })
    ],
    session:{
        strategy:'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === 'development',
    calbacks: {
        async jwt({ token, user}){
            console.log("jwt :"+user)
            if(user){
            //     token.id = user.id
            //     // token.email = user.email
            //     // token.pseudo = user.pseudo
            //     // //token.publications =user.publications
            //     // token.role = user.role
                
            }
            return token
        },
        async session({session, token, user}){
            console.log("session"+ token)
            session.user.id = token.id
            // session.user.email = token.email
            // session.user.pseudo = token.pseudo
            //session.user.publications = token.publications
            // session.user.role = token.role
            return session
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }