import { useContractRead } from "wagmi";

import {
  CONTRACT_ABI,
  CONTRACT_ADDRESS,
} from "../../../contracts/ecoDriveChainContract";
import { useState, useEffect } from "react";

function GetRecycledQuantity() {
  const [address, setAddress] = useState("");

  const {
    data: recycledQuantityData,
    isLoading: isRecyclingQuantity,
    isSuccess: isRecycledQuantityStarted,
    read: getRecycledQuantity,
    error: recycledQuantityError,
  } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "getRecycledPetBottleQuantity",
  });

  useEffect(() => {
    console.log("recycledQuantityData:", recycledQuantityData);
    console.log("isRecyclingQuantity:", isRecyclingQuantity);
    console.log("isRecycledQuantityStarted", isRecycledQuantityStarted);
    console.log("recycledQuantityError:", recycledQuantityError);
    console.log("___________");
  }, [recycledQuantityData, isRecyclingQuantity, isRecycledQuantityStarted]);

  const handleRecycle = async (e) => {
    e.preventDefault();
    try {
      getRecycledQuantity({ args: [address] });
    } catch (error) {
      console.error("Error calling recycleBottle:", error.message);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleRecycle}>
        <h1 className=" mt-10 justify-center text-xl mx-auto items-center text-center text-[#7F56D9] font-medium ">
          Get Quantity of Recycled Pet Bottles
        </h1>

        <div className="flex flex-col space-y-6 md:space-x-4 mx-auto items-center justify-center mt-4">
          {/* Individual Container */}
          <div className="space-y-2 flex flex-col">
            <label htmlFor="recipient" className="text-[#7F56D9] mr-2">
              Address
            </label>

            <input
              type="text"
              value={address}
              placeholder="Enter Address (account)"
              required
              onChange={(e) => setAddress(e.target.value)}
              className="rounded-lg p-2 border border-[#7F56D9] w-72"
            />

            <p>{console.log(address)}</p>

            <button
              type="submit"
              className="bg-[#7F56D9] rounded-xl py-2 px-4 text-white ml-2"
            >
              Get Quantity
            </button>
          </div>
        </div>

        {isRecyclingQuantity && (
          <div className="mt-4">Getting the quantity of recycled</div>
        )}
        {isRecycledQuantityStarted && (
          <div className="mt-4">
            Transaction: {JSON.stringify(recycledQuantityData)}
          </div>
        )}
      </form>
    </div>
  );
}

export default GetRecycledQuantity;
