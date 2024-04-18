'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import useSWR, { mutate } from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Articles() {

  const { data, error, isLoading } = useSWR('/api/articles/take', fetcher);

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
  

  return (
    <div className="bg-white">
      <main className="bg-white">
        {/* Header */}
        <div className='flex items-center justify-between border-b-2 border-black'>
          <div className="ml-10">
            <a href="/">
              <Image
                className="transition duration-500 ease-in-out hover:scale-105 hover:brightness-50"
                src='/icone-maison.png'
                alt="Logo"
                width={60}
                height={60}
              />
            </a>
          </div>
          {/* Compte administrateur */}
          <div className="flex items-center border border-black px-5 mr-10">
            <h3 className="font-semibold text-brown text-2xl">Compte administrateur</h3>
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
            <div key={index} className="my-4">
              <div className="flex items-center mb-2">
                <button onClick={() => handleDelete(obj.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4">Supprimer</button>
                <div className="mr-4">
                  <span className="font-semibold">Id : </span>
                  <span>{obj && obj.id}</span>
                </div>
                <div className="mr-4">
                  <span className="font-semibold">Slugs : </span>
                  <span>{obj && obj.slug}</span>
                </div>
                <div className="mr-4">
                  <span className="font-semibold">Titre :</span>
                  <span>{obj && obj.titre}</span>
                </div>
                <div>
                  <span className="font-semibold">Auteur :</span>
                  <span>{obj && obj.auteur.pseudo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}