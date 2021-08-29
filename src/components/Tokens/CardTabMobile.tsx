import React from 'react'
import { classNames } from '../../functions'

function CardTabMobile({ className, tabs }: any) {
  return (
    <div className={classNames('w-full rounded bg-dark-800 flex h-[48px] relative mb-3', className)}>
      <div className="flex-1 rounded flex justify-center items-center text-high-emphesis border border-transparent border-gradient-r-blue-pink-dark-800">
        {tabs[0]}
      </div>
      <div className="flex-1 flex justify-center items-center text-secondary">{tabs[1]}</div>
    </div>
  )
}

export default CardTabMobile
