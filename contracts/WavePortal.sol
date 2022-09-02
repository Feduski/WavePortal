// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import 'hardhat/console.sol';

contract WavePortal{
    uint256 totalWaves;

    constructor(){
        console.log('Smart contract working :)');
    }


    function wave() public {
        totalWaves += 1;
        console.log('%s has waved! :) ', msg.sender);

    }

    function getTotalWaves() public view returns(uint) {
        console.log('Total Waves: %d', totalWaves);
        return (totalWaves);

    }


}

//External functions = We are be able to call this function when we deplot the contract

//As for best practices, you should use external if you expect that the function will only ever be
//called externally, and use public if you need to call the function internally.

//Types of functions 
//Examples to differentiate:

//public - all can access

//external - Cannot be accessed internally, only externally

//internal - only this contract and contracts deriving from it can access

//private - can be accessed only from this contract


//Local Variables = Only Exits inside the function where it is declarated.
//State Variables = Stores data on the blockchain - It is declared in the top of the contract.
//Global Variables = Stores info such as blockchain transactions and account that calls the funct.


// View function = Reads info from the blockchain (state-global variable/smart contract/adress)
// Pure function = Not reads/modify anything in the blockchain