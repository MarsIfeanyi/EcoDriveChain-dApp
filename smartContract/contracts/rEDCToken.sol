// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title EcoDriveChain Receipt Token
 * @author Marcellus Ifeanyi
 * @notice This is the Receipt token that the user gets upon successful deposit of pet bottles
 * @dev This implements an ERC2O Token using the OpenZeppelin library
 */

contract rEDCToken is ERC20 {
    address private i_owner;
    address public depositorAddress;
    uint initialSupply;

    constructor(
        string memory _name,
        string memory _symbol
    )
        // uint256 _initialSupply
        ERC20(_name, _symbol)
    {
        //require(_depositorAddress != address(0), "wrong underlying");
        //depositorAddress = _depositorAddress;
        // initialSupply = _initialSupply;
    }

    modifier onlyOwner() {
        require(msg.sender == i_owner, "Only the Owner can call this function");
        _;
    }

    function mintToken(address userAccount, uint256 amountToMint) external {
        _mint(userAccount, amountToMint);
    }

    function burnToken(address userAccount, uint256 amountToBurn) external {
        _burn(userAccount, amountToBurn);
    }
}
