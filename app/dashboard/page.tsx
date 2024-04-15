"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"

const DashboardPage = () => {
    const {data:session,status} = useSession({
        required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      throw new Error('Not authenticated !')
      
    },
    })
    return (
        <div>
            <h1>DashBoard Page</h1>
            <p>Hi {session?.user?.name}</p>
            <Link href="/logout">Logout Page</Link>
        </div>
    );
};

export default DashboardPage;