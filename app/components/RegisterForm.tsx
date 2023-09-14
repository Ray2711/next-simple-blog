'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form'


export default function LoginForm() {

    const { register, handleSubmit } = useForm();
    const [isLoading, setLoading] = useState(false);
    const [token, setToken] = useState('')
    const router = useRouter();

    const goToUserPage = () => {
        router.push('/login');
        router.refresh()
    };

    const login = async (data: any) => {
        fetch("http://nurique.xyz:8090/api/collections/users/records", {
            method: "POST",
            body: JSON.stringify({
                email: data.email,
                name: data.name,
                username: data.username,
                password: data.password,
                passwordConfirm: data.password,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => response.json())
            .then((json) => { if (json.id) { goToUserPage();} });

    }



    return (
        <div>
            <div>{token}</div>
            <form className='flex justify-center items-center flex-col text-black dark:text-white' onSubmit={handleSubmit(login)}>
                <input type="text" id="login" placeholder='username' className='bg-teal-500 placeholder-teal-900' {...register('username')} />
                <input type="text" id="login" placeholder='Display Name' className='bg-teal-500 placeholder-teal-900' {...register('name')} />
                <input type="text" id="login" placeholder='email' className='bg-teal-500 placeholder-teal-900' {...register('email')} />
                <input type="password" id="password" placeholder='password' className='bg-teal-500 placeholder-teal-900' {...register('password')} />
                <button type="submit" className='bg-teal-600 hover:bg-teal-950' disabled={isLoading}>
                    {isLoading ? "Registering..." : "Register"}
                </button>

            </form>
        </div>
    )
}
