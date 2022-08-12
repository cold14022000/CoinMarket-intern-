import React from "react"
import Banner from "./banner"

export default function Header() {
    return (
        <div className="header">
            <div className="header-bar">
                <div>Cryptos:  20,549</div>
                <div>Exchanges:  507</div>
                <div>Market Cap:  $1,143,554,939,656.198</div>
                <div>24h Vol:  $78,661,723,467.43</div>
                <div>Dominance:  BTC: 40.0% ETH: 20.1%</div>
                <div>ETH Gas:  8 Gwei</div>
            
                <div className="header-bar-right">
                    <div>English</div>
                    <div>USD</div>
                    <img src='https://s2.coinmarketcap.com/static/cloud/img/loyalty-program/diamond-icon.svg' alt =""/>
                    <button>Login</button>
                    <button>Sign up</button>
                </div>
            </div>
            <div>
                <h1> Top Collectable and NFTs Tokens by Market Capitalization</h1>
                <p> Listed below are the top crypto coins and tokens used for Collectibles & NFTs. They are listed in size by market capitalization. To reorder the list, simply click on one of the options - such as 24h or 7d - to see the sector from a different perspective.Learn more about NFT collections here.</p>
                <div className='w-1/2 h-1/2 flex'>
                    <Banner content = 'Market cap' value='20555623265555' percent='5.96'
                    img = 'https://s3.coinmarketcap.com/generated/sparklines/sector/marketcap/web/7d/60291fa0db1be76c46298e83.svg'/>
                    <Banner content = 'Trading volume' value='5,333,662,626' percent = '11.6'
                    img = 'https://s3.coinmarketcap.com/generated/sparklines/sector/volume/web/7d/60291fa0db1be76c46298e83.svg'/>
                </div>            
            </div>
        </div>
    )
}
