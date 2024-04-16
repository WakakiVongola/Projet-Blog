import React from 'react';
import Layout from '@/app/layout';
import Image from 'next/image';

const page = () => {
    const writeHello = () => {
        const items = [];
        for (let i = 0; i < 3; i++) {
            items.push( <div className='flex flex-row justify-between'> 
            <div className='p-5 flex flex-row gap-1'>
                <Image 
                    className="rounded-full border border-white transition duration-500 ease-in-out hover:brightness-50"
                    src='/mathis.jpg'
                    width={60}
                    height={60}
                    alt="Mathis.Guerin"
                />
                <div>
                    <p className="text-white font-bold transition duration-500 ease-in-out hover:brightness-50">Mathis.Guerin</p>
                    <p className="text-slate-300 font-thin">Superbe villa, la photo est juste sublime.</p>
                </div>
            </div>
            <div className='flex flex-row justify-center gap-2 items-center m-2'>
                <Image
                    className=''
                    src='/poubelle.svg'
                    width={30}
                    height={30}
                    alt="Cliquez ici pour supprimer le commentaire"
                />
                <div className='flex justify-center'>
                    <Image
                        className=''
                        src='/thumbs-up.svg'
                        width={20}
                        height={20}
                        alt='Like'
                    />
                    <p className='text-white'>256</p>
                </div>
            </div>
        </div>);
        }
        return items;
};  
    return (
        <div className='bg-blanc p-5 flex flex-row justify-between'>
            {/* conteneur de modifier l'article */}
            <div className='bg-beige flex w-[55%] flex-col'>
                {/* partie du haut */}
                <div className='border-b-[1px] border-gray-500'>
                    {/* l'image */}
                    <div>
                        <Image 
                            className='w-[100%] px-5 pt-5 pb-1' 
                            src='/Lac-de-come.jpg' 
                            alt="Picture of villa at the lac de come" 
                            width={500} 
                            height={300} />
                    </div>
                    {/* barre de like et nom d'article */}
                    <div className='flex flex-row justify-between px-5 items-center' >
                        {/* nom d'article */}
                        <div className='flex flex-row bg-marron border-[1px] w-[30%] h-12 items-center justify-evenly'>
                            <p className='text-white font-semibold'>Lac de Côme</p>
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
                                <p>454</p>
                            </div>
                            <div className='transition duration-500 ease-in-out hover:brightness-50'>
                                <Image 
                                    className='bg-marron p-2' 
                                    src="/thumbs-down.svg" 
                                    alt="" 
                                    width={40}
                                    height={40}
                                />
                                <p>131</p>
                            </div>
                        </div>
                    </div>    
                    {/* titre */}
                    <div className='flex flex-row justify-between m-5 border-2 items-center'>
                        <p className='text-white text-2xl font-thin p-2'>Villa DeLaVerde del Montigio</p>
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
                    <textarea className='bg-beige w-[100%] m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint 

                    commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo 

                    autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa  doloremque. Quaerat provident commodi consectetur veniam similique ad  earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo  fugiat, dolorum

                    eligendi quam cupiditate excepturi mollitia maiores labore  suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae.
                    </textarea>
                    <div className='flex justify-end'><img className='w-5 m-2 jus' src="/editer.svg" alt="cliquez ici pour modifier le contenu" /></div>
                </div>
            </div>
            {/* supprimer les commentaires */}
            
            {/* partie titre */}
            <div className='bg-marron flex flex-col w-[40%]'>
                <div className='border-b-2 border-white py-4 w-[100%] text-white text-center'>Commentaires</div>
                {/* partie commentaire */}
                {writeHello()}
                {/* <div className='flex flex-row justify-between'> 
                    <div className='p-5 flex flex-row gap-1'>
                        <Image 
                            className="rounded-full border border-white transition duration-500 ease-in-out hover:brightness-50"
                            src='/mathis.jpg'
                            width={60}
                            height={60}
                            alt="Mathis.Guerin"
                        />
                        <div>
                            <p className="text-white font-bold transition duration-500 ease-in-out hover:brightness-50">Mathis.Guerin</p>
                            <p className="text-slate-300 font-thin">Superbe villa, la photo est juste sublime.</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center gap-2 items-center m-2'>
                        <Image
                            className=''
                            src='/poubelle.svg'
                            width={30}
                            height={30}
                            alt="Cliquez ici pour supprimer le commentaire"
                        />
                        <div className='flex justify-center'>
                            <Image
                                className=''
                                src='/thumbs-up.svg'
                                width={20}
                                height={20}
                                alt='Like'
                            />
                            <p className='text-white'>256</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default page;
