import { MessageSquareWarning, Slack } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const BbpsAndRechargeRequest = () => {
  return (
    <Link href="/dashboard/bbpsAndRechargeRequest" className=''>
      <span className='flex items-center gap-2'>
        <MessageSquareWarning />
        Bbps And Recharge Request
      </span>
    </Link>)
}

export default BbpsAndRechargeRequest