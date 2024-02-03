import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='h-[100vh] flex justify-center items-center'>
                <div className='w-[25rem] border'>
                    <h1 className='relative py-5 text-center text-2xl font-normal text-neutral-900 before:content-[""] before:block before:h-[.1rem] before:w-28 before:absolute before:top-[50%] before:left-0 before:bg-neutral-900 
                after:content-[""] after:block after:h-[.1rem] after:w-28 after:absolute after:top-[50%] after:right-0 after:bg-neutral-900
                '>
                        Admin Login
                    </h1>
                    <form className='flex flex-col justify-center items-center'>
                        <input required type="text" name='username' placeholder='Username' autoComplete='off' className='w-[96%] rounded-sm py-1 px-3 my-2 outline outline-[1.5px] outline-gray-400 focus:outline-teal-700' />
                        <input required type="password" name='password' placeholder='Password' autoComplete='off' className='w-[96%] rounded-sm py-1 px-3 my-2 outline outline-[1.5px] outline-gray-400 focus:outline-teal-700' />
                        <div className='w-[96%] flex justify-start my-2'>
                            <span className='text-neutral-950 text-sm font-normal'>
                                No account? <Link href={'/signup'} className='text-slate-600 hover:text-neutral-950'>Create one!</Link>
                            </span>
                        </div>
                        <div className='w-[96%] flex justify-start my-2'>
                            <Link href={'/forgetPassword'} className='text-slate-600 hover:text-neutral-950 text-sm font-normal'>
                                Can’t access your account?
                            </Link>
                        </div>
                        <div className='w-[96%] flex justify-end my-2'>
                            <button className='bg-slate-50 hover:bg-teal-50 border-[1.5px] border-gray-400 py-1 px-4 rounded-[.25rem] shadow-md text-neutral-500 hover:border-teal-700 hover:text-neutral-900 active:scale-90 active:shadow-sm'>
                                Log in
                            </button>
                        </div>
                        {/* <div className='w-[96%] flex justify-between items-start my-2'>
                            <button className='border-[1.5px] border-gray-400 py-1 px-4 rounded-sm text-neutral-500 hover:border-teal-700 hover:text-neutral-900'>
                                Log in
                            </button>
                            <Link href={'/forgetPassword'} className='text-slate-600 hover:text-neutral-950 text-sm font-normal'>
                                Can’t access your account?
                            </Link>
                        </div> */}
                    </form>
                    <hr className='border-zinc-600 my-5' />
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