import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  
    try {
      console.log("POST REQUEST", request)
      const body = await request.json();
      
      const {id} = body
      if (!id) {
        return new Response("Missing id", { status: 400 })
      }

    await prisma.publication.delete({
        where: {
          id: id,
        }
      });
      return NextResponse.json({ message: "Article supprimé avec succès", status: 200 });
    } catch (error) {
      console.error("Erreur lors de la suppression de l'article :", error);
      return NextResponse.json({ message: "Une erreur s'est produite lors de la suppression de l'article", status: 500 });
    }
  }
