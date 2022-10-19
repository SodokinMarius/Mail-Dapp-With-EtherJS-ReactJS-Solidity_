// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
 import "hardhat/console.sol";

contract Lock {
    uint public unlockTime;
    address payable public owner;
    string  private welcome_msg;

    event Withdrawal(uint amount, uint when);

    constructor(uint _unlockTime) payable {
        require(
            block.timestamp < _unlockTime,
            "Unlock time should be in the future"
        );

        //Le Message ne doit être vide
        require(keccak256(bytes(welcome_msg))==keccak256(bytes("")),"The message should not be empty");
        console.log("Welcome to My first Dapp Interface",welcome_msg);

        unlockTime = _unlockTime;
        owner = payable(msg.sender);
        welcome_msg="Welcome to my first Dapp on Ethereum-hardhat-ether-React-Solidity";
        //welcome_msg=messg;

    }

    function withdraw() public {
        // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(msg.sender == owner, "You aren't the owner");

        emit Withdrawal(address(this).balance, block.timestamp);

        owner.transfer(address(this).balance);
    }

    function getOwner() public view returns(address)
    {
        return owner;
    }

    function getMessage() public view returns(string memory)
    {
        return welcome_msg;
    }

    function setMessage(string memory _newMessage) public  {
        require(keccak256(bytes(_newMessage))==keccak256(bytes("")),"Message should nor be empty");

        console.log("Welcome message changed from '%s 'to '%s' ",welcome_msg,_newMessage);
        welcome_msg=_newMessage;
    }
}
