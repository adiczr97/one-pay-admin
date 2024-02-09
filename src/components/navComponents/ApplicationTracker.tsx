import { BarChart4 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ApplicationTracker = () => {
  return (
    <Link href="/dashboard/applicationtracker">
      <span className='flex items-center gap-2'>
        <BarChart4 className='h-5 w-5' />
        <span className='w-full truncate'>
          Application Tracker
        </span>
      </span>
    </Link>

  )
}

export default ApplicationTracker