import { Slider } from "@mui/material";
import React from "react";
import { Chart } from "chart.js";

export default function MoreOfCoin({ isDark }: { isDark: boolean }) {
  const [utilization, setUtilization] = React.useState(1);
  const [borrowAPR, setBorrowAPR] = React.useState(1.03);
  const [earnAPR, setEarnAPR] = React.useState(0.07);

  const canvasEl = React.useRef();

  const onChangeUtilization = (e: any, value: number) => {
    e.preventDefault();

    setUtilization(value);
    setBorrowAPR(1.03 + (value - 1) * 0.03);
    setEarnAPR(0.07 + (value - 1) * 0.03);
  };

  React.useEffect(() => {
    const ctx = canvasEl.current?.getContext("2d");

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            data: [
              1.03, 1.06, 1.09, 1.12, 1.15, 1.18, 1.21, 1.24, 1.27, 1.3, 1.33,
              1.36, 1.39, 1.42, 1.45, 1.48, 1.51, 1.54, 1.57, 1.6, 1.63, 1.66,
              1.69, 1.72, 1.75, 1.78, 1.81, 1.84, 1.87, 1.9, 1.93, 1.96, 1.99,
              2.02, 2.05, 2.08, 2.11, 2.14, 2.17, 2.2, 2.23, 2.26, 2.29, 2.32,
              2.35, 2.38, 2.41, 2.44, 2.47, 2.5, 2.53, 2.56, 2.59, 2.62, 2.65,
              2.68, 2.71, 2.74, 2.77, 2.8, 2.83, 2.86, 2.89, 2.92, 2.95, 2.98,
              3.01, 3.04, 3.07, 3.1, 3.13, 3.16, 3.19, 3.22, 3.25, 3.28, 3.31,
              3.34, 3.37, 3.4, 3.43, 3.46, 3.49, 3.52, 3.55, 3.58, 3.61, 3.64,
              3.67, 3.7, 3.73, 3.76, 3.79, 3.82, 3.85, 3.88, 3.91, 3.94, 3.97,
              4.0, 4.03, 4.06, 4.09, 4.12, 4.15,
            ],
            backgroundColor: "#1D2833",
            borderWidth: 2,
            borderColor: "#00c289",
            // lineTension: 0.5,
            pointRadius: 0,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
      },
    });

    return function cleanup() {
      chart.destroy();
    };
  });

  return (
    <div className="m-5 mx-20 flex rounded-[12px] bg-[#1D2833] p-10">
      <ul role="list" className="flex w-[55%] flex-col gap-y-5">
        <li className="flex">
          <div className="flex w-[25%] flex-col items-start gap-y-2">
            <p className="text-sm font-semibold text-gray-400">Total Earning</p>
            <p className="text-xl font-semibold text-white">
              ${more.earn.totalEarning}M
            </p>
          </div>
          <div className="flex w-[25%] flex-col items-start gap-y-2">
            <p className="text-sm font-semibold text-gray-400">Earn APR</p>
            <div className="flex items-center gap-x-2">
              <img
                className="h-5 w-5 rounded-full"
                src="https://app.compound.finance/images/assets/asset_WETH.svg"
                alt=""
              />
              <p className="text-xl font-semibold text-white">
                {more.earn.earnAPR}%
              </p>
            </div>
          </div>
          <div className="flex w-[25%] flex-col items-start gap-y-2">
            <p className="text-sm font-semibold text-gray-400">
              Earn Distribution
            </p>
            <div className="flex items-center gap-x-2">
              <img
                className="h-5 w-5 rounded-full"
                src="https://app.compound.finance/images/assets/asset_COMP.svg"
                alt=""
              />
              <p className="text-xl font-semibold text-white">
                {more.earn.earnDistribution}%
              </p>
            </div>
          </div>
          <div className="flex w-[25%] flex-col items-start gap-y-2">
            <p className="text-sm font-semibold text-gray-400">Reserves</p>
            <p className="text-xl font-semibold text-white">
              ${more.earn.reserves}M
            </p>
          </div>
        </li>
        <li className="flex">
          <div className="flex w-[25%] flex-col items-start gap-y-2">
            <p className="text-sm font-semibold text-gray-400">
              Total Borrowing
            </p>
            <p className="text-xl font-semibold text-white">
              ${more.borrow.totaBorrowing}M
            </p>
          </div>
          <div className="flex w-[25%] flex-col items-start gap-y-2">
            <p className="text-sm font-semibold text-gray-400">Borrow APR</p>
            <div className="flex items-center gap-x-2">
              <img
                className="h-5 w-5 rounded-full"
                src="https://app.compound.finance/images/assets/asset_WETH.svg"
                alt=""
              />
              <p className="text-xl font-semibold text-white">
                {more.borrow.borrowAPR}%
              </p>
            </div>
          </div>
          <div className="flex w-[25%] flex-col items-start gap-y-2">
            <p className="text-sm font-semibold text-gray-400">
              Borrow Distribution
            </p>
            <div className="flex items-center gap-x-2">
              <img
                className="h-5 w-5 rounded-full"
                src="https://app.compound.finance/images/assets/asset_COMP.svg"
                alt=""
              />
              <p className="text-xl font-semibold text-white">
                {more.borrow.borrowDistribution}%
              </p>
            </div>
          </div>
          <div className="flex w-[25%] flex-col items-start gap-y-2">
            <p className="text-sm font-semibold text-gray-400">Oracle Price</p>
            <p className="text-xl font-semibold text-white">
              ${more.borrow.oraclePrice}M
            </p>
          </div>
        </li>
      </ul>
      <div className="h-[100%] w-[45%] text-white">
        <div className="flex w-[70%] gap-x-4">
          <p>Utilization</p>
          <Slider
            size="small"
            defaultValue={utilization}
            onChange={(e, value) => onChangeUtilization(e, value as number)}
            aria-label="Small"
            valueLabelDisplay="auto"
            style={{ color: "white" }}
          />
          {/* <canvas id="canva" ref={canvasEl} width="50"></canvas> */}
        </div>
      </div>
    </div>
  );
}

const more = {
  earn: {
    totalEarning: "212.13",
    earnAPR: "3.02",
    earnDistribution: "0.00",
    reserves: "1.38",
  },
  borrow: {
    totaBorrowing: "188.84",
    borrowAPR: "3.96",
    borrowDistribution: "5.06",
    oraclePrice: "1.00",
  },
};
