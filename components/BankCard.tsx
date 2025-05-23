// "use client";

import { formatAmount } from '@/lib/utils'
import  Link from 'next/link'
import React from 'react'

const BankCard = ({ account, userName, showBalance = true}: CreditCardProps) => {
  return (
    <div className='flex flex-col'>
        <Link href='/' className='bank-card shadow-creditCard'>
            <div className="bank-card_content">
                <div>
                    <h1 className="text-16 font-semibold text-white">
                        {account.name || userName}
                    </h1>
                    <p className="font-ibm-plex-serif font-black text-white">
                        {formatAmount(account.currentBalance)}
                    </p>
                </div>

                <article className='flex flex-col gap-2'>
                    <div className="flex justify-between">
                        <h1 className="text-12 font-semibold text-white">{userName}</h1>
                    </div>
                </article>
            </div>
        </Link>
    </div>
  )
}

export default BankCard