import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { classNames } from '../../../functions'
import { Input as NumericalInput } from '../../NumericalInput'
import { useState } from 'react'

import Image from 'next/image'
import Lottie from 'lottie-react'
import selectCoinAnimation from '../../../animation/select-coin.json'

function TokenSelectorWithoutInput({ oddColor, defaultToken }: any) {
  const [tokenValue, setTokenValue] = useState('')

  const tokenSelected = defaultToken

  return tokenSelected ? (
    <div className="w-full px-5 py-3 flex flex-col">
      <div className=" text-xs text-center mx-3 text-secondary">
        Select an asset pair here, or choose a pool from the list(s) on the left.
      </div>
      <div
        className={classNames(
          'flex rounded items-center space-x-2 h-16 my-2 px-3',
          oddColor ? 'bg-dark-900' : 'bg-dark-800'
        )}
      >
        <Image src={tokenSelected.imageUrl} width={42} height={42} />
        <div className="flex-1 text-right text-high-emphesis">{defaultToken.symbol}</div>
      </div>
      <div className="flex text-xs text-secondary">
        <div className="flex-1">Balance: {tokenSelected.balance}</div>
      </div>
    </div>
  ) : (
    <div className="w-full p-5 flex flex-col">
      <div
        className={classNames(
          'flex rounded items-center space-x-2 h-16 my-2 px-3',
          oddColor ? 'bg-dark-900' : 'bg-dark-800'
        )}
      >
        <div style={{ width: 42, height: 42 }}>
          <Lottie animationData={selectCoinAnimation} autoplay loop />
        </div>
        <div className="flex-1">
          <button className="ml-auto px-3 py-1 rounded-full bg-blue flex items-center text-high-emphesis text-sm">
            <div>Select a Token</div>
            <ChevronDownIcon className="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TokenSelectorWithoutInput
