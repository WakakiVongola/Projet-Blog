import NextAuth from "next-auth/next"
import  CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient();

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers:[
        CredentialsProvider({
            name:'credentials',
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: 'your email' },
                password: { label: 'Password', type: 'password' },
              },
              async authorize(credentials){

                //  Check email et password sont valides
                if(!credentials.email || !credentials.password) {
                    return null
                }

                // check utilisateur 
                const user = await prisma.utilisateur.findUnique ({
                    where : {
                        email : credentials.email
                    }
                })

                if(!user){
                    return null
                }

                // check mots de passes
                const passwordsMatch = await bcrypt.compare(credentials.password, user.motDePasse)

                if(!passwordsMatch) {
                    return null;
                }

                return user;
              }
        })
    ],
    session:{
        strategy:'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === 'development'
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }