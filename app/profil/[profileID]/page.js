// page.tsx
"use client"
import { useSession } from "next-auth/react"
import {signOut} from "next-auth/react"
import {useRouter} from "next/navigation"
import React from 'react';
import Image from 'next/image';
import useSWR, { mutate } from 'swr';
import exp from 'constants';
import articles from '@/app/administration/articles/page';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Page = ({params}) => {
    const {data:session,status} = useSession({
        required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
    },
    })
    const router = useRouter()

    const handleDelete = async (id) => {
        console.log(id)
        try {
          const response = await fetch(`/api/articles/delete`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
          });
          if (response.ok) {
            // Refresh data after deletion
            mutate('/api/articles/take');
          } else {
            console.error('Erreur lors de la suppression de l\'article', response);
          }
        } catch (error) {
          console.error('Erreur lors de la suppression de l\'article :', error);
        }
      };

    const  slugArticle = params.articleId;
    const  User = params.profileID;

    // const deletee = async (e) => {
    //     e.preventDefault();
    //     const response = await fetch('../api/poste/delete', {
    //         method:'DELETE',
    //     })

    // }
    
    const { data, error, isLoading } = useSWR('/api/poste/take', fetcher);
    console.log(data);
    const p = data && data.data ? data.data.length : 0;
    const likes = data && data.data ? data.data.like : 0;
    const Commentaires = data && data.data ? data.data.commentaire : 0;

    const writeHello = () => {
        const obj = data && data.data ? data.data : [];
        if (obj==0) { return( <div className='flex justify-center bg-marron text-white text-center'> Il semble que vous n'ayez aucune publication <br/> Veuillez revenir plus tard </div>)
                    
                }
        return (
            <>
                {obj.map((article, index) => (
                    <div className='bg-marron text-white flex col justify-between items-center text-center p-2 m-2 rounded-sm'>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <Image
                                src={`/Lac-de-come.jpg`}
                                alt="Picture of the author"
                                width={200}
                                height={300}
                            />
                            <p> {article.titre}</p>
                        </div>
                        <div>
                            <p>{article.like}</p>
                            <Image
                                src='/thumbs-up.svg'
                                alt="Like"
                                width={40}
                                height={40}
                            />
                        </div>
                        <div>
                            <p>{article.id}</p>
                            <Image
                                src='/thumbs-down.svg'
                                alt="Dislike"
                                width={40}
                                height={40}
                            />
                        </div>
                        <div>
                            <p>500</p>
                            <Image
                                src='/commentaire.svg'
                                alt="symbole commentaire"
                                width={40}
                                height={40}
                            />
                        </div>
                        <div>
                            {obj && (<a href={`/accueil/contenu-article/${article.slug}/modifier`}>
                                <Image
                                    src='/editer.svg'
                                    alt="Editer"
                                    width={40}
                                    height={40}
                                /></a>)}

                        </div>
                        <div>
                            <button onClick={()=>handleDelete(article.id)}>
                            <Image
                                src='/poubelle.svg'
                                alt="Supprimer"
                                width={40}
                                height={40}
                                
                            /></button>
                        </div>
                    </div>
                ))}
            </>
        );
    };

    return (
            <div className='bg-blanc'>
                {/* présentation du profil */}
                <div className='flex flex-row items-center justify-between border-b-2 border-black'>
                    {/* image de profil et nom de l'utilisateur*/}
                    <div className='flex items-center space-x-2 ml-5 py-5'>
                        {/* conteneur de l'image */}
                        <Image
                            className="rounded-full border border-white transition hover:brightness-50"
                            src={'/mathis.jpg'}
                            alt="Picture of the author"
                            width={60}
                            height={60}
                        />
                        {/* nom du profil */}
                        <a className="text-marron font-bold transition hover:brightness-50" href='/dashboard'>{session?.user?.email}</a>
                    </div>   
                        {/* bouton dashboard */}
                    <div className="bg-beige border border-black container w-auto hover:bg-marron">
                        <a href='/dashboard' className="font-semibold text-white text-center ">Dashboard</a>
                    </div>
                </div>
                <div className='border-b-2 border-black'>
                    {/* liste des statistique du profil */}
                    <li className='flex justify-evenly gap-10 text-justify items-center text-5xl'>
                        <p>{p}</p>
                        <p>{likes}</p>
                        <p>{Commentaires}</p>
                    </li>
                    <li className='flex justify-evenly gap-10 text-justify items-center'>
                        <p>Articles</p>
                        <p>Likes</p>
                        <p>Commentaires</p>                    
                    </li>
                </div>
                <div className='py-2 gap-y-2 flex flex-col'>
                    {/* liste des articles du profil selon la base de donnée */}
                    {writeHello()}
                </div>
            </div>
    );
};
export default Page;
