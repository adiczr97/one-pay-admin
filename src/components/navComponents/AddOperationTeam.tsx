import { ShieldHalf } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const AddOperationTeam = () => {
  return (
    <Link href="/dashboard/addoperationteam">
      <span className='flex items-center gap-2'>
        <ShieldHalf className='h-5 w-5' />
        <span className='w-full truncate'>
          Add Operation Team
        </span>
      </span>
    </Link>
  )
}

export default AddOperationTeam