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

import SwapCard from '../../../components/Tokens/SwapCard/SwapCard'

import TokenPairListHeader from '../../../components/Tokens/TokenPairListHeader'
import TokenPairListRow from '../../../components/Tokens/TokenPairListRow'
import { ViewGridIcon, ViewListIcon } from '@heroicons/react/outline'
import TokenFarmCard from '../../../components/Tokens/TokenFarmCard'
import ActionBar from '../../../components/Tokens/ActionBar'

export default function Farming() {
  const tokenInfo = {
    symbol: 'LCRX',
    farms: [
      {
        tokenPair: {
          token1: 'LCRX',
          tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
          token2: 'WETH',
          tokenImage2: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/usdt_ruhjzx.png',
        },
        apy: '22.27',
        tvl: '4,200.01',
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
      },
    ],
    allFarms: [
      {
        tokenPair: {
          token1: 'LCRX',
          tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
          token2: 'WETH',
          tokenImage2: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/usdt_ruhjzx.png',
        },
        apy: '22.27',
        tvl: '4,200.01',
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
      <TokensTab className="hidden lg:block" defaultTab="2" />
      {/* header - desktop */}
      <div className="hidden lg:block w-full px-3 md:px-6 lg:px-10 bg-tokens_title_bg bg-opacity-25">
        <div className="lg:grid lg:grid-cols-12 max-w-7xl mx-auto">
          <div className="lg:col-span-7 flex flex-col py-8 ">
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

      {/* header - mobile */}
      <div className="block lg:hidden px-3 mt-8">
        <div className="text-high-emphesis font-bold text-2xl">{tokenInfo.symbol} Yield Farms</div>
        <div className="mt-5 ml-1 text-primary">Earn reward tokens by farming liquidity or lending positions.</div>
      </div>

      {/* body */}
      <div className="relative px-3 md:px-6 lg:px-10 w-full pt-10">
        <div className="lg:grid lg:grid-cols-12 max-w-7xl m-auto h-full">
          <div className="lg:col-span-7 flex flex-col h-full">
            {/* Your LCRX Farms */}
            <div className="w-full">
              <div className="flex space-x-1">
                <div className="flex-1 text-xl text-white font-medium">Your {tokenInfo.symbol} Farms:</div>
                <ViewListIcon className="block lg:hidden w-[25px] h-[25px]" />
                <ViewGridIcon className="block lg:hidden w-[25px] h-[25px]" />
              </div>
              <div className="hidden lg:block">
                <TokenPairListHeader columns={['Name & Type', 'APY', 'Your Investment']} />
                <div className="flex-col space-y-2">
                  {tokenInfo.farms.map((pair, i) => (
                    <TokenPairListRow
                      key={i}
                      tokenPair={pair.tokenPair}
                      apy={pair.apy}
                      tvl={pair.tvl}
                      button="Manage"
                      buttonLink="/tokens/farming/lcrx_weth"
                    />
                  ))}
                </div>
              </div>

              <div className="block lg:hidden flex flex-nowrap space-x-3 overflow-x-auto py-2">
                {tokenInfo.farms.map((farm, i) => (
                  <TokenFarmCard
                    key={i}
                    farm={farm}
                    label1="Liquidity Farm"
                    label2="Your Investment"
                    color="blue"
                    button="Manage"
                    buttonLink="/tokens/farming/lcrx_weth"
                  />
                ))}
              </div>
            </div>

            {/* Available Farms */}
            <div className="w-full mt-10">
              <div className="flex space-x-1">
                <div className="flex-1 text-xl text-white font-medium">Availabe Farms</div>
                <ViewListIcon className="block lg:hidden w-[25px] h-[25px]" />
                <ViewGridIcon className="block lg:hidden w-[25px] h-[25px]" />
              </div>
              <div className="hidden lg:block">
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

              <div className="block lg:hidden flex flex-nowrap space-x-3 overflow-x-auto py-2">
                {tokenInfo.allFarms.map((farm, i) => (
                  <TokenFarmCard
                    key={i}
                    farm={farm}
                    label1="Lending Farm"
                    label2="TVL"
                    color="pink"
                    button="Invest"
                    buttonLink="#"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative w-80 h-[420px] mx-auto mt-10 lg:-mt-72 bg-dark-900 rounded">
              <div className="absolute w-full h-full bg-gradient-to-r from-blue to-pink opacity-10"></div>
              <div className="w-full h-full flex items-center justify-center px-10 text-center text-secondary">
                Please select a farm to get started
              </div>
            </div>
          </div>
        </div>
      </div>
      <ActionBar />
    </Container>
  )
}
