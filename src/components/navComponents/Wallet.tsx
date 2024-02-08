import { Wallet } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const wallet = () => {
  return (
    <Link href="/dashboard/wallet" className=''>
      <span className='flex items-center gap-2'>
        <Wallet />
        wallet
      </span>
    </Link>
  )
}

export default wallet