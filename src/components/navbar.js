import React from 'react'

export default function Navbar(){
    return (
      <nav className='flex justify-center  h-28    '>
        <div className="flex">
          <img className='w-72' src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg?_=a768fb2' alt="logo"/>
          <div className=' flex items-center justify-left'>
            <div className='px-5 hover:bg-slate-200 h-max'>Crytocurrencies</div>
            <div className='px-5 hover:bg-slate-200 h-max'>Exchange</div>
            <div className='px-5 hover:bg-slate-200 h-max'>Community</div>
            <div className='px-5 hover:bg-slate-200 h-max'>Products</div>
            <div className='px-5 hover:bg-slate-200 h-max'>Learn</div>
          </div>
            <div className='items-center flex'>
              <div className='flex '>
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
                  <div className='bg-slate-300 rounded-lg flex w-96 h-14 items-center justify-between'> 
                      
                      <div className='flex m-3'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                          </svg>
                          <div className='font-bold mx-5 text-slate-600'>Search</div>
                      </div>
                      <div className='bg-slate-400 w-8 text-center rounded text-white mr-3'>/</div>
                  </div>
              </div>
          </div>
        </div>    
      </nav>
)
}