import React from "react";
import "../styles/globals.css";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, optimism, polygon, goerli } from "wagmi/chains";
import { AppType } from "next/app";

const projectId = "b6039bcbd78ea84c8f2f2efdfac39723";

const config = {
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: "compound finance",
    chains: [],
    providers: [],
    autoConnect: true,
  },
  projectId: projectId,
};

const chains = [mainnet, polygon, optimism, goerli];

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ chains, projectId }),
  publicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

const MyApp: AppType = ({ Component, pageProps }) => {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {ready ? (
        <WagmiConfig config={wagmiConfig}>
          <Component {...pageProps} />
        </WagmiConfig>
      ) : (
        <></>
      )}
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export default MyApp;
