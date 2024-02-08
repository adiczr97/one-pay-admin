import { Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const Home1 = () => {

    return (
        <Link href="/dashboard">
                <span className='flex items-center gap-2  '>
                    <Home />
                    Home
                </span>
        </Link>
    )
}

export default Home1