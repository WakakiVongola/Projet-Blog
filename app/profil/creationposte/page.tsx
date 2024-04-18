"use client"
import { useEffect, useState } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Assurez-vous d'importer Button correctement
import type { PutBlobResult } from '@vercel/blob';
import { useSession } from 'next-auth/react';
import {useRouter} from "next/navigation"
import useSWR from 'swr';


const fetcher = (...args:any) => fetch(...args).then(res => res.json());

const InfoPoste = () => {

    const router = useRouter()
    const {data:session, status} = useSession({
        required: true,
        onUnauthenticated() {
           alert("Rayan a mangé cette page elle n'est pas accessible pour le moment veuillez revenir plus tard.")
           router.push("/accueil")
        },
    })
    const checkUserr = async (e:any) => {
        e.preventDefault();
        const response = await fetch(`/api/user/takeOne`, {
            method:'POST',
            body:"tt@gmail.com"
        });
    }

    const [img, setImg] = useState("");
    const [data, setData] = useState({
        Titre:'',
        Contenu:'',
        Image:'',
    });

    const chechImg = async (e:any) => {
        e.preventDefault();
        let file = e.target.files[0];
        const response = await fetch(`/api/poste/createImage?filename=${file.name}`, {
            method:'POST',
            body:file
        });
        const newBlob = (await response.json()) as PutBlobResult;
        setImg(newBlob.url);
        setData({...data, Image:newBlob.url});
    }

    const takeInfo = async (e:any) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/poste/create', {
                method:'POST',
                headers : {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({data})
            }); 
            if(!response.ok){
                throw new Error('poste pas ajouter');
            }
            alert("Poste Ajouter")
            router.push("/profil/1")
        } catch (error) {
            alert("Le poste n'a pas été ajouter");
        }
    }

    const { data:userData, error, isLoading } = useSWR('/api/user/takeOne', fetcher);

    if(isLoading == false){
        if(userData.data.role == "VIEWVER"){
            console.log("role de ce user " + userData.data.role)
            alert("Tu n'as pas l'accès")
            router.push("/accueil")
        }
    }

    return (
        <div>
            <div>
                <form className="flex">
                    <div className="w-[50%] p-9">
                        <textarea value={data.Titre} id="Titre" onChange={(e) => {setData({...data, Titre:e.target.value})}} className="text-center resize-none block p-2.5 w-full bg-black text-white text-3xl h-14 " placeholder="Titre du poste"></textarea>
                        <textarea value={data.Contenu} id="message" onChange={(e) => {setData({...data, Contenu:e.target.value})}} className="resize-y text-3xl h-80 text-center block p-2.5 w-full text-white bg-beige" placeholder="Votre poste"></textarea>
                    </div>
                    <div className="m-10 p-5 bg-beige ml-36">
                        <Image 
                            src={img}
                            alt=""
                            width={500}
                            height={500}
                            id="imgf"
                        />
                        <input className="w-fulL ml-32 flex" id="picture" onChange={chechImg} type="file"/>
                    </div>
                </form>
            </div>
            <div className="flex justify-center">
                <Button onClick={takeInfo} className="flex justify-center bg-blanc underline text-2xl" variant="ghost">Ajouter un poste</Button>
            </div>
        </div>
    );
}

export default InfoPoste;
