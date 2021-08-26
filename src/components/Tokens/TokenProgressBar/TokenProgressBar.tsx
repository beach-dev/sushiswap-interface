import React from 'react'
import { classNames } from '../../../functions'
import { BanIcon } from '@heroicons/react/outline'

function TokenProgressBar({ className, percentage, showDot = true }: any) {
  return (
    <div className={classNames('flex items-center space-x-2', className)}>
      <div className="flex-1 bg-dark-800 rounded-full h-[12px]">
        <div
          className="h-[12px] bg-gradient-to-r rounded-lg from-blue to-pink"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="text-white">{percentage}%</div>
      {showDot && (
        <div
          className={classNames(
            'rounded-full w-2 h-2',
            percentage < 30 ? 'bg-green' : percentage < 70 ? 'bg-yellow' : 'bg-red'
          )}
        ></div>
      )}
    </div>
  )
}

export default TokenProgressBar
