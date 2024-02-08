import { HandCoins } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PaymentRequest = () => {
  return (
    <Link href="/dashboard/paymentRequest" className=''>
      <span className='flex items-center gap-2'>
        <HandCoins />
        Payment Request
      </span>
    </Link>)
}

export default PaymentRequest