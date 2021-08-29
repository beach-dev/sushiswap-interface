import React from 'react'
import { classNames } from '../../../functions'
import { PlusIcon } from '@heroicons/react/outline'
import TokenSelector from '../TokenSelector/TokenSelector'
import TokenSelectorWithoutInput from '../TokenSelector/TokenSelectorWithoutInput'
import TokenSwitch from './TokenSwitch'
import CardTab from '../CardTab'

function LendCard({ className, token }: any) {
  const tabs = ['Lend', 'Withdraw']
  const selectedTab = 0

  return (
    <div className={classNames('w-80', className)}>
      <CardTab tabs={tabs} />
      <div className="bg-dark-800 rounded">
        <div className="bg-dark-900 flex p-4">
          <div className="flex-1 text-primary text-sm">Deposit From:</div>
          <TokenSwitch options={['BentoBox', 'Wallet']} />
        </div>
        <div className="relative h-[150px]">
          <TokenSelector caption="Lend LCRX:" oddColor="true" defaultToken={token} />
        </div>
        <div className="px-5 h-[70px]">
          <button className="w-full rounded bg-dark-700 text-secondary font-bold py-3 text-sm">Enter Amounts</button>
        </div>
      </div>
    </div>
  )
}

export default LendCard
