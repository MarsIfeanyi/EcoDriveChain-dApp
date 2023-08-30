import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  lightTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  polygonMumbai,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, polygonMumbai, optimism, arbitrum, base, zora],
  [
    alchemyProvider({
      apiKey: import.meta.REACT_APP_MUMBAI_RPC_URL,
    }),
    jsonRpcProvider({ rpc: () => ({ http: "https://rpc.ankr.com/gnosis" }) }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "EcoDriveChain dApp",
  projectId: "YOUR_PROJECT_ID",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});
const RainbowKitWagmiConfigs = ({ children }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        coolMode
        chains={chains}
        theme={lightTheme({
          accentColor: "#7F56D9", //color of wallet  try #703844
          accentColorForeground: "white", //color of text
          borderRadius: "large", //rounded edges
          fontStack: "system",
        })}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default RainbowKitWagmiConfigs;
