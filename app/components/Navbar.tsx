'use client'
import Link from "next/link";
import as from "../lib/auth.js"
import { useState } from "react";
export default function Navbar(){
    const [token, setToken]= useState("");

    return(
        <nav className="text-2xl flex justify-between py-6">
            <div className="[&>*]:mr-2">
            <Link href="/"><span className="text-teal-800 dark:text-teal-400" >Nurique</span>Blog</Link>
            <Link href="/posts/">Blogfeed</Link>
            </div>
            {as.getToken()=="" ? 
            <Link href="/login/">Login</Link>
            :
            <div >
                <Link className="list-item list-none" href={`/users/${as.getUsername()}`}>{as.getName()}</Link>
                <div className="list-item list-none w-full">
                    <Link className="text-left text-sm text-sky-300 mr-2" href='/write'>Write</Link>
                    <Link className="text-center text-sm text-sky-300" href='/' onClick={()=>{as.clearAll(); window.location.reload();}}>Logout</Link>
                </div>
            </div>
            }
        </nav>
    )
}