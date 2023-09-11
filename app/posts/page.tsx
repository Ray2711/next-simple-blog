import Link from "next/link";

async function getNotes() {
    const res = await fetch('http://nurique.xyz:8090/api/collections/blogposts/records?page=1&perPage=30',{cache:'no-store'})
    const data = await res.json();
    return data?.items as any[];
}
export default async function NotesPage(){
    const notes = await getNotes();
    return(
        <div className="x-full flex flex-row justify-between items-start h-screen">
        <div className="flex flex-col justify-center overflow-auto">
            {notes?.map((note)=>{
                return <Note key={note.id} note={note} />
            })}
        </div>
        </div>
    )
}

function Note({note}:any){
    const {id, title, overview, created} = note || {};

    return(
        <Link href={`/posts/${id}`}>
            <div className="mb-10">
                <h1 className="text-teal-800 dark:text-teal-200 text-2xl font-semibold">{title}</h1>
                <h5 className="font-normal text-gray-800 dark:text-gray-300">{overview}</h5>
                <p className="font-light text-gray-400">{new Date(created).toLocaleDateString()}</p>
            </div>
        </Link>
    )
}