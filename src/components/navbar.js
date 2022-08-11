import React from 'react'
import "./navbar.css"

export default function Navbar(){
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <img src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg?_=a768fb2' alt="logo" className="logo"/>
          <div className='left-drop'>
            <e>Crytocurrencies</e>
            <e>Exchange</e>
            <e>Community</e>
            <e>Products</e>
            <e>Learn</e>
          </div>
          <div className='right-drop'>
            <e> Watchlist</e>
            <e> Portfolio</e>
            <e> Search</e>
          </div>
        </div>    
      </nav>
)
}