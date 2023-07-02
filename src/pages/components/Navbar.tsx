import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  ArrowDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";
import { useAccount, useDisconnect } from "wagmi";
import WalletMenu from "./WalletMenu";

export default function NavBar({
  isDark,
  showModal,
}: {
  isDark: boolean;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  React.useEffect(() => {}, []);

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="ml-4 h-[64px] max-w-[100%] px-2 sm:px-6 md:m-auto md:h-auto md:max-w-[90%] lg:px-8 lg:py-4">
            <div className="relative flex h-16 items-center md:justify-between">
              {/* Branding Icons */}
              <div className="flex items-center justify-center sm:justify-start md:flex-1">
                <div className="flex flex-shrink-0">
                  <Image
                    className="block h-8 w-auto lg:hidden"
                    width={-1}
                    height={8}
                    src="https://svgshare.com/i/upN.svg"
                    alt="Your Company"
                  />
                  <div className="hidden lg:flex lg:items-center">
                    <Image
                      className="mr-2 block"
                      width={24}
                      height={8}
                      src="https://svgshare.com/i/upN.svg"
                      alt="Compound"
                    />
                    <h3 className="text-lg font-semibold text-white">
                      Compound
                    </h3>
                  </div>
                </div>
                {/* Nav items (not phone) */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Coins Button and Wallet Button */}
              <div className="flex items-center gap-x-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {open ? (
                  <></>
                ) : (
                  <Menu as="div" className="relative ml-3">
                    <div className="rounded-[12px] px-4 py-2 hover:bg-gray-800">
                      <Menu.Button className="flex items-center gap-x-2 rounded-full pr-2 text-white">
                        <div className="hidden h-min rounded rounded-[32px] bg-[#1D2833] px-2 py-2 lg:flex">
                          <Image
                            style={{ position: "relative", left: "2px" }}
                            width={32}
                            height={6}
                            src="https://app.compound.finance/images/assets/asset_USDC.svg"
                            alt="eth-icon"
                          />
                          <Image
                            style={{ position: "relative", right: "2px" }}
                            className=""
                            width={32}
                            height={6}
                            src="https://app.compound.finance/images/assets/asset_WETH.svg"
                            alt="eth-icon"
                          />
                        </div>
                        <p className="text-md font-semibold">USDC</p>
                        <p className="text-sm font-semibold text-gray-400">
                          Etherium
                        </p>
                        <ArrowDownIcon className="h-3 w-3" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 text-white shadow-lg">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-white"
                              )}
                            >
                              Loren Sum
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
                <div className="hidden md:block">
                  {isConnected ? (
                    <WalletMenu
                      address={address}
                      disconnect={disconnect}
                      isConnected={isConnected}
                      showModal={showModal}
                    />
                  ) : (
                    <button
                      onClick={() => showModal(true)}
                      className="rounded-full bg-gray-900 p-1 p-3 px-6 text-sm text-gray-400 outline outline-[1px] outline-[#00c289] hover:text-white"
                    >
                      <p className="hidden lg:block">Connect Wallet</p>
                      <div className="flex lg:hidden">
                        <Image
                          className=""
                          width={12}
                          height={12}
                          src="https://w7.pngwing.com/pngs/205/486/png-transparent-computer-icons-wallet-wallet-angle-text-rectangle-thumbnail.png"
                          alt="Workflow"
                        />
                      </div>
                    </button>
                  )}
                </div>
              </div>

              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {open ? (
                  <></>
                ) : (
                  <WalletMenu
                    address={address}
                    disconnect={disconnect}
                    isConnected={isConnected}
                    showModal={showModal}
                  />
                )}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel
            className="sm:hidden"
            style={{
              height: "calc(100vh - 70px)",
            }}
          >
            <div className="flex h-[100%] flex-col justify-center pl-8">
              {navigation.map((item) => (
                <Disclosure.Button
                  as="a"
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-[#00c289]"
                      : "text-gray-300 hover:text-white",
                    "block rounded-md text-[40px] font-semibold"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

const navigation = [
  { name: "Dashboard", href: "#", current: false },
  { name: "Markets", href: "#", current: true },
  { name: "Extensions", href: "#", current: false },
  { name: "Vote", href: "#", current: false },
];
