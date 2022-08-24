import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="bg-slate-100 justify-between flex">
        <div className="justify-between place-content-center p-20 w-3/5">
          <h1 className="text-3xl pb-5">
            Be the first to know about{" "}
            <div className="text-3xl font-bold inline">
              crypto news every day
            </div>
          </h1>
          <p className="text-xl pb-10">
            Get crypto analysis, news and updates right to your inbox! Sign up
            here so you don't miss a single newsletter.
          </p>
          <button className=" bg-blue-600 p-6 text-white text-xl font-bold border-solid rounded-xl hover:bg-blue-500">
            Subscribe now
          </button>
        </div>
        <img
          classname="place-self-start "
          src="https://s2.coinmarketcap.com/static/cloud/img/newsletter_bg_light.svg?_=a3f4e79 "
          alt=""
        />
      </div>
      <div className="grid grid-cols-2 pt-10">
        <div>
        <img
          className=""
          src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg?_=a768fb2"
          alt=""
        /></div>
        <div className="flex justify-end">
          <div className="block justify-between px-5">
            <h1 className="text-2xl font-bold py-5">Products</h1>
            <div className="text-slate-600 text-xl py-2">
              Blockchain Explorer
            </div>
            <div className="text-slate-600 text-xl py-2">Crypto API</div>
            <div className="text-slate-600 text-xl py-2">Crypto Indices</div>
            <div className="text-slate-600 text-xl py-2">Jobs Board</div>
            <div className="text-slate-600 text-xl py-2">Sitemap</div>
          </div>
          <div className="block justify-between px-5">
            <h1 className="text-2xl font-bold py-5">Company</h1>
            <div className="text-slate-600 text-xl py-2">About us</div>
            <div className="text-slate-600 text-xl py-2">Terms of use</div>
            <div className="text-slate-600 text-xl py-2">Privacy Policy</div>
            <div className="text-slate-600 text-xl py-2">Community Rules</div>
            <div className="text-slate-600 text-xl py-2">Disclaimer</div>
            <div className="text-slate-600 text-xl py-2">Methodology</div>
            <div className="text-slate-600 text-xl py-2 flex">
              <div className="pr-1">Careers</div> 
              <div className="inline rounded-xl border-solid bg-blue-600 p-1 w-24 text-white text-sm font-bold">
                We’re hiring!
              </div>
            </div>
          </div>
          <div className="block justify-between px-5">
            <h1 className="text-2xl font-bold py-5">Support</h1>
            <div className="text-slate-600 text-xl py-2">Request Form</div>
            <div className="text-slate-600 text-xl py-2">Contact Support</div>
            <div className="text-slate-600 text-xl py-2">FAQ</div>
            <div className="text-slate-600 text-xl py-2">Glossary</div>
            <div className="text-slate-600 text-xl py-2">Advertising</div>
          </div>
          <div className="block justify-between px-5">
            <h1 className="text-2xl font-bold py-5">Socials</h1>
            <div className="text-slate-600 text-xl py-2">Facebook</div>
            <div className="text-slate-600 text-xl py-2">Twitter</div>
            <div className="text-slate-600 text-xl py-2">Telegram</div>
            <div className="text-slate-600 text-xl py-2">Instagram</div>
            <div className="text-slate-600 text-xl py-2">Interactive Chat</div>
          </div>
        </div>
      </div>
      <div className="py-10 text-slate-600">
        © 2022 CoinMarketCap. All rights reserved
      </div>
    </div>
  );
}
