import { BellDot } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SendNotifications = () => {
  return (
    <Link href="/dashboard/sendNotifications" className=''>
      <span className='flex items-center gap-2'>
        <BellDot />
        Send Notifications
      </span>
    </Link>)
}

export default SendNotifications