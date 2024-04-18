"use client"

import Image from "next/image";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function ArticleInfo( {params} ) {

    const {articleId} = params;

    const { data, error, isLoading } = useSWR('/api/poste/take', fetcher);

    const articles = data && data.data ? data.data : [];

    const blog = articles.find(publication => publication.slug === articleId)

    console.log(blog)

    return (
        <main>
            {blog && (
                <section>
                    <Image
                        className="mx-auto transition duration-700 ease-in-out hover:brightness-75 rounded-lg transform hover:scale-95 shadow-2xl"
                        src={blog.image}
                        width={798}
                        height={499}
                        alt={blog.titre}
                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                    <div>{blog.titre}</div>
                </section>,
            )}
        </main>
    )

}