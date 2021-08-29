import React from 'react'
import { classNames } from '../../../functions'
import { ArrowDownIcon, BanIcon } from '@heroicons/react/outline'
import TokenSelector from '../TokenSelector/TokenSelector'
import StakedTokenRow from './StakedTokenRow'
import TokenOptionRow from '../TokenOptionRow'
import CardTab from '../CardTab'
import CardTabMobile from '../CardTabMobile'
import TokenSelectorMobile from '../TokenSelector/TokenSelectorMobile'

function FarmCardMobile({ className, token1, token2, slpToken }: any) {
  const tabs = ['Invest', 'Withdraw']
  const selectedTab = 0

  return (
    <div className={classNames('w-full mx-auto', className)}>
      <CardTabMobile tabs={tabs} />
      <div className="flex flex-col border border-dark-700 rounded overflow-hidden">
        <TokenOptionRow
          className="h-[60px] lg:h-[80px] border-b border-dark-800"
          title="Stake LCRX/WETH SLP"
          description="Deposit SLP tokens from providing liquidity"
          // disabled
        />
        <TokenOptionRow
          className="h-[60px] lg:h-[80px] border-b border-dark-800"
          title="Stake LCRX and WETH"
          description="Deposit both of the relevant assets from your wallet"
          // disabled
        />
        <TokenOptionRow
          className="h-[60px] lg:h-[80px]"
          title="Zap In"
          description="Use a single asset to swap, split, and stake"
          selected
        />
      </div>

      <TokenSelectorMobile className="mt-5" oddColor caption="" defaultToken={slpToken} />

      <button className="w-full rounded bg-dark-700 text-secondary font-bold py-3 text-sm">Enter an amount</button>
    </div>
  )
}

export default FarmCardMobile
