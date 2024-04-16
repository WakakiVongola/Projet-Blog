import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();

export async function POST(request) {
    try {
        const body = await request.json();
        const { Pseudo, Email, Password } = body.data;

        if (!Pseudo || !Email || !Password) {
            return new Response("Missing pseudo, email, or password", { status: 400 })
        }

        const existingUser = await prisma.utilisateur.findUnique({
            where: {
                email: Email
            }
        });

        if (existingUser) {
            return new Response("User already exists", { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(Password, 10);

        const user = await prisma.utilisateur.create({
            data: { email: Email, pseudo: Pseudo, motDePasse: hashedPassword }
        });

        return new Response(JSON.stringify(user), { status: 201 });
    } catch (error) {
        console.error("Error processing registration:", error);
        return new Response("Internal Server Error", { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
