import React from 'react'
import { classNames } from '../../../functions'

import Image from 'next/image'

function RelatedListItem({ item }: { item: any }) {
  return (
    <div className="h-15 p-1 flex items-center space-x-3 rounded-full border border-dark-700">
      <Image src={item.imageUrl} width={40} height={40} objectFit="cover" />
      <div className="">{item.title}</div>
      <div className="w-3"></div>
    </div>
  )
}

export default RelatedListItem
