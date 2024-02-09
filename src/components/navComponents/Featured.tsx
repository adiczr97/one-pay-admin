import { FileBox } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Featured = () => {
  return (
    <Link href="/dashboard/featured">
      <span className='flex items-center gap-2'>
        <FileBox className='h-5 w-5' />
        <span className='w-full truncate'>
          Featured
        </span>
      </span>
    </Link>)
}

export default Featured