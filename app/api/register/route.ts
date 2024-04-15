import User from "@/src/models/user";
import connect from "@/src/outils/db";
// import  bcrypt from "bcryptjs"
import { pseudoRandomBytes } from "crypto";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export const POST = async (request: any) => {
  const body= await request.json();
  const { Pseudo, Email, Password } = body.data
  
  if(!Pseudo || !Email || !Password)
    {
        return new NextResponse("Missing Titre,Image or Contenu",{status:400})
    }
  
   const user=await prisma.Utilisateur.create({
    data:{email:Email, pseudo:Pseudo, motDePasse:Password, role:"user"}
   })
   return NextResponse.json(user)
  };