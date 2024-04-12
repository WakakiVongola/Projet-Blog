'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Link } from 'lucide-react'


export const Header = () => {
    return (
        <header className='bg-blanc'>
            <div className='flex justify-between items-center p-5'>
            {/* Login */}
                <Dialog>
                    <DialogTrigger asChild>
                    <Image className='transition duration-500 ease-in-out hover:scale-110'
                         src='/iconProfile.webp'
                        alt="Picture of the author"
                        width={100}
                        height={100}
                        />
                    </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] bg-blanc">
                            <DialogHeader>
                                <div className='border-b-2 border-gray-800'><img className='w-[30%]  mx-auto' src='/logo.png'/>
                            <DialogTitle className='text-center p-2'>Connexion</DialogTitle></div>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="mail" className="text-right">
                                    E-Mail :
                                    </Label>
                                    <Input
                                    id="mail"
                                    className="col-span-3 shadow-2xl rounded-lg"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="Password" className="text-right">
                                        Password :
                                    </Label>
                                    <Input
                                    id="Password"
                                    className="col-span-3 shadow-2xl rounded-lg"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit" className='transition duration-500 ease-in-out hover:bg-[#2a2519] bg-marron rounded-lg hover:shadow-2xl hover:scale-105'>Connexion</Button>   
                                {/* Inscription */}
                                <Dialog>
                                    <DialogTrigger asChild>
                                    <Button className='transition duration-500 ease-in-out hover:bg-[#2a2519] bg-marron rounded-lg hover:shadow-2xl hover:scale-105'>Créer un compte</Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px] bg-blanc">
                                        <DialogHeader>
                                        <div className='border-b-2 border-gray-800'><img className='w-[30%]  mx-auto' src='/logo.png'/>
                                        <DialogTitle className='text-center p-2'>Créer un Compte</DialogTitle></div>
                                        </DialogHeader>
                                    <div className='flex flex-col'>
                                        <p className='mx-auto m-2'>Votre Pseudo :</p>
                                        <input type='text' placeholder='Pseudo' className='mx-auto bg-white rounded-lg p-2 px-10 shadow-2xl'/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='mx-auto m-2'>Votre e-mail :</p>
                                        <input type='text' placeholder='Email' className='mx-auto bg-white rounded-lg p-2 px-10 shadow-2xl'/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='mx-auto m-2'>Votre mot de passe :</p>
                                        <input type='password' placeholder='Ex: Nfdo156¨^$ùDvV' className='mx-auto bg-white rounded-lg p-2 px-10 shadow-2xl'/>
                                    </div>
                                    <div className="grid w-full max-w-sm items-center gap-1.5 justify-center">
                                        <label htmlFor="picture" className="text-center">Ajoutez une photo de profil</label>
                                        <input id="picture" type="file"/>
                                    </div>  
                                        <div className='flex justify-center'>
                                        <DialogClose><Button type="submit" className='mx-auto px-10 hover:bg-[#2a2519] bg-marron transition duration-500 ease-in-out hover:shadow-2xl hover:scale-105'>Créer</Button></DialogClose>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                                
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                <div id='TopNav' className='flex w-3/4 justify-between items-center text-xl'>
                    <a className='transition duration-500 ease-in-out hover:text-gray-600 hover:scale-110' href="/accueil/villa">Villa</a>
                    <a className='transition duration-500 ease-in-out hover:text-gray-600 hover:scale-110' href="https://twitter.com/?lang=fr">Maisson de campagne</a>
                    <a className='transition duration-500 ease-in-out hover:text-gray-600 hover:scale-110' href="https://twitter.com/?lang=fr">Cabane</a>
                    <a className='transition duration-500 ease-in-out hover:text-gray-600 hover:scale-110' href="https://twitter.com/?lang=fr">Appartement</a>
                    <a className='transition duration-500 ease-in-out hover:text-gray-600 hover:scale-110' href="/">A propos</a> 
                </div>
                <Dialog>
                <DialogTrigger>
                    <Image className='transition duration-500 ease-in-out transform hover:scale-110'
                    src='/Loupe.svg'
                    alt=""
                    width={50}
                    height={50}/>
                </DialogTrigger>
                <DialogContent className='bg-blanc p-10'>
                    <DialogHeader>
                    <DialogTitle className='text-gray-900 pb-3'>Que cherchez vous ?</DialogTitle>
                    <DialogDescription>
                        <form> 
                            <label className=''></label>
                            <input
                            type='text'
                            name='recherche'
                            className='rounded-md text-black pr-20 mr-2'
                            />
                        <DialogClose className='transition duration-500 ease-in-out transform hover:scale-105'> <button className='text-gray-900 ml-2 mb-2 duration-300 hover:border-b-2 border-black'>Recherche</button></DialogClose>
                        </form>
                    </DialogDescription>
                    </DialogHeader>
                </DialogContent>
                </Dialog>

            </div>
            <div className='flex justify-center border-y-2 border-black p-8'>
                <a href="/accueil">
                <Image className='transition duration-500 ease-in-out hover:brightness-90 transform hover:scale-105'
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
