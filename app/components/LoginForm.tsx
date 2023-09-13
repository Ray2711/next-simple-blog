'use client'
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form'
import pb from "../lib/pocketbase.js"

export default function Home() {

    const inputLogin = useRef();
    const inputPassword = useRef();
    const { register, handleSubmit } = useForm();
    const [isLoading, setLoading] = useState(false);
    

    const login = async (data:any) =>{
        setLoading(true);
        const authData = await pb.collection("users").authWithPassword(data.email,data.password).catch((e)=>{console.error(e)});
        console.log(authData)
        setLoading(false);
    }


    return (
        <div>
            <div>{pb.authStore.isValid.toString()}</div>
            <form className='flex justify-center items-center flex-col text-black dark:text-white' onSubmit={handleSubmit(login)}>
                <input type="text"  id="login" placeholder='login/email' className='bg-teal-500 placeholder-teal-900' {...register('email')} />
                <input type="password" id="password" placeholder='password' className='bg-teal-500 placeholder-teal-900' {...register('password')}/>

                <button type="submit" className='bg-teal-600 hover:bg-teal-950' disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                </button>
                
            </form>
            <button onClick={(e)=>{e.preventDefault;pb.authStore.clear()}}> Logogut</button>
        </div>
    )
}
