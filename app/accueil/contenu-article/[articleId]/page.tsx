import Image from "next/image";

export default function Article () {
    return(
        <main>
            <div className="text-center py-5">
                <h1 className="text-5xl">Villa De LaVerde Del Montigio</h1>
            </div>
            <section className="py-5 flex justify-between">
                <div className="w-[850px]">
                    <div className="ml-10 py-5">
                        <Image className=""
                            src="/Lac-de-come.jpg"
                            width={798}
                            height={499}
                            alt="Lac de Côme"
                            />
                        <p className="my-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                            recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                            minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
                            quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
                            fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
                            consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                            doloremque. Quaerat provident commodi consectetur veniam similique ad 
                            earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
                            fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
                        </p>
                        <br/>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                            recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                            minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
                            quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
                            fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
                            consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                            doloremque. Quaerat provident commodi consectetur veniam similique ad 
                            earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
                            fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
                        </p>
                    </div>
                </div>

                <div className="bg-beige mr-10 my-5">
                    <div className="text-center py-5">
                        <h1 className="font-semibold px-20 text-3xl">Poste recommandés:</h1>
                        <div className="text-2xl my-5 py-5 border-b-2 border-marron">
                            <Image className="mx-auto transition duration-500 ease-in-out hover:brightness-75"
                                src='/villa-come.webp'
                                width={340}
                                height={265}
                                alt="Mathis.Guerin"
                            />
                            <p>Villa du Lac de Côme</p>
                        </div>
                        <div className="text-2xl my-5 py-5 border-b-2 border-marron">
                            <Image className="mx-auto transition duration-500 ease-in-out hover:brightness-75"
                                src='/trasimene-villa.jpg'
                                width={340}
                                height={265}
                                alt="Mathis.Guerin"
                            />
                            <p>Villa du Lac de Trasimène</p>
                        </div>
                    </div>
                </div>

            </section>
            <section className="py-10">
                <div className="bg-marron w-1/2 h-96 relative ml-10">
                    <div className="border-b-2 border-gray-700">
                        <h3 className="text-white text-center text-2xl py-5">Commentaires</h3>
                    </div>
                    <div className="flex items-center space-x-2 ml-5 py-5">
                        <Image className="rounded-full border border-white transition duration-500 ease-in-out hover:brightness-50"
                            src='/mathis.jpg'
                            width={60}
                            height={60}
                            alt="Mathis.Guerin"
                        />
                        <div className="text-left">                                <p className="text-white font-bold transition duration-500 ease-in-out hover:brightness-50">Mathis.Guerin</p>
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
                                className=" transition duration-500 ease-in-out hover:brightness-50"
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
    )
}