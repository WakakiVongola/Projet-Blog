import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import useSWR from 'swr';

const fetcher = (...args: any[]) => fetch(...args).then(res => res.json());


const Commentaires = () => {
    const { data, error, isLoading } = useSWR('/api/poste/take', fetcher);
    const p = data && data.data ? data.data.length : 0;
    console.log(p);

    const writeHello = () => {
        const items = [];
        // Partie commentaire
        for (let i = 0; i < p ; i++) {
            const obj = data && data.data && data.data.length > 0 ? data.data[i] : null;
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
                {obj && (<p className="text-white font-bold transition duration-500 ease-in-out hover:brightness-50">{obj.titre}</p>)}
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
        <div>{writeHello()}</div>
    );
};
export default Commentaires;
