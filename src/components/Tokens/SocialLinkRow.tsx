import React from 'react'
import { classNames } from '../../functions'

function SocialLinkRow({ className, link }: any) {
  return (
    <div className={classNames('py-3 border-b border-dark-800 flex space-x-2', className)}>
      <div>{link.icon}</div>
      <div>{link.title}</div>
      <a className="text-right flex-1" href={link.href}>
        {link.linkTitle}
      </a>
    </div>
  )
}

export default SocialLinkRow
