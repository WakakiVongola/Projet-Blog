import { PrismaClient } from '@prisma/client'
import { getSession  } from 'next-auth/react';
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();

export async function POST(request) {
    const body = await request.json()
    const {Titre, Contenu, Image} = body.data

    const session = await getSession({ req: request })

    if(!Titre || !Contenu || !Image)
        {
            return new NextResponse("Missing Titre,Image or Contenu",{status:400})
        }

    const poste = await prisma.publication.create({
        data:{ titre:Titre, contenu:Contenu, image:"https://tydm3izfifd9ev07.public.blob.vercel-storage.com/NathanLove-LlPkuUaPuMJT1Cs4GW7jh16ARxIAHm.jpg", slug:Titre,auteurId:session.user.id}
    })

    return NextResponse.json(poste)
}