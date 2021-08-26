import React from 'react'
import { ArrowUpIcon } from '@heroicons/react/outline'

import Image from 'next/image'

function TokenMarketsRow({ tokenPair, apy, borrowed, availableSupply, button, buttonLink }: any) {
  return (
    <div className="flex space-x-2 w-full items-center h-14 text-sm text-secondary border-b border-dark-800">
      <div className="flex-1 flex">
        <div className="z-10 flex items-center">
          <Image src={tokenPair.tokenImage1} width={25} height={25} />
        </div>
        <div className="-ml-1 flex items-center">
          <Image src={tokenPair.tokenImage2} width={25} height={25} />
        </div>
        <div className="ml-2 my-auto text-white">{tokenPair.token2}</div>
      </div>
      <div className="text-right flex-1">{`${apy}%`}</div>
      <div className="text-right flex-1">{`${borrowed}%`}</div>
      <div className="text-right flex-1">{`${availableSupply} ${tokenPair.token1}`}</div>
      <div className="w-40 flex justify-center">
        <a
          href={buttonLink}
          className="px-6 py-1 border rounded-xl text-high-emphesis border-transparent border-gradient-r-blue-pink-dark-1000"
        >
          {button}
        </a>
      </div>
    </div>
  )
}

export default TokenMarketsRow
