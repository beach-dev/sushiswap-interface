import Container from '../../../components/Container'
import Head from 'next/head'
import BreadcrumbBar from '../../../components/Tokens/BreadcrumbBar'
import TokensTab from '../../../components/Tokens/TokensTab'
import Image from 'next/image'

import { ExclamationCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { socialsPlaceholder } from '../../../components/SocialPlaceholder'
import { token } from '@sushiswap/sushi-data/typings/exchange'
import TokenArticle from '../../../components/Tokens/TokenArticle/TokenArticle'
import RelatedListItem from '../../../components/Tokens/RelatedListItem'
import TokenValueRow from '../../../components/Tokens/TokenValueRow'

import { useState } from 'react'
import { classNames } from '../../../functions'

import VideoItem from '../../../components/Tokens/VideoItem'
import TokenPairListHeader from '../../../components/Tokens/TokenPairListHeader'
import TokenMarketsRow from '../../../components/Tokens/TokenMarketsRow'

export default function Lend() {
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
        apy: '22.27',
        borrowed: '69',
        availableSupply: '4,200.01',
      },
      {
        tokenPair: {
          token1: 'LCRX',
          tokenImage1: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
          token2: 'USDC',
          tokenImage2: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/usdt_ruhjzx.png',
        },
        apy: '22.27',
        borrowed: '69',
        availableSupply: '4,200.01',
      },
    ],
    videos: [
      {
        title: 'TUTORIAL',
        description: 'Make Your Crypto Work Harder: Triple-Stack Yields with Kashi',
        image: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629786439/video1_jpox6o.png',
      },
      {
        title: 'TUTORIAL',
        description: 'Make Your Crypto Work Harder: Triple-Stack Yields with Kashi',
        image: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629786439/video1_jpox6o.png',
      },
      {
        title: 'TUTORIAL',
        description: 'Make Your Crypto Work Harder: Triple-Stack Yields with Kashi',
        image: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629786439/video1_jpox6o.png',
      },
      {
        title: 'TUTORIAL',
        description: 'Make Your Crypto Work Harder: Triple-Stack Yields with Kashi',
        image: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629786439/video1_jpox6o.png',
      },
      {
        title: 'TUTORIAL',
        description: 'Make Your Crypto Work Harder: Triple-Stack Yields with Kashi',
        image: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629786439/video1_jpox6o.png',
      },
    ],
  }

  return (
    <Container id="tokens-page" maxWidth="full">
      <Head>
        <title>Tokens | Sushi</title>
        <meta key="description" name="description" content="SushiSwap tokens." />
      </Head>
      <BreadcrumbBar crumbs={['LCRX', 'Lend']} links={['/tokens', '#']} />
      <TokensTab className="hidden sm:block" defaultTab="3" />
      <div className="w-full px-3 md:px-6 lg:px-10 bg-tokens_title_bg bg-opacity-25">
        <div className="lg:grid lg:grid-cols-12 max-w-7xl mx-auto">
          <div className="lg:col-span-7 flex flex-col py-8 ">
            <div className="text-high-emphesis font-bold text-2xl">Lend {tokenInfo.symbol}</div>
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
            <div className="w-full flex items-center p-4 space-x-2 rounded bg-purple bg-opacity-20">
              <ExclamationCircleIcon className="flex-none text-purple w-[26px] h-[26px]" />
              <div className="text-primary text-sm">
                The below markets are for lending LCRX only, depositing into these markets does not use your LCRX as
                collateral for borrowing other assets.
              </div>
            </div>

            {/* LCRX Lending Markets */}
            <div className="w-full mt-10">
              <div className="text-xl text-white font-medium">{tokenInfo.symbol} Lending Markets</div>
              <TokenPairListHeader columns={['Lending Pair', 'APY', 'Borrowed', 'Availabe Supply']} />
              <div className="flex-col space-y-2">
                {tokenInfo.markets.map((pair, i) => (
                  <TokenMarketsRow
                    key={i}
                    tokenPair={pair.tokenPair}
                    apy={pair.apy}
                    borrowed={pair.borrowed}
                    availableSupply={pair.availableSupply}
                    button="Manage"
                    buttonLink="/tokens/lend/lcrx_weth"
                  />
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="w-full flex items-center p-4 space-x-2 rounded-t bg-purple bg-opacity-20">
                <QuestionMarkCircleIcon className="flex-none text-purple w-[26px] h-[26px]" />
                <div className="text-primary font-bold">Why do I lend for specific assets only?</div>
              </div>
              <div className="bg-dark-900 rounded-b p-6">
                <div className="text-high-emphesis text-sm">
                  With our lending platform, Kashi, lend markets are isolated to specific token pairs to mitigate your
                  risks as an asset lender. This way, you know exactly what collateral is available to you in the event
                  of counter party insolvency.
                </div>
                <div className="text-primary text-sm mt-3">
                  This also works to secure everyone’s assets in case of large market movements on certain tokens - in
                  other lending platforms where any collateral can be used to borrow any asset, disproportionate token
                  allocations can have cascading impacts on the entire platform should there be negative price
                  movements.
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

            {/* Videos */}
            <div className="w-full mt-10">
              <div className="text-xl text-white font-medium">Related Videos</div>
              <div className="mt-5 grid grid-cols-3 gap-5">
                {tokenInfo.videos.map((video, i) => (
                  <VideoItem key={i} video={video} />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative w-80 h-[420px] mx-auto mt-10 lg:-mt-80 bg-dark-900 rounded">
              <div className="absolute w-full h-full bg-gradient-to-r from-blue to-pink opacity-10"></div>
              <div className="w-full h-full flex items-center justify-center px-10 text-center text-secondary">
                Select a lending market to get started.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
