import React from 'react'
import { classNames } from '../../../functions'
import Image from 'next/image'

function MarketInfoItem({ className, title, color, amount, amountUSDC, amountPercentage }: any) {
  return (
    <div className={classNames('flex flex-col', className)}>
      <div className="flex space-x-2 items-center mb-3">
        <div className={classNames('rounded-full w-2 h-2', color)}></div>
        <div className="text-primary text-sm">{title}</div>
      </div>
      <div className="text-high-emphesis text-lg">{amount}</div>
      <div className="text-sm">${amountUSDC}</div>
      <div className="text-base text-high-emphesis">{amountPercentage}% of Total</div>
    </div>
  )
}

export default MarketInfoItem
