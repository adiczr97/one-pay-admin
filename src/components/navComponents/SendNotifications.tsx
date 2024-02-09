import { BellDot } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SendNotifications = () => {
  return (
    <Link href="/dashboard/sendnotifications">
      <span className='flex items-center gap-2'>
        <BellDot className='h-5 w-5' />
        <span className='w-full truncate'>
          Send Notifications
        </span>
      </span>
    </Link>)
}

export default SendNotifications