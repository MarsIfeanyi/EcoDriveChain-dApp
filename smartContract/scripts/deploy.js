const hre = require("hardhat");

const { ethers, run, network } = require("hardhat");
const { verify } = require("../utils/verify");

async function main() {
  const ecoDriveContract = await ethers.deployContract("EcoDriveChain");

  console.log("Deploying Contract................");

  const ecoDriveDeployed = await ecoDriveContract.waitForDeployment();

  console.log(`ecoDriveContract deployed at: ${ecoDriveDeployed.target} `);

  if (
    network.config.chainId === 80001 ||
    (5 && process.env.ETHERSCAN_API_KEY)
  ) {
    console.log("Waiting for block confirmations...");

    //wait for 6 block confirmations before verifying the transaction
    await ecoDriveDeployed.waitForDeployment(6);
    await verify(ecoDriveDeployed.target, []);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
