import React from 'react'
import { classNames } from '../../../functions'
import { PlusIcon, ArrowDownIcon } from '@heroicons/react/outline'
import TokenSelector from '../TokenSelector/TokenSelector'
import TokenSelectorWithoutInput from '../TokenSelectorWithoutInput/TokenSelectorWithoutInput'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import CardTab from '../CardTab'

function AuctionCard({ className, token1, token2, remainingTime, onEnter }: any) {
  const tabs = ['Participate', 'Claim']
  const selectedTab = 0

  const [timeString, setTimeString] = useState('00D : 00H : 00M : 00S')

  const formatRemainingTime = () => {
    const seconds = remainingTime % 60
    const tMins = ~~(remainingTime / 60)
    const mins = tMins % 60
    const tHours = ~~(tMins / 60)
    const hours = tHours % 24
    const days = ~~(tHours / 24)

    const _seconds = seconds < 10 ? '0' + seconds : seconds
    const _mins = mins < 10 ? '0' + mins : mins
    const _hours = hours < 10 ? '0' + hours : hours
    const _days = days < 10 ? '0' + days : days

    setTimeString(`${_days}D : ${_hours}H : ${_mins}M : ${_seconds}S`)
  }

  useEffect(() => {
    formatRemainingTime()
  }, [remainingTime])

  return (
    <div className={classNames('w-80', className)}>
      <CardTab tabs={tabs} />
      <div className="bg-dark-800 rounded-b">
        <div className="flex px-5 py-2 bg-gradient-to-r from-blue to-pink text-high-emphesis">
          <div>{timeString}</div>
          <div className="flex-1 text-right">Remaining</div>
        </div>
        <div className="relative h-[150px] bg-dark-900">
          <TokenSelector caption="Commit:" defaultToken={token2} />
        </div>
        <div className="h-3 bg-dark-900"></div>
        <div className="h-3"></div>
        <div className="relative py-5 px-5 bg-dark-800">
          <button className="absolute flex items-center justify-center left-8 -top-8 rounded-full w-10 h-10 bg-dark-800 border border-dark-900">
            <ArrowDownIcon className="w-[20px] h-[20px]" />
          </button>
          <div className="text-secondary">Receive (at least):</div>
          <div className="flex space-x-3 my-2">
            <Image src={token1.imageUrl} width={24} height={24} />
            <div className="text-high-emphesis">0 {token1.symbol}</div>
          </div>
        </div>
        <div className="px-5 h-[70px]">
          <button
            className="w-full rounded bg-gradient-to-r rounded-lg from-blue to-pink text-high-emphesis font-bold py-3 text-sm"
            onClick={onEnter}
          >
            Enter Amounts
          </button>
        </div>
      </div>
    </div>
  )
}

export default AuctionCard
