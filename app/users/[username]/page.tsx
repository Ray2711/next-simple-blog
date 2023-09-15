import Link from "next/link";


const getUser = async(username:string)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_PB_URL}/api/collections/users/records?filter=(username='${username}')`,{next:{revalidate:30}}) //using pb as a backend
    const data = await res.json();
    return data?.items[0] || {};
}
const getUsersBlogs = async (userId:string) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_PB_URL}/api/collections/blogs/records?filter=(name='${userId}')&sort=-created`,{next:{revalidate:30}}) //using pb as a backend
    const data = await res.json();
    return data.items as any[];
}



export default async function NotePage({params}:any) {
    const user = await getUser(params.username); //getting all of the info of blogpost by id
    const notes = await getUsersBlogs(user.id);
    return(
        <div>
            <h1><Link href=".">users</Link>/{user.id}</h1>
            <div className="w-full h-48 rounded-full mx-auto mb-1">
                <h1 className="text-6xl font-semibold">{user.name}</h1>
                <br />
                <div className="" >{user.username}</div> 
                <br />
                <h4 className="text-sky-800 dark:text-sky-400">{new Date(user.created).toDateString()}</h4>
            </div>
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
