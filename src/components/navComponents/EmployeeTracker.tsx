import { AlignEndHorizontal } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const EmployeeTracker = () => {
  return (
<Link href="/dashboard/employeeTracker" className=''>
      <span className='flex items-center gap-2'>
      <AlignEndHorizontal />
      Employee Tracker
            </span>
    </Link> 
        )
}

export default EmployeeTracker