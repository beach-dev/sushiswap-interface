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

import LiquidityCard from '../../../components/Tokens/LiquidityCard/LiquidityCard'

import TokenPairListHeader from '../../../components/Tokens/TokenPairListHeader'
import TokenPairListRow from '../../../components/Tokens/TokenPairListRow'
import DoubleGlowShadow from '../../../components/DoubleGlowShadow'

export default function Liquidity() {
  const tokenInfo = {
    symbol: 'LCRX',
    liquidities: [
      {
        tokenPair: {
          token1: 'LCRX',
          tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629231893/lcrx_kcipbc.png',
          token2: 'USDT',
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
    topMovingPairs: [
      {
        tokenPair: {
          token1: 'LCRX',
          tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629231893/lcrx_kcipbc.png',
          token2: 'USDT',
          tokenImage2: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629231893/usdt_evcmww.png',
        },
        apy: '22.27',
        tvl: '87,453,210',
      },
      {
        tokenPair: {
          token1: 'LCRX',
          tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629231893/lcrx_kcipbc.png',
          token2: 'WETH',
          tokenImage2: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629231893/eth_psxf7x.png',
        },
        apy: '21.38',
        tvl: '874,563',
      },
      {
        tokenPair: {
          token1: 'LCRX',
          tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629231893/lcrx_kcipbc.png',
          token2: 'USDC',
          tokenImage2: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629231893/usdc_l40vk7.png',
        },
        apy: '22.27',
        tvl: '87,453,210',
      },
    ],
  }

  const token1 = {
    symbol: 'LCRX',
    balance: '518.392837',
    usdc: '0',
    imageUrl: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629231893/lcrx_kcipbc.png',
  }

  return (
    <Container id="tokens-page" maxWidth="full">
      <Head>
        <title>Tokens | Sushi</title>
        <meta key="description" name="description" content="SushiSwap tokens." />
      </Head>
      <BreadcrumbBar crumbs={['LCRX', 'Liquidity']} links={['/tokens/swap', '#']} />
      <TokensTab defaultTab="1" />
      <div className="w-full bg-tokens_title_bg bg-opacity-25">
        <div className="grid grid-cols-12 max-w-7xl mx-auto">
          <div className="col-span-7 flex flex-col py-8 ">
            <div className="text-high-emphesis font-bold text-2xl">Manage {tokenInfo.symbol} Liquidity</div>
            <div className="mt-5">
              Liquidity providers earn a 0.25% fee on all trades proportional to their share of the pool. Fees are added
              to the pool, accrue in real time and can be claimed by withdrawing your liquidity. You can also stake
              certain liquidity positions in yield farms for more rewards.
            </div>
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
            {/* Your Liquidity */}
            <div className="w-full">
              <div className="text-xl text-white font-medium">Your {tokenInfo.symbol} Liquidity:</div>
              <TokenPairListHeader columns={['Token Pair', 'APY', 'Your Investment']} />
              <div className="flex-col space-y-2">
                {tokenInfo.liquidities.map((pair, i) => (
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

            {/* top moving pairs */}
            <div className="w-full mt-10">
              <div className="text-xl text-white font-medium">Top Moving Pairs</div>
              <TokenPairListHeader columns={['Token Pair', 'APY', 'TVL']} />
              <div className="flex-col space-y-2">
                {tokenInfo.topMovingPairs.map((pair, i) => (
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
            <DoubleGlowShadow>
              <LiquidityCard className="mx-auto -mt-80" token1={token1} />
            </DoubleGlowShadow>
          </div>
        </div>
      </div>
    </Container>
  )
}
