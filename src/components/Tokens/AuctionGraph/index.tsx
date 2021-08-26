import React from 'react'
import { classNames } from '../../../functions'

import Image from 'next/image'

function AuctionGraph({ dateFrom, dateTo, currentPrice }: any) {
  return (
    <div className="w-full h-[200px] px-8 border-b flex mt-10 mb-5" style={{ borderColor: '#1A2C70' }}>
      <div style={{ position: 'relative', width: 1, height: '100%', backgroundColor: '#1A2C70' }}>
        <div
          style={{
            borderRadius: 15,
            position: 'absolute',
            width: 14,
            height: 14,
            left: -7,
            top: 100,
            backgroundColor: '#40E22B',
          }}
        ></div>
      </div>
      <div style={{ position: 'relative', width: '95%', height: '100%' }}>
        <div
          style={{ position: 'absolute', left: 0, top: 105, height: 4, width: '100%', backgroundColor: '#40E22B' }}
        ></div>
        <div
          style={{ position: 'absolute', left: '100%', top: 20, height: 180, width: 1, backgroundColor: '#1A2C70' }}
        ></div>
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: 'column',
            bottom: 110,
            right: 10,
          }}
        >
          <div className="text-sm text-secondary">CURRENT PRICE:</div>
          <div className="text-sm text-high-emphesis">{currentPrice}</div>
        </div>
      </div>
      <div style={{ position: 'relative', width: '5%', height: '100%' }}>
        <div
          style={{ position: 'absolute', left: 0, top: 105, height: 4, width: '100%', backgroundColor: '#2E3348' }}
        ></div>
      </div>
      <div style={{ position: 'relative', width: 1, height: '100%', backgroundColor: '#1A2C70' }}>
        <div
          style={{
            borderRadius: 15,
            position: 'absolute',
            width: 14,
            height: 14,
            left: -7,
            top: 100,
            backgroundColor: '#40E22B',
          }}
        ></div>
      </div>
    </div>
  )
}

export default AuctionGraph
