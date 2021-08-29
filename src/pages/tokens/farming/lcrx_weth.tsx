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

import FarmCard from '../../../components/Tokens/FarmCard/FarmCard'

import TokenPairListHeader from '../../../components/Tokens/TokenPairListHeader'
import TokenPairListRow from '../../../components/Tokens/TokenPairListRow'
import DoubleGlowShadow from '../../../components/DoubleGlowShadow'
import FarmCardMobile from '../../../components/Tokens/FarmCard/FarmCardMobile'
import ActionBar from '../../../components/Tokens/ActionBar'

export default function LCRX_WETH_FARMING() {
  const poolInfo = {
    tokenPair: {
      token1: 'LCRX',
      tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
      token2: 'WETH',
      tokenImage2: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766971/eth_msolwl.png',
    },
    apy: '22.27',
    tvl: '340,910,740.72',
    rewards: '22,334',
    poolShare: '0',
    token1Deposit: 0,
    token1DepositUSDC: 0,
    token2Deposit: 0,
    token2DepositUSDC: 0,
    token1Tvl: '18,900,000',
    token1TvlUSDC: '172,907,800',
    token2Tvl: '75,330',
    token2TvlUSDC: '172,508,713.20',
    slpStaked: '1,0000,000',
    earnings: '0',
    earningsUSDC: '0',
    slpTokens: '0',
    sushiImage: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629767545/sushi_pi2uke.png',
  }

  const token1 = {
    symbol: 'LCRX',
    balance: '518.392837',
    usdc: '0',
    imageUrl: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
  }

  const token2 = {
    symbol: 'WETH',
    balance: '5,000.00',
    usdc: '0',
    imageUrl: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766971/eth_msolwl.png',
  }

  const slpToken = {
    symbol: 'LCRX/WETH SLP TOKEN',
    balance: '10.34123',
    usdc: '0',
    imageUrl: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1630095807/slp_ht5ln8.png',
  }

  const tokenPair = () => poolInfo.tokenPair.token1 + '/' + poolInfo.tokenPair.token2

  return (
    <Container id="tokens-page" maxWidth="full">
      <Head>
        <title>Tokens | Sushi</title>
        <meta key="description" name="description" content="SushiSwap tokens." />
      </Head>
      <BreadcrumbBar crumbs={['LCRX', 'Farming', tokenPair()]} links={['/tokens', '/tokens/farming', '#']} />
      <TokensTab className="hidden sm:block" defaultTab="2" />

      {/* header -desktop */}
      <div className="hidden lg:block w-full px-3 md:px-6 lg:px-10 bg-tokens_title_bg bg-opacity-25">
        <div className="lg:grid lg:grid-cols-12 max-w-7xl mx-auto">
          <div className="lg:col-span-7 flex flex-col py-8 ">
            <a href="/tokens/farming" className="text-blue text-sm">
              Back to LCRX Farms
            </a>
            <div className="mt-5 flex space-x-5">
              <div className="flex-1 flex">
                <div className="z-10 flex items-center">
                  <Image src={poolInfo.tokenPair.tokenImage1} width={40} height={40} />
                </div>
                <div className="-ml-1 flex items-center">
                  <Image src={poolInfo.tokenPair.tokenImage2} width={40} height={40} />
                </div>
                <div className="ml-2 flex flex-col justify-center">
                  <div className="text-white text-xl">{tokenPair()}</div>
                  <div className="text-secondary text-xs">Liquidity Farm</div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div>APY (Annualized)</div>
                <div className="text-white font-medium text-2xl">{poolInfo.apy}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile header */}
      <div className="block lg:hidden flex items-center mx-3 mt-8 border-b border-dark-800 pb-5">
        <div className="z-10 flex items-center">
          <Image src={poolInfo.tokenPair.tokenImage1} width={50} height={50} />
        </div>
        <div className="-ml-1 flex items-center">
          <Image src={poolInfo.tokenPair.tokenImage2} width={50} height={50} />
        </div>
        <div className="ml-5 flex flex-col justify-center">
          <div className="text-white text-xl">{tokenPair()}</div>
          <div className="text-secondary text-xs">Liquidity Farm</div>
        </div>
      </div>
      <div className="block lg:hidden flex mx-3 mt-8 border-b border-dark-800 pb-5">
        <div className="flex-1">
          <div>APY (Annualized)</div>
          <div className="text-high-emphesis text-xl">{poolInfo.apy}%</div>
          <div className="text-secondary text-xs">Including Fees</div>
        </div>
        <div className="flex-1">
          <div>Total Value Locked</div>
          <div className="text-high-emphesis text-xl">${poolInfo.tvl}</div>
          <div className="text-secondary text-xs">{poolInfo.slpStaked} SLP Market Staked</div>
        </div>
      </div>

      <div className="relative px-3 md:px-6 lg:px-10 w-full pt-6 lg:pt-10">
        <div className="lg:grid lg:grid-cols-12 max-w-7xl m-auto h-full">
          <div className="lg:col-span-7 flex flex-col h-full text-secondary">
            <div className="hidden lg:grid lg:grid-cols-3 gap-x-2 gap-y-1 pb-5 border-b border-dark-800">
              <div className="text-secondary text-lg">Total Value Locked</div>
              <div className="text-secondary text-lg">Rewards</div>
              <div></div>

              <div className="text-high-emphesis text-xl">${poolInfo.tvl}</div>
              <div className="flex space-x-2 items-center">
                <Image src={poolInfo.sushiImage} width={20} height={20} />
                <div>{poolInfo.rewards} SUSHI/day</div>
              </div>
            </div>

            <div className="hidden mt-10 lg:grid lg:grid-cols-3 gap-x-2 gap-y-4 pb-5 border-b border-dark-800">
              <div className="text-high-emphesis text-xl">Your Deposits</div>
              <div className="flex space-x-2 items-center">
                <Image src={poolInfo.tokenPair.tokenImage1} width={20} height={20} />
                <div>
                  {poolInfo.token1Tvl} {poolInfo.tokenPair.token1}
                </div>
              </div>
              <div className="text-sm text-right">={poolInfo.token1TvlUSDC} USDC</div>

              <div></div>
              <div className="flex space-x-2">
                <Image src={poolInfo.tokenPair.tokenImage2} width={20} height={20} />
                <div>
                  {poolInfo.token2Tvl} {poolInfo.tokenPair.token2}
                </div>
              </div>
              <div className="text-sm text-right">={poolInfo.token2TvlUSDC} USDC</div>
            </div>

            <div className="hidden lg:block mt-10 grid grid-cols-3 gap-x-2 gap-y-4">
              <div className="text-high-emphesis text-xl">Earnings</div>
              <div className="flex space-x-2 items-center">
                <Image src={poolInfo.sushiImage} width={20} height={20} />
                <div>{poolInfo.earnings} SUSHI</div>
              </div>
              <div className="text-sm text-right">={poolInfo.earningsUSDC} USDC</div>
            </div>

            {/* mobile */}

            <div className="grid grid-cols-2 lg:hidden border-b border-dark-800 pb-5">
              <div className="text-high-emphesis text-xl">Rewards</div>
              <div className="flex space-x-2 items-center">
                <Image src={poolInfo.sushiImage} width={20} height={20} />
                <div>{poolInfo.rewards} SUSHI/day</div>
              </div>
            </div>

            <div className="mt-5 lg:hidden grid grid-cols-2 gap-3">
              <div className="text-high-emphesis text-xl">Your Deposits</div>
              <div className="text-right text-primary">{poolInfo.slpTokens} SLP</div>
              <div className="flex space-x-2">
                <div>
                  <Image src={poolInfo.tokenPair.tokenImage1} width={20} height={20} />
                </div>
                <div className="text-secondary">
                  {poolInfo.token1Deposit} {poolInfo.tokenPair.token1}
                </div>
              </div>
              <div className="text-sm text-right">={poolInfo.token1DepositUSDC} USDC</div>
              <div className="flex space-x-2">
                <div>
                  <Image src={poolInfo.tokenPair.tokenImage2} width={20} height={20} />
                </div>
                <div className="text-secondary">
                  {poolInfo.token2Deposit} {poolInfo.tokenPair.token2}
                </div>
              </div>
              <div className="text-sm text-right">={poolInfo.token2DepositUSDC} USDC</div>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-5">
            <DoubleGlowShadow className="mx-auto">
              <FarmCard className="mx-auto mt-10 lg:-mt-64" token1={token1} token2={token2} />
            </DoubleGlowShadow>
          </div>
          <div className="block lg:hidden w-full mt-8">
            <FarmCardMobile token={token1} token2={token2} slpToken={slpToken} />
          </div>
        </div>
      </div>
      <ActionBar />
    </Container>
  )
}
