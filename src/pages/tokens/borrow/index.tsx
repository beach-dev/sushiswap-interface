import Container from '../../../components/Container'
import Head from 'next/head'
import BreadcrumbBar from '../../../components/Tokens/BreadcrumbBar'
import TokensTab from '../../../components/Tokens/TokensTab'
import Image from 'next/image'

import { ExclamationCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { socialsPlaceholder } from '../../../components/SocialPlaceholder'
import { token } from '@sushiswap/sushi-data/typings/exchange'
import TokenArticle from '../../../components/Tokens/TokenArticle'
import RelatedListItem from '../../../components/Tokens/RelatedListItem'
import TokenValueRow from '../../../components/Tokens/TokenValueRow'

import { useState } from 'react'
import { classNames } from '../../../functions'

import VideoItem from '../../../components/Tokens/VideoItem'
import TokenPairListHeader from '../../../components/Tokens/TokenPairListHeader'
import TokenMarketsRow from '../../../components/Tokens/TokenMarketsRow'

export default function Borrow() {
  const tokenInfo = {
    symbol: 'LCRX',
    markets: [
      {
        tokenPair: {
          token1: 'LCRX',
          tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
          token2: 'WETH',
          tokenImage2: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766971/eth_msolwl.png',
        },
        apy: '37.55',
        borrowed: '34.5',
        availableSupply: '4,200.01',
      },
      {
        tokenPair: {
          token1: 'LCRX',
          tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
          token2: 'USDC',
          tokenImage2: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/usdt_ruhjzx.png',
        },
        apy: '21.27',
        borrowed: '4.20',
        availableSupply: '9,447',
      },
    ],
    activePositions: [
      {
        tokenPair: {
          token1: 'LCRX',
          tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
          token2: 'DAI',
          tokenImage2: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/dai_mtnvvc.png',
        },
        apy: '22.27',
        borrowLimit: '69',
        borrowed: '100',
      },
    ],
  }

  return (
    <Container id="tokens-page" maxWidth="full">
      <Head>
        <title>Tokens | Sushi</title>
        <meta key="description" name="description" content="SushiSwap tokens." />
      </Head>
      <BreadcrumbBar crumbs={['LCRX', 'Borrow']} links={['/tokens', '#']} />
      <TokensTab className="hidden sm:block" defaultTab="4" />
      <div className="w-full px-3 md:px-6 lg:px-10 bg-tokens_title_bg bg-opacity-25">
        <div className="lg:grid lg:grid-cols-12 max-w-7xl mx-auto">
          <div className="lg:col-span-7 flex flex-col py-8 ">
            <div className="text-high-emphesis font-bold text-2xl">Borrow {tokenInfo.symbol}</div>
            <div className="mt-5 font-bold">Lend your assets, earn yield with no impermanent loss.</div>
            <div className="">
              Isolated lending markets mitigate your risks as an asset lender. Know exactly what collateral is available
              to you in the event of counter party insolvency.
            </div>
            <div className="mt-5 flex space-x-5">
              <button className="px-5 py-1 bg-gradient-to-r rounded-lg from-blue to-pink text-high-emphesis">
                Learn More
              </button>
              <button className="px-5 py-1 rounded-lg border border-transparent border-gradient-r-blue-pink-dark-900 text-high-emphesis">
                Visit Kashi
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative px-3 md:px-6 lg:px-10 w-full pt-10">
        <div className="lg:grid lg:grid-cols-12 max-w-7xl m-auto h-full">
          <div className="lg:col-span-7 flex flex-col h-full">
            {/* Your Borrow Positions */}
            <div className="w-full">
              <div className="text-xl text-white font-medium">Your {tokenInfo.symbol} Borrow Positions:</div>
              <TokenPairListHeader columns={['Borrow Pair', 'APY', 'Borrow Limit', 'Borrowed']} />
              <div className="flex-col space-y-2">
                {tokenInfo.activePositions.map((pair, i) => (
                  <TokenMarketsRow
                    key={i}
                    tokenPair={pair.tokenPair}
                    apy={pair.apy}
                    borrowed={pair.borrowLimit}
                    availableSupply={pair.borrowed}
                    button="Manage"
                    buttonLink="/tokens/borrow/lcrx_dai"
                  />
                ))}
              </div>
            </div>

            {/* LCRX Borrow Markets */}
            <div className="w-full mt-10">
              <div className="text-xl text-white font-medium">{tokenInfo.symbol} Borrow Markets</div>
              <TokenPairListHeader columns={['Borrow Pair', 'APY', 'Borrowed', 'Availabe Supply']} />
              <div className="flex-col space-y-2">
                {tokenInfo.markets.map((pair, i) => (
                  <TokenMarketsRow
                    key={i}
                    tokenPair={pair.tokenPair}
                    apy={pair.apy}
                    borrowed={pair.borrowed}
                    availableSupply={pair.availableSupply}
                    button="Borrow"
                    buttonLink="/tokens/borrow/lcrx_dai1"
                  />
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="w-full flex items-center p-4 space-x-2 rounded-t bg-purple bg-opacity-20">
                <QuestionMarkCircleIcon className="flex-none text-purple w-[26px] h-[26px]" />
                <div className="text-primary font-bold">Why do I only borrow with certain assets?</div>
              </div>
              <div className="bg-dark-900 rounded-b p-6">
                <div className="text-high-emphesis text-sm">
                  With our lending platform, Kashi, lend markets are isolated to specific token pairs to mitigate the
                  risks of asset lenders. Markets are created by lenders based on their confidence in the assets they’re
                  lending for.
                </div>
                <div className="text-primary text-sm mt-3">
                  In order to protect the lending platform from negative price movements on disproportionately supplied
                  assets, lending markets are created by the community themselves. If you want to borrow with a certain
                  asset, you can either create a market yourself, wait for someone else to make it, or swap to an asset
                  with a borrow market available.
                </div>
                <div className="mt-5 flex space-x-5">
                  <button className="px-5 py-1 bg-gradient-to-r rounded-lg from-blue to-pink text-high-emphesis">
                    Learn More
                  </button>
                  <button className="px-5 py-1 rounded-lg border border-transparent border-gradient-r-blue-pink-dark-900 text-high-emphesis">
                    Visit Kashi
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative w-80 h-[420px] mx-auto mt-10 lg:-mt-80 bg-dark-900 rounded">
              <div className="absolute w-full h-full bg-gradient-to-r from-blue to-pink opacity-10"></div>
              <div className="w-full h-full flex items-center justify-center px-10 text-center text-secondary">
                Select a borrow market to get started.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
