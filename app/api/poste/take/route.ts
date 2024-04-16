import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();


export async function GET(params:any) {
    const postes = await prisma.publication.findMany({
        select: {
            titre: true,
            contenu: true,
            image: true,
            like : true
        }
    })
    return NextResponse.json({message: "ok", status: 200, data:postes})
}