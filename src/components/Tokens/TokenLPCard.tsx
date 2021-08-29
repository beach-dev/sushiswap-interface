import React from 'react'
import { classNames } from '../../functions'
import Image from 'next/image'

function TokenLPCard({ className, liquidity, label1, button, buttonLink }: any) {
  return (
    <div
      className={classNames(
        'w-[216px] h-[255px] flex-auto flex-grow-0 flex-shrink-0 p-5 flex flex-col items-start bg-dark-900 rounded border border-dark-800',
        className
      )}
    >
      <div className="w-full flex items-center">
        <div className="z-10">
          <Image src={liquidity.tokenPair.tokenImage1} width={42} height={42} />
        </div>
        <div className="-ml-3">
          <Image src={liquidity.tokenPair.tokenImage2} width={42} height={42} />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="text-right text-xs text-secondary">{label1}</div>
          <div className="text-right text-high-emphesis">{liquidity.tvl}</div>
        </div>
      </div>
      <div className="mt-3 px-3 bg-blue bg-opacity-25 rounded-full text-blue text-xs text-center py-1 font-bold">
        Traditional 50/50 Pool
      </div>
      <div className="text-high-emphesis text-2xl mt-2">
        {liquidity.tokenPair.token1}/{liquidity.tokenPair.token2}
      </div>
      <div className="text-sm mt-1">
        {liquidity.token1} {liquidity.tokenPair.token1}
      </div>
      <div className="text-sm">
        {liquidity.token2} {liquidity.tokenPair.token2}
      </div>
      <a
        href={buttonLink}
        className="w-full mt-3 py-1 text-center border rounded-xl text-high-emphesis border-transparent border-gradient-r-blue-pink-dark-900"
      >
        {button}
      </a>
    </div>
  )
}

export default TokenLPCard
