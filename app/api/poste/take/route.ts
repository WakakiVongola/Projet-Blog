import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();


export async function GET(params:any) {
    const postes = await prisma.publication.findUnique({
        where: {
            slug: "villa france",
        },
        select: {
            titre: true,
            contenu: true,
            image: true
        }
    })
    return NextResponse.json({message: "ok", status: 200, data:postes})
}