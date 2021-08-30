import React from 'react'
import { classNames } from '../../functions'
import Image from 'next/image'

function TokenPairCard({ className, pair }: any) {
  return (
    <div
      className={classNames(
        'w-[216px] h-[255px] flex-auto flex-grow-0 flex-shrink-0 p-5 flex flex-col items-start bg-dark-900 rounded border border-dark-800',
        className
      )}
    >
      <div className="w-full flex items-center">
        <div className="z-10">
          <Image src={pair.tokenPair.tokenImage1} width={50} height={50} />
        </div>
        <div className="-ml-3">
          <Image src={pair.tokenPair.tokenImage2} width={50} height={50} />
        </div>
      </div>
      <div className="text-high-emphesis text-2xl mt-2">
        {pair.tokenPair.token1}/{pair.tokenPair.token2}
      </div>
      <div className="flex-1"></div>
      <div className="mt-1 text-secondary">Volume (24H)</div>
      <div className="text-primary text-lg">${pair.volume}</div>
      <div className="w-full flex space-x-2">
        <a
          href="/tokens/swap"
          className="w-full mt-3 py-1 text-center border rounded-xl text-high-emphesis border-transparent border-gradient-r-blue-pink-dark-900"
        >
          Swap
        </a>
        <a
          href="/tokens/swap"
          className="w-full mt-3 py-1 text-center border rounded-xl text-high-emphesis border-transparent border-gradient-r-blue-pink-dark-900"
        >
          Liquidity
        </a>
      </div>
    </div>
  )
}

export default TokenPairCard
