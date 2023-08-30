import { ethers } from "ethers";
import { useState } from "react";
import Web3Modal from "web3modal";
import { contractABI, contractAddress } from "../../../constant/constants";

const RecycledPetBottleQuantity = () => {
  const [userAddress, setUserAddress] = useState("");

  const [transactionHash, setTransactionHash] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    // creating a signer

    try {
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      if (userAddress) {
        const getRecycledPetBottleQntyTransaction =
          await contract.getRecycledPetBottleQuantity(userAddress, {
            gasLimit: await contract.estimateGas.getRecycledPetBottleQuantity(
              userAddress
            ),
          });
        setTransactionHash(
          `Depositing: -->  ${getRecycledPetBottleQntyTransaction.hash}`
        );
        await getRecycledPetBottleQntyTransaction.wait();
        setTransactionHash(
          `Deposited: --> ${getRecycledPetBottleQntyTransaction.hash}`
        );
        setUserAddress("");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    return (
      <div className="mt-10">
        <h1 className="justify-center text-xl mx-auto items-center text-center text-blue-600">
          Check the quantity of your recycled pet Bottles
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-6 md:space-x-4 mx-auto items-center justify-center mt-14">
            {/* Individual Container */}
            <div className="space-y-2 flex flex-col">
              <label htmlFor="userAddress" className="text-blue-600 mr-2">
                userAddress
              </label>

              <input
                type="text"
                value={userAddress}
                placeholder="Enter Address (account)"
                required
                onChange={(e) => setUserAddress(e.target.value)}
                className="rounded-lg p-2 border border-blue-600 w-72"
              />

              <button
                type="submit"
                className="bg-blue-600 rounded-xl py-2 px-4 text-white ml-2"
              >
                Recycled Quantity
              </button>
            </div>
          </div>
        </form>
        <h3 className="text-center justify-center mt-8">{transactionHash}</h3>
      </div>
    );
  };
};

export default RecycledPetBottleQuantity;
