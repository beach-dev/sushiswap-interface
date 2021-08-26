import React from 'react'
import { classNames } from '../../../functions'
import { ArrowDownIcon, BanIcon } from '@heroicons/react/outline'
import TokenSelector from '../TokenSelector/TokenSelector'
import StakedTokenRow from './StakedTokenRow'
import TokenOptionRow from '../TokenOptionRow'
import CardTab from '../CardTab'

function FarmCard({ className, token1, token2 }: any) {
  const tabs = ['Invest', 'Withdraw']
  const selectedTab = 0

  return (
    <div className={classNames('w-80', className)}>
      <CardTab tabs={tabs} />
      <div className="bg-dark-900 rounded">
        <div className="bg-dark-900 flex flex-col p-4">
          <TokenOptionRow
            className="h-[80px] border-b border-dark-800"
            title="Stake LCRX/WETH SLP"
            description="Deposit SLP tokens from providing liquidity"
            disabled
          />
          <TokenOptionRow
            className="h-[80px] border-b border-dark-800"
            title="Stake LCRX and WETH"
            description="Deposit both of the relevant assets from your wallet"
            disabled
          />
          <TokenOptionRow
            className="h-[80px]"
            title="Zap In"
            description="Use a single asset from wallet to swap, split, and stake"
            selected
          />
        </div>
        <div className="h-[150px] bg-dark-800">
          <TokenSelector oddColor caption="Zap with:" />
        </div>
        <div className="h-5"></div>
        <div className="relative mb-2">
          <button className="absolute flex items-center justify-center left-4 -top-12 rounded-full w-10 h-10 bg-dark-800 border border-dark-900">
            <ArrowDownIcon className="w-[20px] h-[20px]" />
          </button>
          <StakedTokenRow className="mx-4 border-b border-dark-800" tokenInfo={token1} />
          <StakedTokenRow className="mx-4" tokenInfo={token2} />
        </div>
        <div className="px-5 h-[70px]">
          <button className="w-full rounded bg-dark-700 text-secondary font-bold py-3 text-sm">Enter an amount</button>
        </div>
      </div>
    </div>
  )
}

export default FarmCard
