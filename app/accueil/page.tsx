import Image from "next/image";

export default function Accueil() {
    return (
        <body>
            <main className="container ml-4 py-11">
                <section className="flex justify-between">
                    <article className="w-[880px] h-[732px] bg-beige py-11 rounded-lg shadow-2xl">
                        <div className="relative">
                            <a href="/accueil/contenu-article/1">
                            <Image className="mx-auto transition duration-700 ease-in-out hover:brightness-75 rounded-lg transform hover:scale-95 shadow-2xl"
                                src="/Lac-de-come.jpg"
                                width={798}
                                height={499}
                                alt="Lac de Côme"
                                />
                            </a>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-80 h-16 bg-marron flex items-center justify-center ml-10 mt-3.5 transition duration-500 ease-in-out rounded-lg">
                                    <h2 className="text-4xl text-zinc-50 font-bold">Lac de Côme</h2>
                            </div>
                            <div className="flex mt-3.5 mr-10">
                                <div className="bg-marron p-3 transition duration-500 ease-in-out rounded-lg transform hover:scale-105 hover:brightness-50">
                                    <Image 
                                        src='/thumbs-up.svg'
                                        width={40}
                                        height={40}
                                        alt="Like"
                                    />
                                </div>
                                <div className="bg-marron p-3 ml-5 transition duration-500 ease-in-out rounded-lg transform hover:scale-105 hover:brightness-50">
                                    <Image 
                                        src='/thumbs-down.svg'
                                        width={40}
                                        height={40}
                                        alt="Dislike"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-white text-5xl ml-10 mt-14">Villa de LaVerde del Montigio</h1>
                        </div>
                    </article>

                    <div className="bg-marron w-1/3 relative left-20 rounded-lg shadow-2xl">
                        <div className="border-b-2 border-[#292518]">
                            <h3 className="text-white text-center text-2xl py-5">Commentaires</h3>
                        </div>
                        <div className="flex items-center space-x-2 ml-5 py-5">
                            <Image 
                                className="rounded-full border border-white transition duration-500 ease-in-out hover:brightness-50"
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
                    </div>
                </section>
            </main>
        </body>
    );
  }
  