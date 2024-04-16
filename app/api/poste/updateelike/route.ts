import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();


export async function tt(params:any) {
    const postes = await prisma.publication.update({
        data: { like : +1 },
        where: { slug: "lll" },
    })
    return NextResponse.json({message: "ok", status: 200})
}