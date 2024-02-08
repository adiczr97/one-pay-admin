import { BarChart4 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ApplicationTracker = () => {
  return (
    <Link href="/dashboard/applicationTracker" className=''>
      <span className='flex items-center gap-2'>
        <BarChart4 />
        Application Tracker
      </span>
    </Link>

  )
}

export default ApplicationTracker