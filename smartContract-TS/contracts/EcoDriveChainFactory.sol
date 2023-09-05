// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import {rEDCToken} from "./rEDCToken.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title Factory contract that deploys the rEDCToken and mints the Receipt Tokens to the user upon deposit of Pet Bottles to the Pool
 * @author Marcellus Ifeanyi
 * @notice Check the PRD.md for the requirements
 */

contract EcoDriveChainFactory {
    struct User {
        string email;
        address payable usdcWalletAddress;
    }
    User user;

    address poolAdmin;
    address[] recycledUsers;
    mapping(address => User) public addressToUser;
    mapping(address => uint) public addressToBottleQuantity;
    mapping(address => rEDCToken) public receiptTokens;
    mapping(address => IERC20) public tokens;

    mapping(address => bool) public addressToSubmitted;
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

    event SubmitUSDCAddressForPayment(address user, address _uSDCWalletAddress);

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
        addressToUser[msg.sender].usdcWalletAddress = uSDCWalletAddr;
        addressToBottleQuantity[msg.sender] += petBottleQty;

        receiptTokens[msg.sender] = new rEDCToken("Receipt EDC", "rDEC");

        receiptTokens[msg.sender].mintToken(msg.sender, petBottleQty);

        emit PetBottleRecycled(msg.sender, petBottleQty, uSDCWalletAddr);
    }

    /**
     * @param _user: The address of the user who recycled plastic bottles in the pool.
     *
     * @dev Returns the `amount` of plastic bottle an  address has.
     */
    function getRecycledPetBottleQuantity(
        address _user
    ) public view returns (uint256) {
        return addressToBottleQuantity[_user];
    }

    function submitUSDCAddressForPayment(address _uSDCWalletAddress) external {
        require(_uSDCWalletAddress != address(0), "Not Valid Address");
        require(
            addressToUser[msg.sender].usdcWalletAddress == _uSDCWalletAddress,
            "Not a valid Recycler"
        );
        // require(
        //     !addressToSubmitted[msg.sender],
        //     "Address has already been submitted"
        // );

        // // Mark the user as submitted
        // addressToSubmitted[msg.sender] = true;

        recycledUsers.push(_uSDCWalletAddress);

        emit SubmitUSDCAddressForPayment(
            msg.sender,
            addressToUser[msg.sender].usdcWalletAddress
        );
    }

    /**
     * @param userIndex: The index of the user in the recycledUsers array.
     *
     * @dev Returns the address of a recycled user based on the provided index.
     */
    function getrecycledUsers(
        uint256 userIndex
    ) external view returns (address) {
        require(userIndex < recycledUsers.length, "Invalid user index");
        return recycledUsers[userIndex];
    }
}
