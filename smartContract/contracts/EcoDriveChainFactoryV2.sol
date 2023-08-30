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

    modifier onlyPoolAmin() {
        require(msg.sender == poolAdmin, "Not poolAdmin");
        _;
    }

    constructor() {
        exchangeRateInUSDC = 0.1 * 10 ** 18; // 0.1 USDC in wei
    }

    event PetBottleRecycled(
        address user,
        uint petBottleQty,
        address uSDCWalletAddr
    );

    /**
     * @param uSDCWalletAddr: The USDC wallet address of the user who want to recycle.
     * @param petBottleQty:  The quantity of Platic Bottles the user wants to recycle.
     *
     * @dev This function allows user to deposite plastic bottles on the EcodriveChain and the mint the receiptTokens (rEDCToken) upon successful deposit
     */
    function recyclePetBottle(
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

        emit PetBottleRecycled(msg.sender, petBottleQty, uSDCWalletAddr);
    }

    /**
     * @param tokensToRedeem: The receiptTokens amount, minted to address upon sucess recycling.
     *
     * @dev  This function accepts the receiptTokens from the user and tranfer the USDC Equialent to the user USDCWallet address
     */
    function redeemReceiptTokens(uint tokensToRedeem) external payable {
        require(
            tokensToRedeem > 0,
            " Pet Bottle Qty To Redeem must be greater than zero"
        );
        require(
            addressToBottleQuantity[msg.sender] >= tokensToRedeem,
            "Insufficient tokensToRedeem"
        );
        uint uSDCAmount = tokensToRedeem * exchangeRateInUSDC;

        receiptTokens[msg.sender] = new rEDCToken(
            "Receipt EDC",
            "rDEC"
            //INITIAL_SUPPLY
        );

        receiptTokens[msg.sender].burnToken(msg.sender, tokensToRedeem);
        addressToBottleQuantity[msg.sender] -= tokensToRedeem;
        payable(msg.sender).transfer(uSDCAmount);

        // this.transfer(msg.sender, uSDCAmount);

        // TODO: Transfer USDC equivalent of the burnt rToken  to the user. Chainlink oracle will be used here to determine the conversion rate.
    }

    /**
     * @param _user: The address of the user who recycled plastic bottles in the pool.
     *
     * @dev Returns the `amount` of plastic bottle an  address has.
     */
    function getRecycledPetBottleQnty(
        address _user
    ) public view returns (uint256) {
        return addressToBottleQuantity[_user];
    }

    function payForRecycled(address _USDCWalletAddress, address _user) public {
        require(_user != address(0), "Invalid Address");
        require(_USDCWalletAddress != address(0), "Invalid Address");
        uint recylcedQuantity = getRecycledPetBottleQnty(_user);

        uint uSDCAmount = recylcedQuantity * exchangeRateInUSDC;
        (bool success, ) = payable(_USDCWalletAddress).call{value: uSDCAmount}(
            ""
        );
        require(success, "Payment failed");
    }
}
