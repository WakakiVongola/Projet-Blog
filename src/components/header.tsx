'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"


export const Header = () => {
    return (
        <header className='bg-blanc'>
            <div className='flex justify-between items-center p-5'>
            <Image
                    src='/iconProfile.webp'
                    alt="Picture of the author"
                    width={100}
                    height={100}
                />
                <div id='TopNav' className='flex w-3/4 justify-between items-center'>
                    <a href="/accueil/villa">Villa</a>
                    <a href="https://twitter.com/?lang=fr">Maisson de campagne</a>
                    <a href="https://twitter.com/?lang=fr">Cabane</a>
                    <a href="https://twitter.com/?lang=fr">Appartement</a>
                    <a href="/">A propos</a> 
                </div>
                <Dialog>
                <DialogTrigger>
                    <Image
                    src='/Loupe.svg'
                    alt=""
                    width={50}
                    height={50}/>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Que cherchez vous ?</DialogTitle>
                    <DialogDescription>
                        <form> 
                            <label className='text-black'> Recherche : </label>
                            <input
                            type='text'
                            name='recherche'
                            className=' text-black'
                            />
                        <DialogClose> <button className='m-5 border-b-2 border-black text-black'>Recherche</button></DialogClose>
                        </form>
                    </DialogDescription>
                    </DialogHeader>
                </DialogContent>
                </Dialog>

            </div>
            <div className='flex justify-center border-y-2 border-black p-8'>
                <a href="/accueil">
                <Image
                    src='/Logo.svg'
                    alt="Picture of the author"
                    width={250}
                    height={250}
                /></a>
            </div>
        </header>
    );
};
export default Header;