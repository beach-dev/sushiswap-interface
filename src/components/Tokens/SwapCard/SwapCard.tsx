import React, { useState } from 'react'
import { classNames } from '../../../functions'
import { AdjustmentsIcon, ArrowNarrowUpIcon, ArrowNarrowDownIcon } from '@heroicons/react/outline'
import TokenSelector from '../TokenSelector/TokenSelector'
import { QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { XCircleIcon } from '@heroicons/react/outline'
import { Input as NumericalInput } from '../../NumericalInput'
import RadioButton from '../RadioButton/RadioButton'
import TokenSwitch from '../TokenSwitch'

function SwapCard({ className }: any) {
  const tabs = ['Swap', 'Limit Order']
  const selectedTab = 0

  const [mode, setMode] = useState('main')
  const [slippage, setSlippage] = useState('')
  const [minutes, setMinutes] = useState('')
  const [toggleExpertMode, setToggleExpertMode] = useState(false)
  const [disableMultihops, setDisableMultihops] = useState(false)
  const [mevShield, setMevShield] = useState(false)

  const tokenFrom = {
    symbol: 'LCRX',
    balance: '518.392837',
    usdc: '0',
    imageUrl: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
  }

  return mode == 'main' ? (
    <div className={classNames('w-80 bg-dark-800 rounded', className)}>
      <div className="px-5 w-full h-[50px] flex space-x-5">
        {tabs.map((tab, i) => (
          <div
            key={i}
            className={classNames(i == selectedTab ? 'text-blue font-medium' : null, 'relative pt-4 text-sm')}
          >
            {tab}
            {i == selectedTab && <div className="absolute bottom-0 w-full h-1 bg-dark-700"></div>}
          </div>
        ))}
        <button className="flex-1" onClick={() => setMode('settings')}>
          <AdjustmentsIcon className="ml-auto w-[20px] h-[20px] transform rotate-90" />
        </button>
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
  ) : (
    <div className={classNames('w-80 bg-dark-800 rounded', className)}>
      <div className="px-5 w-full h-[50px] flex items-center">
        <div>Swap Settings</div>
        <button className="flex-1" onClick={() => setMode('main')}>
          <XCircleIcon className="ml-auto w-[20px] h-[20px] transform rotate-90" />
        </button>
      </div>
      <div className="p-5 bg-dark-900 rounded-b pb-8">
        <div className="flex items-center space-x-2">
          <div className="text-high-emphesis text-sm">Slippage Tolerance</div>
          <QuestionMarkCircleIcon className="text-secondary w-[16px] h-[16px]" />
        </div>
        <div className="w-full flex space-x-1.5 h-12 mt-1">
          <div className="w-44 flex rounded items-center space-x-2 px-3 bg-dark-800">
            <NumericalInput
              placeholder="30"
              id="token-amount-input"
              className="text-xl bg-transparent"
              value={minutes}
              onUserInput={(val) => {
                setMinutes(val)
              }}
            />
            <div>%</div>
          </div>
          <div className="flex-1 flex rounded items-center space-x-2 px-2 bg-dark-800">
            <RadioButton selected />
            <div className="text-high-emphesis">Auto</div>
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-5">
          <div className="text-high-emphesis text-sm">Transaction Deadline</div>
          <QuestionMarkCircleIcon className="text-secondary w-[16px] h-[16px]" />
        </div>
        <div className="flex space-x-1.5 h-12 mt-1">
          <div className="w-full flex rounded items-center space-x-2 px-3 bg-dark-800">
            <NumericalInput
              placeholder="0.50"
              id="token-amount-input"
              className="text-xl bg-transparent"
              value={slippage}
              onUserInput={(val) => {
                setSlippage(val)
              }}
            />
            <div>Minutes</div>
          </div>
        </div>

        <div className="text-high-emphesis text-sm mt-5">Interface Settings</div>
        <div className="flex items-center space-x-2 mt-5">
          <div className="text-high-primary text-sm">Transaction Deadline</div>
          <QuestionMarkCircleIcon className="text-secondary w-[16px] h-[16px]" />
          <div className="flex-1" />
          <TokenSwitch
            options={['', '']}
            state={toggleExpertMode}
            OnChange={() => setToggleExpertMode(!toggleExpertMode)}
          />
        </div>

        <div className="flex items-center space-x-2 mt-5">
          <div className="text-high-primary text-sm">Disable Multihops</div>
          <QuestionMarkCircleIcon className="text-secondary w-[16px] h-[16px]" />
          <div className="flex-1" />
          <TokenSwitch
            options={['', '']}
            state={disableMultihops}
            OnChange={() => setDisableMultihops(!disableMultihops)}
          />
        </div>

        <div className="flex items-center space-x-2 mt-5">
          <div className="text-high-primary text-sm">MEV Shield by Archer DAO</div>
          <QuestionMarkCircleIcon className="text-secondary w-[16px] h-[16px]" />
          <div className="flex-1" />
          <TokenSwitch options={['', '']} state={mevShield} OnChange={() => setMevShield(!mevShield)} />
        </div>
      </div>
    </div>
  )
}

export default SwapCard
