import React from 'react'
import { classNames } from '../../../functions'

function TokensTab({ className, defaultTab }: any) {
  const tabs = [
    {
      title: 'Overview',
      path: '/tokens',
    },
    {
      title: 'Liquidity',
      path: '/tokens/liquidity',
    },
    {
      title: 'Farming',
      path: '/tokens/farming',
    },
    {
      title: 'Lend',
      path: '#',
    },
    {
      title: 'Borrow',
      path: '#',
    },
    {
      title: 'Auction',
      path: '#',
    },
  ]

  return (
    <div className={classNames(className, 'relative w-full h-16 px-5 border-b border-t border-dark-700')}>
      <div className="lg:grid lg:grid-cols-12 max-w-7xl m-auto h-full">
        <div className="col-span-7 flex h-full">
          {tabs.map((tab, index) => (
            <div key={index} className="flex-1 flex h-full">
              <div className="flex flex-col">
                <a href={tab.path} className={classNames('flex-1 pt-5', index == defaultTab ? 'text-white' : null)}>
                  {tab.title}
                  {index == 5 && <div className="text-green inline ml-2">Live</div>}
                </a>
                {index == defaultTab && <div className="h-2 w-16 bg-dark-700"></div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TokensTab
