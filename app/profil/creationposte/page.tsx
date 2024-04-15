"use client"
import Image from "next/image";
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import type { PutBlobResult } from '@vercel/blob';

const InfoPoste = () => {
    //Code pour la l'affichage des image 
    const [img, setImg] = useState("");
    const chechImg = async (e:any) => {
        e.preventDefault()
        let file = e.target.files[0]
        const response = await fetch(`/api/poste/createImage?filename=${file.name}`, {
            method:'POST',
            body:file
        })
        const newBlob = (await response.json()) as PutBlobResult;
        setImg(newBlob.url)
        setData({...data, Image:newBlob.url})
    }

    //Code pour récuperation des infos du poste 
    const [data, setData] = useState({
        Titre:'',
        Contenu:'',
        Image:'',
    })
    const takeInfo = async (e:any) => {
        e.preventDefault()
        const response = await fetch('/api/poste/create', {
            method:'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({data})
        })
    }
    return (

    <div>
        <div>
            <form className="flex">
                <div className="w-[50%] p-9">
                    <textarea value={data.Titre} id="Titre" onChange={(e) => {setData({...data, Titre:e.target.value})}} className="text-center resize-none block p-2.5 w-full bg-black text-white text-3xl h-14 " placeholder="Titre du poste"></textarea>
                    <textarea value={data.Contenu} id="message" onChange={(e) => {setData({...data, Contenu:e.target.value})}} className=" resize-y text-3xl h-80 text-center block p-2.5 w-full text-white bg-beige" placeholder="Votre poste"></textarea>
                </div>
                <div className=" m-10 p-5 bg-beige ml-36">
                    <Image 
                    src={img}
                    alt=""
                    width={500}
                    height={500}
                    />
                <input className="w-fulL ml-32 flex" id="picture" onChange={chechImg} type="file"/>
                </div>
            </form>

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
            <Button onClick={takeInfo} className="flex justify-center bg-blanc underline text-2xl" type="submit" variant="ghost"><a>Ajouter le poste</a></Button>
        </div>
    </div>
    );
    }
export default InfoPoste;