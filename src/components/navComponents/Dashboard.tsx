import { Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const Dashboard = () => {

    return (
        <Link href="/dashboard">
            <span className='flex items-center gap-2'>
                <Home className='h-5 w-5' />
                <span className='w-full truncate'>
                    Home
                </span>
            </span>
        </Link>
    )
}

export default Dashboard