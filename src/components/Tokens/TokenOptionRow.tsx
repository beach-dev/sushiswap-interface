import React from 'react'
import { classNames } from '../../functions'

import RadioButton from './RadioButton/RadioButton'

function TokenOptionRow({ className, title, description, selected, disabled = false }: any) {
  return (
    <div
      className={classNames(
        'flex space-x-2 py-2 px-2 lg:px-0',
        className,
        selected ? 'bg-dark-900 lg:bg-transparent' : null
      )}
    >
      <RadioButton selected={selected} disabled={disabled} />
      <div className="flex-1 flex flex-col">
        <div className={classNames(!disabled ? 'text-high-emphesis' : 'text-secondary')}>{title}</div>
        <div className={classNames('text-xs lg:text-sm', disabled ? 'text-low-emphesis' : 'text-secondary')}>
          {description}
        </div>
      </div>
    </div>
  )
}

export default TokenOptionRow
