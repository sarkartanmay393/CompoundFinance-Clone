import { IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useDisconnect } from "wagmi";

const ModalContent = ({ handleClose }: { handleClose: () => void }) => {
  const [loading, setLoading] = React.useState(false);
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const onOpen = async () => {
    setLoading(true);
    await open();
    handleClose();
    setLoading(false);
  };

  const onClick = () => {
    if (isConnected) {
      disconnect();
    } else {
      onOpen();
    }
  };

  return (
    <div className="flex h-[60%] md:w-[50%] lg:w-[30%] flex-col items-center justify-center rounded rounded-[18px] bg-[#1D2833] p-5 text-white">
      {/* custom made close icon */}
      <div
        onClick={handleClose}
        className="relative left-[45%] top-[-13%] hidden items-center justify-center rounded rounded-[50%] bg-gray-700 px-3 py-1 hover:cursor-pointer hover:bg-gray-800 lg:flex"
      >
        <p className="text-gray-400">x</p>
      </div>

      <div className="mb-5 flex flex-col rounded rounded-[50%] bg-gray-700 p-4 px-5">
        <Image
          className=""
          width={32}
          height={32}
          src="https://svgshare.com/i/upN.svg"
          alt="Workflow"
        />
      </div>

      <h2 className="text-[1.4rem] font-semibold">Connect Wallet</h2>
      <p className="text-[1.2rem] text-gray-400">To start using Compound</p>

      <ProviderButton
        title="WalletConnect"
        onClick={onClick}
        disabled={loading}
        icon="https://play-lh.googleusercontent.com/jrRKh2MmTQr7ZL7_61MgH-DJEHlYgOKTjwhCrRr2R4Ly9NYUG-9s0X2aZ1tqG3rScfI"
      />

      <p className="text-xs">
        By connecting, I accept Compound's{" "}
        <span className="text-[#00c289]">Terms of Service</span>
      </p>
    </div>
  );
};

export default ModalContent;

const ProviderButton = ({
  title,
  onClick,
  icon,
  disabled,
}: {
  title: string;
  onClick: () => void;
  icon: string;
  disabled: boolean;
}) => {
  const [currentIcon, setCurrentIcon] = React.useState(
    "https://svgshare.com/i/uop.svg"
  );

  return (
    <div
      key={title}
      className="my-8 flex gap-x-2 rounded rounded-[8px] px-4 py-2 hover:cursor-pointer hover:bg-gray-700"
      onMouseOver={() => {
        setCurrentIcon("https://svgshare.com/i/uqZ.svg");
      }}
      onMouseOut={() => {
        setCurrentIcon("https://svgshare.com/i/uop.svg");
      }}
      onClick={onClick}
    >
      <Image src={icon} width={48} height={48} alt={""} />
      <button className="text-xl font-semibold">
        {disabled ? "Loading" : title}
      </button>
      <IconButton className="ml-12" onClick={onClick}>
        <Image
          alt=""
          width={24}
          height={12}
          className="text-black"
          src={currentIcon}
        />
      </IconButton>
    </div>
  );
};
