import React from "react";

import SubmitAddress from "../../Components/SmartContractInteractions/SubmitAddress";

import { ConnectButton } from "@rainbow-me/rainbowkit";

import RecycleOnChain from "../../Components/SmartContractInteractions/RecycleOnChain";

const RecyclePetBottlesPage = () => {
  return (
    <div className="flex items-center justify-center mx-auto mt-8 flex-col">
      <ConnectButton />

      <RecycleOnChain />

      <SubmitAddress />
    </div>
  );
};

export default RecyclePetBottlesPage;
