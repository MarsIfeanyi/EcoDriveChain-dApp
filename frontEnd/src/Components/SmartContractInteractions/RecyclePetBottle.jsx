import {
  useAccount,
  useConnect,
  useContractRead,
  useContractWrite,
  useNetwork,
  useWaitForTransaction,
} from "wagmi";

import { ethers } from "ethers";
import { useState, useEffect } from "react";

// import ecoDriveChainContract from "../../../contracts/contract.json";
import {
  CONTRACT_ABI,
  CONTRACT_ADDRESS,
} from "../../../contracts/ecoDriveChainContract";

// const contractConfig = {
//   addressOrName: CONTRACT_ADDRESS,
//   contractInterface: tokenContract.abi,
// };

const RecyclePetBottle = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const CONTRACT_ADDRESS = "0x41ef5D1173DB7c478a0fB259751483A78B1a60dA";

  //Mint Function
  const {
    data: recyclePetBottleData,
    write: recycleBottle,
    isLoading: isRecycling,
    isSuccess: isRecycledStarted,
    error: recycleError,
  } = useContractWrite({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: CONTRACT_ABI,
    functionName: "recyclePetBottle",
    args: [recipient, amount],
  });

  useEffect(() => {
    console.log("recyclePetBottleData:", recyclePetBottleData);
    console.log("isRecycling:", isRecycling);
    console.log("isRecycledStarted", isRecycledStarted);
    console.log("recycleError:", recycleError);
    console.log("___________");
  }, [recyclePetBottleData, isRecycling, isRecycledStarted]);

  const recycleBottleTx = async (e) => {
    e.preventDefault();

    try {
      recycleBottle(args);
    } catch (error) {
      console.error("Error calling recycleBottle:", error);
    }
  };

  return (
    <div className="mt-10">
      <h1 className="justify-center text-xl mx-auto items-center text-center text-blue-600">
        Deposit Your Plastic Bottles
      </h1>

      <form onSubmit={recycleBottleTx}>
        <div className="flex flex-col space-y-6 md:space-x-4 mx-auto items-center justify-center mt-14">
          {/* Individual Container */}
          <div className="space-y-2 flex flex-col">
            <label htmlFor="recipient" className="text-blue-600 mr-2">
              USDCWalletAddress
            </label>

            <input
              type="text"
              value={recipient}
              placeholder="Enter Address (account)"
              required
              onChange={(e) => setRecipient(e.target.value)}
              className="rounded-lg p-2 border border-blue-600 w-72"
            />

            <p>{console.log(recipient)}</p>

            <label htmlFor="amount" className="text-blue-600 mr-2">
              Plastic Bottle Qnty
            </label>

            <input
              type="number"
              value={amount}
              placeholder="Enter the quantity of pet Bottles"
              required
              onChange={(e) => setAmount(e.target.value)}
              className="rounded-lg p-2 border border-blue-600 w-72"
            />

            <p>{console.log(amount)}</p>

            <button
              type="submit"
              className="bg-blue-600 rounded-xl py-2 px-4 text-white ml-2"
            >
              Recycle Mars PetBottles
            </button>
          </div>
        </div>
      </form>
      {/* <h3 className="text-center justify-center mt-8">{transactionHash}</h3> */}
    </div>
  );
};

export default RecyclePetBottle;
