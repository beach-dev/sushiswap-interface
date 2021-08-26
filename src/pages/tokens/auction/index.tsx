import Container from '../../../components/Container'
import Head from 'next/head'
import BreadcrumbBar from '../../../components/Tokens/BreadcrumbBar'
import TokensTab from '../../../components/Tokens/TokensTab'
import Image from 'next/image'

import { socialsPlaceholder } from '../../../components/SocialPlaceholder'
import { token } from '@sushiswap/sushi-data/typings/exchange'
import TokenArticle from '../../../components/Tokens/TokenArticle'
import RelatedListItem from '../../../components/Tokens/RelatedListItem'
import TokenValueRow from '../../../components/Tokens/TokenValueRow'

import { useState, useEffect } from 'react'
import { classNames } from '../../../functions'

import SwapCard from '../../../components/Tokens/SwapCard/SwapCard'

import TokenPairListHeader from '../../../components/Tokens/TokenPairListHeader'
import TokenPairListRow from '../../../components/Tokens/TokenPairListRow'
import { QuestionMarkCircleIcon, IdentificationIcon, CheckIcon } from '@heroicons/react/solid'

import TokenProgressBar from '../../../components/Tokens/TokenProgressBar/TokenProgressBar'
import VideoItem from '../../../components/Tokens/VideoItem'
import AuctionCard from '../../../components/Tokens/AuctionCard/AuctionCard'
import DoubleGlowShadow from '../../../components/DoubleGlowShadow'
import AuctionGraph from '../../../components/Tokens/AuctionGraph'

export default function Auction() {
  const [showCommits, setShowCommits] = useState(true)
  const [remainingTime, setRemainingTime] = useState(0)
  var counter = 100000

  const token1 = {
    symbol: 'LCRX',
    balance: '518.392837',
    usdc: '0',
    imageUrl: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
  }

  const token2 = {
    symbol: 'ETH',
    balance: '0.00',
    usdc: '0',
    imageUrl: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766971/eth_msolwl.png',
  }

  const auctionInfo = {
    tokenSymbol: 'LCRX',
    tokenImage: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
    tokenPrice: '0.001',
    remainingPercent: '4.20',
    totalAmountRaised: '191.6',
    tokenForSale: '200,000',
    auctionProgress: '95.8',
    remainingETH: '8.4',
    relatedVideos: [
      {
        title: 'TUTORIAL',
        description: 'How to Participate in Auctions on MISO',
        image: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629957049/auction1_kqezaw.png',
      },
      {
        title: 'TUTORIAL',
        description: 'MISO Token Launchpad Intro [Chinese Subtitles]',
        image: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629957049/auction2_h3ix3h.png',
      },
    ],
    commitments: [
      {
        amount: '2.00',
        value: '3,996.02',
        claimAmount: '2,000',
        dateCommitted: 'July 15th, 2021',
      },
    ],
    ethImage: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766971/eth_msolwl.png',
  }

  useEffect(() => {
    const interval1 = setInterval(function () {
      if (counter > 0) {
        counter--
        setRemainingTime(counter)
      } else {
        clearInterval(interval1)
      }
    }, 1000)
  }, [])

  const onEnter = () => {
    setShowCommits(!showCommits)
  }

  return (
    <Container id="tokens-page" maxWidth="full">
      <Head>
        <title>Tokens | Sushi</title>
        <meta key="description" name="description" content="SushiSwap tokens." />
      </Head>
      <BreadcrumbBar crumbs={['LCRX', 'Live Auction']} links={['/tokens', '#']} />
      <TokensTab className="hidden sm:block" defaultTab="5" />
      <div className="w-full px-3 md:px-6 lg:px-10 bg-dark-900 bg-opacity-55">
        <div className="lg:grid lg:grid-cols-12 max-w-7xl mx-auto">
          <div className="lg:col-span-7 flex flex-col py-8 ">
            <div className="flex space-x-5 items-center border-b py-3 border-dark-800">
              <Image src={auctionInfo.tokenImage} width={42} height={42} />
              <div className="flex-1 flex flex-col">
                <div>Current Token Price</div>
                <div className="text-2xl text-high-emphesis">{auctionInfo.tokenPrice} ETH</div>
              </div>
              <div className="rounded-full flex items-center space-x-1 pr-2 border-blue border border-opacity-50 bg-green bg-opacity-25">
                <div
                  className="px-3 flex space-x-1 items-center rounded-full text-blue"
                  style={{ backgroundColor: '#0A274C' }}
                >
                  <IdentificationIcon className="text-blue w-[16px] h-[16px]" />
                  <div className="text-sm py-1">KYC Required</div>
                </div>
                <CheckIcon className="text-green w-[16px] h-[16px]" />
              </div>
              <div className="px-3 space-x-1 rounded-full flex items-center border-yellow border border-opacity-50 bg-yellow bg-opacity-25">
                <div className="text-yellow text-sm py-1">Crowdsale</div>
                <QuestionMarkCircleIcon className="text-yellow w-[16px] h-[16px]" />
              </div>
            </div>
            <div className="grid grid-cols-3 py-3 border-b border-dark-800">
              <div>Amt. Remaining</div>
              <div>Total Amt. Rasied</div>
              <div>Tokens for Sale</div>
              <div className="text-high-emphesis text-xl">{auctionInfo.remainingPercent}%</div>
              <div className="text-high-emphesis text-xl">{auctionInfo.totalAmountRaised} ETH</div>
              <div className="text-high-emphesis text-xl">
                {auctionInfo.tokenForSale} {auctionInfo.tokenSymbol}
              </div>
            </div>
            <div className="mt-5">
              <div className="flex space-x-5 items-center">
                <div className="text-high-emphesis">Auction Progress</div>
                <TokenProgressBar showDot={false} className="flex-1" percentage={auctionInfo.auctionProgress} />
              </div>
              <div className="py-2 text-secondary">
                {auctionInfo.remainingETH} ETH left until the auction hits its minimum target.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative px-3 md:px-6 lg:px-10 w-full pt-10">
        <div className="lg:grid lg:grid-cols-12 max-w-7xl m-auto h-full">
          <div className="lg:col-span-7 flex flex-col h-full">
            {/* Commitments */}
            {showCommits && (
              <div>
                <div className="text-xl text-white">Your Commitments:</div>
                <div className="grid grid-cols-4 gap-1 py-3 border-b border-dark-800 text-sm text-secondary">
                  <div>Amount</div>
                  <div className="text-right">Value</div>
                  <div className="text-right">{auctionInfo.tokenSymbol} to Claim</div>
                  <div className="text-right">Date Committed</div>
                </div>
                {auctionInfo.commitments.map((commit, i) => (
                  <div key={i} className="grid grid-cols-4 gap-1 py-3 border-b border-dark-800">
                    <div className="flex space-x-2">
                      <Image src={auctionInfo.ethImage} width={25} height={25} />
                      <div>{commit.amount} WETH</div>
                    </div>
                    <div className="text-right">${commit.value}</div>
                    <div className="text-right">{commit.claimAmount}</div>
                    <div className="text-right">{commit.dateCommitted}</div>
                  </div>
                ))}
              </div>
            )}
            {/* Aution Graph */}
            <AuctionGraph dateFrom="7/10/21" dateTo="7/16/21" currentPrice="0.01 ETH" />
            {/* Related Videos */}
            <div className="w-full mt-10">
              <div className="text-xl text-white">Related Videos</div>
              <div className="mt-5 grid grid-cols-3 gap-5">
                {auctionInfo.relatedVideos.map((video, i) => (
                  <VideoItem key={i} video={video} />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <DoubleGlowShadow className="mx-auto">
              <AuctionCard
                className="mx-auto mt-10 lg:-mt-96"
                token1={token1}
                token2={token2}
                remainingTime={remainingTime}
                onEnter={onEnter}
              />
            </DoubleGlowShadow>
          </div>
        </div>
      </div>
    </Container>
  )
}
