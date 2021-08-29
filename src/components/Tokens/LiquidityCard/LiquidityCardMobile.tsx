import React from 'react'
import { classNames } from '../../../functions'
import { PlusIcon } from '@heroicons/react/outline'
import CardTabMobile from '../CardTabMobile'
import TokenSelectorMobile from '../TokenSelector/TokenSelectorMobile'

function LiquidityCardMobile({ className, token1, token2 }: any) {
  const tabs = ['Add Liquidity', 'Remove']
  const selectedTab = 0

  const tokenFrom = token1
  const tokenTo = token2

  return (
    <div className={classNames('w-full mx-auto', className)}>
      <CardTabMobile tabs={tabs} />
      <TokenSelectorMobile className="relative z-10" caption="" defaultToken={tokenFrom} />
      <div className="-mt-3 flex justify-end mr-2">
        <div className="flex w-[50px] h-[50px] items-center justify-center rounded-full bg-dark-700 border border-dark-900 border-2">
          <PlusIcon className="w-[30px] h-[30px]" />
        </div>
      </div>
      <TokenSelectorMobile className="-mt-10" oddColor="true" defaultToken={tokenTo} />
      <button className="mt-3 w-full rounded bg-dark-700 text-secondary font-bold py-3 text-sm">Enter Amounts</button>
    </div>
  )
}

export default LiquidityCardMobile
