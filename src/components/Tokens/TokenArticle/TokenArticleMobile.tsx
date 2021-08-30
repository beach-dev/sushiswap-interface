import React from 'react'
import { classNames } from '../../../functions'

import Image from 'next/image'

function TokenArticleMobile({ className, article }: any) {
  return (
    <div
      className={classNames(
        'w-[216px] h-[255px] flex-auto flex-grow-0 flex-shrink-0 flex flex-col items-start bg-dark-900 rounded overflow-hidden border border-dark-800',
        className
      )}
    >
      <Image src={article.imageUrl} width={216} height={119} objectFit="cover" />
      <div className="flex-1 p-4 flex flex-col">
        <div className="text-sm text-secondary mb-1">{article.date}</div>
        <div className="text-high-emphesis font-medium">{article.title}</div>
      </div>
    </div>
  )
}

export default TokenArticleMobile
