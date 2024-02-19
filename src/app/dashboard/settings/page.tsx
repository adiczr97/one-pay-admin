'use client'
import { LogOut } from 'lucide-react'
import React from 'react'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';


const page = () => {
    const router = useRouter();

    const handleSignout = async () => {
        const refresh_token = Cookies.get("refresh_token");
        const access_token = Cookies.get("access_token");
        const dbResponce = await fetch('http://localhost:8000/api/v1/signout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${access_token}`
            },
            body: JSON.stringify({
                refresh_token
            })
        })

        if (dbResponce.status === 500)
            toast.error('Something Went Wrong In The Database');

        if (dbResponce.status === 200) {
            Cookies.remove("access_token");
            toast.success('Logout successfully');
            router.push('/signin');
        }
    };


    return (
        <div className=''>
            <div className='flex justify-start items-center p-4 gap-2 text-xl font-semibold rounded-sm transition-all duration-300 ease-in'>
                Log out <span className='hover:border border-gray-600 p-[.1rem] rounded' onClick={handleSignout}><LogOut /></span>
            </div>
        </div>
    )
}

export default page