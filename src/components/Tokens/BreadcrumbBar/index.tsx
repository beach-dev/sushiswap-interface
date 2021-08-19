import React from 'react'
import { classNames } from '../../../functions'

function BreadcrumbBar({ crumbs, links }: any) {
  return (
    <div className="flex relative w-full bg-dark-900 bg-gradient-to-r from-transparent-blue to-transparent-pink h-10 px-5">
      <div className="w-full max-w-7xl m-auto">
        <div className="text-sm">
          <div className="inline">Tokens</div>
          {crumbs.map((crumb, index) => (
            <div key={index} className="inline">
              <div className="inline ml-2">{'>'}</div>
              <a
                href={links[index]}
                className={classNames('inline ml-2', index == crumbs.length - 1 ? 'text-white text-base' : null)}
              >
                {crumb}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BreadcrumbBar
