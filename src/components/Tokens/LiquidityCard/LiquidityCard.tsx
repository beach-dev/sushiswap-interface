import React from 'react'
import { classNames } from '../../../functions'
import { PlusIcon } from '@heroicons/react/outline'
import TokenSelector from '../TokenSelector/TokenSelector'
import TokenSelectorWithoutInput from '../TokenSelector/TokenSelectorWithoutInput'
import CardTab from '../CardTab'

function LiquidityCard({ className, token1, token2 }: any) {
  const tabs = ['Add Liquidity', 'Remove']
  const selectedTab = 0

  const tokenFrom = token1
  const tokenTo = token2

  return (
    <div className={classNames('w-80', className)}>
      {token2 ? (
        <CardTab tabs={tabs} />
      ) : (
        <div className="px-5 bg-dark-800 rounded-t w-full h-[50px] text-high-emphesis flex items-center">
          Select a Pool
        </div>
      )}
      <div className="bg-dark-800 rounded">
        <div className="h-[150px] bg-dark-900">
          {token2 ? (
            <TokenSelector caption="" defaultToken={tokenFrom} />
          ) : (
            <TokenSelectorWithoutInput defaultToken={tokenFrom} />
          )}
        </div>
        <div className="h-3 bg-dark-900"></div>
        <div className="h-3"></div>
        <div className="relative h-[150px]">
          <button className="absolute flex items-center justify-center left-8 -top-8 rounded-full w-10 h-10 bg-dark-800 border border-dark-900">
            <PlusIcon className="w-[20px] h-[20px]" />
          </button>
          <TokenSelector oddColor="true" defaultToken={tokenTo} />
        </div>
        <div className="px-5 h-[70px]">
          <button className="w-full rounded bg-dark-700 text-secondary font-bold py-3 text-sm">Enter Amounts</button>
        </div>
      </div>
    </div>
  )
}

export default LiquidityCard
