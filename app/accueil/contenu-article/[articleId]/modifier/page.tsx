"use client";
import useSWR from "swr";
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
// import type { PutBlobResult } from '@vercel/blob';
// // import { Commentaires } from './commentaires';
// import { useRouter } from 'next/router';
import Commentaires from "./commentaires";

const fetcher = (...args: any[]) => fetch(...args).then(res => res.json());

const page = () => {

    const [data, setData] = useState({
        Titre:'',
        Contenu:'',
    });

    const takeInfo = async (e: any) => {
        e.preventDefault();
        console.log(data.Titre);
        console.log(data.Contenu);
        const response = await fetch('/api/poste/updateposte', {
            method:'PUT',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({data})
        });}


    const { data: donnees, error, isLoading } = useSWR<any>('/api/poste/take', fetcher);

    console.log(donnees);
    const obj = donnees && donnees.data && donnees.data.length > 0 ? donnees.data[2] : null;
    

    // const router = useRouter();
    // const { articleId } = router.query;
    
    // const obj = data && data.data && data.data.find((item: any) => item.id === articleId);
    return (
        <div className='bg-blanc p-5 flex flex-row justify-between'>
            {/* conteneur de modifier l'article */}
            <div className='bg-beige flex w-[55%] flex-col'>
            <form>    
            
                {/* partie du haut */}
                <div className='border-b-[1px] border-gray-500'>
                    {/* l'image */}
                    <div className=' container justify-center flex'>
                    {obj && (
                                <Image
                                    className="px-5 pt-5 pb-1"
                                    src='/lac-de-come.jpg'
                                    width={500}
                                    height={300}
                                    alt="Lac de Côme"
                                />
                            )}
                    </div>
                    {/* barre de like et nom d'article */}                 
                    <div className='flex flex-row justify-between px-5 items-center' >
                        {/* nom d'article */}
                        <div className='flex flex-row bg-marron border-[1px] w-[30%] h-12 items-center justify-evenly'>
                        {obj && (
                                    <h2 className="text-zinc-50 font-semibold p-2">{obj.titre}</h2>
                                )}
                            <Image 
                            className='w-3 flex justify-end' 
                            src="/editer.svg" 
                            alt="Cliquez ici pour modifier le label de d'image" 
                            width={20}
                            height={20}
                            />
                        </div>
                        {/* likes */}
                        <div className='flex flex-row items-center justify-center gap-2 text-center'>
                            <div className='transition duration-500 ease-in-out hover:brightness-50'>
                                <Image 
                                    className='bg-marron p-2' 
                                    src="/thumbs-up.svg" 
                                    alt="" 
                                    width={40}
                                    height={40}
                                />
                                {obj && (
                                        <p> {obj.like}</p>
                                        )}
                            </div>
                            <div className='transition duration-500 ease-in-out hover:brightness-50'>
                                <Image 
                                    className='bg-marron p-2' 
                                    src="/thumbs-down.svg" 
                                    alt="" 
                                    width={40}
                                    height={40}
                                />
                                {obj && ( <p>kebab</p>)}
                            </div>
                        </div>
                    </div>    
                    {/* titre */}
                    <div className='flex flex-row justify-between m-5 border-2 items-center'> 
                    {obj && (
                                <textarea 
                                value={donnees.Titre} 
                                id="Titre" 
                                onChange={(e) => {setData({...data, Titre:e.target.value})}} 
                                className="bg-beige text-white text-2xl font-thin m-2 p-2">
                                {obj.titre}
                                </textarea>
                            )}
                        <Image 
                            className='w-5 m-2' 
                            src="/editer.svg" 
                            alt="cliquez ici pour modifier le titre"
                            width={30} 
                            height={30}
                        />
                    </div>
                </div>
                {/* partie du bas */}
                    <div className='border-2 px-5 mx-5 my-5'>
                    {obj && (
                        
                        <textarea 
                        value={donnees.Contenu} 
                        id="Contenu" 
                        onChange={(e) => {setData({...data, Contenu:e.target.value})}} 
                        className='bg-beige w-[100%] m-2 text-white text-2xl font-thin p-2'>
                            {obj.contenu}
                        </textarea>
                        )}
                        {/* <div className='flex justify-end'><Button onClick={takeInfo}><img className='w-5 m-2 jus' src="/editer.svg" alt="cliquez ici pour modifier le contenu" /></Button></div> */}
                    </div>
            </form> 
            <a onClick={takeInfo} className='bg-marron text-white text-center p-2 m-2'>Modifier</a>
            
            </div>
            {/* supprimer les commentaires */}
            {/* partie titre */}
            <div className='bg-marron flex flex-col w-[40%]'>
                <div className='border-b-2 border-white py-4 w-[100%] text-white text-center'>Commentaires</div>
                {/* partie commentaire */}
                <Commentaires />
            </div>   
        </div>
    );
};

export default page;
