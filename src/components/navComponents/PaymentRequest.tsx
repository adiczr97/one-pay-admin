import { HandCoins } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PaymentRequest = () => {
  return (
    <Link href="/dashboard/paymentrequest">
      <span className='flex items-center gap-2'>
        <HandCoins className='h-5 w-5' />
        <span className='w-full truncate'>
          Payment Request
        </span>
      </span>
    </Link>)
}

export default PaymentRequest