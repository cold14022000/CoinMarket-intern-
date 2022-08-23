import React from "react";
import Navbar from "../homepage/navbar";
import Header from "../homepage/header";
import Footer from "../homepage/footer";
import {
  AdvancedRealTimeChart,
  MiniChart,
} from "react-ts-tradingview-widgets";

export default function DetailPage() {
  return (
    <div>
      <Header />
      <Navbar />
      <div>
        <div className="p-10">
          Crytocurrencies {">"} Coins {">"} BTC
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="block items-center">
          <div className="flex">
            <div className="h-7 flex font-bold text-3xl items-center">
              <img
                className="max-h-full max-w-full pr-2"
                src={
                  "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                }
                alt=""
              />
              Bitcoin
            </div>
            <div className="flex text-base items-center pl-2 bg-slate-200 px-2 rounded-xl mx-2">
              BTC
            </div>
            <button className="items-center rounded-xl border-2 px-1 mx-1 py-1">
              <svg
                data-v-20f285ec=""
                data-v-6b3fd699=""
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-star text-currentColor icon"
              >
                <path
                  data-v-20f285ec=""
                  d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
            </button>
            <button className="text-lg flex font-bold items-center rounded-xl border-2 px-3 mx-1 py-1">
              <div className="pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  height="16px"
                  width="16px"
                  viewBox="0 0 24 24"
                  color="currentColor"
                  class="sc-16r8icm-0 eWuPKG"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.0008 2C12.266 2 12.5204 2.10536 12.7079 2.29289L18.1085 7.69346C18.499 8.08398 18.499 8.71715 18.1085 9.10767C17.7179 9.49819 17.0848 9.49819 16.6943 9.10767L13.001 5.41438V16C13.001 16.5523 12.5533 17 12.001 17C11.4487 17 11.001 16.5523 11.001 16V5.41405L7.30737 9.10767C6.91684 9.49819 6.28368 9.49819 5.89315 9.10767C5.50263 8.71715 5.50263 8.08398 5.89315 7.69346L11.2937 2.29289C11.4812 2.10536 11.7356 2 12.0008 2ZM3 15C3.55228 15 4 15.4477 4 16V19C4 19.5523 4.44772 20 5 20H19.0018C19.5541 20 20.0018 19.5523 20.0018 19V16C20.0018 15.4477 20.4496 15 21.0018 15C21.5541 15 22.0018 15.4477 22.0018 16V19C22.0018 20.6569 20.6587 22 19.0018 22H5C3.34315 22 2 20.6569 2 19V16C2 15.4477 2.44772 15 3 15Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              Share
            </button>
          </div>
          <div className="flex p-2">
            <div className="text-base items-center pl-2 bg-slate-200 px-2 py-1 rounded m-2 bg-slate-600 text-white">
              Rank #1
            </div>
            <div className="text-base items-center pl-2 bg-slate-200 px-2 py-1 rounded m-2">
              Coin
            </div>
            <div className="text-base items-center pl-2 bg-slate-200 px-2 py-1 rounded m-2">
              On 306,320 watchlists
            </div>
          </div>
        </div>

        <div className="block">
          Bitcoin Price (BTC)
          <div className="flex text-4xl font-bold">
            $21,433.80{" "}
            <div className="text-base text-white items-center pl-2 px-2 bg-green-500 px-2 py-1 rounded m-2">
              0.89%
            </div>
          </div>
          <div className="flex ">
            13.37 ETH<div className="text-red-600 pl-3 font-bold">0.07%</div>
          </div>
        </div>

        <div>
          <div className="flex justify-end">
            <div className="px-5 mx-1 py-1 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700">
              Buy
            </div>
            <div className="px-5 mx-1 py-1 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700">
              Exchange
            </div>
            <div className="px-5 mx-1 py-1 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700">
              Gaming
            </div>
            <div className="px-5 mx-1 py-1 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700">
              Event Crypto
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap shrink">
            <div>
              <button className="relative flex text-base font-bold items-center bg-slate-200 px-2 py-1 rounded mx-2 mt-2 hover:bg-slate-600 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  height="16px"
                  width="16px"
                  viewBox="0 0 24 24"
                  class="sc-16r8icm-0 coGWQa"
                >
                  <path d="M11.877 15.9787C11.8146 16.8242 11.4524 17.6196 10.8555 18.2217L9.94675 19.1305C9.27191 19.7958 8.36141 20.1672 7.41381 20.1638C6.46621 20.1604 5.5584 19.7825 4.88834 19.1124C4.21828 18.4423 3.84034 17.5345 3.83695 16.5868C3.83355 15.6392 4.20497 14.7287 4.87021 14.0538L5.779 13.145C6.38116 12.5483 7.1765 12.186 8.02192 12.1235L9.67229 10.4731C8.76285 10.2319 7.80611 10.2331 6.89728 10.4766C5.98845 10.72 5.15923 11.1973 4.49215 11.8608L3.58335 12.7697C2.56946 13.7837 1.99991 15.159 2 16.5929C2.00009 18.0269 2.5698 19.4021 3.5838 20.416C4.59781 21.43 5.97305 21.9995 7.40698 21.9994C8.84092 21.9994 10.2161 21.4296 11.23 20.4156L12.1388 19.5068C12.802 18.8395 13.279 18.0102 13.5225 17.1014C13.7659 16.1926 13.7673 15.236 13.5265 14.3265L11.877 15.9787Z"></path>
                  <path d="M15.9793 11.8768C16.8248 11.8144 17.6202 11.4522 18.2222 10.8553L19.131 9.9465C19.7963 9.27163 20.1677 8.3611 20.1643 7.41348C20.1609 6.46585 19.783 5.55801 19.1129 4.88793C18.4429 4.21786 17.535 3.83991 16.5874 3.83651C15.6398 3.83312 14.7293 4.20455 14.0545 4.8698L13.1457 5.77863C12.549 6.3808 12.1868 7.17616 12.1242 8.02161L10.4738 9.67203C10.2327 8.76256 10.2339 7.80579 10.4773 6.89693C10.7208 5.98807 11.198 5.15883 11.8616 4.49173L12.7704 3.58291C13.7844 2.56899 15.1596 1.99943 16.5935 1.99951C18.0275 1.9996 19.4027 2.56932 20.4165 3.58336C21.4304 4.5974 22 5.97267 21.9999 7.40665C21.9998 8.84063 21.4301 10.2158 20.4161 11.2298L19.5073 12.1386C18.84 12.8018 18.0108 13.2789 17.102 13.5223C16.1932 13.7658 15.2366 13.7672 14.3271 13.5264L15.9793 11.8768Z"></path>
                  <path d="M8.36434 16.5441C8.18462 16.5441 8.00895 16.4907 7.85954 16.3909C7.71012 16.291 7.59367 16.1491 7.5249 15.983C7.45613 15.817 7.43814 15.6343 7.47319 15.458C7.50824 15.2817 7.59476 15.1198 7.72182 14.9927L14.9922 7.72213C15.1636 7.55658 15.3932 7.46498 15.6315 7.46705C15.8697 7.46912 16.0977 7.5647 16.2662 7.7332C16.4347 7.9017 16.5302 8.12965 16.5323 8.36794C16.5344 8.60623 16.4428 8.8358 16.2772 9.00721L9.00686 16.2778C8.83646 16.4483 8.60535 16.544 8.36434 16.5441Z"></path>
                </svg>
                <div className="px-1">bitcoin.org</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  height="16px"
                  width="16px"
                  viewBox="0 0 24 24"
                  class="sc-16r8icm-0 coGWQa"
                >
                  <path
                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
            <button className="flex peer text-base font-bold items-center bg-slate-200 px-2 py-1 rounded mx-2 mt-2 hover:bg-slate-600 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                height="16px"
                width="16px"
                viewBox="0 0 24 24"
                class="sc-16r8icm-0 coGWQa"
              >
                <path
                  d="M16.4153 16.4153L20 20M18.5455 11.2727C18.5455 15.2893 15.2894 18.5454 11.2728 18.5454C7.25612 18.5454 4 15.2893 4 11.2727C4 7.2561 7.25612 4 11.2728 4C15.2894 4 18.5455 7.2561 18.5455 11.2727Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div className="px-1">Explorers</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                height="16px"
                width="16px"
                viewBox="0 0 24 24"
                class="sc-16r8icm-0 coGWQa"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
              <div className="hidden absolute peer-hover:flex hover:flex w-auto h-auto flex-col bg-white drop-shadow-lg">
                <div class="flex px-5 py-3 hover:bg-gray-200 font-bold items-center">
                  <div className="pr-1">blockchain.coinmarketcap.com</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height="16px"
                    width="16px"
                    viewBox="0 0 24 24"
                    class="sc-16r8icm-0 coGWQa"
                  >
                    <path
                      d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div class="flex px-5 py-3 hover:bg-gray-200 font-bold">
                  <div className="pr-1">blockchain.info</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height="16px"
                    width="16px"
                    viewBox="0 0 24 24"
                    class="sc-16r8icm-0 coGWQa"
                  >
                    <path
                      d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div class="flex px-5 py-3 hover:bg-gray-200 font-bold">
                  <div className="pr-1">live.blockcypher.com</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height="16px"
                    width="16px"
                    viewBox="0 0 24 24"
                    class="sc-16r8icm-0 coGWQa"
                  >
                    <path
                      d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div class="flex px-5 py-3 hover:bg-gray-200 font-bold">
                  <div className="pr-1">blockchair.com</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height="16px"
                    width="16px"
                    viewBox="0 0 24 24"
                    class="sc-16r8icm-0 coGWQa"
                  >
                    <path
                      d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div class="flex px-5 py-3 hover:bg-gray-200 font-bold">
                  <div className="pr-1">explorer.viabtc.com</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height="16px"
                    width="16px"
                    viewBox="0 0 24 24"
                    class="sc-16r8icm-0 coGWQa"
                  >
                    <path
                      d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
              <div>
              <button className="flex peer text-base font-bold items-center bg-slate-200 px-2 py-1 rounded mx-2 mt-2 hover:bg-slate-600 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  height="16px"
                  width="16px"
                  viewBox="0 0 24 24"
                  class="sc-16r8icm-0 coGWQa"
                >
                  <path
                    d="M12 12C9.7912 12 8 10.1681 8 7.90909V7.09091C8 4.83191 9.7912 3 12 3C14.2088 3 16 4.83191 16 7.09091V7.90909C16 10.1681 14.2088 12 12 12Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20 19.2884C20 17.8156 19.0424 16.5205 17.6528 16.1335C16.1376 15.7105 14.0688 15.2727 12 15.2727C9.9312 15.2727 7.8624 15.7105 6.3472 16.1335C4.9576 16.5205 4 17.8156 4 19.2884V21H20V19.2884Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <div className="px-1">Community</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  height="16px"
                  width="16px"
                  viewBox="0 0 24 24"
                  class="sc-16r8icm-0 coGWQa"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <div className="hidden absolute peer-hover:flex hover:flex w-auto h-auto flex-col bg-white drop-shadow-lg">
                <div class="flex px-5 py-3 hover:bg-gray-200 font-bold items-center">
                  <div className="pr-1">bitcointail.org</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height="16px"
                    width="16px"
                    viewBox="0 0 24 24"
                    class="sc-16r8icm-0 coGWQa"
                  >
                    <path
                      d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div class="flex px-5 py-3 hover:bg-gray-200 font-bold">
                  <div className="pr-1">reddit.com</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height="16px"
                    width="16px"
                    viewBox="0 0 24 24"
                    class="sc-16r8icm-0 coGWQa"
                  >
                    <path
                      d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <button className="flex text-base font-bold items-center bg-slate-200 px-2 py-1 rounded mx-2 mt-2 hover:bg-slate-600 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                height="16px"
                width="16px"
                viewBox="0 0 24 24"
                class="sc-16r8icm-0 coGWQa "
              >
                <path
                  d="M7 8L3 12L7 16M17 8L21 12L17 16"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10 19L14 5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div className="px-1">Source code</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                height="16px"
                width="16px"
                viewBox="0 0 24 24"
                class="sc-16r8icm-0 coGWQa"
              >
                <path
                  d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <button className="flex text-base font-bold items-center bg-slate-200 px-2 py-1 rounded mx-2 mt-2 hover:bg-slate-600 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                height="16px"
                width="16px"
                viewBox="0 0 24 24"
                class="sc-16r8icm-0 coGWQa"
              >
                <path
                  d="M13.75 3H6.75C6.28587 3 5.84075 3.18964 5.51256 3.52721C5.18437 3.86477 5 4.32261 5 4.8V19.2C5 19.6774 5.18437 20.1352 5.51256 20.4728C5.84075 20.8104 6.28587 21 6.75 21H17.25C17.7141 21 18.1592 20.8104 18.4874 20.4728C18.8156 20.1352 19 19.6774 19 19.2V8.4M13.75 3L19 8.4M13.75 3V8.4H19M15.5 12.9H8.5M15.5 16.5H8.5M10.25 9.3H8.5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div className="px-1">Whitepaper</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                height="16px"
                width="16px"
                viewBox="0 0 24 24"
                class="sc-16r8icm-0 coGWQa"
              >
                <path
                  d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="text-slate-500">Tag:</div>
          <div className="flex">
            <div className="text-slate-500 text-sm rounded-xl bg-slate-200 font-bold p-1 m-1 items-center">Mineable</div>
            <div className="text-slate-500 text-sm rounded-xl bg-slate-200 font-bold p-1 m-1 items-center">PoW</div>
            <div className="text-slate-500 text-sm rounded-xl bg-slate-200 font-bold p-1 m-1 items-center">SHA-256</div>
            <div className="text-slate-500 text-sm rounded-xl bg-slate-200 font-bold p-1 m-1 items-center">Store Of Value</div>
            <div className="text-blue-500 text-sm rounded-xl bg-blue-200 font-bold p-1 m-1 items-center">View all</div>
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-4 auto-cols-max">
          <div className="border-solid border-2 p-5">
            Market Cap<div className="font-bold">$405,932,886,740</div>
            <div className="text-green-600 pl-3 font-bold">0.92%</div>
          </div>
          <div className="border-solid border-2 p-5">
            Fully Diluted Market Cap
            <div className="font-bold">$445,742,510,548</div>
            <div className="text-green-600 pl-3 font-bold">0.90%</div>
          </div>
          <div className="border-solid border-2 p-5">
            Volume<div className="font-bold">$25,215,849,673</div>
            <div className="text-red-600 pl-3 font-bold">0.10%</div>
          </div>
          <div className="border-solid border-2 p-5">
            Circulating Supply
            <div className="font-bold flex">
              19,128,406.00 BTC<div className="justify-end">91%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <ul className="flex py-5 border-solid border-y border-slate-400">
          <li className="px-5 mx-1 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700">
            Overview
          </li>
          <li className="px-5 mx-1 py-3 rounded-xl font-bold hover:bg-slate-200 items-center">
            Markets
          </li>
          <li className="px-5 mx-1 py-3 rounded-xl font-bold hover:bg-slate-200">
            Historical Data
          </li>
          <li className="px-5 mx-1 py-3 rounded-xl font-bold hover:bg-slate-200">
            News
          </li>
          <li className="px-5 mx-1 py-3 rounded-xl font-bold hover:bg-slate-200">
            Price Estimates
          </li>
          <li className="px-5 mx-1 py-3 rounded-xl font-bold hover:bg-slate-200">
            More Info
          </li>
        </ul>
      </div>
      <div className="h-screen w-3/5 pl-20">
        <AdvancedRealTimeChart
          theme="light"
          autosize
          symbol="CRYPTOCAP:BTC"
        ></AdvancedRealTimeChart>
      </div>
      <div className="block">
        <div className="px-5 mx-1 py-3 font-bold text-3xl">
          People Also Watch
        </div>
        <div className="grid grid-cols-6 gap-4">
          <MiniChart
            colorTheme="light"
            width="100%"
            symbol="CRYPTOCAP:BTC"
          ></MiniChart>
          <MiniChart
            colorTheme="light"
            width="100%"
            symbol="NASDAQ:AAPL"
          ></MiniChart>
          <MiniChart
            colorTheme="light"
            width="100%"
            symbol="BINANCE:ETHUSDT"
          ></MiniChart>
          <MiniChart
            colorTheme="light"
            width="100%"
            symbol="BINANCE:SOLUSDT"
          ></MiniChart>
          <MiniChart
            colorTheme="light"
            width="100%"
            symbol="BINANCE:CHZUSDT"
          ></MiniChart>
          <MiniChart
            colorTheme="light"
            width="100%"
            symbol="BINANCE:SHIBUSDT"
          ></MiniChart>
        </div>
      </div>
      <Footer />
    </div>
  );
}
