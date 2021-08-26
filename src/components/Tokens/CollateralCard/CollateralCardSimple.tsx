import React from 'react'
import { classNames } from '../../../functions'
import Image from 'next/image'

function CollateralCardSimple({ token, title }: any) {
  return (
    <div className="flex flex-col">
      <div className="text-lg text-high-emphesis border-b border-dark-800 pb-3">{title}</div>
      <div className="flex my-5 space-x-2 items-center">
        <Image src={token.imageUrl} width={32} height={32} />
        <div className="flex-1 text-high-emphesis">{token.symbol}</div>
        <div className="flex flex-col items-end">
          <div className="text-high-emphesis text-sm">{token.balance}</div>
          <div className="text-sm">={token.usdc} USDC</div>
        </div>
      </div>
    </div>
  )
}

export default CollateralCardSimple
