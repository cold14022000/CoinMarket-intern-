import React from "react";

export default function DailyUpdate() {
    const content = 10
    const percent = 0.52
    return (
        <div className="pl-10">
            <h1 className="text-xl font-bold pb-2 "> Today's Cryptocurrency Prices by Market Cap </h1>
            <text>The global crypto market cap is ${content}, a {percent}% increase over the last day. </text>
            <inline className='text-blue-700'> Read More</inline>
        </div>
    )
} 