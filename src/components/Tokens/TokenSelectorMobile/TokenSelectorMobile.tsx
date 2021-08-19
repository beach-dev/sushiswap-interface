import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { classNames } from '../../../functions'
import { Input as NumericalInput } from '../../NumericalInput'
import { useState } from 'react'

import Image from 'next/image'
import Lottie from 'lottie-react'
import selectCoinAnimation from '../../../animation/select-coin.json'

function TokenSelectorMobile({ defaultToken }: any) {
  const [tokenValue, setTokenValue] = useState('')

  const tokenSelected = defaultToken

  return (
    <div className="w-full py-2 flex flex-col">
      <div className="flex space-x-2 text-sm text-secondary">
        <button className="flex items-center text-white font-medium p-1">
          <div>{tokenSelected.symbol}</div>
          <ChevronDownIcon className="w-[18px] h-[18px]" />
        </button>
      </div>
      <div className="flex rounded-t items-center space-x-2 h-16 px-3 bg-dark-900">
        <Image src={tokenSelected.imageUrl} width={42} height={42} />
        <NumericalInput
          placeholder="0.00"
          id="token-amount-input"
          value={tokenValue}
          onUserInput={(val) => {
            setTokenValue(val)
          }}
        />
        <button className="px-2 py-1 rounded-full border-blue border border-opacity-50 bg-blue bg-opacity-25 text-blue">
          MAX
        </button>
      </div>
      <div className="flex items-center space-x-2 rounded-b bg-dark-800 px-3 py-2 text-xs text-secondary">
        <div>
          <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.8241 12.5362H1.03448C0.463793 12.5362 0 12.0724 0 11.5017V1.03448C0 0.463793 0.463793 0 1.03448 0H14.8241C15.3948 0 15.8586 0.463793 15.8586 1.03448V3.36897H10.9086C10.5379 3.36897 10.1759 3.4431 9.83621 3.58621C9.50862 3.72414 9.21381 3.92414 8.96207 4.17586C8.71036 4.42759 8.51034 4.72241 8.37241 5.05C8.22759 5.38966 8.15517 5.75172 8.15517 6.12241V6.41379C8.15517 6.78448 8.22931 7.14655 8.37241 7.48621C8.51034 7.81379 8.71034 8.10864 8.96207 8.36036C9.21379 8.61207 9.50862 8.81207 9.83621 8.95C10.1759 9.09484 10.5379 9.16724 10.9086 9.16724H15.8586V11.5017C15.8586 12.0724 15.3948 12.5362 14.8241 12.5362ZM16.2242 4.40345C16.6535 4.40345 17 4.75 17 5.17931V7.35688C17 7.78619 16.6535 8.13274 16.2242 8.13274H15.8586H10.9086C9.95864 8.13274 9.18967 7.36379 9.18967 6.41379V6.12241C9.18967 5.17241 9.95862 4.40345 10.9086 4.40345H15.8586H16.2242ZM10.2759 6.26724C10.2759 6.77243 10.6845 7.18104 11.1897 7.18104C11.6948 7.18104 12.1035 6.77243 12.1035 6.26724C12.1035 5.76207 11.6948 5.35345 11.1897 5.35345C10.6845 5.35345 10.2759 5.76207 10.2759 6.26724Z"
              fill="#BFBFBF"
            />
          </svg>
        </div>
        <div className="flex-1">{tokenSelected.balance}</div>
        <div>= {tokenSelected.usdc} USDC</div>
      </div>
    </div>
  )
}

export default TokenSelectorMobile
