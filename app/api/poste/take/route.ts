import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();


export async function GET(params:any) {
    const postes = await prisma.publication.findMany({
        where: {
            slug: "Nathan le bg",
        },
        select: {
            titre: true,
            contenu: true,
            image: true
        }
    })
    return NextResponse.json({message: "ok", status: 200, data:postes})
}