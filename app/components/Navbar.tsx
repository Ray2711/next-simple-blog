import Link from "next/link";

export default async function Navbar(){
    return(
        <nav className="text-2xl flex justify-between py-6">
            <div className="[&>*]:mr-2">
            <Link href="/"><span className="text-teal-800 dark:text-teal-400" >Nurique</span>Blog</Link>
            <Link href="/posts/">Blog</Link>
            </div>
            <div>
            <Link href="/login/">Login</Link>
            </div>
        </nav>
    )
}