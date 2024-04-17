import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();


export async function DELETE(params) {
    const postes = await prisma.utilisateur.delete({
        where: {
            email: "",
        }})
    return NextResponse.json({message: "ok", status: 200})
}