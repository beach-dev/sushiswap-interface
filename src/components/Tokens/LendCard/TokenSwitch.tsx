import React from 'react'
import { classNames } from '../../../functions'

function TokenSwitch({ options }: any) {
  return (
    <div className="flex space-x-2 items-center">
      <div className="text-high-emphesis text-sm">{options[0]}</div>
      <div className="rounded-full w-[40px] h-[20px] border-blue border border-opacity-50 bg-blue bg-opacity-25">
        <div className="ml-[1px] mt-[1px] rounded-full bg-high-emphesis w-[16px] h-[16px]"></div>
      </div>
      <div className="text-secondary text-sm">{options[1]}</div>
    </div>
  )
}

export default TokenSwitch
