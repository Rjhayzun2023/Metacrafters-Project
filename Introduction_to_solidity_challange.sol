// SPDX-License-Identifier: MIT
pragma solidity >=0.8.9;


//Write a simple contract and declare four different types of variables. Write get and set functions for each of these variables. Return the value of the variable in the “set function”.

contract Challange {
    
    //setting variable
    int a;
    uint b;
    string c;
    bool d;

    //set functions

    //get a negative of positive number
    function inputNumber(int _number) public {
        a = _number;
    }

    function inputPositiveNumber (uint _posNumber) public {
        b = _posNumber;
    }

    function inputStrValue (string memory _value) public {
        c = _value;
    }

    function inputBoolValue (bool _boolValue) public {
        d = _boolValue;
    }

    //get function 

    function getinputNumber() public view returns (int) {
        return a;
    }

    function getinputPositiveNumber() public view returns (uint) {
        return b;
    }

    function getinputStrValue() public view returns (string memory) {
        return c;
    }

    function getinputBoolValue() public view returns (bool) {
        return d;
    }



}