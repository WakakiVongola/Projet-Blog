"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Villa() {
    return (
    <div className="bg-blanc">
        <div className="flex">
            <div className="w-[50%] p-9">
                <textarea id="Titre" className="text-center resize-none block p-2.5 w-full bg-black text-white text-3xl h-14 " placeholder="Titre du poste"></textarea>
                <textarea id="message" className=" resize-y text-3xl h-80 text-center block p-2.5 w-full text-white bg-beige" placeholder="Votre poste"></textarea>
            </div>
            <div className=" m-10 p-5 bg-beige ml-36">
                <Image 
                src="/lac-de-come.jpg"
                alt="photo"
                width={500}
                height={500}
                className=""
                />
                <input className="w-fulL ml-32 flex" id="picture" type="file"/>
            </div>
        </div>
        <div className="flex justify-center">
            <Button className="flex justify-center bg-blanc underline text-2xl" variant="ghost">Ajouter le poste</Button>
        </div>
    </div>
    );
  }
