import { Asterisk } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ReferTracker = () => {
  return (
    <Link href="/dashboard/refertracker">
      <span className='flex items-center gap-2'>
        <Asterisk className='h-5 w-5' />
        <span className='w-full truncate'>
          ReferTracker
        </span>
      </span>
    </Link>)
}

export default ReferTracker