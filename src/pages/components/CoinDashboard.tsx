import { ShareIcon } from "@heroicons/react/24/outline";
import { Chart, ChartConfiguration } from "chart.js/auto";
import Image from "next/image";
import React from "react";

export default function CoinDashboard({ isDark }: { isDark: boolean }) {
  React.useEffect(() => {
    const collateralCanvas = document.getElementById(
      "CollateralGraph"
    ) as HTMLCanvasElement;
    const borrowCanvas = document.getElementById(
      "BorrowingGraph"
    ) as HTMLCanvasElement;

    const ctx = collateralCanvas.getContext("2d") as CanvasRenderingContext2D;
    const borrowCtx = borrowCanvas.getContext("2d") as CanvasRenderingContext2D;
    
    const collateralChart = new Chart(ctx, config);
    const borrowingChart = new Chart(borrowCtx, Bconfig);

    return function cleanup() {
      collateralChart.destroy();
      borrowingChart.destroy();
    };
  });

  return (
    <div className="m-5 mx-20 flex flex-col p-10">
      <div className="flex gap-x-4">
        <div className="hidden h-min rounded rounded-[40px] bg-[#1D2833] px-2 py-2 lg:flex">
          <Image
            style={{ position: "relative", left: "2px" }}
            width={40}
            height={8}
            src="https://app.compound.finance/images/assets/asset_USDC.svg"
            alt="eth-icon"
          />
          <Image
            style={{ position: "relative", right: "2px" }}
            className=""
            width={40}
            height={8}
            src="https://app.compound.finance/images/assets/asset_WETH.svg"
            alt="eth-icon"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-x-2">
            <h2 className="text-[2.6rem] font-semibold text-white">USDC</h2>
            <h3
              style={{ position: "relative", bottom: 2 }}
              className="text-[2.4rem] text-gray-400"
            >
              |
            </h3>
            <h3 className="text-[2.4rem] font-semibold text-gray-400">
              Ethereum
            </h3>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-md font-semibold text-gray-400">
              0xc3d688B66703497DAA19211EEdff47f25384cdc3
            </p>
            <ShareIcon
              onClick={() => {
                window.open(
                  "https://etherscan.io/address/0xc3d688B66703497DAA19211EEdff47f25384cdc3",
                  "_blank"
                );
              }}
              className="h-4 w-auto font-semibold text-gray-400 hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="mb-2 mt-10 flex justify-between text-white">
        <div className="flex w-[45%] flex-col">
          <div className="flex flex-col">
            <p className="font-semibold text-[#00c289]">Total Collateral</p>
            <p className="text-[40px] font-semibold">$404.37M</p>
          </div>
          <div className="mt-10">
            <canvas id="CollateralGraph" height="70" />
          </div>
        </div>
        <div className="flex w-[45%] flex-col">
          <div className="flex flex-col">
            <p className="font-semibold text-[#8F66FF]">Total Borrowing</p>
            <p className="text-[40px] font-semibold">$194.84M</p>
          </div>
          <div className="mt-10">
            <canvas id="BorrowingGraph" height="70" />
          </div>
        </div>
      </div>
    </div>
  );
}

const dates = [
  "2 June",
  "3 June",
  "4 June",
  "5 June",
  "6 June",
  "7 June",
  "8 June",
  "9 June",
  "10 June",
  "11 June",
  "12 June",
  "13 June",
  "14 June",
  "15 June",
  "16 June",
  "17 June",
  "18 June",
  "19 June",
  "20 June",
  "21 June",
  "22 June",
  "23 June",
  "24 June",
  "25 June",
  "26 June",
  "27 June",
  "28 June",
  "29 June",
  "30 June",
  "1 July",
];

const weights = [
  453.51, 374.09, 386.22, 378.16, 373.72, 371.79, 445.97, 329.99, 354.51,
  420.18, 328.06, 349.24, 372.62, 436.62, 411.15, 391.48, 389.01, 379.05,
  391.19, 390.79, 395.73, 384.45, 408.53, 367.92, 433.05, 377.19, 371.08,
  386.77, 440.38, 347.15,
];

const borrowWeights = [
  200.84, 240.01, 236.38, 230.04, 212.87, 202.88, 232.09, 201.9, 196.43, 189.46,
  233.98, 227.82, 213.65, 192.55, 232.44, 230.29, 191.67, 218.77, 238.81,
  194.09, 233.29, 227.75, 186.88, 231.25, 202.21, 237.26, 204.67, 195.43,
  208.38, 194.32,
];

const earnAPR = [
  3.85, 3.39, 3.5, 4.92, 3.11, 2.47, 4.04, 3.49, 4.58, 4.35, 3.15, 3.07, 3.13,
  4.51, 4.84, 3.18, 4.78, 2.96, 4.53, 3.62, 4.34, 2.59, 3.55, 4.85, 3.12, 4.34,
  4.24, 3.21, 2.83, 2.25,
];

const borrowAPR = [
  3.69, 3.76, 3.88, 3.8, 3.79, 3.78, 3.86, 3.87, 3.92, 3.94, 3.91, 3.97, 3.76,
  3.85, 3.88, 3.77, 3.83, 3.93, 3.9, 3.68, 3.95, 3.76, 3.85, 3.71, 3.96, 3.89,
  3.75, 3.82, 3.73, 3.72,
];

const data = {
  labels: dates,
  datasets: [
    {
      data: weights,
      stack: "combined",
      backgroundColor: "#1D2833",
    },
    {
      type: "line",
      stack: "combined",
      data: earnAPR,
      borderWidth: 2,
      borderColor: "#00c289",
      lineTension: 0.5,
      pointRadius: 0,
    },
  ],
};

const Bdata = {
  labels: dates,
  datasets: [
    {
      data: borrowWeights,
      stack: "combined",
      backgroundColor: "#1D2833",
    },
    {
      type: "line",
      stack: "combined",
      data: borrowAPR,
      borderWidth: 2,
      borderColor: "#8F66FF",
      lineTension: 0.5,
      pointRadius: 0,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
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
} as ChartConfiguration;

const Bconfig = {
  type: "bar",
  data: Bdata,
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
} as ChartConfiguration;
