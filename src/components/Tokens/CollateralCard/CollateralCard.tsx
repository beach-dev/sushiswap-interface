import React from 'react'
import { classNames } from '../../../functions'
import Image from 'next/image'

function CollateralCard({ className, token, amount, amountUSDC, buttons }: any) {
  return (
    <div className={classNames('rounded w-[275px] bg-dark-900', className)}>
      <div className="flex border-b border-dark-800 px-4 py-3 space-x-4 items-center">
        <Image src={token.imageUrl} width={32} height={32} />
        <div>
          <div className="text-high-emphesis">
            {amount} {token.symbol}
          </div>
          <div className="text-sm">=${amountUSDC}</div>
        </div>
      </div>
      <div className="flex text-sm">
        <button className="flex-1 py-2 border-r border-dark-800">{buttons[0]}</button>
        <button className="flex-1 py-2">{buttons[1]}</button>
      </div>
    </div>
  )
}

export default CollateralCard
