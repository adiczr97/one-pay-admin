import { Settings2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Settings = () => {
  return (
    <Link href="/dashboard/settings" className=''>
      <span className='flex items-center gap-2'>
        <Settings2 />
        Settings
      </span>
    </Link>)
}

export default Settings