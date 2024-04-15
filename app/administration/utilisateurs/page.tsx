import Image from "next/image";

export default function utilisateurs() {
    return (
            <body className="bg-blanc">
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
                        {/* bouton dashboard */}
                    <div className="flex items-center justify-auto border border-black px-5 mr-10">
                        <h3 className="font-semibold text-marron text-center text-2xl">Compte administrateur</h3>
                    </div>
                </div>
                <div className="w-auto h-28 border-black border-b-2">
                    <div className="flex">
                        <div className="flex items-center">
                            <a href="/administration/utilisateurs" className="bg-beige hover:bg-beige text-white font-bold py-2 px-4 rounded flex items-center justify-center ml-64 border-4 border-white">Utilisateurs</a>
                        </div>
                        <div className="h-28 w-1 bg-black mx-auto"></div>
                        <div className="flex items-center">
                            <a href="/administration/articles" className="bg-beige hover:bg-beige text-white font-bold py-2 px-4 rounded flex items-center justify-center mr-72">Articles</a>
                        </div>
                    </div>
                </div>
            </body>
    );
}
