import React from "react";

export default function DailyUpdate() {
    const content = 10
    const percent = 0.52
    return (
        <div className="daily-update">
            <h1> Today's Cryptocurrency Prices by Market Cap </h1>
            <text>The global crypto market cap is ${content}, a {percent}% increase over the last day. </text>
            <inline> Read More</inline><div className='flex'>
            </div>
        </div>
    )
}