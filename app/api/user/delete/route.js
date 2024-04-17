import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email } = await req.json(); // Get email from request body
      await prisma.utilisateur.delete({
        where: {
          email: email,
        }
      });
      return res.json({ message: "Utilisateur supprimé avec succès", status: 200 });
    } catch (error) {
      console.error("Erreur lors de la suppression de l'utilisateur :", error);
      return res.json({ message: "Une erreur s'est produite lors de la suppression de l'utilisateur", status: 500 });
    }
  }
}
