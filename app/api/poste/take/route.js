import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// Fonction pour convertir une chaîne en slug compatible avec les URL
function createSlug(text) {
    return text.toLowerCase()
        .replace(/ /g, '_') // Remplacer les espaces par des underscores
        .normalize("NFD")   // Normaliser les caractères avec accents
        .replace(/[\u0300-\u036f]/g, ""); // Supprimer les accents
}

export async function GET() {
    try {
        const postes = await prisma.publication.findMany({
            select: {
                titre: true,
                contenu: true,
                image: true,
                like: true,
                dislike: true,
            }
        });

        // Modifier les slugs des publications avant de les renvoyer
        const postesAvecSlugModifie = postes.map(poste => ({
            ...poste,
            slug: createSlug(poste.titre)
        }));

        return NextResponse.json({ message: "ok", status: 200, data: postesAvecSlugModifie });
    } catch (error) {
        console.error("Error fetching posts:", error);
        return NextResponse.json({ message: "Internal Server Error", status: 500 });
    }
}
