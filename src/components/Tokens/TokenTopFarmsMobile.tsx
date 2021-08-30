import React from 'react'
import { classNames } from '../../functions'
import Image from 'next/image'

function TokenTopFarmsMobile({ className, farms }: any) {
  return (
    <div className="w-full flex">
      <div className="w-[200px]">
        <div className="h-[40px] text-secondary border-b border-dark-800 flex items-center">Name &amp; Type</div>
        {farms.map((farm, i) => (
          <div key={i} className="w-full h-[60px] border-b border-dark-800 flex items-center">
            <div className="z-10 flex items-center">
              <Image src={farm.tokenPair.tokenImage1} width={25} height={25} />
            </div>
            <div className="-ml-1 flex items-center">
              <Image src={farm.tokenPair.tokenImage2} width={25} height={25} />
            </div>
            <div className="ml-2">
              <div className="text-high-emphesis text-lg">
                {farm.tokenPair.token1}/{farm.tokenPair.token2}
              </div>
              <div className="text-sm text-secondary">Lending Farm</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-nowrap space-x-3 space-x-0 overflow-x-auto">
        <div className="w-[120px] flex-auto flex-grow-1 flex-shrink-0">
          <div className="w-full h-[40px] text-secondary border-b border-dark-800 flex items-center justify-end">
            APY
          </div>
          {farms.map((farm, i) => (
            <div key={i} className="w-full h-[60px] border-b border-dark-800 flex items-center justify-end">
              {farm.apy}%
            </div>
          ))}
        </div>
        <div className="w-[120px] flex-auto flex-grow-1 flex-shrink-0">
          <div className="w-full h-[40px] text-secondary border-b border-dark-800 flex items-center justify-end">
            TVL
          </div>
          {farms.map((farm, i) => (
            <div key={i} className="w-full h-[60px] border-b border-dark-800 flex items-center justify-end">
              ${farm.tvl}
            </div>
          ))}
        </div>
        <div className="w-[120px] flex-auto flex-grow-1 flex-shrink-0">
          <div className="w-full h-[40px] border-b border-dark-800"></div>
          {farms.map((farm, i) => (
            <div key={i} className="w-full h-[60px] border-b border-dark-800 flex items-center justify-center">
              <a
                href={'/farming/lcrx_weth'}
                className="w-full w-[90px] py-1 text-center border rounded-xl text-high-emphesis border-transparent border-gradient-r-blue-pink-dark-1000"
              >
                Invest
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TokenTopFarmsMobile
