import { Handshake } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Deals = () => {
  return (
    <Link href="/dashboard/deals" className=''>
      <span className='flex items-center gap-2'>
        <Handshake />
        Deals
      </span>
    </Link>
  )
}

export default Deals