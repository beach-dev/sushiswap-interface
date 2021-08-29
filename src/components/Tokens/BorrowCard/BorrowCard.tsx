import React from 'react'
import { classNames } from '../../../functions'
import { PlusIcon } from '@heroicons/react/outline'
import TokenSelector from '../TokenSelector/TokenSelector'
import TokenSelectorWithoutInput from '../TokenSelector/TokenSelectorWithoutInput'
import TokenOptionRow from '../TokenOptionRow'
import CardTab from '../CardTab'

function BorrowCard({ className, token }: any) {
  const tabs = ['Borrow', 'Repay']
  const selectedTab = 0

  return (
    <div className={classNames('w-80', className)}>
      <CardTab tabs={tabs} />
      <div className="bg-dark-900 rounded">
        <div className="bg-dark-900 flex flex-col px-4 pt-4">
          <TokenOptionRow
            className="h-[70px] border-b border-dark-800"
            title="One-step add &amp; borrow"
            description="Deposit colateral and borrow at once"
            selected
          />
          <TokenOptionRow
            className="h-[70px] border-b border-dark-800"
            title="Add Collateral Only"
            description="Deposit UNI as collateral"
          />
          <TokenOptionRow className="h-[70px]" title="Borrow Only" description="Borrow SUSHI" />
        </div>
        <div className="px-5 h-[70px]">
          <button className="w-full rounded bg-gradient-to-r rounded-lg from-blue to-pink text-high-emphesis py-3 text-sm">
            Proceed
          </button>
        </div>
      </div>
    </div>
  )
}

export default BorrowCard
