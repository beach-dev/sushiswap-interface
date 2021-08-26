import React from 'react'
import Image from 'next/image'
import { classNames } from '../../../functions'

function VideoItem({ video }: any) {
  return (
    <div className="flex flex-col rounded w-[235px] h-[235px] bg-dark-900">
      <Image src={video.image} width={235} height={120} />
      <div className="mx-4 mt-3 font-bold text-secondary text-sm">{video.title}</div>
      <div className="mx-4 text-high-emphesis">{video.description}</div>
    </div>
  )
}

export default VideoItem
