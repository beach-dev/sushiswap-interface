import React, { useState } from 'react'
import { classNames } from '../../functions'

import RadioButton from './RadioButton/RadioButton'
import TokenValueRow from './TokenValueRow'

function TokenStats({ className, stats }: any) {
  const [chartTimespan, setChartTimespan] = useState('1W')
  const chartTimespans = ['24H', '1W', '1M']

  return (
    <div className={classNames('lg:w-80 w-full mx-auto mt-8 flex flex-col', className)}>
      <div className="text-xl text-white mb-3">Token Stats</div>
      <TokenValueRow caption="Market Cap" value={stats.marketCap} change={stats.marketCapChange} />
      <TokenValueRow caption="Liquidity" value={stats.liquidity} change={stats.liquidityChange} />
      <TokenValueRow caption="Volume" value={stats.volume} change={stats.volumeChange} />
      <TokenValueRow caption="Fees" value={stats.fees} change={stats.feesChange} />
      <div className="mt-8 flex flex-row justify-center space-x-2">
        {chartTimespans.map((timespan, i) => (
          <button
            key={i}
            className={classNames(
              timespan === chartTimespan
                ? 'rounded-full border-blue border border-opacity-50 bg-blue bg-opacity-25 text-blue'
                : 'text-secondary',
              'flex-1 lg:flex-auto w-10'
            )}
            onClick={() => setChartTimespan(timespan)}
          >
            {timespan}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TokenStats
