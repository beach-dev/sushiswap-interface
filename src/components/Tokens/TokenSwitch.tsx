import React from 'react'
import { classNames } from '../../functions'

function TokenSwitch({ options, state, OnChange }: any) {
  return (
    <div className="flex space-x-2 items-center" onClick={OnChange}>
      <div className="text-high-emphesis text-sm">{options[0]}</div>
      {state == true ? (
        <div className="rounded-full w-[40px] h-[20px] border-blue border border-opacity-50 bg-blue bg-opacity-25">
          <div className="ml-[1px] mt-[1px] rounded-full bg-high-emphesis w-[16px] h-[16px]"></div>
        </div>
      ) : (
        <div className="rounded-full w-[40px] h-[20px] border-white border border-opacity-10 bg-dark-800">
          <div className="ml-[21px] mt-[1px] rounded-full bg-primary w-[16px] h-[16px]"></div>
        </div>
      )}
      <div className="text-secondary text-sm">{options[1]}</div>
    </div>
  )
}

export default TokenSwitch
