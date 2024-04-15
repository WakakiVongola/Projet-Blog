// page.tsx
import React from 'react';
import Image from 'next/image';

const Page = () => {
    const writeHello = () => {
        const items = [];
        for (let i = 0; i < 3; i++) {
            items.push(
                <div key={i} className='bg-marron text-white flex col justify-between items-center text-center p-2 mx-2 rounded-sm'>
                    <div className='flex flex-row items-center justify-center gap-2'>
                        <Image
                            src='/Lac-de-come.jpg'
                            alt="Picture of the author"
                            width={200}
                            height={300}
                        />
                        <p> Villa Del Como</p>
                    </div>
                    <div>
                        <p>850</p>
                        <Image
                            src='/thumbs-up.svg'
                            alt="Like"
                            width={40}
                            height={40}
                        />
                    </div>
                    <div>
                        <p>80</p>
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
                        <Image
                            src='/editer.svg'
                            alt="Editer"
                            width={40}
                            height={40} 
                        />
                    </div>
                    <div>
                        <Image
                            src='/poubelle.svg'
                            alt="Supprimer"
                            width={40}
                            height={40} 
                        />
                    </div>
                </div>
            );
        }
        return items;
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
                            src='/mathis.jpg'
                            alt="Picture of the author"
                            width={60}
                            height={60}
                        />
                        {/* nom du profil */}
                        <a className="text-marron font-bold transition hover:brightness-50" href='/dashboard'>Mathis.Guerin</a>
                    </div>   
                        {/* bouton dashboard */}
                    <div className="flex items-center justify-auto bg-beige border border-black container w-[10%] m-10
                    hover:bg-marron">
                        <a className="font-semibold text-white text-center" href='/dashboard'>Dashboard</a>
                    </div>
                </div>
                <div className='border-b-2 border-black'>
                    {/* liste des statistique du profil */}
                    <li className='flex justify-evenly gap-10 text-justify items-center text-5xl'>
                        <p>11</p>
                        <p>22</p>
                        <p>33</p>
                        <p>500</p>                    
                    </li>
                    <li className='flex justify-evenly gap-10 text-justify items-center'>
                        <p>Articles</p>
                        <p>Likes</p>
                        <p>Vues</p>
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
