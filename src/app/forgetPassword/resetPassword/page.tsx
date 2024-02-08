"use client"
import Link from 'next/link'
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface formData {
    username: string;
    email: string,
    newPassword: string,
    confirmNewPassword: string
}

const page = () => {

    const [formData, setFormData] = useState<formData>({
        username: '',
        email: '',
        newPassword: '',
        confirmNewPassword: ''
    })

    const [errors, setErrors] = useState<{ newPassword?: string; confirmNewPassword?: string }>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const validationErrors: { newPassword?: string; confirmNewPassword?: string } = {};

        if (!formData.newPassword.trim()) {
            validationErrors.newPassword = "newPassword is required"
        } else if (formData.newPassword.length < 8) {
            validationErrors.newPassword = "password should be at least 8 character"
        }

        if (formData.confirmNewPassword !== formData.newPassword) {
            validationErrors.confirmNewPassword = "password not matched"
        }


        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            alert("Password Reset successfully")
        }

    }

    return (
        <>
            <div className='h-[100vh] flex justify-center items-center login'>
                <div className='w-[25rem] p-6 bg-zinc-100 shadow-md rounded-md'>
                    <h1 className=' py-5 text-center text-2xl font-normal text-neutral-900'>
                        Reset Password
                    </h1>
                    <hr className='border-zinc-600 my-5 item' />
                    <form className='flex flex-col justify-center items-center container' onSubmit={handleSubmit}>
                        <input type="password" name='new Password' placeholder='New Password' autoComplete='off' className='w-[96%] rounded-sm py-1 px-3 my-2 outline outline-[1.5px] outline-gray-400 focus:outline-teal-700' onChange={handleChange} />
                        {errors.newPassword && <span className='text-red-600 text-sm'>{errors.newPassword}</span>}
                        <input type="password" name='confirmNewPassword' placeholder='Confirm New Password' autoComplete='off' className='w-[96%] rounded-sm py-1 px-3 my-2 outline outline-[1.5px] outline-gray-400 focus:outline-teal-700' onChange={handleChange} />
                        {errors.confirmNewPassword && <span className='text-red-600 text-sm'>{errors.confirmNewPassword}</span>}
                        <div className='w-[96%] flex justify-end my-4'>
                            <button className='bg-slate-50 hover:bg-teal-50 border-[1.5px] border-gray-400 py-1 px-4 rounded-[.25rem] shadow-md text-neutral-500 hover:border-teal-700 hover:text-neutral-900 active:scale-90 active:shadow-sm'>
                                Reset Password
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