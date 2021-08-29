import Container from '../../../components/Container'
import Head from 'next/head'
import BreadcrumbBar from '../../../components/Tokens/BreadcrumbBar'

import { AdjustmentsIcon, ArrowNarrowUpIcon, ArrowNarrowDownIcon } from '@heroicons/react/outline'
import TokenSelectorMobile from '../../../components/Tokens/TokenSelector/TokenSelectorMobile'
import ActionBar from '../../../components/Tokens/ActionBar'

export default function Swap() {
  const tokenInfo = {
    symbol: 'LCRX',
    balance: '501.23',
    usdc: '0',
    imageUrl: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766875/lcrx_aky5xr.png',
  }

  const token2Info = {
    symbol: 'WETH',
    balance: '2.134',
    usdc: '0',
    imageUrl: 'https://res.cloudinary.com/dz7i261jo/image/upload/v1629766971/eth_msolwl.png',
    rate: '476.5432',
  }

  return (
    <Container id="tokens-page" maxWidth="full">
      <Head>
        <title>Tokens | Sushi</title>
        <meta key="description" name="description" content="SushiSwap tokens." />
      </Head>
      <BreadcrumbBar crumbs={['LCRX', 'Swap']} links={['/tokens', '#']} />
      <div className="w-full max-w-md mx-auto px-3 md:px-6 lg:px-10 pt-6">
        <div className="flex items-center mb-5">
          <div className="flex-1 text-high-emphesis text-2xl">Market Swap {tokenInfo.symbol}</div>
          <button>
            <AdjustmentsIcon className="w-[25px] h-[25px] transform rotate-90" />
          </button>
        </div>
        <TokenSelectorMobile className="relative z-10" defaultToken={tokenInfo} />
        <div className="-mt-3 flex justify-end mr-2">
          <div className="flex w-[54px] h-[54px] items-center justify-center rounded-full bg-dark-700 border border-dark-900 border-2">
            <ArrowNarrowUpIcon className="w-[30px] h-[30px]" />
            <ArrowNarrowDownIcon className="-ml-4 w-[30px] h-[30px]" />
          </div>
        </div>
        <TokenSelectorMobile className="-mt-10" defaultToken={token2Info} />
        <div className="flex items-center space-x-2 rounded bg-dark-900 mt-2">
          <div className="rounded-l px-3 py-3 bg-dark-800 text-secondary">RATE</div>
          <div className="flex-1">
            {token2Info.rate} {tokenInfo.symbol} per {token2Info.symbol}
          </div>
          <div className="pr-3">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.82865 6.53039C3.6218 6.73758 3.28445 6.73758 3.0776 6.53039L0.0776953 3.53082C-0.0258984 3.42689 -0.0258984 3.25889 0.0776953 3.15496L3.0776 0.155391C3.28445 -0.0517969 3.6218 -0.0517969 3.82865 0.155391L4.51562 0.842363C4.72281 1.04922 4.72281 1.38656 4.51562 1.59342L3.82865 2.28039H13.2812C15.3319 2.28039 17 3.94852 17 5.99914C17 6.43842 16.6424 6.79602 16.2031 6.79602H15.6719C15.2326 6.79602 14.875 6.43842 14.875 5.99914C14.875 5.12025 14.1601 4.40539 13.2812 4.40539H3.82865L4.51562 5.09236C4.72281 5.29922 4.72281 5.63656 4.51562 5.84342L3.82865 6.53039ZM13.1713 9.18664C13.3785 8.97945 13.7155 8.97945 13.9224 9.18664L16.9223 12.1862C17.0259 12.2901 17.0259 12.4581 16.9223 12.5621L13.9224 15.5616C13.7152 15.7688 13.3786 15.7689 13.1713 15.5616L12.4844 14.8747C12.2765 14.6667 12.2768 14.3312 12.4844 14.1236L13.1713 13.4366H3.71875C1.66813 13.4366 0 11.7685 0 9.71789C0 9.27861 0.357598 8.92101 0.796875 8.92101H1.32812C1.7674 8.92101 2.125 9.27861 2.125 9.71789C2.125 10.5968 2.83986 11.3116 3.71875 11.3116H13.1713L12.4844 10.6247C12.2765 10.4167 12.2768 10.0812 12.4844 9.87361L13.1713 9.18664Z"
                fill="#BFBFBF"
              />
            </svg>
          </div>
        </div>
        <button className="w-full py-2 text-center text-secondary mt-5 rounded bg-dark-700">Enter Amounts</button>
      </div>
      <ActionBar />
    </Container>
  )
}
