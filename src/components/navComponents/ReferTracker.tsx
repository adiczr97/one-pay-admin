import { Asterisk } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ReferTracker = () => {
  return (
    <Link href="/dashboard/referTracker" className=''>
      <span className='flex items-center gap-2'>
        <Asterisk />
        ReferTracker
      </span>
    </Link>)
}

export default ReferTracker