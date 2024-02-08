import { ShieldHalf } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const AddOperationTeam = () => {
  return (
    <Link href="/dashboard/AddOperationTeam" className=''>
      <span className='flex items-center gap-2'>
        <ShieldHalf />
        Add Operation Team
      </span>
    </Link>
  )
}

export default AddOperationTeam