// api/articles/takeone/route.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { articleId } = req.query;

  try {
    const article = await prisma.publication.findUnique({
      where: {
        slug: articleId as string, // Assuming 'slug' is the identifier for articles
      },
      select: {
        titre: true,
        contenu: true,
        image: true,
      },
    });

    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    return res.status(200).json(article);
  } catch (error) {
    console.error('Error fetching article:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
