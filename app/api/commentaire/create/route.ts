import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();

export async function POST(request:any) {
    const body = await request.json()
    const {commantaire} = body.data

    if(commantaire)
        {
            return new NextResponse("Missing Titre,Image or Contenu",{status:400})
        }

    const poste = await prisma.publication.create({
        data:{ commentaires:commantaire}
    })

    return NextResponse.json(poste)