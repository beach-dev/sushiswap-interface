import React from 'react'
import { classNames } from '../../../functions'

import Image from 'next/image'

function TokenArticle({ className, article }: any) {
  return (
    <div
      className={classNames(
        'w-full h-30 mt-5 flex overflow-hidden rounded-xl border border-dark-800 bg-dark-900',
        className
      )}
    >
      <Image src={article.imageUrl} width={143} height={118} objectFit="cover" />
      <div className="flex-1 p-4 flex flex-col">
        <div className="text-xs text-secondary mb-1">{article.date}</div>
        <div className="text-high-emphesis font-medium">{article.title}</div>
        <div className="text-sm text-primary">{article.content}</div>
      </div>
    </div>
  )
}

export default TokenArticle
