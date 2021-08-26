import React from 'react'
import { ArrowUpIcon } from '@heroicons/react/outline'
import { classNames } from '../../../functions'

function TokenPairListHeader({ columns }: any) {
  return (
    <div className="flex space-x-2 w-full items-center h-16 text-sm text-secondary border-b border-dark-800">
      {columns.map((column, i) => (
        <div key={i} className={classNames('flex-1', i == 0 ? 'text-left' : 'text-right')}>
          {column}
        </div>
      ))}
      <div className="w-40"></div>
    </div>
  )
}

export default TokenPairListHeader
