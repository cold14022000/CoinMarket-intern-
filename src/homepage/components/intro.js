import React from "react";
import Banner from "./banner";

export default function Intro(){
    return (
        <div className='py-6 flex '>
            <div className='w-1/2 px-8'>
                    <h1 className='text-5xl font-bold mb-12'> Top Collectable and NFTs Tokens by Market Capitalization</h1>
                    <div> Listed below are the top crypto coins and tokens used for Collectibles & NFTs. They are listed in size by market capitalization. To reorder the list, simply click on one of the options - such as 24h or 7d - to see the sector from a different perspective.Learn more about NFT collections 
                        <span className="text-blue-700"> here</span>
                    </div> 
            </div>
            <div className='w-1/2 h-1/2 pt-10 flex items-center'>
                        <Banner content = 'Market cap' value='20555623265555' percent='5.96'
                        img = 'https://s3.coinmarketcap.com/generated/sparklines/sector/marketcap/web/7d/60291fa0db1be76c46298e83.svg'/>
                        <Banner content = 'Trading volume' value='5,333,662,626' percent = '11.6'
                        img = 'https://s3.coinmarketcap.com/generated/sparklines/sector/volume/web/7d/60291fa0db1be76c46298e83.svg'/>
                    </div> 
        </div>
    )
}