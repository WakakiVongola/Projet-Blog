import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();

export async function POST(request) {
    const body = await request.json()
    const {Titre, Contenu, Image} = body.data

    if(!Titre || !Contenu || !Image)
        {
            return new NextResponse("Missing Titre,Image or Contenu",{status:400})
        }

    const poste = await prisma.publication.create({
        data:{ titre:Titre, contenu:Contenu, image:Image, slug:Titre,auteurId:"661d2bc915fc42b2d526a40d"}
    })

    return NextResponse.json(poste)
}