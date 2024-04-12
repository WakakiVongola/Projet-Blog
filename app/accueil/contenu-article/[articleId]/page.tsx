import Image from "next/image";

export default function Article () {
    return(
        <main>
            <div className="text-center py-5">
                <h1 className="text-5xl">Villa De LaVerde Del Montigio</h1>
            </div>
            <section className="py-5 flex justify-between">
                <div className="w-[850px]">
                    <div className="ml-10">
                        <Image className=""
                            src="/Lac-de-come.jpg"
                            width={798}
                            height={499}
                            alt="Lac de Côme"
                            />
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
                <div className="bg-beige mr-10">
                    <div className="text-center font-semibold px-20 text-3xl py-5">
                        <h1>Poste recommandés:</h1>
                    </div>
                </div>
            </section>
        </main>
    )
}