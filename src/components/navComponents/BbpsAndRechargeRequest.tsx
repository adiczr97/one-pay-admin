import { MessageSquareWarning, Slack } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const BbpsAndRechargeRequest = () => {
  return (
    <Link href="/dashboard/bbpsandrechargerequest">
      <span className='flex items-center gap-2'>
        <MessageSquareWarning className='h-5 w-5' />
        <span className='w-full truncate'>
          Bbps And Recharge Request
        </span>
      </span>
    </Link>)
}

export default BbpsAndRechargeRequest