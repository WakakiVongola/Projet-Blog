import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();


export async function GET(params) {
    const postes = await prisma.utilisateur.findMany({
        select: {
            pseudo : true,
            email: true,
            motDePasse: true,
            role:true,
        }
    })
    return NextResponse.json({message: "ok", status: 200, data:postes})
}