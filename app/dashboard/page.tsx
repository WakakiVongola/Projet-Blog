"use client"

import { useSession } from "next-auth/react"
import {signOut} from "next-auth/react"
import {useRouter} from "next/navigation"
import Link from "next/link"

const DashboardPage = () => {
    const {data:session,status} = useSession({
        required: true,
    onUnauthenticated() {
    },
    })
    const router = useRouter()

    const logoutUser = async (e:any) => {
        e.preventDefault()
        signOut({
            redirect:false,
        }).then(() => {
            router.push("/accueil")  
        }).catch((error) => {
            throw new Error(error)
        })
    }

    return (
        <div className="container flex flex-col items-center">
            <h1 className="my-5 text-2xl">Bienvenue sur ton profil  {session?.user?.email}</h1>
            <button onClick={logoutUser} className="bg-red-500 rounded-lg border-4 border-white p-2 hover:bg-red-700 hover:text-white transition duration-300">Se déconnecter</button>
        </div>
    );
};

export default DashboardPage;