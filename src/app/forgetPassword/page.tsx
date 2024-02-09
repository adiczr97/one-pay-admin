"use client"
import Link from 'next/link'
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface formData {
    username: string;
    email: string
}

const page = () => {

    const [formData, setFormData] = useState<formData>({
        username: '',
        email: ''
    })

    const [errors, setErrors] = useState<{ username?: string; email?: string }>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const validationErrors: {
            username?: string; email?: string
        } = {};
        if (!formData.username.trim()) {
            validationErrors.username = "username or e-mail is required"
        }
    }

    return (
        <>
            <div className='h-[100vh] flex justify-center items-center login'>
                <div className='w-[25rem] p-6 bg-zinc-100 shadow-md rounded-md'>
                    <h1 className='py-5 text-center text-2xl font-normal text-neutral-900'>
                        Forget Password
                    </h1>
                    <hr className='border-zinc-600 my-5 item' />
                    <form className='flex flex-col justify-center items-center container' onSubmit={handleSubmit}>
                        <input type="text" name='username' placeholder='Username or E-mail' autoComplete='off' className='w-[96%] rounded-sm py-1 px-3 my-2 outline outline-[1.5px] outline-gray-400 focus:outline-teal-700' onChange={handleChange} />
                        {errors.username && <span className='text-red-600 text-sm'>{errors.username}</span>}
                        <div className='w-[96%] flex justify-end my-2'>
                            <Link href={'/forgetpassword/resetpassword'} className='text-slate-600 hover:text-neutral-950'>
                                <button className='bg-slate-50 hover:bg-teal-50 border-[1.5px] border-gray-400 py-1 px-4 rounded-[.25rem] shadow-md text-neutral-500 hover:border-teal-700 hover:text-neutral-900 active:scale-90 active:shadow-sm'>
                                    Forget Password
                                </button>
                            </Link>
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