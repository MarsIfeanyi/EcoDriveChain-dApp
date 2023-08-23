require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("hardhat-gas-reporter");
require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */

const MUMBAI_RPC_URL =
  process.env.MUMBAI_RPC_URL ||
  "https://eth-sepolia.g.alchemy.com/v2/your-api-key";

const PRIVATE_KEY = process.env.PRIVATE_KEY || "OxKey";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key";
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || "key";
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "key";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},

    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 80001,
    },

    localhost: {
      url: "http://localhost:8545",
      chainId: 31337,
    },
  },
  solidity: "0.8.8",
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY,
  },

  // polygonscan: {
  //   apiKey: POLYGONSCAN_API_KEY,
  // },

  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
    token: "MATIC", //This defines the network work you want to get the gas cost... Hint: You can choose any network you want and then add the token name, however if you didn't add token, it defaults to ethereum
  },
};
