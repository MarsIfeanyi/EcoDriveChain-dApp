import { useContractWrite, usePrepareContractWrite } from "wagmi";

import {
  CONTRACT_ABI,
  CONTRACT_ADDRESS,
} from "../../../contracts/ecoDriveChainContract";
import { useState, useEffect } from "react";

function SubmitAddress() {
  const [address, setAddress] = useState("");

  const {
    data: submitAddressData,
    isLoading: isSubmittingAddress,
    isSuccess: isSubmittedAddress,
    write: submitAddress,
    error: submitAddressError,
  } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "submitUSDCAddressForPayment",
  });

  useEffect(() => {
    console.log("submitAddressData:", submitAddressData);
    console.log("isSubmittingAddress:", isSubmittingAddress);
    console.log("isSubmittedAddress", isSubmittedAddress);
    console.log("submitAddressError:", submitAddressError);
    console.log("___________");
  }, [submitAddressData, isSubmittingAddress, isSubmittedAddress]);

  const handleSubmitAddress = async (e) => {
    e.preventDefault();
    try {
      submitAddress({ args: [address] });
    } catch (error) {
      console.error("Error calling recycleBottle:", error.message);
    }
  };

  return (
    <div className="mb-10">
      <form action="" onSubmit={handleSubmitAddress}>
        <h1 className=" mt-10 justify-center text-xl mx-auto items-center text-center text-[#7F56D9] font-medium ">
          Submit USDC Wallet Address For Payment
        </h1>

        <div className="flex flex-col space-y-6 md:space-x-4 mx-auto items-center justify-center mt-4">
          {/* Individual Container */}
          <div className="space-y-2 flex flex-col">
            <label htmlFor="recipient" className="text-[#7F56D9] mr-2">
              USDCWalletAddress
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
              className="bg-[#7F56D9] rounded-xl py-2 px-4 text-white ml-2 "
            >
              Submit Address
            </button>
          </div>
        </div>

        {isSubmittingAddress && (
          <div className="mt-4">Submitting Address For Payment</div>
        )}
        {isSubmittedAddress && (
          <div className="mt-4">
            Transaction: {JSON.stringify(submitAddressData)}
          </div>
        )}
      </form>
    </div>
  );
}

export default SubmitAddress;
