import { User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Users = () => {
    return (
        <Link href="/dashboard/users" className=''>
            <span className='flex items-center gap-2'>
                <User />
                Users
            </span>
        </Link>
    )
}

export default Users