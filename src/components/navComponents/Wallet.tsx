import { Wallet } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const wallet = () => {
  return (
    <Link href="/dashboard/wallet">
      <span className='flex items-center gap-2'>
        <Wallet className='h-5 w-5' />
        <span className='w-full truncate'>
          wallet
        </span>
      </span>
    </Link>
  )
}

export default wallet