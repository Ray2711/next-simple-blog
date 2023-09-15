import Link from "next/link";
import ReactMarkdown from "react-markdown"

async function getNote(noteId:string){
    const res = await fetch(`${process.env.NEXT_PUBLIC_PB_URL}/api/collections/blogs/records/${noteId}`,{next:{revalidate:30}}) //using pb as a backend
    const data = await res.json();
    return data;
}

export default async function NotePage({params}:any) {
    const note = await getNote(params.id); //getting all of the info of blogpost by id
    return(
        <div>
            
            <h1><Link href=".">posts</Link>/{note.id}</h1>
            <div className="w-full h-24 rounded-full mx-auto">
                <h1 className="text-6xl font-semibold">{note.title}</h1>
                <br />

                <ReactMarkdown>
                {note.content}
                </ReactMarkdown>
                <br />
                <h4 className="text-sky-800 dark:text-sky-400">{new Date(note.created).toDateString()}</h4>
            </div>
        </div>
    )
}