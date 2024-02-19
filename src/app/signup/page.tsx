"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import toast from 'react-hot-toast';

interface formData {
    username: string;
    email: string,
    phonenumber: string,
    password: string
}

const page = () => {
    const [formData, setFormData] = useState<formData>({
        username: '',
        email: '',
        phonenumber: '',
        password: '',
    })

    const [errors, setErrors] = useState<{ username?: string; email?: string; phonenumber?: string; password?: string; }>({});
    const { push } = useRouter()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const validationErrors: {
            username?: string; email?: string; phonenumber?: string; password?: string;
        } = {};
        if (!formData.username.trim()) {
            validationErrors.username = "username is required"
        }
        if (!formData.email.trim()) {
            validationErrors.email = "email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "email is not valid"
        }
        if (!formData.password.trim()) {
            validationErrors.password = "password is required"
        } else if (formData.password.length < 8) {
            validationErrors.password = "password should be at least 8 character"
        }
        if (!formData.phonenumber.trim()) {
            validationErrors.phonenumber = "phone number is required"
        } else if (formData.phonenumber.length < 10) {
            validationErrors.phonenumber = "phone number should be at least 10 character"
        }
        setErrors(validationErrors)
        if (Object.keys(validationErrors).length === 0) {
            try {
                const res = await fetch('http://localhost:8000/api/v1/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user_name: formData.username,
                        email: formData.email,
                        phone_number: formData.phonenumber,
                        password: formData.password
                    })
                })
                if (res.status === 400) {
                    toast.error('Username or phone number or email already in use')
                }
                if (res.status === 404) {
                    toast.error('Your registration has been failed')
                }
                if (res.status === 200) {
                    toast.success("Register successfully Please Verify Your Email")
                    push('/signin')
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <>
            <div className='h-[100vh] flex justify-center items-center '>
                <div className='w-[25rem] p-6 bg-zinc-100 shadow-md rounded-md'>
                    <h1 className=' py-5 text-center text-2xl font-normal text-neutral-900 '>
                        Admin Register
                    </h1>
                    <hr className='border-zinc-600 my-5 item' />
                    <form className='flex flex-col justify-center items-center container' onSubmit={handleSubmit}>
                        <input type="text" name='username' placeholder='Username' autoComplete='off' className='w-[96%] rounded-sm py-1 px-3 my-2 outline outline-[1.5px] outline-gray-400 focus:outline-teal-700' onChange={handleChange} />
                        {errors.username && <span className='text-red-600 text-sm'>{errors.username}</span>}

                        <input type="email" name='email' placeholder='E-mail' className='w-[96%] rounded-sm py-1 px-3 my-2 outline outline-[1.5px] outline-gray-400 focus:outline-teal-700' onChange={handleChange} />
                        {errors.email && <span className='text-red-600 text-sm'>{errors.email}</span>}

                        <input type="text" name='phonenumber' placeholder='Phone Number' className='w-[96%] rounded-sm py-1 px-3 my-2 outline outline-[1.5px] outline-gray-400 focus:outline-teal-700' onChange={handleChange} />
                        {errors.phonenumber && <span className='text-red-600 text-sm'>{errors.phonenumber}</span>}

                        <input type="password" name='password' placeholder='Password' autoComplete='off' className='w-[96%] rounded-sm py-1 px-3 my-2 outline outline-[1.5px] outline-gray-400 focus:outline-teal-700' onChange={handleChange} />
                        {errors.password && <span className='text-red-600 text-sm'>{errors.password}</span>}

                        <div className='w-[96%] flex justify-start my-2'>
                            <span className='text-neutral-950 text-sm font-normal'>
                                Already Registered? <Link href={'/signin'} className='text-slate-600 hover:text-neutral-950'>Sign in!</Link>
                            </span>
                        </div>

                        <div className='w-[96%] flex justify-end my-2'>
                            <button type='submit' className='bg-slate-50 hover:bg-teal-50 border-[1.5px] border-gray-400 py-1 px-4 rounded-[.25rem] shadow-md text-neutral-500 hover:border-teal-700 hover:text-neutral-900 active:scale-90 active:shadow-sm'>
                                Register
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