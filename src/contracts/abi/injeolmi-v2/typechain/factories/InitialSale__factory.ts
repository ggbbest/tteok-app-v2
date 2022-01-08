/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { InitialSale } from "../InitialSale";

export class InitialSale__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_ceik: string, overrides?: Overrides): Promise<InitialSale> {
    return super.deploy(_ceik, overrides || {}) as Promise<InitialSale>;
  }
  getDeployTransaction(
    _ceik: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_ceik, overrides || {});
  }
  attach(address: string): InitialSale {
    return super.attach(address) as InitialSale;
  }
  connect(signer: Signer): InitialSale__factory {
    return super.connect(signer) as InitialSale__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InitialSale {
    return new Contract(address, _abi, signerOrProvider) as InitialSale;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "ceik",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "withdrawceik",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "isOwner",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_price",
        type: "uint256",
      },
    ],
    name: "setPrice",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "price",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "buy",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "withdrawKlay",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_ceik",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
];

const _bytecode =
  "0x60806040527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60025534801561003457600080fd5b50604051602080610e888339810180604052602081101561005457600080fd5b8101908080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610d16806101726000396000f3fe6080604052600436106100915760003560e01c806391b7f5ed1161005957806391b7f5ed146101a1578063a035b1fe146101dc578063d96a094a14610207578063dc449a7514610235578063f2fde38b1461024c57610091565b8063110d4025146100965780633a2c9cfe146100ed578063715018a6146101045780638da5cb5b1461011b5780638f32d59b14610172575b600080fd5b3480156100a257600080fd5b506100ab61029d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100f957600080fd5b506101026102c3565b005b34801561011057600080fd5b50610119610504565b005b34801561012757600080fd5b5061013061063d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561017e57600080fd5b50610187610666565b604051808215151515815260200191505060405180910390f35b3480156101ad57600080fd5b506101da600480360360208110156101c457600080fd5b81019080803590602001909291905050506106bd565b005b3480156101e857600080fd5b506101f1610741565b6040518082815260200191505060405180910390f35b6102336004803603602081101561021d57600080fd5b8101908080359060200190929190505050610747565b005b34801561024157600080fd5b5061024a610862565b005b34801561025857600080fd5b5061029b6004803603602081101561026f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610943565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6102cb610666565b61033d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb61038361063d565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561042257600080fd5b505afa158015610436573d6000803e3d6000fd5b505050506040513d602081101561044c57600080fd5b81019080805190602001909291905050506040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156104c657600080fd5b505af11580156104da573d6000803e3d6000fd5b505050506040513d60208110156104f057600080fd5b810190808051906020019092919050505050565b61050c610666565b61057e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b6106c5610666565b610737576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8060028190555050565b60025481565b346107706012610762600254856109c990919063ffffffff16565b610a4f90919063ffffffff16565b1461077a57600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561082357600080fd5b505af1158015610837573d6000803e3d6000fd5b505050506040513d602081101561084d57600080fd5b81019080805190602001909291905050505050565b61086a610666565b6108dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6108e461063d565b73ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050158015610940573d6000803e3d6000fd5b50565b61094b610666565b6109bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6109c681610a99565b50565b6000808314156109dc5760009050610a49565b60008284029050828482816109ed57fe5b0414610a44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610cca6021913960400191505060405180910390fd5b809150505b92915050565b6000610a9183836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610bdd565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610b1f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610ca46026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008083118290610c89576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610c4e578082015181840152602081019050610c33565b50505050905090810190601f168015610c7b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581610c9557fe5b04905080915050939250505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a165627a7a72305820814f45ec70642c0fb8ec3d0b4edc8f8d8053540fa2d51e2865cbae7ee9fa88f60029";
