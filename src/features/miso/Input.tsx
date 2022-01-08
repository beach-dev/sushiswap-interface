import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import Lottie from 'lottie-react'
import React from 'react'

import loadingCircle from '../../animation/loading-circle.json'
import Typography from '../../components/Typography'
import { escapeRegExp } from '../../functions'
import { classNames } from '../../functions/styling'

const digitRegex = RegExp(`^\\d*$`)
const decimalRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`)

export const Input = React.memo(
  ({
    label,
    value,
    type = 'text',
    onUserInput,
    placeholder,
    alert,
    hint,
    trailing,
    className,
    error,
    onAction,
    actionTitle,
    actionVisible,
    actionPending,
    padding = true,
    maxLength,
    icon,
    description,
    ...rest
  }: {
    label?: string
    value?: string | number
    type?: string
    onUserInput?: (input: string) => void
    alert?: string
    hint?: any
    trailing?: any
    error?: boolean
    onAction?: any
    actionTitle?: string
    actionVisible?: boolean
    actionPending?: boolean
    padding?: boolean
    maxLenngth?: any
    icon?: any
    description?: any
  } & Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'as'>) => {
    const { i18n } = useLingui()

    const enforcer = (nextUserInput: string) => {
      if (type === 'digit' && !digitRegex.test(escapeRegExp(nextUserInput))) return
      if (type === 'decimal' && !decimalRegex.test(escapeRegExp(nextUserInput))) return
      onUserInput(nextUserInput)
    }

    const [alertVisible, showAlert] = React.useState(false)

    return (
      <div className="mb-5">
        {label && <div className="text-xl text-primary">{i18n._(`${label}`)}</div>}
        <div className="flex flex-row w-full mt-3">
          <div className="flex-1">
            {description && <Typography className="mb-2 text-secondary">{i18n._(`${description}`)}</Typography>}

            {type !== 'hidden' && (
              <div className="relative flex items-center w-full px-3 py-2 border rounded bg-dark-900 border-dark-800">
                {icon && <div className="w-5 h-5 mr-3">{icon}</div>}
                {(type == 'digit' || type == 'decimal' || type == 'text') && (
                  <input
                    className={classNames(
                      error ? 'text-red' : value ? 'text-primary' : '',
                      'bg-transparent placeholder-low-emphesis flex-1'
                    )}
                    placeholder={i18n._(`${placeholder}`)}
                    value={value}
                    onChange={(e) => enforcer(e.target.value)}
                    color={error ? 'red' : ''}
                    onBlur={() => showAlert(false)}
                    onFocus={() => showAlert(true)}
                    {...rest}
                  />
                )}
                {type == 'textarea' && (
                  <div className="flex-1">
                    <textarea
                      className={classNames(
                        value ? 'text-primary' : null,
                        'bg-transparent outline-none h-24 placeholder-low-emphesis resize-none overflow-hidden w-full'
                      )}
                      placeholder={i18n._(`${placeholder}`)}
                      value={value}
                      onChange={(e) => enforcer(e.target.value)}
                      onBlur={() => showAlert(false)}
                      onFocus={() => showAlert(true)}
                      maxLength={maxLength}
                    />

                    {maxLength && (
                      <Typography className="text-right text-secondary">
                        {i18n._(`max ${maxLength} letters`)}
                      </Typography>
                    )}
                  </div>
                )}

                {trailing && <div className="ml-3 text-secondary">{trailing}</div>}
              </div>
            )}

            {hint && <div className="flex flex-row items-center mt-2">{hint}</div>}

            {alert && alertVisible && (
              <div className="flex flex-row items-center p-3 mt-2 rounded bg-purple bg-opacity-20 bg-">
                <ExclamationCircleIcon className="w-5 h-5 mr-2 text-purple" aria-hidden="true" />
                <Typography>{i18n._(`${alert}`)}</Typography>
              </div>
            )}
          </div>
          {padding && (
            <div className="ml-3 w-[200px]">
              {(actionVisible || actionPending) && (
                <Typography
                  className={classNames(
                    'w-[142px] px-4 py-2 cursor-pointer text-center text-high-emphesis rounded-md bg-gradient-to-r from-opaque-blue to-opaque-pink flex flex-row items-center justify-center',
                    actionPending ? 'cursor-not-allowed' : 'hover:from-blue hover:to-pink'
                  )}
                  onClick={!actionPending ? onAction : null}
                >
                  {actionPending && (
                    <div className="w-[12px] h-[12px] mr-3">
                      <Lottie animationData={loadingCircle} autoplay loop size={8} />
                    </div>
                  )}
                  {i18n._(`${actionTitle}`)}
                </Typography>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
