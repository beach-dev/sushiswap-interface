import React from 'react'
import { classNames } from '../../../functions'
import Image from 'next/image'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

function TokenCircleChart({ className, token, percentage }: any) {
  return (
    <div className={classNames('relative rounded-full w-[140px] h-[140px]', className)}>
      <CircularProgressbar
        value={percentage}
        strokeWidth={4}
        styles={buildStyles({
          pathTransition: 'none',

          // Colors
          pathColor: `#f338c3`,
          trailColor: '#0993ec',
        })}
      />
      <div className="absolute left-[20px] top-[20px]">
        <Image src={token.imageUrl} width={100} height={100} />
      </div>
    </div>
  )
}

export default TokenCircleChart
