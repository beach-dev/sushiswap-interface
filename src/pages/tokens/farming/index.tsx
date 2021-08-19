import Container from '../../../components/Container'
import Head from 'next/head'
import BreadcrumbBar from '../../../components/Tokens/BreadcrumbBar'
import TokensTab from '../../../components/Tokens/TokensTab'
import Image from 'next/image'

import { ArrowUpIcon } from '@heroicons/react/outline'
import { socialsPlaceholder } from '../../../components/SocialPlaceholder'
import { token } from '@sushiswap/sushi-data/typings/exchange'
import TokenArticle from '../../../components/Tokens/TokenArticle'
import RelatedListItem from '../../../components/Tokens/RelatedListItem'
import TokenValueRow from '../../../components/Tokens/TokenValueRow'

import { useState } from 'react'
import { classNames } from '../../../functions'

import SwapCard from '../../../components/Tokens/SwapCard/SwapCard'

import TokenPairListHeader from '../../../components/Tokens/TokenPairListHeader'
import TokenPairListRow from '../../../components/Tokens/TokenPairListRow'

export default function Farming() {
  const tokenInfo = {
    symbol: 'LCRX',
    farms: [
      {
        tokenPair: {
          token1: 'LCRX',
          tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629231893/lcrx_kcipbc.png',
          token2: 'WETH',
          tokenImage2: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629231893/usdt_evcmww.png',
        },
        apy: '22.27',
        tvl: '4,200.01',
      },
      {
        tokenPair: {
          token1: 'LCRX',
          tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629231893/lcrx_kcipbc.png',
          token2: 'USDC',
          tokenImage2: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629231893/usdt_evcmww.png',
        },
        apy: '22.27',
        tvl: '4,200.01',
      },
    ],
    allFarms: [
      {
        tokenPair: {
          token1: 'LCRX',
          tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629231893/lcrx_kcipbc.png',
          token2: 'WETH',
          tokenImage2: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629231893/usdt_evcmww.png',
        },
        apy: '22.27',
        tvl: '4,200.01',
      },
      {
        tokenPair: {
          token1: 'LCRX',
          tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629231893/lcrx_kcipbc.png',
          token2: 'USDC',
          tokenImage2: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629231893/usdt_evcmww.png',
        },
        apy: '22.27',
        tvl: '4,200.01',
      },
    ],
  }

  return (
    <Container id="tokens-page" maxWidth="full">
      <Head>
        <title>Tokens | Sushi</title>
        <meta key="description" name="description" content="SushiSwap tokens." />
      </Head>
      <BreadcrumbBar crumbs={['LCRX', 'Farming']} links={['/tokens', '#']} />
      <TokensTab defaultTab="2" />
      <div className="w-full bg-tokens_title_bg bg-opacity-25">
        <div className="grid grid-cols-12 max-w-7xl mx-auto">
          <div className="col-span-7 flex flex-col py-8 ">
            <div className="text-high-emphesis font-bold text-2xl">{tokenInfo.symbol} Yield Farms</div>
            <div className="mt-5">Earn reward tokens by farming liquidity or lending positions.</div>
            <div className="mt-5">
              <button className="px-5 py-1 bg-gradient-to-r rounded-lg from-blue to-pink text-high-emphesis">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full px-10 pt-10">
        <div className="grid grid-cols-12 max-w-7xl m-auto h-full">
          <div className="col-span-7 flex flex-col h-full">
            {/* Your LCRX Farms */}
            <div className="w-full">
              <div className="text-xl text-white font-medium">Your {tokenInfo.symbol} Liquidity:</div>
              <TokenPairListHeader columns={['Name & Type', 'APY', 'Your Investment']} />
              <div className="flex-col space-y-2">
                {tokenInfo.farms.map((pair, i) => (
                  <TokenPairListRow
                    key={i}
                    tokenPair={pair.tokenPair}
                    apy={pair.apy}
                    tvl={pair.tvl}
                    button="Manage"
                    buttonLink="/tokens/liquidity/lcrx_weth"
                  />
                ))}
              </div>
            </div>

            {/* Available Farms */}
            <div className="w-full mt-10">
              <div className="text-xl text-white font-medium">Top Moving Pairs</div>
              <TokenPairListHeader columns={['Name & Type', 'APY', 'TVL']} />
              <div className="flex-col space-y-2">
                {tokenInfo.allFarms.map((pair, i) => (
                  <TokenPairListRow
                    key={i}
                    tokenPair={pair.tokenPair}
                    apy={pair.apy}
                    tvl={pair.tvl}
                    button="Invest"
                    buttonLink="#"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <div className="relative w-80 h-[420px] mx-auto -mt-72 bg-dark-900 rounded">
              <div className="absolute w-full h-full bg-gradient-to-r from-blue to-pink opacity-10"></div>
              <div className="w-full h-full flex items-center justify-center px-10 text-center text-secondary">
                Please select a farm to get started
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
