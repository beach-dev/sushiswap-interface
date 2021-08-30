import Container from '../../components/Container'
import Head from 'next/head'
import BreadcrumbBar from '../../components/Tokens/BreadcrumbBar'
import TokensTab from '../../components/Tokens/TokensTab'
import Image from 'next/image'

import { ArrowUpIcon, XCircleIcon } from '@heroicons/react/outline'
import { socialsPlaceholder } from '../../components/SocialPlaceholder'
import { token } from '@sushiswap/sushi-data/typings/exchange'
import TokenArticle from '../../components/Tokens/TokenArticle/TokenArticle'
import RelatedListItem from '../../components/Tokens/RelatedListItem'
import TokenValueRow from '../../components/Tokens/TokenValueRow'

import { useEffect, useState, useRef } from 'react'
import { classNames } from '../../functions'

import SwapCard from '../../components/Tokens/SwapCard/SwapCard'

import TokenPairListHeader from '../../components/Tokens/TokenPairListHeader'
import TokenPairListRow from '../../components/Tokens/TokenPairListRow'
import DoubleGlowShadow from '../../components/DoubleGlowShadow'

import ResizeObserver from 'resize-observer-polyfill'
import dynamic from 'next/dynamic'
import ActionBar from '../../components/Tokens/ActionBar'
import TokenStats from '../../components/Tokens/TokenStats'
import TokenArticleMobile from '../../components/Tokens/TokenArticle/TokenArticleMobile'
import SocialLinkRow from '../../components/Tokens/SocialLinkRow'
import TokenPairCard from '../../components/Tokens/TokenPairCard'
import TokenTopFarmsMobile from '../../components/Tokens/TokenTopFarmsMobile'

const TokenChart = dynamic(() => import('../../components/Tokens/TokenChart/TokenChart'), {
  ssr: false,
})

export default function Tokens() {
  const tokenInfo = {
    symbol: 'LCRX',
    title: 'LaCroixBois',
    values: [
      {
        //24h
        price: '4.20',
        priceChange: 6.9,
        marketCap: '278,357,582',
        marketCapChange: 1.2,
        liquidity: '101,982,845',
        liquidityChange: 1.2,
        volume: '101,982,845',
        volumeChange: 1.2,
        fees: '305,621',
        feesChange: 1.2,
      },
      {
        //1w
        price: '4.20',
        priceChange: 6.9,
        marketCap: '278,357,582',
        marketCapChange: 1.2,
        liquidity: '101,982,845',
        liquidityChange: 1.2,
        volume: '101,982,845',
        volumeChange: 1.2,
        fees: '305,621',
        feesChange: 1.2,
      },
      {
        //1m
        price: '4.20',
        priceChange: 6.9,
        marketCap: '278,357,582',
        marketCapChange: 1.2,
        liquidity: '101,982,845',
        liquidityChange: 1.2,
        volume: '101,982,845',
        volumeChange: 1.2,
        fees: '305,621',
        feesChange: 1.2,
      },
    ],
    description: `LCRX is the currency for the LaCroix NFT Vending machines.  Users deposit tokens into the virtual machine like a traditional soda machine, and receive flavors of varying rarities.  These flavors are NFTs and can be bought and sold. 
    It’s also a governance token of lacroix.finance, where holders vote on new flavors to be introduced.  There are a total of 34 current available flavors of NFT, all available via the vending machine at lacroix.finance.
    `,
    etherscanUrl: 'https://etherscan.io/token/0x958176d0308b44b0816568d9c3cbf81c930e2112',
    analyticsUrl: 'https://www.google.com',
    imageUrl: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
    website: 'https://www.google.com',
    articles: [
      {
        date: 'APRIL 20, 2021',
        title: 'Five New Flavors Join the Chat',
        content:
          'After a successful governance vote, five new flavors are available in the vending machine, including the top pick....',
        imageUrl: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629188244/article1_bo5y6s.jpg',
      },
      {
        date: 'DECEMBER 25, 2020',
        title: 'Introducing the LCRX Vending Machine',
        content:
          'Deposit tokens into the LCRX vending machine at lacroix.finance to receive a random water can NFT of varying..',
        imageUrl: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629188241/article2_wsc5rv.jpg',
      },
    ],
    articlesLink: 'https://www.google.com',
    relatedLists: [
      {
        imageUrl: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629193167/related2_hscvuj.png',
        title: 'NFT-Based',
      },
      {
        imageUrl: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629193167/related1_npnhpd.png',
        title: 'Governance Tokens',
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
        volume: '9,997,016.01',
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
        volume: '4,621.03',
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
        volume: '2,504.80',
      },
    ],
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
  }

  const [chartTimespan, setChartTimespan] = useState('1W')
  const chartTimespans = ['24H', '1W', '1M', '1Y', 'ALL']

  const [tokenPrice, setTokenPrice] = useState(tokenInfo.values[0])

  const onCrosshairMoved = (value) => {
    if (value) {
      setTokenPrice(value)
    } else {
      setTokenPrice(tokenInfo.values[0])
    }
  }

  return (
    <Container id="tokens-page" maxWidth="full">
      <Head>
        <title>Tokens | Sushi</title>
        <meta key="description" name="description" content="SushiSwap tokens." />
      </Head>
      <BreadcrumbBar crumbs={['LCRX']} links={['#']} />
      <TokensTab className="hidden lg:block" defaultTab="0" />
      <div className="relative w-full px-3 md:px-6 lg:px-10 pt-10">
        <div className="lg:grid lg:grid-cols-12 max-w-7xl m-auto h-full">
          <div className="lg:col-span-7 flex flex-col h-full">
            {/* token image, title, pricing */}
            <div className="w-full flex flex-col lg:flex-row">
              <div className="flex-1 flex items-center">
                <div>
                  <Image src={tokenInfo.imageUrl} width={40} height={40} />
                </div>
                <div className="flex flex-col pl-2">
                  <div className="text-sm">{tokenInfo.symbol}</div>
                  <div className="text-2xl text-white font-medium">{tokenInfo.title}</div>
                </div>
                <div className="flex-1"></div>
              </div>
              <div className="flex flex-row space-x-2 lg:flex-col">
                <div className="text-3xl text-white font-medium">{`$${tokenPrice.price}`}</div>
                <div className="flex items-center">
                  <div className="flex-1"></div>
                  <div className="flex h-[25px] px-2 py-1 rounded-full bg-green bg-opacity-25 text-green text-xs font-medium justify-center items-center">
                    <ArrowUpIcon className="w-[12px] h-[12px]" />
                    <div>{`${tokenPrice.priceChange}%`}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* token price graph */}
            <div className="mt-10">
              <div className="w-full max-w-3xl mx-auto">
                <TokenChart onCrosshairMoved={onCrosshairMoved} />
              </div>
              <div className="mt-8 flex flex-row justify-start space-x-2">
                {chartTimespans.map((timespan, i) => (
                  <button
                    key={i}
                    className={classNames(
                      timespan === chartTimespan
                        ? 'rounded-full border-blue border border-opacity-50 bg-blue bg-opacity-25 text-blue'
                        : 'text-secondary',
                      'flex-1 lg:flex-initial w-10'
                    )}
                    onClick={() => setChartTimespan(timespan)}
                  >
                    {timespan}
                  </button>
                ))}
              </div>
            </div>

            {/* Token Stats */}
            <TokenStats className="block lg:hidden" stats={tokenInfo.values[0]} />
            <div className="lg:hidden ml-auto mt-10 mb-5 w-full py-2 text-center text-white rounded border border-transparent border-gradient-r-blue-pink-dark-1000">
              View Analytics
            </div>

            {/* token description */}
            <div className="w-full mt-10">
              <div className="text-xl text-white font-medium">{`About ${tokenInfo.symbol}`}</div>
              <div className="flex flex-row items-center space-x-6 mt-5">
                {socialsPlaceholder.map((social, i) => (
                  <a key={i} href={social.href}>
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="flex flex-row items-center space-x-12 mt-5">
                <div className="flex items-center space-x-2">
                  <a className="underline text-blue" href={tokenInfo.etherscanUrl}>
                    View Contract
                  </a>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.6667 12.6667H3.33333V3.33333H8V2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.59333 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V8H12.6667V12.6667ZM9.33333 2V3.33333H11.7267L5.17333 9.88667L6.11333 10.8267L12.6667 4.27333V6.66667H14V2H9.33333Z"
                      fill="#BFBFBF"
                    />
                  </svg>
                </div>
                <div className="flex items-center space-x-2">
                  <a className="underline text-blue" href={tokenInfo.etherscanUrl}>
                    Analytics
                  </a>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.6667 12.6667H3.33333V3.33333H8V2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.59333 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V8H12.6667V12.6667ZM9.33333 2V3.33333H11.7267L5.17333 9.88667L6.11333 10.8267L12.6667 4.27333V6.66667H14V2H9.33333Z"
                      fill="#BFBFBF"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-5">{tokenInfo.description}</div>
            </div>

            {/* news & articles */}
            <div className="w-full mt-10">
              <div className="text-xl text-white font-medium">News &amp; Articles</div>

              <div className="flex lg:block flex-nowrap space-x-3 lg:space-x-0 overflow-x-auto lg:overflow-x-visible">
                {tokenInfo.articles.map((article, i) => (
                  <div className="w-full" key={i}>
                    <TokenArticle className="hidden lg:flex" article={article} />
                    <TokenArticleMobile className="block lg:hidden" article={article} />
                  </div>
                ))}
              </div>

              <div className="hidden lg:block mt-5">
                <a className="underline text-blue" href={tokenInfo.articlesLink}>
                  See More
                </a>
              </div>
            </div>

            {/* Links & Communitiy */}
            <div className="block lg:hidden mt-8">
              <div className="text-xl text-white font-medium">Links &amp; Community</div>
              <div className="flex flex-col mt-3">
                {socialsPlaceholder.map((link, i) => (
                  <SocialLinkRow key={i} link={link} />
                ))}
              </div>
            </div>

            {/* top moving pairs - mobile */}
            <div className="block lg:hidden w-full mt-10">
              <div className="flex space-x-3 items-center">
                <div className="text-xl text-white font-medium">Top Moving Pairs</div>
                <div className="text-blue underline">See All</div>
              </div>
              <div>Highest-volume trading pairs in the past 24 hours</div>
              <div className="flex flex-nowrap space-x-3 overflow-x-auto py-2">
                {tokenInfo.topMovingPairs.map((pair, i) => (
                  <TokenPairCard key={i} pair={pair} label1="TVL" button="Invest" buttonLink="#" />
                ))}
              </div>
            </div>

            {/* Top yield farms */}
            <div className="block lg:hidden w-full mt-10">
              <div className="flex space-x-3 items-center">
                <div className="text-xl text-white font-medium">Top Yield Farms</div>
                <div className="text-blue underline">See All</div>
              </div>
              <div className="mb-5">Earn reward tokens by farming token pairs</div>
              <TokenTopFarmsMobile farms={tokenInfo.farms} />
            </div>

            {/* related lists */}
            <div className="w-full mt-10">
              <div className="text-xl text-white font-medium">Related Lists</div>
              <div className="flex flex-nowrap space-x-3 overflow-x-auto mt-5 space-x-5">
                {tokenInfo.relatedLists.map((item, i) => (
                  <RelatedListItem key={i} item={item} />
                ))}
              </div>
            </div>

            {/* top moving pairs */}
            <div className="hidden lg:block w-full mt-10">
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
          <div className="lg:col-span-5">
            <DoubleGlowShadow className="hidden lg:block mx-auto">
              <SwapCard className="hidden lg:block mx-auto mt-10 lg:-mt-24" />
            </DoubleGlowShadow>
            <TokenStats className="hidden lg:block" stats={tokenInfo.values[0]} />
          </div>
        </div>
      </div>
      <ActionBar />
    </Container>
  )
}
