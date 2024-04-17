'use client'


import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import useSWR from 'swr';


const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Utilisateurs() {
  const { data, error, isLoading } = useSWR('/api/administration', fetcher);

  console.log(data);

  const obj = data && data.data && data.data.length > 0 ? data.data[3] : null;

  return (
    <div className="bg-blanc">
      <main className="bg-blanc">
        {/*Header*/}
        <div className='flex flex-row items-center justify-between border-b-2 border-black'>
          <div className="ml-10">
            <a href="/"><Image
              className="transition duration-500 ease-in-out hover:scale-105 hover:brightness-50"
              src='/icone-maison.png'
              alt="Picture of the author"
              width={60}
              height={60}
            /></a>
          </div>
          {/* Compte administrateur */}
          <div className="flex items-center justify-auto border border-black px-5 mr-10">
            <h3 className="font-semibold text-marron text-center text-2xl">Compte administrateur</h3>
          </div>
        </div>
        <div className="w-auto h-28 border-black border-b-2">
          <div className="flex">
            <div className="flex items-center">
              <a href="/administration/utilisateurs" className="bg-beige hover:bg-beige text-white font-bold py-2 px-4 rounded flex items-center justify-center ml-64 hover:brightness-50">Utilisateurs</a>
            </div>
            <div className="h-28 w-1 bg-black mx-auto"></div>
            <div className="flex items-center">
              <a href="/administration/articles" className="bg-beige hover:bg-beige text-white font-bold py-2 px-4 rounded flex items-center justify-center mr-72 hover:brightness-50">Articles</a>
            </div>
          </div>
        </div>
        <div>
          {data && data.data && data.data.map((obj, index) => (
            <div key={index}>
              <div>
                {obj && (
                  <h2>{obj.pseudo}</h2>
                )}
              </div>
              <div>
                {obj && (
                  <h2>{obj.email}</h2>
                )}
              </div>
              <div>
                {obj && (
                  <h2>{obj.role}</h2>
                )}
              </div>
            </div>  
          ))}
        </div>
      </main>
    </div>
  );
}
