import { User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Users = () => {
    return (
        <Link href="/dashboard/users">
            <span className='flex items-center gap-2'>
                <User className='h-5 w-5' />
                <span className='w-full truncate'>
                    Users
                </span>
            </span>
        </Link >
    )
}

export default Users