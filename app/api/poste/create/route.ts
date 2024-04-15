import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();

export async function POST(request:any) {
    const body = await request.json()
    const {Titre, Contenu, Image} = body.data

    if(!Titre || !Contenu || !Image)
        {
            return new NextResponse("Missing Titre,Image or Contenu",{status:400})
        }

    const poste = await prisma.publication.create({
        data:{ titre:Titre, contenu:Contenu, image:Image, slug:Titre,auteurId:"6617ce2db10087bc4ca55828"}
    })

    return NextResponse.json(poste)
}