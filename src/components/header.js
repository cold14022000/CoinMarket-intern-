import React from "react";
import HeaderNum from "./header-number/header-num";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";

const cur = [
  { name: "USD" ,icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Dollar_Sign.svg/2048px-Dollar_Sign.svg.png"},
  { name: "AUD" ,icon: "http://cdn.onlinewebfonts.com/svg/img_464962.png"},
  { name: "JPY" ,icon: "https://cdn-icons-png.flaticon.com/512/25/25188.png"},
  { name: "EUR" ,icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Euro_symbol_black.svg/2010px-Euro_symbol_black.svg.png"},
  { name: "VND" ,icon: "https://cdn2.iconfinder.com/data/icons/major-currencies-30px/30/dong_vietnamese_business_VND-512.png"},
];

export default function Header() {
  const [selected, setSelected] = useState(cur[0]);
  return (
    <div className="bg-white flex justify-between border-b-4 h-12">
      <div className="flex items-center">
        <div className="flex text-sm mr-3 ml-10">
          Cryptos: <HeaderNum content=" 20,549" />
        </div>
        <div className="flex text-sm mr-3">
          Exchanges: <HeaderNum content=" 48%" />
        </div>
        <div className="flex text-sm mr-3">
          Market Cap: <HeaderNum content=" $1,143,554,939,656.198" />
        </div>
        <div className="flex text-sm mr-3">
          24h Vol: <HeaderNum content=" $78,661,723,467.43" />
        </div>
        <div className="flex text-sm mr-3">
          Dominance: <HeaderNum content=" BTC: 40.0% ETH: 20.1%" />
        </div>
        <div className="flex text-sm mr-3">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8BAAIAAACwsLCIiIjY2NgjIyPi4uJRUVLm5uZ2dnbs7Oyenp4FBAYuLi739/e+vr7Gxsb4+PgbGxuqqqrOzs5JSUkwMDBpaWm3t7eUlJRvb2+AgIApKSkeHh8ODQ5CQkNhYWE6OjtXV1dAGWjnAAADKElEQVR4nO3dcVeqQBCH4XVIqWuGSFpp2VW//3e8qMcDyFp4mGUX7vv7rwRnnixB6OwYc0ciGXUU+XNPX3pBiBAhQoQIESJEiBAhQoQIESLsqVBUE6BQZpq+MvEn4aJLoeaTJw2Fi+xTs2w1ToXTZsLkS+RBs24lAQhz4Mgh0b8w2crpDW6tWbkU78Iz0CHRtzD5vmziiuhZOM2KLUSeNYtf4ln4t3JO4IToWXh8Hy0TXzXLn+P973DimuhbWCNGmg0c411okqxK/NDswIQgLB0wnBADEFY3y4lzzR6CELolBiE0T1fEVLGJMIS1V1GRGIiw9iou1ZoIReiOGIzQxFfEsVIT4QhdEQMSmrETYkhCN8SghE6IYQnN8ooYt28iMOE1cdW+idCEVaI8tm8iOKFJSzsNU1gmDlRY6mmowjHCu9KhcJNMa7Hu1leh9f65dbfeCuuRiXU3hPcFYasgRIiwURC2yo0j/lCFkr29nFLc2B6a8PJfT8XV7aEKY4QI7wvCVkGIEGGj/IfCJ8WMgxTqZhSeUJdYeeJQhM6CECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChB0KD70UllZKtq/SuCyE770UJsVafPbpv6/F45+9FJqS0DoatxjWrTGo24fwvagpsqtNj1uXfgIKkyx9CNNSTRHJHuZxcn5kMU3XUn6J2wO9CE1lTvV5tc3vl/3+bXK1YKZs+ir8qBW1rwfqZP5hJ0Lz2Kiq7BSAnoTVYeO3dpCkv8JfZ3sct1caCexJaKbZb/NL7GcD/REej4o/ldYbsO5PaNLZTaPIXmHGqndhXvxLLMj8e1vbyVwfhfnHiF31MHj6YqX1CxqCME+6PmyLFcAnm0jlGBGS8JhFvEyjaJ7GC11dOEKXQYgQIUKECBEiRNgHYf3CXm+F0bM1m+6EB3sHCrcmzlk1GMnkmHgjWsJmF2G7j8wQIkToOwgRIvQfhAgR+g9ChAj9ByFChP6DECFC/0Foyz8514uXq214twAAAABJRU5ErkJggg=="
            alt=""
            width="10px"
            height="8px"
          />
          ETH Gas: <HeaderNum content=" 8 Gwei" />
        </div>
      </div>
      <div>
        <div className="flex items-center h-12">
          <div className="mr-5 font-bold " for="language"></div>
          <select className="language" id="language">
            <option className="ml-1 mr-2" value="en">
              English
            </option>
            <option className="ml-1 mr-2" value="ru">
              Русский
            </option>
            <option className="ml-1 mr-2" value="de">
              Deutsch
            </option>
            <option className="ml-1 mr-2" value="fr">
              Français
            </option>
            <option className="ml-1 mr-2" value="es">
              Español
            </option>
          </select>
          <div className="mr-5 font-bold"></div>
          {/* <select className="cur" id="cur">
            <option className="ml-1 mr-2" value="USD">
              USD
            </option>
            <option className="ml-1 mr-2" value="RUP">
              RUP
            </option>
            <option className="ml-1 mr-2" value="YEN">
              YEN
            </option>
            <option className="ml-1 mr-2" value="VND">
              VND
            </option>
            <option className="ml-1 mr-2" value="EUR">
              EUR
            </option>
          </select> */}

          <div className="w-18 mr-2">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left hover:bg-slate-300 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate flex"  ><img className='h-3 w-3 ' src={selected.icon} alt=""/>{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <SelectorIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {cur.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-2 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate flex ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              <img className='h-3 w-3' src={person.icon} alt=""/>{person.name}
                            </span>
                           
                        
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>

          <div className="flex items-center border-l-2">
            <img
              className="mx-5"
              src="https://s2.coinmarketcap.com/static/cloud/img/loyalty-program/diamond-icon.svg"
              alt=""
            />
            <button className="p-2 w-20 border-blue-700 text-blue-700 rounded-xl border-solid text-sm border-2 font-bold">
              Login
            </button>
            <button className="p-2 w-20 bg-blue-700 text-white rounded-xl text-sm border-2 font-bold">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
