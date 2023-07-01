export default function OtherCoinsInfo({ isDark }: { isDark: boolean }) {
  return (
    <div className="m-5 mx-20 flex flex-col gap-y-8 rounded-[12px] bg-[#1D2833] p-10">
      <ul className="flex border border-[0px] text-gray-400">
        <li className="w-[20%]">Asset</li>
        <li className="w-[24%]">Total Supply</li>
        <li className="w-[10%]">Oracle Price</li>
        <li className="w-[10%]">Reserves</li>
        <li className="w-[12%]">
          Collateral Factor
        </li>
        <li className="w-[12%]">
          Liquidation Factor
        </li>
        <li className="w-[12%]">Liquidation Penalty</li>
      </ul>
      <ul role="list" className="flex flex-col gap-y-8">
        {coins.map((coin) => (
          <li key={coin.shortName} className="flex">
            <div className="flex w-[20%] items-center gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={coin.icon}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-lg font-semibold leading-6 text-white">
                  {coin.name}
                </p>
                <p className="truncate text-sm font-semibold leading-5 text-gray-400">
                  {coin.shortName}
                </p>
              </div>
            </div>
            <div className="flex w-[24%] items-start">
              <div className="flex w-[70%] flex-col gap-y-2">
                <p className="text-lg font-semibold text-white">
                  ${coin.totalSupplyM}M
                </p>
                <div className="h-[3px] w-[100%] rounded-[8px] bg-[#2B3947]">
                  <div
                    style={{ width: coin.barW }}
                    className="h-full bg-[#00c289]"
                  ></div>
                </div>
              </div>
            </div>
            <div className="w-[10%] items-start">
              <p className="text-lg font-semibold text-white">
                ${coin.oraclePrice}
              </p>
            </div>
            <div className="w-[10%] items-start">
              <p className="text-lg font-semibold text-white">
                ${coin.reserves}
              </p>
            </div>
            <div className="w-[12%] items-start">
              <p className="text-lg font-semibold text-white">
                {coin.collateralFactor}%
              </p>
            </div>
            <div className="w-[12%] items-start">
              <p className="text-lg font-semibold text-white">
                {coin.liquidationFactor}%
              </p>
            </div>
            <div className="w-[12%] items-start">
              <p className="text-lg font-semibold text-white">
                {coin.liquidationPenalty}%
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const coins = [
  {
    name: "Wrapped Bitcoin",
    shortName: "WBTC",
    totalSupplyM: "201.3",
    oraclePrice: "30147.8",
    reserves: "0.02",
    collateralFactor: "70",
    liquidationFactor: "77",
    liquidationPenalty: "5",
    icon: "https://app.compound.finance/images/assets/asset_BTC.svg",
    barW: "64%",
  },
  {
    name: "Ether",
    shortName: "ETH",
    totalSupplyM: "123.84",
    oraclePrice: "1829.84",
    reserves: "0.00",
    collateralFactor: "83",
    liquidationFactor: "90",
    liquidationPenalty: "5",
    icon: "https://app.compound.finance/images/assets/asset_WETH.svg",
    barW: "19%",
  },
  {
    name: "Compound",
    shortName: "COMP",
    totalSupplyM: "45.08",
    oraclePrice: "55.04",
    reserves: "0.02",
    collateralFactor: "65",
    liquidationFactor: "70",
    liquidationPenalty: "12",
    icon: "https://app.compound.finance/images/assets/asset_COMP.svg",
    barW: "88%",
  },
  {
    name: "Uniswap",
    shortName: "UNI",
    totalSupplyM: "11.24",
    oraclePrice: "5.01",
    reserves: "0.00",
    collateralFactor: "75",
    liquidationFactor: "81",
    liquidationPenalty: "7",
    icon: "https://app.compound.finance/images/assets/asset_UNI.svg",
    barW: "94%",
  },
  {
    name: "Chainlink",
    shortName: "LINK",
    totalSupplyM: "4.41",
    oraclePrice: "6.06",
    reserves: "0.00",
    collateralFactor: "79",
    liquidationFactor: "85",
    liquidationPenalty: "7",
    icon: "https://app.compound.finance/images/assets/asset_LINK.svg",
    barW: "55%",
  },
];
