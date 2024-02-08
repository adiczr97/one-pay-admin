"use client"
import Link from 'next/link'
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface formData {
    username: string;
    password: string;
}

const page = () => {

    const [formData, setFormData] = useState<formData>({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const validationErrors: { username?: string; password?: string } = {};
        if (!formData.username.trim()) {
            validationErrors.username = "username is required"
        }


        if (!formData.password.trim()) {
            validationErrors.password = "password is required"
        } else if (formData.password.length < 8) {
            validationErrors.password = "password should be at least 8 char"
        }


        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            alert("Login successfully")
        }

    }

    return (
        <>
            <div className='h-[100vh] flex justify-center items-center '>
                <div className='w-[25rem] p-6 bg-zinc-100 shadow-md rounded-md'>
                    <h1 className=' py-5 text-center text-2xl font-normal text-neutral-900 '>
                        Admin Login
                    </h1>
                    <hr className='border-zinc-600 my-5 item' />
                    <form className='flex flex-col justify-center items-center  container' onSubmit={handleSubmit}>
                        <input type="text" name='username' placeholder='Username' autoComplete='off' className='w-[96%] rounded-sm py-1 px-3 my-2 outline outline-[1.5px] outline-gray-400 focus:outline-teal-700 feature' onChange={handleChange} />
                        {errors.username && <span className='text-red-600 text-sm'>{errors.username}</span>}
                        <input required type="password" name='password' placeholder='Password' autoComplete='off' className='w-[96%] rounded-sm py-1 px-3 my-2 outline outline-[1.5px] outline-gray-400 focus:outline-teal-700' onChange={handleChange} />
                        {errors.password && <span className='text-red-600 text-sm'>{errors.password}</span>}
                        <div className='w-[96%] flex justify-start my-2'>
                            <span className='text-neutral-950 text-sm font-normal'>
                                No account? <Link href={'/signup'} className='text-slate-600 hover:text-neutral-950'>Create one!</Link>
                            </span>
                        </div>
                        <div className='w-[96%] flex justify-start mb-4'>
                            <Link href={'/forgetPassword'} className='text-slate-600 hover:text-neutral-950 text-sm font-normal'>
                                Can’t access your account?
                            </Link>
                        </div>
                        <div className='w-[96%] flex justify-end my-2'>
                            <button type='submit' className='bg-slate-50 hover:bg-teal-50 border-[1.5px] border-gray-400 py-1 px-4 rounded-[.25rem] shadow-md text-neutral-500 hover:border-teal-700 hover:text-neutral-900 active:scale-90 active:shadow-sm'>
                                Log in
                            </button>
                        </div>
                    </form>
                    <hr className='border-zinc-600 my-5 item' />
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='font-bold text-3xl'>Logo</h1>
                        <p className='text-sm font-light'>@2024 All Rights Reserved. XtremeFin</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default page