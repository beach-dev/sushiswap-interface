import Container from '../../../components/Container'
import Head from 'next/head'
import BreadcrumbBar from '../../../components/Tokens/BreadcrumbBar'
import TokensTab from '../../../components/Tokens/TokensTab'
import Image from 'next/image'

import { ArrowUpIcon } from '@heroicons/react/outline'
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
import LiquidityCardMobile from '../../../components/Tokens/LiquidityCard/LiquidityCardMobile'
import ActionBar from '../../../components/Tokens/ActionBar'

export default function LCRX_WETH_LIQUIDITY() {
  const liquidityInfo = {
    tokenPair: {
      token1: 'LCRX',
      tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
      token2: 'USDT',
      tokenImage2: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/usdt_ruhjzx.png',
    },
    apy: '22.27',
    tvl: '340,910,740.72',
    poolShare: '0',
    token1Deposit: 0,
    token1DepositUSDC: 0,
    token2Deposit: 0,
    token2DepositUSDC: 0,
    token1Tvl: '18,900,000',
    token1TvlUSDC: '172,907,800',
    token2Tvl: '75,330',
    token2TvlUSDC: '172,508,713.20',
    slpTokens: '0',
  }

  const token1 = {
    symbol: 'LCRX',
    balance: '518.392837',
    usdc: '0',
    imageUrl: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
  }

  const token2 = {
    symbol: 'USDT',
    balance: '5,000.00',
    usdc: '0',
    imageUrl: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/usdt_ruhjzx.png',
  }

  const tokenPair = () => liquidityInfo.tokenPair.token1 + '/' + liquidityInfo.tokenPair.token2

  return (
    <Container id="tokens-page" maxWidth="full">
      <Head>
        <title>Tokens | Sushi</title>
        <meta key="description" name="description" content="SushiSwap tokens." />
      </Head>
      <BreadcrumbBar crumbs={['LCRX', 'Liquidity', tokenPair()]} links={['/tokens', '/tokens/liquidity', '#']} />
      <TokensTab className="hidden lg:block" defaultTab="1" />

      {/* desktop header */}
      <div className="hidden lg:block w-full px-3 md:px-6 lg:px-10 bg-tokens_title_bg bg-opacity-25">
        <div className="lg:grid lg:grid-cols-12 max-w-7xl mx-auto">
          <div className="lg:col-span-7 flex flex-col py-8 ">
            <div className="text-high-emphesis font-bold text-2xl">Manage {tokenPair()} Liquidity</div>
            <div className="mt-5 flex space-x-5">
              <div className="flex-1 flex">
                <div className="z-10 flex items-center">
                  <Image src={liquidityInfo.tokenPair.tokenImage1} width={40} height={40} />
                </div>
                <div className="-ml-1 flex items-center">
                  <Image src={liquidityInfo.tokenPair.tokenImage2} width={40} height={40} />
                </div>
                <div className="ml-2 my-auto text-white text-xl">{tokenPair()}</div>
              </div>
              <div className="flex flex-col items-end">
                <div>APY (Annualized)</div>
                <div className="text-white font-medium text-2xl">{liquidityInfo.apy}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile header */}
      <div className="block lg:hidden flex items-center mx-3 mt-8 border-b border-dark-800 pb-5">
        <div className="z-10 flex items-center">
          <Image src={liquidityInfo.tokenPair.tokenImage1} width={40} height={40} />
        </div>
        <div className="-ml-1 flex items-center">
          <Image src={liquidityInfo.tokenPair.tokenImage2} width={40} height={40} />
        </div>
        <div className="mx-3 my-auto text-white text-xl">{tokenPair()}</div>
        <div className="px-3 bg-blue bg-opacity-25 rounded-full text-blue text-xs text-center py-1 ">
          Farm Available
        </div>
      </div>
      <div className="block lg:hidden flex mx-3 mt-8 border-b border-dark-800 pb-5">
        <div className="flex-1">
          <div>APY (Annualized)</div>
          <div className="text-high-emphesis text-2xl">{liquidityInfo.apy}%</div>
          <div className="text-secondary text-sm">Including Fees</div>
        </div>
        <div className="flex-1">
          <div>Your Pool Share</div>
          <div className="text-high-emphesis text-2xl">{liquidityInfo.poolShare}%</div>
          <div className="text-secondary text-sm">
            {liquidityInfo.slpTokens} {tokenPair()} SLP
          </div>
        </div>
      </div>

      {/* body */}
      <div className="relative px-3 md:px-6 lg:px-10 w-full pt-6 lg:pt-10">
        <div className="lg:grid lg:grid-cols-12 max-w-7xl m-auto h-full">
          <div className="lg:col-span-7 flex flex-col h-full text-secondary">
            <div className="hidden lg:grid grid-cols-3 gap-x-2 gap-y-4 pb-5 border-b border-dark-800">
              <div className="text-white font-medium text-xl">Your Pool Share</div>
              <div className="text-white font-medium text-xl">Your Deposits</div>
              <div></div>

              <div className="font-medium text-xl">{liquidityInfo.poolShare}%</div>
              <div className="flex space-x-2 items-center">
                <div>
                  <Image src={liquidityInfo.tokenPair.tokenImage1} width={20} height={20} />
                </div>
                <div>
                  {liquidityInfo.token1Deposit} {liquidityInfo.tokenPair.token1}
                </div>
              </div>
              <div className="text-sm text-right">={liquidityInfo.token1DepositUSDC} USDC</div>

              <div className="">{liquidityInfo.slpTokens} SLP Tokens</div>
              <div className="flex space-x-2">
                <div>
                  <Image src={liquidityInfo.tokenPair.tokenImage2} width={20} height={20} />
                </div>
                <div>
                  {liquidityInfo.token2Deposit} {liquidityInfo.tokenPair.token2}
                </div>
              </div>
              <div className="text-sm text-right">={liquidityInfo.token2DepositUSDC} USDC</div>
            </div>

            <div className="lg:hidden grid grid-cols-2 gap-3 border-b border-dark-800 pb-5">
              <div className="text-high-emphesis text-xl">Your Deposits</div>
              <div className="text-right text-primary">{liquidityInfo.slpTokens} SLP</div>
              <div className="flex space-x-2">
                <div>
                  <Image src={liquidityInfo.tokenPair.tokenImage1} width={20} height={20} />
                </div>
                <div className="text-secondary">
                  {liquidityInfo.token1Deposit} {liquidityInfo.tokenPair.token1}
                </div>
              </div>
              <div className="text-sm text-right">={liquidityInfo.token1DepositUSDC} USDC</div>
              <div className="flex space-x-2">
                <div>
                  <Image src={liquidityInfo.tokenPair.tokenImage2} width={20} height={20} />
                </div>
                <div className="text-secondary">
                  {liquidityInfo.token2Deposit} {liquidityInfo.tokenPair.token2}
                </div>
              </div>
              <div className="text-sm text-right">={liquidityInfo.token2DepositUSDC} USDC</div>
            </div>

            <div className="hidden lg:block mt-5 rounded-xl py-5 px-12 text-center bg-purple bg-opacity-20 text-high-emphesis text-sm">
              Did you know? <u>There’s a yield farm for this pool.</u> Stake your liquidity for SUSHI rewards.
            </div>

            <div className="hidden mt-10 lg:grid lg:grid-cols-3 gap-x-2 gap-y-4">
              <div className="">Total Value Locked</div>
              <div className="flex space-x-2 items-center">
                <div>
                  <Image src={liquidityInfo.tokenPair.tokenImage1} width={20} height={20} />
                </div>
                <div>
                  {liquidityInfo.token1Tvl} {liquidityInfo.tokenPair.token1}
                </div>
              </div>
              <div className="text-sm text-right">={liquidityInfo.token1TvlUSDC} USDC</div>

              <div className="-mt-3 text-white font-medium">${liquidityInfo.tvl}</div>
              <div className="flex space-x-2">
                <div>
                  <Image src={liquidityInfo.tokenPair.tokenImage2} width={20} height={20} />
                </div>
                <div>
                  {liquidityInfo.token2Tvl} {liquidityInfo.tokenPair.token2}
                </div>
              </div>
              <div className="text-sm text-right">={liquidityInfo.token2TvlUSDC} USDC</div>
            </div>

            <div className="lg:hidden mt-10 grid grid-cols-2 gap-y-3">
              <div className="text-high-emphesis text-xl">Total Value Locked</div>
              <div className="text-primary text-right my-auto">${liquidityInfo.tvl}</div>
              <div className="flex space-x-2 items-center">
                <div>
                  <Image src={liquidityInfo.tokenPair.tokenImage1} width={20} height={20} />
                </div>
                <div>
                  {liquidityInfo.token1Tvl} {liquidityInfo.tokenPair.token1}
                </div>
              </div>
              <div className="text-sm my-auto text-right">={liquidityInfo.token1TvlUSDC} USDC</div>

              <div className="flex space-x-2">
                <div>
                  <Image src={liquidityInfo.tokenPair.tokenImage2} width={20} height={20} />
                </div>
                <div>
                  {liquidityInfo.token2Tvl} {liquidityInfo.tokenPair.token2}
                </div>
              </div>
              <div className="text-sm my-auto text-right">={liquidityInfo.token2TvlUSDC} USDC</div>
            </div>

            <div className="mt-5 rounded-xl py-1.5 text-sm text-center text-white border border-transparent border-gradient-r-blue-pink-dark-1000">
              See more details on analytics.sushi.com
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-5">
            <DoubleGlowShadow className="mx-auto">
              <LiquidityCard className="mx-auto mt-10 lg:-mt-64" token1={token1} token2={token2} />
            </DoubleGlowShadow>
          </div>
          <div className="block lg:hidden w-full mt-8">
            <LiquidityCardMobile token1={token1} token2={token2} />
          </div>
        </div>
      </div>
      <ActionBar />
    </Container>
  )
}
