'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form'
import as from '../lib/auth.js'


export default function LoginForm() {

    const { register, handleSubmit } = useForm();
    const [isLoading, setLoading] = useState(false);
    const [token, setToken] = useState('')
    const router = useRouter();

    const goToUserPage = () => {
        router.push('/users/'+as.getUsername());
        router.refresh()
    };

    const login = async (data: any) => {
        fetch(`${process.env.NEXT_PUBLIC_PB_URL}/api/collections/users/auth-with-password`, {
            method: "POST",
            body: JSON.stringify({
                identity: data.email,
                password: data.password,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => response.json())
            .then((json) => { if (json.token) { as.setUserInfo(json.record, json.token); goToUserPage();} });

    }



    return (
        <div>
            <div>{token}</div>
            <form className='flex justify-center items-center flex-col text-black dark:text-white' onSubmit={handleSubmit(login)}>
                <input type="text" id="login" placeholder='login/email' className='bg-teal-500 placeholder-teal-900' {...register('email')} />
                <input type="password" id="password" placeholder='password' className='bg-teal-500 placeholder-teal-900' {...register('password')} />
                <button type="submit" className='bg-teal-600 hover:bg-teal-950' disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                </button>

            </form>
        </div>
    )
}
