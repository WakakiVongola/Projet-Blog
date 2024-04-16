import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();


export async function DELETE(params:any) {
    const postes = await prisma.publication.delete({
        where: {
            slug: "fkfjzij",
        }})
    return NextResponse.json({message: "ok", status: 200})
}