import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();


export async function GET(params) {
    const user = await prisma.utilisateur.findUnique({
        where: {
            email: "tt@gmail.com",
        },
        select: {
            email: true,
            pseudo: true,
            role: true,
            id: true,
        }
    })
    return NextResponse.json({message: "ok", status: 200, data:user})
}
