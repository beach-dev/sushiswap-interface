import Container from '../../components/Container'
import Head from 'next/head'
import BreadcrumbBar from '../../components/Tokens/BreadcrumbBar'
import TokensTab from '../../components/Tokens/TokensTab'
import Image from 'next/image'

import { ArrowUpIcon, XCircleIcon } from '@heroicons/react/outline'
import { socialsPlaceholder } from '../../components/SocialPlaceholder'
import { token } from '@sushiswap/sushi-data/typings/exchange'
import TokenArticle from '../../components/Tokens/TokenArticle'
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

            {/* token description */}
            <div className="hidden lg:block w-full mt-10">
              <div className="text-xl text-white font-medium">{`About ${tokenInfo.symbol}`}</div>
              <div className="flex flex-row items-center space-x-6 mt-5">
                <a key={socialsPlaceholder.length} href={tokenInfo.website}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 16C12.4112 16 16 12.4112 16 8.00005C16 3.58883 12.4112 0 8 0C3.5888 0 0 3.58883 0 8.00005C0 12.4112 3.5888 16 8 16ZM2.7841 11.9497C3.41799 11.7004 4.2161 11.5017 5.11316 11.3656C5.23496 12.0968 5.39661 12.7746 5.59588 13.3726C5.70027 13.6857 5.81018 13.9621 5.92373 14.2077C4.66298 13.7849 3.57241 12.9881 2.7841 11.9497ZM1.45455 8.00005C1.45455 7.04272 1.66119 6.13276 2.03205 5.3124C2.81862 5.64913 3.81222 5.90964 4.93154 6.07783C4.87704 6.69897 4.84848 7.34342 4.84848 8.00005C4.84848 8.65663 4.87704 9.30113 4.93154 9.92222C3.81222 10.0905 2.81857 10.351 2.0321 10.6877C1.66119 9.86733 1.45455 8.95738 1.45455 8.00005ZM8 1.45454C8.15661 1.45454 8.61304 1.85361 9.02429 3.0874C9.19331 3.59455 9.33231 4.16972 9.43956 4.7925C8.97202 4.82518 8.48989 4.84244 7.9998 4.84244C7.50987 4.84244 7.02788 4.82523 6.56044 4.7925C6.66768 4.16972 6.80669 3.5946 6.97576 3.08745C7.38701 1.85361 7.84339 1.45454 8 1.45454ZM7.9998 6.29698C8.55384 6.29698 9.09697 6.27662 9.62303 6.23778C9.67161 6.80529 9.69697 7.39612 9.69697 8.00005C9.69697 8.60397 9.67161 9.19471 9.62308 9.76222C9.09702 9.72338 8.55399 9.70302 8 9.70302C7.44601 9.70302 6.90298 9.72338 6.37697 9.76222C6.32839 9.19471 6.30303 8.60392 6.30303 8.00005C6.30303 7.39612 6.32839 6.80534 6.37697 6.23778C6.90293 6.27662 7.44591 6.29698 7.9998 6.29698ZM14.5455 8.00005C14.5455 8.95733 14.3388 9.86724 13.968 10.6876C13.1814 10.3509 12.1878 10.0904 11.0685 9.92222C11.123 9.30113 11.1515 8.65667 11.1515 8.00005C11.1515 7.34337 11.123 6.69892 11.0685 6.07778C12.1878 5.90959 13.1814 5.64903 13.9679 5.31226C14.3388 6.13267 14.5455 7.04267 14.5455 8.00005ZM8 14.5455C7.84339 14.5455 7.38701 14.1463 6.97581 12.9126C6.80674 12.4054 6.66773 11.8303 6.56044 11.2075C7.02798 11.1748 7.50996 11.1576 8 11.1576C8.49004 11.1576 8.97207 11.1748 9.43956 11.2075C9.33231 11.8303 9.19331 12.4055 9.02429 12.9126C8.61304 14.1464 8.15665 14.5455 8 14.5455ZM10.0764 14.2077C10.1899 13.9621 10.2998 13.6857 10.4042 13.3726C10.6035 12.7746 10.7651 12.0968 10.8869 11.3656C11.7839 11.5017 12.582 11.7003 13.2159 11.9496C12.4276 12.988 11.3371 13.7849 10.0764 14.2077ZM13.2158 4.05025C12.582 4.29956 11.7839 4.4983 10.8869 4.6344C10.7651 3.90325 10.6035 3.22534 10.4042 2.62743C10.2998 2.31426 10.1899 2.03785 10.0763 1.79223C11.337 2.21511 12.4275 3.01186 13.2158 4.05025ZM5.92373 1.79228C5.81018 2.03781 5.70031 2.31426 5.59588 2.62743C5.39661 3.22544 5.23496 3.9033 5.11316 4.63449C4.2161 4.49835 3.41799 4.29966 2.7841 4.0504C3.57236 3.01196 4.66293 2.21507 5.92373 1.79228Z"
                      fill="#BFBFBF"
                    />
                  </svg>
                </a>
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
            <div className="hidden lg:block w-full mt-10">
              <div className="text-xl text-white font-medium">News &amp; Articles</div>

              {tokenInfo.articles.map((article, i) => (
                <TokenArticle key={i} article={article} />
              ))}

              <div className="mt-5">
                <a className="underline text-blue" href={tokenInfo.articlesLink}>
                  See More
                </a>
              </div>
            </div>

            {/* related lists */}
            <div className="hidden lg:block w-full mt-10">
              <div className="text-xl text-white font-medium">Related Lists</div>
              <div className="flex mt-5 space-x-5">
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
            <div className="lg:w-80 mx-auto mt-8 flex flex-col">
              <div className="text-xl text-white mb-3">Token Stats</div>
              <TokenValueRow
                caption="Market Cap"
                value={tokenInfo.values[0].marketCap}
                change={tokenInfo.values[0].marketCapChange}
              />
              <TokenValueRow
                caption="Liquidity"
                value={tokenInfo.values[0].liquidity}
                change={tokenInfo.values[0].liquidityChange}
              />
              <TokenValueRow
                caption="Volume"
                value={tokenInfo.values[0].volume}
                change={tokenInfo.values[0].volumeChange}
              />
              <TokenValueRow caption="Fees" value={tokenInfo.values[0].fees} change={tokenInfo.values[0].feesChange} />
              <div className="mt-8 flex flex-row justify-center space-x-2">
                {chartTimespans.map((timespan, i) => (
                  <button
                    key={i}
                    className={classNames(
                      timespan === chartTimespan
                        ? 'rounded-full border-blue border border-opacity-50 bg-blue bg-opacity-25 text-blue'
                        : 'text-secondary',
                      'flex-1 lg:flex-auto w-10'
                    )}
                    onClick={() => setChartTimespan(timespan)}
                  >
                    {timespan}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:hidden ml-auto mt-10 mb-5 w-full py-2 text-center text-white rounded border border-transparent border-gradient-r-blue-pink-dark-1000">
            View Analytics
          </div>
        </div>
      </div>
      <ActionBar />
    </Container>
  )
}
