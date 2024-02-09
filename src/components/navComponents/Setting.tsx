import { Settings, Settings2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Setting = () => {
  return (
    <Link href="/dashboard/settings">
      <span className='flex items-center gap-2'>
        <Settings className='h-5 w-5' />
        <span className='w-full truncate'>
          Settings
        </span>
      </span>
    </Link>)
}

export default Setting