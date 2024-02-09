import { AlignEndHorizontal } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const EmployeeTracker = () => {
  return (
    <Link href="/dashboard/employeetracker">
      <span className='flex items-center gap-2'>
        <AlignEndHorizontal className='h-5 w-5' />
        <span className='w-full truncate'>
          Employee Tracker
        </span>
      </span>
    </Link>
  )
}

export default EmployeeTracker