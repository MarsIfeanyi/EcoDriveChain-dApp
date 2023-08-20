// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {rEDCToken} from "./rEDCToken.sol";

/**
 * @title EcoDriveChain Smart Contract
 * @author Marcellus Ifeanyi
 * @notice This is a Smart Contract that rewards users for proper 
 */
contract EcoDriveChain {
    struct User {
        string email;
        string password;
        address uSDCWalletAddress;
    }

    mapping(address => rEDCToken) public receiptTokens;
    mapping(address => uint256) public userToAmountDeposited;
    mapping(address => bool) public userDepositStatus;
    mapping(string => address) public userEmailToAccount;
    mapping(address => User) public userAccounts;
    mapping(address => IERC20) public poolUSDCWallet;

    address public poolAdmin;
    address public circleAPI;

    modifier isValidAddress(address _user) {
        require(_user != address(0), "ERC20: Not a Valid Address");
        _;
    }

    modifier onlyPoolAdmin() {
        require(
            msg.sender == poolAdmin,
            "Only the Pool Admin can call this function"
        );
        _;
    }

    event DepositSuccessful(address indexed user, uint256 amount);
    event DepositValidation(address indexed user, bool isValidated);
    event ReceiptRedeemed(address indexed user, uint256 amount);
    event UserSignup(address indexed user, string email, address wallet);

    constructor(address _poolAdmin, address _circleAPI) {
        poolAdmin = _poolAdmin;
        circleAPI = _circleAPI;
    }

    function signUp(
        string memory _email,
        string memory _password,
        address _wallet
    ) external {
        require(
            userEmailToAccount[_email] == address(0),
            "User with this email already exists"
        );

        // Perform validations on email, password, and wallet address

        // Save the user account information
        userEmailToAccount[_email] = msg.sender;
        userAccounts[msg.sender] = User(_email, _password, _wallet);

        emit UserSignup(msg.sender, _email, _wallet);
    }

    function depositPetBottle(
        uint256 _amount
    ) external isValidAddress(msg.sender) {
        require(
            userDepositStatus[msg.sender] == false,
            "User already made a deposit"
        );

        User memory user = userAccounts[msg.sender];
        require(
            user.uSDCWalletAddress != address(0),
            "User wallet not created"
        );

        // Mint the Receipt Token to the Depositor
        receiptTokens[msg.sender].mintToken(msg.sender, _amount);

        // Update the amount deposited by the user
        userToAmountDeposited[msg.sender] += _amount;
        userDepositStatus[msg.sender] = true;

        emit DepositSuccessful(msg.sender, _amount);
    }

    // function createUSDCWallet() external isValidAddress(msg.sender) {
    //     User storage user = userAccounts[msg.sender];
    //     require(user.wallet == address(0), "User wallet already created");

    //     // Call the Circle API to create a USDC wallet for the user
    //     // ...

    //     user.wallet = createdWalletAddress; // Assign the created wallet address

    //     emit UserWalletCreated(msg.sender, user.wallet);
    // }

    function validateDeposit(
        address _user,
        bool _isValidated
    ) external onlyPoolAdmin {
        require(
            userDepositStatus[_user] == true,
            "No deposit made by the user"
        );

        emit DepositValidation(_user, _isValidated);
    }

    function redeemReceiptToken(
        uint256 _amount
    ) external isValidAddress(msg.sender) {
        require(
            userDepositStatus[msg.sender] == true,
            "No deposit made by the user"
        );
        require(
            receiptTokens[msg.sender].balanceOf(msg.sender) >= _amount,
            "Insufficient receipt token balance"
        );

        // Burn the Receipt Token provided by the Depositor on Withdrawal
        receiptTokens[msg.sender].burnToken(msg.sender, _amount);

        // TODO: Call the Circle API to transfer the USDC equivalent amount to the user's USDC wallet
        bool success = poolUSDCWallet[
            userAccounts[msg.sender].uSDCWalletAddress
        ].transfer(msg.sender, _amount);
        require(success, "Transfer failed");

        emit ReceiptRedeemed(msg.sender, _amount);
    }
}
