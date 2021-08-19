import React from 'react'
import { ArrowUpIcon } from '@heroicons/react/outline'

function TokenValueRow({
  caption,
  value,
  change,
  borderBottom = true,
}: {
  caption: any
  value: any
  change: any
  borderBottom?: boolean
}) {
  return (
    <div className="w-full h-14 flex items-center space-x-2 border-b border-dark-800">
      <div className="flex-1 text-secondary">{caption}</div>
      <div className="text-white">{`$${value}`}</div>
      <div className="flex px-2 py-1 rounded-full bg-green bg-opacity-25 text-green text-xs font-medium justify-center items-center">
        <ArrowUpIcon className="w-[12px] h-[12px]" />
        <div>{`${change}%`}</div>
      </div>
    </div>
  )
}

export default TokenValueRow
