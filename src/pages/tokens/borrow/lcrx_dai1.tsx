import Container from '../../../components/Container'
import Head from 'next/head'
import BreadcrumbBar from '../../../components/Tokens/BreadcrumbBar'
import TokensTab from '../../../components/Tokens/TokensTab'
import Image from 'next/image'

import { QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { socialsPlaceholder } from '../../../components/SocialPlaceholder'
import { token } from '@sushiswap/sushi-data/typings/exchange'
import TokenArticle from '../../../components/Tokens/TokenArticle/TokenArticle'
import RelatedListItem from '../../../components/Tokens/RelatedListItem'
import TokenValueRow from '../../../components/Tokens/TokenValueRow'

import { useState } from 'react'
import { classNames } from '../../../functions'

import BorrowCard from '../../../components/Tokens/BorrowCard/BorrowCard'

import TokenPairListHeader from '../../../components/Tokens/TokenPairListHeader'
import TokenPairListRow from '../../../components/Tokens/TokenPairListRow'
import DoubleGlowShadow from '../../../components/DoubleGlowShadow'
import { pool } from '@sushiswap/sushi-data/typings/masterchef'

import TokenProgressBar from '../../../components/Tokens/TokenProgressBar/TokenProgressBar'
import CollateralCard from '../../../components/Tokens/CollateralCard/CollateralCard'
import TokenCircleChart from '../../../components/Tokens/TokenCircleChart/TokenCircleChart'
import MarketInfoItem from '../../../components/Tokens/MarketInfoItem/MarketInfoItem'
import CollateralCardSimple from '../../../components/Tokens/CollateralCard/CollateralCardSimple'

export default function LCRX_DAI_BORROW1() {
  const poolInfo = {
    tokenPair: {
      token1: 'LCRX',
      tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
      token2: 'DAI',
      tokenImage2: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/dai_mtnvvc.png',
    },
    apy: '22.27',
    collateral: '1,700.00',
    collateralUSDC: '1,700.02',
    borrowLimit: '0',
    borrowed: '100.00',
    borrowedUSDC: '420.03',
    availableLiquidity: '7,620.56',
    availableLiquidityUSDC: '15,678.90',
    availablePercent: '75',
    totalBorrowed: '1,234.56',
    totalBorrowedUSDC: '5,678.90',
    totalBorrowedPercent: '25',
    loanToValue: '75',
    totalDeposited: '8,864.12',
    totalDepositedUSDC: '21,358.80',
    marketHealth: '211',
    availableToBorrow: '8,317.034',
    depositedCollateral: '597.0',
  }

  const token1 = {
    symbol: 'LCRX',
    balance: '518.392837',
    usdc: '0',
    imageUrl: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629937744/lcrx_big_yllpsp.png',
  }

  const token2 = {
    symbol: 'DAI',
    balance: '5,000.00',
    usdc: '0',
    imageUrl: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/dai_mtnvvc.png',
  }

  const tokenPair = () => poolInfo.tokenPair.token1 + '/' + poolInfo.tokenPair.token2

  return (
    <Container id="tokens-page" maxWidth="full">
      <Head>
        <title>Tokens | Sushi</title>
        <meta key="description" name="description" content="SushiSwap tokens." />
      </Head>
      <BreadcrumbBar crumbs={['LCRX', 'Borrow', tokenPair()]} links={['/tokens', '/tokens/borrow', '#']} />
      <TokensTab className="hidden sm:block" defaultTab="4" />
      <div className="w-full px-3 md:px-6 lg:px-10 bg-tokens_title_bg bg-opacity-25">
        <div className="lg:grid lg:grid-cols-12 max-w-7xl mx-auto">
          <div className="lg:col-span-7 flex flex-col py-8 ">
            <div className="text-high-emphesis font-bold text-2xl">
              Borrow {poolInfo.tokenPair.token1} with {poolInfo.tokenPair.token2}
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
                  <div className="flex space-x-1 text-white text-sm">
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
                <div>Borrow APY</div>
                <div className="text-white font-medium text-2xl">{poolInfo.apy}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative px-3 md:px-6 lg:px-10 w-full pt-10">
        <div className="lg:grid lg:grid-cols-12 max-w-7xl m-auto h-full">
          <div className="lg:col-span-7 flex flex-col h-full text-secondary">
            {/* Your Information */}
            <div className="grid grid-cols-2 gap-8 border-b border-dark-800">
              <CollateralCardSimple token={token2} title="Collateral" />
              <CollateralCardSimple token={token1} title="Borrowed" />
            </div>
            <div className="flex space-x-5 items-center my-3">
              <div className="text-high-emphesis">Borrow Limit</div>
              <TokenProgressBar className="flex-1" percentage={poolInfo.borrowLimit} />
            </div>

            {/* Market Information */}

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
              <BorrowCard className="mx-auto mt-10 lg:-mt-64" token={token1} />
            </DoubleGlowShadow>
          </div>
        </div>
      </div>
    </Container>
  )
}
