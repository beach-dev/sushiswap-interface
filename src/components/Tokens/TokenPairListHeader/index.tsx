import React from 'react'
import { ArrowUpIcon } from '@heroicons/react/outline'

function TokenPairListHeader({ columns }: any) {
  return (
    <div className="flex space-x-2 w-full items-center h-16 text-sm text-secondary border-b border-dark-800">
      <div className="text-left flex-1">{columns[0]}</div>
      <div className="text-right w-40">{columns[1]}</div>
      <div className="text-right w-40">{columns[2]}</div>
      <div className="w-40"></div>
    </div>
  )
}

export default TokenPairListHeader
