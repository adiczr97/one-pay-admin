import { Handshake } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Deals = () => {
  return (
    <Link href="/dashboard/deals">
      <span className='flex items-center gap-2'>
        <Handshake className='h-5 w-5' />
        <span className='w-full truncate'>
          Deals
        </span>
      </span>
    </Link>
  )
}

export default Deals