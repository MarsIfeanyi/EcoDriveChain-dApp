// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

/**
 * @title EcoDriveChain Smart Contract
 * @author Marcellus Ifeanyi
 * @notice This is a Smart Contract that rewards users for proper disposal and recycling of plastic bottles
 *   
 * @dev The requirement below are implemented in the smart contract and FrontEnd
1. User comes to our Dapp and sign up using email, password, or  Wallet.
2. Upon Successful Sign Up, user Creates a USDC Wallet (The Wallet is Created using the Circle API).
3. After Wallet Creation the User will be taken to the pool where user can then submit their pet bottles.
4. Users can deposit their used plastic bottles to our trash collection center (Liquidity Pool) using unique ID, and upon successful deposit at our pool users get the receipt token which serves as evidence.
5. After Successful deposit of Pet bottles Validation by the Pool Admin starts. After validation user will be notified on the status of his/her deposit.
6. If Validation is successful, Users will be able to redeem their receipt by depositing the receipt back to the pool and then USDC equivalent of the amount will be paid directly to their USDC Wallet.
 */
contract EcoDriveChain {

}
