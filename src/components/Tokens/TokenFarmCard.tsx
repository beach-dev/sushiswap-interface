import React from 'react'
import { classNames } from '../../functions'
import Image from 'next/image'

function TokenFarmCard({ className, farm, label1, label2, color, button, buttonLink }: any) {
  return (
    <div
      className={classNames(
        'w-[216px] h-[255px] flex-auto flex-grow-0 flex-shrink-0 p-5 flex flex-col items-start bg-dark-900 rounded border border-dark-800',
        className
      )}
    >
      <div className="w-full flex items-center">
        <div className="z-10">
          <Image src={farm.tokenPair.tokenImage1} width={42} height={42} />
        </div>
        <div className="-ml-3">
          <Image src={farm.tokenPair.tokenImage2} width={42} height={42} />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="text-right text-xs text-secondary">APY</div>
          <div className="text-right text-high-emphesis">{farm.tvl}</div>
        </div>
      </div>
      <div className="text-high-emphesis text-2xl mt-2">
        {farm.tokenPair.token1}/{farm.tokenPair.token2}
      </div>
      <div
        className={classNames(
          'bg-' + color,
          'text-' + color,
          'mb-3 px-3 bg-opacity-25 rounded-full text-xs text-center py-1 font-bold'
        )}
      >
        {label1}
      </div>
      <div className="text-sm mt-1">{label2}</div>
      <div className="text-sm">${farm.tvl}</div>
      <a
        href={buttonLink}
        className="w-full mt-3 py-1 text-center border rounded-xl text-high-emphesis border-transparent border-gradient-r-blue-pink-dark-900"
      >
        {button}
      </a>
    </div>
  )
}

export default TokenFarmCard
