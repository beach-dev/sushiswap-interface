import Container from '../../../components/Container'
import Head from 'next/head'
import BreadcrumbBar from '../../../components/Tokens/BreadcrumbBar'
import TokensTab from '../../../components/Tokens/TokensTab'
import Image from 'next/image'

import { QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { socialsPlaceholder } from '../../../components/SocialPlaceholder'
import { token } from '@sushiswap/sushi-data/typings/exchange'
import TokenArticle from '../../../components/Tokens/TokenArticle'
import RelatedListItem from '../../../components/Tokens/RelatedListItem'
import TokenValueRow from '../../../components/Tokens/TokenValueRow'

import { useState } from 'react'
import { classNames } from '../../../functions'

import LendCard from '../../../components/Tokens/LendCard/LendCard'

import TokenPairListHeader from '../../../components/Tokens/TokenPairListHeader'
import TokenPairListRow from '../../../components/Tokens/TokenPairListRow'
import DoubleGlowShadow from '../../../components/DoubleGlowShadow'
import { pool } from '@sushiswap/sushi-data/typings/masterchef'

export default function LCRX_WETH_LEND() {
  const poolInfo = {
    tokenPair: {
      token1: 'LCRX',
      tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
      token2: 'USDT',
      tokenImage2: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/usdt_ruhjzx.png',
    },
    apy: '22.27',
    lentAmount: '0',
    lentAmountUSDC: '0',
    borrowed: '69',
    totalDeposited: '12,053.623',
    marketHealth: '211',
    availableToBorrow: '8,317.034',
    depositedCollateral: '597.0',
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

  const tokenPair = () => poolInfo.tokenPair.token1 + '/' + poolInfo.tokenPair.token2

  return (
    <Container id="tokens-page" maxWidth="full">
      <Head>
        <title>Tokens | Sushi</title>
        <meta key="description" name="description" content="SushiSwap tokens." />
      </Head>
      <BreadcrumbBar crumbs={['LCRX', 'Lend', tokenPair()]} links={['/tokens', '/tokens/lend', '#']} />
      <TokensTab className="hidden sm:block" defaultTab="3" />
      <div className="w-full px-3 md:px-6 lg:px-10 bg-tokens_title_bg bg-opacity-25">
        <div className="lg:grid lg:grid-cols-12 max-w-7xl mx-auto">
          <div className="lg:col-span-7 flex flex-col py-8 ">
            <div className="text-high-emphesis font-bold text-2xl">
              Lend {poolInfo.tokenPair.token1} to be borrowed with {poolInfo.tokenPair.token2}
            </div>
            <div className="mt-5 flex space-x-5">
              <div className="flex-1 flex">
                <div className="z-10 flex items-center">
                  <Image src={poolInfo.tokenPair.tokenImage1} width={40} height={40} />
                </div>
                <div className="-ml-1 flex items-center">
                  <Image src={poolInfo.tokenPair.tokenImage2} width={40} height={40} />
                </div>
                <div className="ml-2 flex flex-col justify-center text-xs">
                  <div className="flex space-x-1 text-white text-sn">
                    <div className="text-primary">Collateral: </div>
                    <div className="text-high-emphesis">{poolInfo.tokenPair.token2}</div>
                  </div>
                  <div className="flex space-x-1 text-secondary text-sm">
                    <div className="text-primary">Oracle: </div>
                    <div className="text-high-emphesis">Chainlink</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div>Supply APY</div>
                <div className="text-white font-medium text-2xl">{poolInfo.apy}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative px-3 md:px-6 lg:px-10 w-full pt-10">
        <div className="lg:grid lg:grid-cols-12 max-w-7xl m-auto h-full">
          <div className="lg:col-span-7 flex flex-col h-full text-secondary">
            <div className="grid grid-cols-3 gap-x-2 gap-y-1 pb-5 border-b border-dark-800">
              <div className="text-high-emphesis text-lg">You&apos;ve Lent:</div>
              <div className="flex space-x-2 items-center">
                <Image src={poolInfo.tokenPair.tokenImage1} width={20} height={20} />
                <div>
                  {poolInfo.lentAmount} {poolInfo.tokenPair.token1}
                </div>
              </div>
              <div className="text-sm text-right">={poolInfo.lentAmountUSDC} USDC</div>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-x-2 gap-y-8 pb-5">
              <div className="text-high-emphesis text-xl">Market Information</div>
              <div></div>
              <div></div>

              <div>
                <div>Borrowed</div>
                <div className="text-high-emphesis text-xl">{poolInfo.borrowed}%</div>
              </div>
              <div>
                <div className="font-bold">Total Deposited</div>
                <div className="flex space-x-2 items-center">
                  <Image src={poolInfo.tokenPair.tokenImage1} width={20} height={20} />
                  <div>
                    {poolInfo.totalDeposited} {poolInfo.tokenPair.token1}
                  </div>
                </div>
              </div>
              <div></div>

              <div>
                <div>Market Health</div>
                <div className="flex space-x-2 items-center text-high-emphesis text-xl">
                  <div>{poolInfo.marketHealth}%</div>
                  <QuestionMarkCircleIcon className="flex-none text-high-emphesis w-[15px] h-[15px]" />
                </div>
              </div>
              <div>
                <div className="font-bold">Available to Borrow</div>
                <div className="flex space-x-2 items-center">
                  <Image src={poolInfo.tokenPair.tokenImage1} width={20} height={20} />
                  <div>
                    {poolInfo.availableToBorrow} {poolInfo.tokenPair.token1}
                  </div>
                </div>
              </div>
              <div></div>

              <div>
                <div>BentoBox Strategy</div>
                <div className="flex space-x-2 items-center text-high-emphesis text-xl">
                  <div>None</div>
                  <QuestionMarkCircleIcon className="flex-none text-high-emphesis w-[15px] h-[15px]" />
                </div>
              </div>
              <div>
                <div className="font-bold">Deposited Collateral</div>
                <div className="flex space-x-2 items-center">
                  <Image src={poolInfo.tokenPair.tokenImage2} width={20} height={20} />
                  <div>
                    {poolInfo.depositedCollateral} {poolInfo.tokenPair.token2}
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <DoubleGlowShadow className="mx-auto">
              <LendCard className="mx-auto mt-10 lg:-mt-64" token={token1} />
            </DoubleGlowShadow>
          </div>
        </div>
      </div>
    </Container>
  )
}
