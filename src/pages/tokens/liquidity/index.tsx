import Container from '../../../components/Container'
import Head from 'next/head'
import BreadcrumbBar from '../../../components/Tokens/BreadcrumbBar'
import TokensTab from '../../../components/Tokens/TokensTab'
import Image from 'next/image'

import { ArrowUpIcon, ViewGridIcon, ViewListIcon } from '@heroicons/react/outline'
import { socialsPlaceholder } from '../../../components/SocialPlaceholder'
import { token } from '@sushiswap/sushi-data/typings/exchange'
import TokenArticle from '../../../components/Tokens/TokenArticle/TokenArticle'
import RelatedListItem from '../../../components/Tokens/RelatedListItem'
import TokenValueRow from '../../../components/Tokens/TokenValueRow'

import { useState } from 'react'
import { classNames } from '../../../functions'

import LiquidityCard from '../../../components/Tokens/LiquidityCard/LiquidityCard'

import TokenPairListHeader from '../../../components/Tokens/TokenPairListHeader'
import TokenPairListRow from '../../../components/Tokens/TokenPairListRow'
import DoubleGlowShadow from '../../../components/DoubleGlowShadow'

import TokenLPCard from '../../../components/Tokens/TokenLPCard'
import ActionBar from '../../../components/Tokens/ActionBar'

export default function Liquidity() {
  const tokenInfo = {
    symbol: 'LCRX',
    liquidities: [
      {
        tokenPair: {
          token1: 'LCRX',
          tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
          token2: 'USDT',
          tokenImage2: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/usdt_ruhjzx.png',
        },
        apy: '22.27',
        tvl: '4,200.01',
        token1: '1.13',
        token2: '307.88',
      },
      {
        tokenPair: {
          token1: 'LCRX',
          tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
          token2: 'USDC',
          tokenImage2: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/usdt_ruhjzx.png',
        },
        apy: '22.27',
        tvl: '4,200.01',
        token1: '3.13',
        token2: '68.32',
      },
    ],
    topMovingPairs: [
      {
        tokenPair: {
          token1: 'LCRX',
          tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
          token2: 'USDT',
          tokenImage2: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/usdt_ruhjzx.png',
        },
        apy: '22.27',
        tvl: '87,453,210',
        token1: '1,873.13',
        token2: '1,892,354.33',
      },
      {
        tokenPair: {
          token1: 'LCRX',
          tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
          token2: 'WETH',
          tokenImage2: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766971/eth_msolwl.png',
        },
        apy: '21.38',
        tvl: '874,563',
        token1: '1,873.13',
        token2: '1,892,354.33',
      },
      {
        tokenPair: {
          token1: 'LCRX',
          tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
          token2: 'USDC',
          tokenImage2: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629231893/usdc_l40vk7.png',
        },
        apy: '22.27',
        tvl: '87,453,210',
        token1: '1,873.13',
        token2: '1,892,354.33',
      },
    ],
  }

  const token1 = {
    symbol: 'LCRX',
    balance: '518.392837',
    usdc: '0',
    imageUrl: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
  }

  return (
    <Container id="tokens-page" maxWidth="full">
      <Head>
        <title>Tokens | Sushi</title>
        <meta key="description" name="description" content="SushiSwap tokens." />
      </Head>
      <BreadcrumbBar crumbs={['LCRX', 'Liquidity']} links={['/tokens', '#']} />
      <TokensTab className="hidden lg:block" defaultTab="1" />

      {/* desktop header */}
      <div className="hidden lg:block w-full px-3 md:px-6 lg:px-10 bg-tokens_title_bg bg-opacity-25">
        <div className="lg:grid lg:grid-cols-12 max-w-7xl mx-auto">
          <div className="lg:col-span-7 flex flex-col py-8 ">
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

      {/* mobile header */}
      <div className="block lg:hidden px-3 mt-8">
        <div className="text-high-emphesis font-bold text-2xl">Manage {tokenInfo.symbol} Liquidity</div>
        <div className="mt-5 ml-1 text-primary">
          When you add liquidity, you will receive pool tokens representing your position. These tokens automatically
          earn fees proportional to your share of the pool, and can be redeemed at any time.
        </div>
      </div>

      {/* body */}
      <div className="relative px-3 md:px-6 lg:px-10 w-full pt-10">
        <div className="lg:grid lg:grid-cols-12 max-w-7xl m-auto h-full">
          <div className="lg:col-span-7 flex flex-col h-full">
            {/* Your Liquidity */}
            <div className="w-full">
              <div className="flex space-x-1">
                <div className="flex-1 text-xl text-white font-medium">Your {tokenInfo.symbol} Liquidity:</div>
                <ViewListIcon className="block lg:hidden w-[25px] h-[25px]" />
                <ViewGridIcon className="block lg:hidden w-[25px] h-[25px]" />
              </div>
              <div className="hidden lg:block">
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
              <div className="block lg:hidden flex flex-nowrap space-x-3 overflow-x-auto py-2">
                {tokenInfo.liquidities.map((liquidity, i) => (
                  <TokenLPCard
                    key={i}
                    liquidity={liquidity}
                    label1="Total Deposited"
                    button="Manage"
                    buttonLink="/tokens/liquidity/lcrx_weth"
                  />
                ))}
              </div>
            </div>

            {/* top moving pairs */}
            <div className="w-full mt-10">
              <div className="flex space-x-1">
                <div className="flex-1 text-xl text-white font-medium">Top Moving Pairs</div>
                <ViewListIcon className="block lg:hidden w-[25px] h-[25px]" />
                <ViewGridIcon className="block lg:hidden w-[25px] h-[25px]" />
              </div>
              <div className="hidden lg:block">
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
              <div className="block lg:hidden flex flex-nowrap space-x-3 overflow-x-auto py-2">
                {tokenInfo.topMovingPairs.map((pair, i) => (
                  <TokenLPCard key={i} liquidity={pair} label1="TVL" button="Invest" buttonLink="#" />
                ))}
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-5">
            <DoubleGlowShadow className="mx-auto">
              <LiquidityCard className="mx-auto mt-10 lg:-mt-80" token1={token1} />
            </DoubleGlowShadow>
          </div>
        </div>
      </div>
      <ActionBar />
    </Container>
  )
}
