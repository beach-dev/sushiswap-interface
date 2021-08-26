import React from 'react'
import { classNames } from '../../../functions'
import { BanIcon } from '@heroicons/react/outline'

import Image from 'next/image'

function StakedTokenRow({ className, tokenInfo }: any) {
  return (
    <div className={classNames('flex space-x-2 py-2 items-center', className)}>
      <Image src={tokenInfo.imageUrl} width={32} height={32} />
      <div className="flex-1 text-high-emphesis text-base">{tokenInfo.symbol}</div>
      <div className="flex flex-col justify-end">
        <div className="text-right text-sm">{tokenInfo.balance}</div>
        <div className="text-right text-sm text-secondary">= {tokenInfo.usdc} USDC</div>
      </div>
    </div>
  )
}

export default StakedTokenRow
