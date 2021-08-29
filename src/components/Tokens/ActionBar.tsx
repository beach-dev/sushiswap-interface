import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { classNames } from '../../functions'
import { ArrowUpIcon, XCircleIcon } from '@heroicons/react/outline'

function ActionBar({}: any) {
  const [actionBarVisible, setActionBarVisible] = useState(false)

  return (
    <div>
      {/* Bottom bar in mobile */}
      <div className="fixed left-0 bottom-0 z-40 lg:hidden flex items-center space-x-5 px-5 w-full h-[60px] bg-dark-900">
        <div>SUSHI</div>
        <div className="text-high-emphesis">$1,234.56</div>
        <div className="flex-1 flex justify-end">
          <button
            className="py-1 px-5 text-center text-white rounded border border-transparent border-gradient-r-blue-pink-dark-900"
            onClick={() => setActionBarVisible(true)}
          >
            Actions
          </button>
        </div>
      </div>
      {/* Action bar in mobile */}
      {actionBarVisible && (
        <div className="fixed left-0 bottom-0 z-50 lg:hidden rounded-t flex flex-col w-full bg-dark-800">
          <div className="flex items-center px-4 h-16 rounded-t bg-gradient-to-r from-blue to-pink text-high-emphesis">
            <div className="flex-1">Available actions for LCRX</div>
            <button onClick={() => setActionBarVisible(false)}>
              <XCircleIcon className="w-[24px] h-[24px]" />
            </button>
          </div>
          <a href="/tokens/swap" className="text-left flex items-center space-x-4 px-4 h-20">
            <div>
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 20.7808H26C26.2652 20.7808 26.5196 20.6754 26.7071 20.4879C26.8946 20.3003 27 20.046 27 19.7808V6.78076C27 6.51555 26.8946 6.26119 26.7071 6.07366C26.5196 5.88612 26.2652 5.78076 26 5.78076H12C11.7348 5.78076 11.4804 5.88612 11.2929 6.07366C11.1054 6.26119 11 6.51555 11 6.78076V7.78076"
                  stroke="#E3E3E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 17.7816L10 20.7816L13 23.7816"
                  stroke="#E3E3E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 12.7816H6C5.73478 12.7816 5.48043 12.887 5.29289 13.0745C5.10536 13.262 5 13.5164 5 13.7816V26.7816C5 27.0468 5.10536 27.3012 5.29289 27.4887C5.48043 27.6763 5.73478 27.7816 6 27.7816H20C20.2652 27.7816 20.5196 27.6763 20.7071 27.4887C20.8946 27.3012 21 27.0468 21 26.7816V25.7816"
                  stroke="#E3E3E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 15.7808L22 12.7808L19 9.78076"
                  stroke="#E3E3E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-high-emphesis">Swap</div>
              <div className="text-sm">Exchange tokens at market rate</div>
            </div>
          </a>
          <a href="#" className="flex items-center space-x-4 px-4 h-20">
            <div>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 26H4V6" stroke="#E3E3E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M28.0002 12L20.0002 19L12.0002 13L4.00024 20"
                  stroke="#E3E3E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-high-emphesis">Limit Order</div>
              <div className="text-sm">Set a buy/sell order at a specific price</div>
            </div>
          </a>
          <a href="/tokens/liquidity" className="flex items-center space-x-4 px-4 h-20">
            <div>
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M26 18.4927C26 9.49268 16 2.49268 16 2.49268C16 2.49268 6 9.49268 6 18.4927C6 21.1448 7.05357 23.6884 8.92893 25.5637C10.8043 27.4391 13.3478 28.4927 16 28.4927C18.6522 28.4927 21.1957 27.4391 23.0711 25.5637C24.9464 23.6884 26 21.1448 26 18.4927Z"
                  stroke="#E3E3E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 28.4927V2.49268"
                  stroke="#E3E3E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 8.49268L26 18.4927"
                  stroke="#E3E3E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 14.4927L24.7837 23.2764"
                  stroke="#E3E3E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 20.4927L22.0004 26.493"
                  stroke="#E3E3E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-high-emphesis">Manage Liquidity</div>
              <div className="text-sm">Add/remove assets to liquidity pools</div>
            </div>
          </a>
          <a href="/tokens/farming" className="flex items-center space-x-4 px-4 h-20">
            <div>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12L5 27" stroke="#E3E3E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M8 24C2 14 10 3.99998 27 4.99998C28 22 18 30 8 24Z"
                  stroke="#E3E3E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-high-emphesis">Yield Farming</div>
              <div className="text-sm">Manage investments and earn rewards</div>
            </div>
          </a>
          <div className="flex items-center space-x-4 px-4 h-20">
            <div>
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 15.0479V8.54791C21 7.88487 21.2634 7.24899 21.7322 6.78015C22.2011 6.3113 22.837 6.04791 23.5 6.04791C24.163 6.04791 24.7989 6.3113 25.2678 6.78015C25.7366 7.24899 26 7.88487 26 8.54791V19.0479C26 20.3611 25.7414 21.6615 25.2388 22.8747C24.7363 24.088 23.9997 25.1904 23.0711 26.119C22.1425 27.0476 21.0401 27.7842 19.8268 28.2867C18.6136 28.7893 17.3132 29.0479 16 29.0479C10.4772 29.0479 8.00001 26.0479 3.92894 17.4587C3.76446 17.1744 3.65763 16.8604 3.61455 16.5348C3.57147 16.2091 3.59299 15.8782 3.67787 15.5609C3.76276 15.2436 3.90934 14.9461 4.10925 14.6854C4.30917 14.4248 4.55848 14.2061 4.84296 14.0419C5.12743 13.8776 5.44148 13.771 5.76716 13.7282C6.09284 13.6854 6.42376 13.7072 6.74101 13.7924C7.05827 13.8775 7.35563 14.0244 7.6161 14.2245C7.87658 14.4246 8.09506 14.6741 8.25906 14.9587L11 19.7062V6.54791C11 5.88487 11.2634 5.24899 11.7322 4.78015C12.2011 4.3113 12.837 4.04791 13.5 4.04791C14.163 4.04791 14.7989 4.3113 15.2678 4.78015C15.7366 5.24899 16 5.88487 16 6.54791V15.0479"
                  stroke="#E3E3E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 15.0479V4.54791C21 3.88487 20.7366 3.24899 20.2678 2.78015C19.7989 2.3113 19.163 2.04791 18.5 2.04791C17.837 2.04791 17.2011 2.3113 16.7322 2.78015C16.2634 3.24899 16 3.88487 16 4.54791V15.0479"
                  stroke="#E3E3E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-high-emphesis">Lend</div>
              <div className="text-sm">Lend out LCRX for yield</div>
            </div>
          </div>
          <div className="flex items-center space-x-4 px-4 h-20 mb-3">
            <div>
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30.0897 15.4947L27 17.0396L23 9.37935L26.1212 7.81877C26.3557 7.70152 26.6268 7.68105 26.8763 7.76177C27.1257 7.84249 27.3335 8.01793 27.4548 8.25033L30.5289 14.1375C30.5904 14.2552 30.6278 14.384 30.639 14.5163C30.6501 14.6486 30.6348 14.7818 30.5939 14.9082C30.553 15.0345 30.4874 15.1515 30.4008 15.2522C30.3142 15.3529 30.2085 15.4354 30.0897 15.4947V15.4947Z"
                  stroke="#E3E3E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.99998 16.9056L1.91027 15.3608C1.79149 15.3014 1.68573 15.2189 1.59916 15.1182C1.51259 15.0175 1.44694 14.9006 1.40606 14.7742C1.36517 14.6479 1.34986 14.5147 1.36102 14.3823C1.37218 14.25 1.40959 14.1212 1.47106 14.0035L4.54517 8.11636C4.66652 7.88396 4.87429 7.70852 5.12372 7.6278C5.37316 7.54708 5.64432 7.56755 5.87881 7.6848L8.99998 9.24538L4.99998 16.9056Z"
                  stroke="#E3E3E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27 17.0396L25 19.3794L20.4004 23.979C20.2783 24.1011 20.1266 24.1895 19.9602 24.2356C19.7938 24.2817 19.6182 24.2839 19.4507 24.242L12.2061 22.4309C12.0702 22.3969 11.943 22.3348 11.8326 22.2485L5 16.9056"
                  stroke="#E3E3E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25 19.3793L19.5 15.3793L17.9 16.5793C17.2076 17.0986 16.3655 17.3793 15.5 17.3793C14.6345 17.3793 13.7924 17.0986 13.1 16.5793L12.4224 16.0711C12.3078 15.9852 12.213 15.8756 12.1444 15.7498C12.0758 15.624 12.0351 15.4849 12.0249 15.342C12.0148 15.1991 12.0354 15.0557 12.0855 14.9215C12.1356 14.7872 12.214 14.6653 12.3153 14.564L17.2071 9.67223C17.3 9.57937 17.4102 9.50571 17.5315 9.45545C17.6528 9.4052 17.7829 9.37933 17.9142 9.37933H23"
                  stroke="#E3E3E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.07178 9.24536L15.4868 7.37517C15.7159 7.30836 15.9614 7.32573 16.1789 7.42413L20.5 9.37934"
                  stroke="#E3E3E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 26.8794L10.2326 25.9375C10.0797 25.8993 9.938 25.8255 9.81907 25.7221L7 23.2717"
                  stroke="#E3E3E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-high-emphesis">Borrow</div>
              <div className="text-sm">Borrow LCRX with other assets</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ActionBar
