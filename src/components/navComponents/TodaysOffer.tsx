import { BadgeDollarSign } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const TodaysOffer = () => {
  return (
    <Link href="/dashboard/todaysoffer">
      <span className='flex items-center gap-2'>
        <BadgeDollarSign className='h-5 w-5' />
        <span className='w-full truncate'>
          Todays Offer
        </span>
      </span>
    </Link>
  )
}

export default TodaysOffer