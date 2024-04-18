"use client"

import Image from "next/image";
import useSWR from "swr";
import Link from "next/link";
import { ArrowSmUpIcon } from "@heroicons/react/outline";

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function ArticleInfo( {params} ) {

    const {articleId} = params;

    const { data, error, isLoading } = useSWR('/api/poste/take', fetcher);

    const articles = data && data.data ? data.data : [];

    const article = articles.find(publication => publication.slug === articleId)

    console.log(article)

    return (   
        <div className="bg-blanc">
                {article && (
                    <div className="text-center py-5">
                        <h1 className="text-5xl">{article.titre}</h1>
                    </div>
                )}
                <section className="py-5 flex justify-between">
                    {article && (
                            <div className="w-[890px]">
                                <div className="ml-10 py-5 shadow-2xl rounded-lg mr-5">
                                    <Image className="shadow-2xl rounded-lg mx-auto"
                                        src={article.image}
                                        width={798}
                                        height={499}
                                        alt={article.titre}
                                    />
                                    <p className="my-10 mx-auto px-5">
                                        {article.contenu}
                                    </p>
                                    <br/>
                                </div>
                            </div>
                        )}
                </section>
                <section className="py-10 flex justify-between mr-10">
                <div className="bg-marron w-[830px] h-96 relative ml-10 rounded-lg shadow-2xl">
                    <div className="border-b-2 border-[#92885b]">
                        <h3 className="text-white text-center text-2xl py-5">Commentaires</h3>
                    </div>
                    <div className="flex items-center space-x-2 ml-5 py-5">
                        <Image className="rounded-full border border-white transition duration-500 ease-in-out hover:brightness-50"
                            src='/mathis.jpg'
                            width={60}
                            height={60}
                            alt="Mathis.Guerin"
                        />
                        <div className="text-left">                                
                        <p className="text-white font-bold transition duration-500 ease-in-out hover:brightness-50">Mathis.Guerin</p>
                        <p className="text-slate-300 font-thin">Superbe villa, la photo est juste sublime.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image 
                                className="ml-12 transition duration-500 ease-in-out hover:brightness-50"
                                src='/thumbs-up.svg'
                                width={30}
                                height={30}
                                alt="Like"
                            />
                            <p className="ml-12 text-white font-thin">256</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-5 py-5">
                        <Image 
                            className="rounded-full border border-white transition duration-500 ease-in-out hover:brightness-50"
                            src='/bruno.jpg'
                            width={60}
                            height={60}
                            alt="Bruno.Dernier"
                        />
                        <div className="text-left">
                            <p className="text-white font-bold transition duration-500 ease-in-out hover:brightness-50">Bruno.Dernier</p>
                            <p className="text-slate-300 font-thin">Ma maison est plus belle ;)</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image 
                                className="ml-12 transition duration-500 ease-in-out hover:brightness-50"
                                src='/thumbs-up.svg'
                                width={30}
                                height={30}                                    
                                alt="Like"
                            />
                            <p className="ml-12 text-white font-thin">40</p>
                        </div>
                    </div>
                    <form className="ml-5 mr-5 mb-5">
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                placeholder="Ajoutez un commentaire"
                                className="bg-transparent flex-grow py-1 px-3 rounded-xl border border-blanc text-blanc"
                            />
                            <button
                                type="submit"
                                className="text-white hover:text-beige bg-blue-700 px-1 rounded-xl transition duration-500 ease-in-out hover:scale-105"
                            >
                                <ArrowSmUpIcon className="h-7 w-7" />
                            </button>
                        </div>
                    </form>
                </div>
                <div className="bg-beige shadow-2xl rounded-lg p-5">
                    <h2 className="text-2xl font-semibold mb-3">Inscrivez-vous à notre newsletter</h2>
                    <form>
                        <input
                            type="email"
                            placeholder="Votre adresse email"
                            className="bg-transparent w-full py-2 px-3 rounded-lg shadow-md mb-3 border border-blanc text-white"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-500 ease-in-out hover:scale-105"
                        >
                            S'inscrire
                        </button>
                    </form>
                </div>
            </section>  
                </div>
    )

}