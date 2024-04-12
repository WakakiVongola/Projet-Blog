import User from "@/src/models/user";
import connect from "@/src/outils/db";
// import  bcrypt from "bcryptjs"
import { pseudoRandomBytes } from "crypto";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
    const { pseudo, email, password } = await request.json();
  
    await connect();
  
    const existingUser = await User.findOne({ email });
  
    if (existingUser) {
      return new NextResponse("Email is already in use", { status: 400 });
    }
  
    const newUser = new User({
        pseudo,
        email,
      password
    });
  
    try {
      await newUser.save();
      return new NextResponse("User is registered", { status: 200 });
    } catch (err: any) {
      return new NextResponse(err, {
        status: 500,
      });
    }
  };