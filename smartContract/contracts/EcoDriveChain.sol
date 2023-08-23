// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import {rEDCToken} from "./rEDCToken.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title Factory contract that deploys the rEDCToken and mints the Receipt Tokens to the user upon deposit of Pet Bottles to the Pool
 * @author Marcellus Ifeanyi
 * @notice Check the PRD.md for the requirements
 */

contract EcoDriveChain {
    struct User {
        string email;
        string password;
        address payable usdcWalletAddress;
    }
    User user;

    address poolAdmin;
    address[] users;
    mapping(address => User) public addressToUser;
    mapping(address => uint) public addressToBottleQuantity;
    mapping(address => rEDCToken) public receiptTokens;
    mapping(address => IERC20) public tokens;

    // uint256 INITIAL_SUPPLY = 1_000_000_000;

    uint256 public exchangeRateInUSDC;

    constructor() {
        exchangeRateInUSDC = 1; //  0.1 USDC = 1 Pet Bottle
    }

    event petBottleDeposited(
        address user,
        uint petBottleQty,
        address uSDCWalletAddr
    );

    function depositPetBottle(
        address payable uSDCWalletAddr,
        uint petBottleQty
    ) external {
        // users.push(uSDCWalletAddr);
        addressToUser[msg.sender].usdcWalletAddress = uSDCWalletAddr;
        addressToBottleQuantity[msg.sender] += petBottleQty;

        receiptTokens[msg.sender] = new rEDCToken(
            "Receipt EDC",
            "rDEC"
            //INITIAL_SUPPLY
        );

        receiptTokens[msg.sender].mintToken(msg.sender, petBottleQty);

        emit petBottleDeposited(msg.sender, petBottleQty, uSDCWalletAddr);
    }

    function redeemReceiptTokens(uint tokensToRedeem) external payable {
        // require(
        //     tokensToRedeem > 0,
        //     " Pet Bottle Qty To Redeem must be greater than zero"
        // );
        // require(
        //     addressToBottleQuantity[msg.sender] >= tokensToRedeem,
        //     "Insufficient tokensToRedeem"
        // );
        uint uSDCAmount = tokensToRedeem * exchangeRateInUSDC;

        receiptTokens[msg.sender] = new rEDCToken(
            "Receipt EDC",
            "rDEC"
            //INITIAL_SUPPLY
        );

        receiptTokens[msg.sender].burnToken(msg.sender, tokensToRedeem);
        addressToBottleQuantity[msg.sender] -= tokensToRedeem;
        payable(msg.sender).transfer(uSDCAmount);

        // TODO: Transfer USDC equivalent of the burnt rToken  to the user. Chainlink oracle will be used here to determine the conversion rate.
    }
}
