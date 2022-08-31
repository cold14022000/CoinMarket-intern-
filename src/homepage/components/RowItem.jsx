import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { eventList } from "../../utils/constants/eventLists";
import StaticStore from "../../utils/StaticStore";
import numeral from "numeral";
import DetailPage from "../../detailpage/detailpage";

export const RowItem = ({ exchange, currency1, currency2, index }) => {
  const navigate = useNavigate();
  const [rowData, setRowData] = useState({});
  const [tempData, setTempData] = useState({});
  const numFormat = (number) => {
    return numeral(number).format("$0,0.00");
  };
  useEffect(() => {
    const listenData = StaticStore.appEvent.subscribe(async (msg) => {
      if (msg.type === eventList.UPDATE_MARKET_DATA) {
        const [exchangeSplit, tradeTypeSplit, currency1Split, currency2Split] =
          msg.symbol_id?.split("_");
        if (currency1Split) {
          const dataRowTempt = {
            ...StaticStore.StructureData[
              `${exchange}_SPOT_${currency1}_${currency2}`
            ],
            info: StaticStore.SymbolInfo[currency1]
          };
          setRowData({ ...dataRowTempt });
          // console.log('gan data coin')
        }
        
        // console.log("UPDATE_MARKET_DATA", msg, StaticStore.StructureData);
        // Thực hiện logic set lại dataTable
        // console.log(rowData);
      }
    });

    return () => {
      listenData.unsubscribe();
    };
  }, [currency1]);

  // console.log(rowData)
  const redOrGreen = (num) => {
    if (num > 0) return "text-green-600";
    if (num < 0) return "text-red-600";
    if (num === 0) return "text-yellow-500";
  };
  return (
    <tr
      key={String(index)}
      className="items-center text-right cursor-pointer"
      >
      
    
      {/* {console.log("rowData", rowData)} */}
      <td className="px-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-star"
          viewBox="0 0 16 16"
        >
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
        </svg>
      </td>
      <td></td>
      <Link to="/detail" state={{from:rowData, exchange,currency1,currency2}}>
      <td className="flex items-center">
        <img
          className="p-2 h-16"
          src={rowData?.info?.logo}
          alt={rowData?.info?.symbol}
        />
        
        <div className="items-center">{rowData?.info?.name}</div>
        <div className="text-slate-500 px-5 text-lg">
          {rowData?.info?.symbol}
        </div>
      </td></Link>
      <td className="px-5 font-bold">
        {" "}
        <div>{numFormat(rowData?.trade?.price)}</div>
      </td>
      <td
        className={redOrGreen(
          (
            (rowData?.ohlcv?.["1HRS"]?.price_open /
              rowData?.ohlcv?.["1HRS"]?.price_close) *
              100 -
            100
          ).toFixed(2)
        )}
      >
        {(
          (rowData?.ohlcv?.["1HRS"]?.price_open /
            rowData?.ohlcv?.["1HRS"]?.price_close) *
            100 -
          100
        ).toFixed(2)}
      </td>
      <td
        className={redOrGreen(
          (
            (rowData?.ohlcv?.["12HRS"]?.price_open /
              rowData?.ohlcv?.["12HRS"]?.price_close) *
              100 -
            100
          ).toFixed(2)
        )}
      >
        {(
          (rowData?.ohlcv?.["12HRS"]?.price_open /
            rowData?.ohlcv?.["12HRS"]?.price_close) *
            100 -
          100
        ).toFixed(2)}
      </td>
      <td
        className={redOrGreen(
          (
            (rowData?.ohlcv?.["1DAY"]?.price_open /
              rowData?.ohlcv?.["1DAY"]?.price_close) *
              100 -
            100
          ).toFixed(2)
        )}
      >
        {(
          (rowData?.ohlcv?.["1DAY"]?.price_open /
            rowData?.ohlcv?.["1DAY"]?.price_close) *
            100 -
          100
        ).toFixed(2)}
      </td>
      <td>chưa có data</td>
      <td>chưa có data</td>
      <td>chưa có data</td>
      <td>
        <img
          src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1027.svg"
        />
      </td>
      <td>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
      </td>
    </tr>
  );
  
};
