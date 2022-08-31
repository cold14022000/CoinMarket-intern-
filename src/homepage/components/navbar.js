import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){
    return (
      <div className='grid grid-cols-2 h-20 pt-2'>
        <div className="flex justify-start items-center">
          <div className=' w-1/4' ><Link to="/intro"><img src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg?_=a768fb2' alt=''/></Link>
          </div>
          <div className=' flex '>
         
            {/* <!-- Mega menu here --> */}
        <div class="group">
            <button class=" group-hover:bg-amber-200 group-hover:text-black peer px-4 py-3 font-bold relative ">Crytocurrencies
            </button>
<<<<<<< Updated upstream
            <div
                class="hidden group-hover:flex flex-col absolute  p-10  bg-amber-200 text-black duration-300">
                
                <div class="grid grid-cols-2 md:grid-cols-2 gap-5">
                    <div class="flex flex-col">
                        <h3 class="mb-4 text-xl">Crytocurrencies</h3>
                        <div  class=" hover:bg-gray-200">Ranking</div>
                        <div  class=" hover:bg-gray-200">Recently Added</div>
                        <div  class=" hover:bg-gray-200">Categories</div>
                        <div  class=" hover:bg-gray-200">Spotlight</div>
                        <div  class=" hover:bg-gray-200">Gainers & Losers</div>
                        <div  class=" hover:bg-gray-200">Global Charts</div>
                        <div  class=" hover:bg-gray-200">Historical Snapshots</div>
                    </div>

                    <div class="flex flex-col">
                        <h3 class="mb-4 text-xl">NFT</h3>
                        <div  class=" hover:bg-gray-200">Overall NFT stats</div>
                        <div  class=" hover:bg-gray-200">Top Collections</div>
                        <div  class=" hover:bg-gray-200">Upcoming Sales</div>
                    </div>
=======
            <div class="hidden group-hover:flex flex-col absolute  p-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div class="grid grid-cols-2 md:grid-cols-2 gap-5">
                <div class="flex flex-col">
                  <h3 class="mb-4 text-xl">Crytocurrencies</h3>
                  <div class="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                    <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg' className=" text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-x-diamond-fill"></img>
                    Ranking
                  </div>
                  <div class="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                    <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuRecentlyAddedIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-x-diamond-fill"></img>
                    Recently Added
                  </div>
                  <div class="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                    <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCategoriesIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-x-diamond-fill"></img>
                    Categories
                  </div>
                  <div class="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                    <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuSpotlightIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-x-diamond-fill"></img>
                    Spotlight
                  </div>
                  <div class="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                    <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGainersLosersIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-x-diamond-fill"></img>
                    Gainers & Losers
                  </div>
                  <div class="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                    <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGlobalChartsIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-x-diamond-fill"></img>
                    Global Charts
                  </div>
                  <div class="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                    <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuHistoryIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-x-diamond-fill"></img>
                    Historical Snapshots
                  </div>
                </div>

                <div class="flex flex-col">
                  <h3 class="mb-4 text-xl">NFT</h3>
                  <div class="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                    <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNFTOverview.svg" className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-x-diamond-fill"></img>
                    Overall NFT stats
                  </div>
                  <div class="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                    <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNFTCollections.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-x-diamond-fill"></img>
                    Top Collections
                  </div>
                  <div class="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                    <i className="bg-teal-900 text-white mr-5 text-center p-2 rounded-full w-10 h-10 bi bi-x-diamond-fill"></i>
                    Upcoming Sales
                  </div>
>>>>>>> Stashed changes
                </div>
            </div>
        </div> 
        {/* <!-- end of dropdown --> */}

<<<<<<< Updated upstream
            <div>
              <button className="peer px-4 py-3 hover:bg-amber-200 font-bold  relative">Exchange</button>
              {/* <!-- the menu here --> */}
              <div class="hidden peer-hover:flex hover:flex w-[130px]
              flex-col bg-white drop-shadow-lg absolute">
                <div class=' group-hover:flex flex-auto absolute  p-10  bg-amber-200 text-black duration-300'>
                  <div class="px-4 py-3 hover:bg-gray-200 relative" >Spot</div>
                  <div class="px-4 py-3 hover:bg-gray-200 relative" >Derivatives</div>
                  <div class="px-4 py-3 hover:bg-gray-200 relative" >DEX</div>
               </div>
=======
          <div className="group ">
            <button className="relative flex justify-center w-full px-4 py-3 text-gray-700 font-bold">
              Exchange
            </button>

            <div className="hidden group-hover:flex absolute rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="h-auto group-hover:block absolute w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                  <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuSpotIcon.svg" className=" text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-diamond-fill"></img>
                  <div>Spot</div>
                </div>
                <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                  <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDerivativesIcon.svg' className=" text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-caret-up-fill"></img>
                  <div>Derivatives</div>
                </div>
                <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                  <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDexIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-x-diamond-fill"></img>
                  <div>DEX</div>
                </div>
>>>>>>> Stashed changes
              </div>
            </div>
            
            {/* <div>
              <button className="peer px-4 py-3 hover:bg-amber-200 font-bold  relative">Community</button>
              
              <div class="hidden peer-hover:flex hover:flex w-[130px]
              flex-col bg-white drop-shadow-lg absolute">
                <div class=' group-hover:flex flex-auto absolute  p-10  bg-amber-200 text-black duration-300'>
                  <div class="px-4 py-3 hover:bg-gray-200 " >Feeds</div>
                  <div class="px-4 py-3 hover:bg-gray-200 " >Articles</div>
                </div>
              </div>
            </div> */}

            <div className="group relative dropdown inline-block text-left">
                <div
                  className="inline-flex justify-center w-full rounded-md  px-4 py-2  text-xl text-gray-700 hover:text-blue-700 font-bold"
                >
                  Community
                </div>

<<<<<<< Updated upstream
              
                <div
                  className="hidden h-auto group-hover:block dropdown-menu absolute origin-top-right mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <ul className="top-0">
                    <li className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                      <i className="bg-blue-500 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-rss-fill"></i>
                      <div>Feeds</div>
                    </li>
                    <li className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                      <i className="bg-violet-600 text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-file-earmark-text-fill"></i>
                      <div>Articles</div>
                    </li>
                  </ul>
                </div>
              
=======
            <div className="hidden h-auto group-hover:block absolute w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                <img className=" text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-rss-fill" src='https://s2.coinmarketcap.com/static/cloud/img/menu/feed.svg' alt=''></img>
                <div>Feeds</div>
              </div>
              <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                <img src ='https://s2.coinmarketcap.com/static/cloud/img/menu/articles.svg' className=" text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-file-earmark-text-fill"></img>
                <div>Articles</div>
              </div>
>>>>>>> Stashed changes
            </div>

            {/* <!-- Mega menu here --> */}
            <div class="group">
            <button class=" group-hover:bg-amber-200 group-hover:text-black peer px-4 py-3 font-bold relative ">Products
            </button>
<<<<<<< Updated upstream
            <div
                class="hidden group-hover:flex flex-auto absolute  p-10  bg-amber-200 text-black duration-300">
                
                <div class="grid grid-cols-2 md:grid-cols-3 gap-5">
                    <div class="flex flex-col">
                        <h3 class="mb-4 text-xl">Products</h3>
                        <div  class=" hover:bg-gray-200">Converter</div>
                        <div  class=" hover:bg-gray-200">Mobile Apps</div>
                        <div  class=" hover:bg-gray-200">Blockchain Explorer</div>
                        <div  class=" hover:bg-gray-200">Job Board</div>
                    </div>
                    <div class="flex flex-col">
                        <h3 class="mb-4 text-xl">Campaigns</h3>
                        <div  class=" hover:bg-gray-200">Free Airdrops</div>
                        <div  class=" hover:bg-gray-200">Diamond Rewards</div>
                        <div  class=" hover:bg-gray-200">Referral Program</div>
                        <div  class=" hover:bg-gray-200">Learn & Earn</div>
                    </div>
                    <div class="flex flex-col">
                        <h3 class="mb-4 text-xl">Calendars</h3>
                        <div  class=" hover:bg-gray-200">ICO Calendar</div>
                        <div  class=" hover:bg-gray-200">Events Calendar</div>
                    </div>
=======
            <div class="hidden group-hover:flex flex-col absolute p-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div class="grid grid-cols-3 md:grid-cols-3 gap-5">
                <div class="flex flex-col">
                  <h3 class="mb-4 text-xl">Products</h3>
                  <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                    <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuConverterIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-file-earmark-text-fill"></img>
                    Converter
                  </div>
                  <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                    <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuMobileAppIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-file-earmark-text-fill"></img>
                    Mobile Apps
                  </div>
                  <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                    <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuExplorerIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-file-earmark-text-fill"></img>
                    Blockchain Explorer
                  </div>
                  <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                    <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuJobsBoardIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-file-earmark-text-fill"></img>
                    Job Board
                  </div>
                </div>
                <div class="flex flex-col">
                  <h3 class="mb-4 text-xl">Campaigns</h3>
                  <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                    <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuAirdropsIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-file-earmark-text-fill"></img>
                    Free Airdrops
                  </div>
                  <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                    <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuRewardsIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-file-earmark-text-fill"></img>
                    Diamond Rewards
                  </div>
                  <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                    <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuReferralIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-file-earmark-text-fill"></img>
                    Referral Program
                  </div>
                  <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                    <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuEarnCryptoIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-file-earmark-text-fill"></img>
                    Learn & Earn
                  </div>
                </div>
                <div class="flex flex-col">
                  <h3 class="mb-4 text-xl">Calendars</h3>
                  <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                    <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuICOIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-file-earmark-text-fill"></img>
                    ICO Calendar
                  </div>
                  <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                    <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuEvents2Icon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-file-earmark-text-fill"></img>
                    Events Calendar
                  </div>
>>>>>>> Stashed changes
                </div>
            </div>
        </div> 
        {/* <!-- end of dropdown --> */}
            

<<<<<<< Updated upstream
            <div>
              <button className="hover:bg-amber-200 hover:text-black peer px-4 py-3 font-bold relative">Learn</button>
              {/* <!-- the menu here --> */}
              <div class="hidden peer-hover:flex hover:flex w-[130px]
              flex-col bg-white drop-shadow-lg absolute">
                <div class="group-hover:flex flex-auto absolute  p-10  bg-amber-200 text-black duration-300">
                  <div class="px-4 py-3 hover:bg-gray-200" >Alexandria</div>
                  <div class="px-4 py-3 hover:bg-gray-200 relative" >News</div>
                  <div class="px-4 py-3 hover:bg-gray-200 relative" >Conference</div>
                  <div class="px-4 py-3 hover:bg-gray-200 relative" >Video</div>
                  <div class="px-4 py-3 hover:bg-gray-200 relative" >Market Updates</div>
                  <div class="px-4 py-3 hover:bg-gray-200 relative" >Glossary</div>
                  <div class="px-4 py-3 hover:bg-gray-200 relative" >Where to Buy</div>
                  <div class="px-4 py-3 hover:bg-gray-200 relative border-t-4" >Newsletter</div>
                  <div class="px-4 py-3 hover:bg-gray-200 relative" >Mmethodology</div>
                </div>
=======
          <div className="group">
            <button className="px-4 py-3 font-bold relative">Learn</button>
            {/* <!-- the menu here --> */}
            <div
              class="hidden group-hover:flex
              drop-shadow-lg absolute"
            >
              <div className="hidden h-auto group-hover:block absolute w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                  <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuAlexandriaIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-rss-fill"></img>
                  Alexandria
                </div>
                <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                  <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNewsIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-rss-fill"></img>
                  News
                </div>
                <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                  <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuConferenceIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-rss-fill"></img>
                  Conference
                </div>
                <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                  <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuVideosIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-rss-fill"></img>
                  Video
                </div>
                <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                  <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuMarketUpdatesIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-rss-fill"></img>
                  Market Updates
                </div>
                <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                  <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGlossaryIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-rss-fill"></img>
                  Glossary
                </div>
                <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                  <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuBuyIcon.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-rss-fill"></img>
                  Where to Buy
                </div>
                <div>
                <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                  <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNewsletterIcon.light.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-rss-fill"></img>
                  Newsletter
                </div>
                <div className="flex items-center p-2 hover:bg-slate-200 rounded-xl font-bold">
                  <img src='https://s2.coinmarketcap.com/static/cloud/img/menu/MenuMethodologyIcon.light.svg' className="text-white mr-5 text-center p-2 rounded-full w-12 h-12 bi bi-rss-fill"></img>
                  Methodology
                </div></div>
>>>>>>> Stashed changes
              </div>
            </div>

            {/* <div class="p-10">

              <div class="dropdown inline-block relative">
                <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                  <span class="mr-1">Dropdown</span>
                </button>
                <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li class=""><div class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >One</div></li>
                  <li class=""><div class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Two</div></li>
                  <li class=""><div class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Three is the magic number</div></li>
                </ul>
              </div> 

            </div>*/}

          </div>
          
            
        </div>
        <div>
              <div className='items-center flex justify-end'>
                  <div className='flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                    <div className='px-2'>Watchlist</div>
                  </div>

                  <div className='flex items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 24 24" className="sc-1prm8qw-0 eFjnQR">
                          <path d="M13.8182 2H13V11H22V10.1818C22 5.68182 18.3182 2 13.8182 2Z" fill="#A6B0C3"></path>
                          <path d="M11.35 5H10.5C5.825 5 2 8.825 2 13.5C2 18.175 5.825 22 10.5 22C15.175 22 19 18.175 19 13.5V12.65H11.35V5Z" fill="#A6B0C3"></path>
                      </svg>
                          <div className='px-2'>Portfolio</div>
                  </div>
                  <div className='bg-slate-300 rounded-lg flex w-48 h-14 items-center justify-between ml-2'> 
                      
                      <div className='flex m-3'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                          </svg>
                          <div className='font-bold ml-5 text-slate-600'>Search</div>
                      </div>
                      <div className='bg-slate-400 w-8 text-center rounded text-white mr-3'>/</div>
                  </div>
              </div>
          </div>   
      </div>
)
}