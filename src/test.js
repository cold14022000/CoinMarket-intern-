import { useEffect } from "react";
import React from "react";

export default function Test() {
    
    useEffect(() => {
        setTimeout(() => {
          // eslint-disable-next-line no-undef
          new TradingView.widget({
            autosize: true,
            symbol: "CRYPTOCAP:BTC",
            interval: "D",
            timezone: "Asia/Ho_Chi_Minh",
            theme: "light",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tradingview_e9533",
          });
        }, 2000);
      }, []);
      return(
<div style={{ width: 600, height: 400}}>
        <div className="tradingview-widget-container">
          <div id="tradingview_e9533"></div>
          <div className="tradingview-widget-copyright">
            <a
              href="https://www.tradingview.com/symbols/CRYPTOCAP-BTC/"
              rel="noopener"
              target="_blank"
            >
              <span class="blue-text">BTC Chart</span>
            </a>{" "}
            by TradingView
          </div>
        </div>
      </div>
      )
}