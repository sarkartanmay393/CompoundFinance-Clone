import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";

const WalletMenu = ({
  isConnected,
  address,
  disconnect,
  showModal,
}: {
  isConnected: boolean;
  address: `0x${string}` | undefined;
  disconnect: any;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Menu as="div" className="relative ml-3">
      <Menu.Button
        onClick={() => (isConnected ? null : showModal(true))}
        className="rounded-full bg-gray-900 p-1 p-3 px-6 text-sm text-gray-400 outline outline-[1px] outline-[#00c289] hover:text-white"
      >
        <p className="hidden md:inline-block">{address?.slice(0, 12)}</p>
        <div className="flex md:hidden">
          <Image
            className=""
            width={12}
            height={12}
            src="https://w7.pngwing.com/pngs/205/486/png-transparent-computer-icons-wallet-wallet-angle-text-rectangle-thumbnail.png"
            alt="Workflow"
          />
        </div>
      </Menu.Button>
      {isConnected ? (
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
              <div className="my-2 flex justify-start gap-x-2 pl-4 text-xs">
                {"🟢"}
                <p className="">{address?.slice(0, 12).concat("...")}</p>
                <XMarkIcon
                  className="flex h-4 w-4 hover:cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      address || "address corrupted"
                    );
                  }}
                  aria-hidden="true"
                />
              </div>
            </Menu.Item>
            <Menu.Item>
              <a
                href="#"
                onClick={() => disconnect()}
                className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              >
                Disconnected Wallet
              </a>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      ) : (
        <></>
      )}
    </Menu>
  );
};


export default WalletMenu;