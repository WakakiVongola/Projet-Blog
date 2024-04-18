"use client"

import { useSession } from "next-auth/react"
import {signOut} from "next-auth/react"
import {useRouter} from "next/navigation"
import Link from "next/link"

const DashboardPage = () => {
    const {data:session,status} = useSession({
        required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
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
        <div>
            <h1>DashBoard Page</h1>
            <p>Hi {session?.user?.email}</p>
            <button onClick={logoutUser}>lougt Page</button>
        </div>
    );
};

export default DashboardPage;