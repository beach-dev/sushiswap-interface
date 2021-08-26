import React from 'react'
import { classNames } from '../../functions'

function CardTab({ className, tabs }: any) {
  return (
    <div className={classNames('w-full h-[48px] relative', className)}>
      <div style={{ width: '52%', position: 'absolute', zIndex: 2 }}>
        <svg
          width="100%"
          height="48"
          viewBox="0 0 158 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 10C0 4.47715 4.47715 0 10 0H143.988C149.109 0 153.403 3.86977 153.934 8.96394L158 48H0V10Z"
            fill="#202231"
          />
        </svg>
        <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center">
          <div className="text-high-emphesis mt-1">{tabs[0]}</div>
        </div>
      </div>
      <div style={{ width: '52%', position: 'absolute', right: 0 }}>
        <svg
          width="100%"
          height="48"
          viewBox="0 0 158 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M158 10C158 4.47715 153.523 0 148 0H14.0124C8.8907 0 4.59689 3.86977 4.06625 8.96394L0 48H158V10Z"
            fill="#202231"
          />
          <path
            d="M158 10C158 4.47715 153.523 0 148 0H14.0124C8.8907 0 4.59689 3.86977 4.06625 8.96394L0 48H158V10Z"
            fill="url(#paint0_linear)"
            fillOpacity="0.3"
          />
          <path
            d="M158 10C158 4.47715 153.523 0 148 0H14.0124C8.8907 0 4.59689 3.86977 4.06625 8.96394L0 48H158V10Z"
            fill="black"
            fillOpacity="0.05"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="-6.13016e-07"
              y1="23.5932"
              x2="79"
              y2="23.5932"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center">
          <div className="text-secondary mt-1">{tabs[1]}</div>
        </div>
      </div>
    </div>
  )
}

export default CardTab
