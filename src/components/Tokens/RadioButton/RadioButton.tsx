import React from 'react'
import { classNames } from '../../../functions'
import { BanIcon } from '@heroicons/react/outline'

function RadioButton({ className, selected, disabled }: any) {
  return (
    <div className={classNames('m-1', className)}>
      {disabled && <BanIcon className="w-[24px] h-[24px] text-dark-800"></BanIcon>}
      {!disabled &&
        (selected ? (
          <div className="flex items-center justify-center w-[24px] h-[24px] bg-gradient-to-r from-blue to-pink rounded-full">
            <div className="w-[8px] h-[8px] bg-white rounded-full"></div>
          </div>
        ) : (
          <div className="w-[24px] h-[24px] bg-dark-800 rounded-full border border-dark-700"></div>
        ))}
    </div>
  )
}

export default RadioButton
