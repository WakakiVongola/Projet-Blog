import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();


export async function PUT(request:any) {
    
    const body = await request.json()
    const {Titre, Contenu} = body.data

    if(!Contenu || !Titre )
        {
            return new NextResponse("Missing Titre or Contenu",{status:400})
        }

    try{
            const newposte = await prisma.publication.update({
            data:{ contenu:Contenu, titre:Titre },
            where: { id: "661eaf57eea29a4dc1369158" }, // Replace `postId` with the actual ID of the post
        })
        return NextResponse.json(newposte)
        }
        catch(e){
            return new NextResponse("Errors ve updating the post",{status:500})
        }
    }

