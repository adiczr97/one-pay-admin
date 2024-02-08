import { FileBox } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Featured = () => {
  return (
    <Link href="/dashboard/featured" className=''>
      <span className='flex items-center gap-2'>
        <FileBox />
        Featured
      </span>
    </Link>)
}

export default Featured