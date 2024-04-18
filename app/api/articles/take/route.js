import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();

export async function GET(params) {
    const postes = await prisma.publication.findMany({
        select: {
            id : true,
            slug : true,
            titre : true,
            auteur : true,
        }
    })
    return NextResponse.json({message: "ok", status: 200, data:postes})
}