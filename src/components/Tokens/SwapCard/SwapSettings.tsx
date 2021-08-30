import React from 'react'
import { classNames } from '../../../functions'
import { AdjustmentsIcon, ArrowNarrowUpIcon, ArrowNarrowDownIcon } from '@heroicons/react/outline'
import TokenSelector from '../TokenSelector/TokenSelector'

function SwapSettings({ className }: any) {
  const tabs = ['Swap', 'Limit Order']
  const selectedTab = 0

  const tokenFrom = {
    symbol: 'LCRX',
    balance: '518.392837',
    usdc: '0',
    imageUrl: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
  }

  return (
    <div className={classNames('w-80 bg-dark-800 rounded', className)}>
      <div className="px-5 w-full h-[50px] flex space-x-5">
        <div>Swap Settings</div>
        <div className="flex-1 pt-4">
          <AdjustmentsIcon className="ml-auto w-[20px] h-[20px] transform rotate-90" />
        </div>
      </div>
      <div className="h-[150px] bg-dark-900">
        <TokenSelector caption="Swap From: " defaultToken={tokenFrom} />
      </div>
      <div className="h-3 bg-dark-900"></div>
      <div className="h-3"></div>
      <div className="relative h-[150px]">
        <button className="absolute flex items-center justify-center left-8 -top-8 rounded-full w-10 h-10 bg-dark-800 border border-dark-900">
          <ArrowNarrowUpIcon className="w-[20px] h-[25px]" />
          <ArrowNarrowDownIcon className="-ml-3 w-[20px] h-[25px]" />
        </button>
        <TokenSelector caption="Swap To: " oddColor="true" />
      </div>
      <div className="px-5 h-[70px]">
        <button className="w-full rounded bg-dark-700 text-secondary font-bold py-3 text-sm">Enter Amounts</button>
      </div>
    </div>
  )
}

export default SwapSettings
