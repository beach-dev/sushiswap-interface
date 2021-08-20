import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { classNames } from '../../../functions'

import Image from 'next/image'

import { mockData } from './chartMockData'
import { createChart } from 'lightweight-charts'

function TokenChart({}) {
  const chartRef = useRef()

  useEffect(() => {
    const chart = createChart(chartRef.current, {
      width: 750,
      height: 300,
      layout: {
        textColor: '#d1d4dc',
        backgroundColor: 'transparent',
      },
      rightPriceScale: {
        visible: false,
      },
      leftPriceScale: {
        visible: false,
      },
      timeScale: {
        visible: false,
      },
      crosshair: {
        horzLine: {
          visible: false,
        },
        vertLine: {
          visible: false,
        },
      },
      grid: {
        vertLines: {
          color: 'rgba(42, 46, 57, 0)',
        },
        horzLines: {
          color: 'rgba(42, 46, 57, 0)',
        },
      },
    })
    const lineSeries = chart.addLineSeries({
      color: '#27B0E6',
      lineWidth: 2,
      priceLineVisible: false,
    })
    lineSeries.setData(mockData)

    const ro = new ResizeObserver((entries, observer) => {
      if (entries && entries.length > 0) {
        const { left, top, width, height } = entries[0].contentRect
        chart.resize(width, 300)
      }
    })
    ro.observe(document.querySelector('#chartDiv'))
  }, [])

  return <div id="chartDiv" className="w-full" ref={chartRef}></div>
}

export default TokenChart