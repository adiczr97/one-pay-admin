import { BadgeDollarSign } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const TodaysOffer = () => {
  return (
    <Link href="/dashboard/todaysOffer" className=''>
      <span className='flex items-center gap-2'>
        <BadgeDollarSign />
        Todays Offer
      </span>
    </Link>
  )
}

export default TodaysOffer