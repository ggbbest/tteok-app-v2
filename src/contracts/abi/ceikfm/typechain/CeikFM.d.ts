/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface CeikFMInterface extends ethers.utils.Interface {
  functions: {
    "name()": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "accMultiplier()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "updateMultiplier(address[])": FunctionFragment;
    "DECIMALS()": FunctionFragment;
    "decimals()": FunctionFragment;
    "unpause()": FunctionFragment;
    "finishUpdatingMultiplier()": FunctionFragment;
    "excluded(address)": FunctionFragment;
    "isPauser(address)": FunctionFragment;
    "exclude(address)": FunctionFragment;
    "paused()": FunctionFragment;
    "renouncePauser()": FunctionFragment;
    "_userInfo(address)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "resettingCount()": FunctionFragment;
    "addPauser(address)": FunctionFragment;
    "pause()": FunctionFragment;
    "owner()": FunctionFragment;
    "isOwner()": FunctionFragment;
    "TOTAL_SUPPLY()": FunctionFragment;
    "symbol()": FunctionFragment;
    "NAME()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "include(address)": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "SYMBOL()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "accMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMultiplier",
    values: [string[]]
  ): string;
  encodeFunctionData(functionFragment: "DECIMALS", values?: undefined): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "finishUpdatingMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "excluded", values: [string]): string;
  encodeFunctionData(functionFragment: "isPauser", values: [string]): string;
  encodeFunctionData(functionFragment: "exclude", values: [string]): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renouncePauser",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "_userInfo", values: [string]): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "resettingCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "addPauser", values: [string]): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "TOTAL_SUPPLY",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "include", values: [string]): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "SYMBOL", values?: undefined): string;

  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "accMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "DECIMALS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "finishUpdatingMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "excluded", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPauser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exclude", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renouncePauser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_userInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resettingCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addPauser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "TOTAL_SUPPLY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "include", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "SYMBOL", data: BytesLike): Result;

  events: {
    "Transfer(address,address,uint256)": EventFragment;
    "Approval(address,address,uint256)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
    "PauserAdded(address)": EventFragment;
    "PauserRemoved(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PauserAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PauserRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class CeikFM extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CeikFMInterface;

  functions: {
    name(overrides?: CallOverrides): Promise<[string]>;

    "name()"(overrides?: CallOverrides): Promise<[string]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    accMultiplier(overrides?: CallOverrides): Promise<[BigNumber]>;

    "accMultiplier()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updateMultiplier(
      _addresses: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateMultiplier(address[])"(
      _addresses: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    DECIMALS(overrides?: CallOverrides): Promise<[number]>;

    "DECIMALS()"(overrides?: CallOverrides): Promise<[number]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    "decimals()"(overrides?: CallOverrides): Promise<[number]>;

    unpause(overrides?: Overrides): Promise<ContractTransaction>;

    "unpause()"(overrides?: Overrides): Promise<ContractTransaction>;

    finishUpdatingMultiplier(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "finishUpdatingMultiplier()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    excluded(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "excluded(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isPauser(account: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isPauser(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    exclude(addr: string, overrides?: Overrides): Promise<ContractTransaction>;

    "exclude(address)"(
      addr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    "paused()"(overrides?: CallOverrides): Promise<[boolean]>;

    renouncePauser(overrides?: Overrides): Promise<ContractTransaction>;

    "renouncePauser()"(overrides?: Overrides): Promise<ContractTransaction>;

    _userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        lastBalance: BigNumber;
        lastMultiplier: BigNumber;
        resettingCount: BigNumber;
      }
    >;

    "_userInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        lastBalance: BigNumber;
        lastMultiplier: BigNumber;
        resettingCount: BigNumber;
      }
    >;

    balanceOf(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    "balanceOf(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    resettingCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "resettingCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    addPauser(
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addPauser(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    pause(overrides?: Overrides): Promise<ContractTransaction>;

    "pause()"(overrides?: Overrides): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    isOwner(overrides?: CallOverrides): Promise<[boolean]>;

    "isOwner()"(overrides?: CallOverrides): Promise<[boolean]>;

    TOTAL_SUPPLY(overrides?: CallOverrides): Promise<[BigNumber]>;

    "TOTAL_SUPPLY()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    "symbol()"(overrides?: CallOverrides): Promise<[string]>;

    NAME(overrides?: CallOverrides): Promise<[string]>;

    "NAME()"(overrides?: CallOverrides): Promise<[string]>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transfer(address,uint256)"(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    include(addr: string, overrides?: Overrides): Promise<ContractTransaction>;

    "include(address)"(
      addr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    allowance(
      user: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { remaining: BigNumber }>;

    "allowance(address,address)"(
      user: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { remaining: BigNumber }>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    SYMBOL(overrides?: CallOverrides): Promise<[string]>;

    "SYMBOL()"(overrides?: CallOverrides): Promise<[string]>;
  };

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approve(address,uint256)"(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  accMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

  "accMultiplier()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  transferFrom(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint256)"(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updateMultiplier(
    _addresses: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateMultiplier(address[])"(
    _addresses: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  DECIMALS(overrides?: CallOverrides): Promise<number>;

  "DECIMALS()"(overrides?: CallOverrides): Promise<number>;

  decimals(overrides?: CallOverrides): Promise<number>;

  "decimals()"(overrides?: CallOverrides): Promise<number>;

  unpause(overrides?: Overrides): Promise<ContractTransaction>;

  "unpause()"(overrides?: Overrides): Promise<ContractTransaction>;

  finishUpdatingMultiplier(overrides?: Overrides): Promise<ContractTransaction>;

  "finishUpdatingMultiplier()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  excluded(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "excluded(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;

  "isPauser(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  exclude(addr: string, overrides?: Overrides): Promise<ContractTransaction>;

  "exclude(address)"(
    addr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  "paused()"(overrides?: CallOverrides): Promise<boolean>;

  renouncePauser(overrides?: Overrides): Promise<ContractTransaction>;

  "renouncePauser()"(overrides?: Overrides): Promise<ContractTransaction>;

  _userInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      lastBalance: BigNumber;
      lastMultiplier: BigNumber;
      resettingCount: BigNumber;
    }
  >;

  "_userInfo(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      lastBalance: BigNumber;
      lastMultiplier: BigNumber;
      resettingCount: BigNumber;
    }
  >;

  balanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  resettingCount(overrides?: CallOverrides): Promise<BigNumber>;

  "resettingCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  addPauser(
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addPauser(address)"(
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  pause(overrides?: Overrides): Promise<ContractTransaction>;

  "pause()"(overrides?: Overrides): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  isOwner(overrides?: CallOverrides): Promise<boolean>;

  "isOwner()"(overrides?: CallOverrides): Promise<boolean>;

  TOTAL_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;

  "TOTAL_SUPPLY()"(overrides?: CallOverrides): Promise<BigNumber>;

  symbol(overrides?: CallOverrides): Promise<string>;

  "symbol()"(overrides?: CallOverrides): Promise<string>;

  NAME(overrides?: CallOverrides): Promise<string>;

  "NAME()"(overrides?: CallOverrides): Promise<string>;

  transfer(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transfer(address,uint256)"(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  include(addr: string, overrides?: Overrides): Promise<ContractTransaction>;

  "include(address)"(
    addr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  allowance(
    user: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allowance(address,address)"(
    user: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  SYMBOL(overrides?: CallOverrides): Promise<string>;

  "SYMBOL()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    accMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    "accMultiplier()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    updateMultiplier(
      _addresses: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "updateMultiplier(address[])"(
      _addresses: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    DECIMALS(overrides?: CallOverrides): Promise<number>;

    "DECIMALS()"(overrides?: CallOverrides): Promise<number>;

    decimals(overrides?: CallOverrides): Promise<number>;

    "decimals()"(overrides?: CallOverrides): Promise<number>;

    unpause(overrides?: CallOverrides): Promise<void>;

    "unpause()"(overrides?: CallOverrides): Promise<void>;

    finishUpdatingMultiplier(overrides?: CallOverrides): Promise<void>;

    "finishUpdatingMultiplier()"(overrides?: CallOverrides): Promise<void>;

    excluded(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "excluded(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;

    "isPauser(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    exclude(addr: string, overrides?: CallOverrides): Promise<void>;

    "exclude(address)"(addr: string, overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    "paused()"(overrides?: CallOverrides): Promise<boolean>;

    renouncePauser(overrides?: CallOverrides): Promise<void>;

    "renouncePauser()"(overrides?: CallOverrides): Promise<void>;

    _userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        lastBalance: BigNumber;
        lastMultiplier: BigNumber;
        resettingCount: BigNumber;
      }
    >;

    "_userInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        lastBalance: BigNumber;
        lastMultiplier: BigNumber;
        resettingCount: BigNumber;
      }
    >;

    balanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    resettingCount(overrides?: CallOverrides): Promise<BigNumber>;

    "resettingCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    addPauser(account: string, overrides?: CallOverrides): Promise<void>;

    "addPauser(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    pause(overrides?: CallOverrides): Promise<void>;

    "pause()"(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    isOwner(overrides?: CallOverrides): Promise<boolean>;

    "isOwner()"(overrides?: CallOverrides): Promise<boolean>;

    TOTAL_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;

    "TOTAL_SUPPLY()"(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<string>;

    "symbol()"(overrides?: CallOverrides): Promise<string>;

    NAME(overrides?: CallOverrides): Promise<string>;

    "NAME()"(overrides?: CallOverrides): Promise<string>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transfer(address,uint256)"(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    include(addr: string, overrides?: CallOverrides): Promise<void>;

    "include(address)"(addr: string, overrides?: CallOverrides): Promise<void>;

    allowance(
      user: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      user: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    SYMBOL(overrides?: CallOverrides): Promise<string>;

    "SYMBOL()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    Transfer(from: string | null, to: string | null, amount: null): EventFilter;

    Approval(
      owner: string | null,
      spender: string | null,
      amount: null
    ): EventFilter;

    Paused(account: null): EventFilter;

    Unpaused(account: null): EventFilter;

    PauserAdded(account: string | null): EventFilter;

    PauserRemoved(account: string | null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    accMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    "accMultiplier()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updateMultiplier(
      _addresses: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateMultiplier(address[])"(
      _addresses: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

    "DECIMALS()"(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    "decimals()"(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(overrides?: Overrides): Promise<BigNumber>;

    "unpause()"(overrides?: Overrides): Promise<BigNumber>;

    finishUpdatingMultiplier(overrides?: Overrides): Promise<BigNumber>;

    "finishUpdatingMultiplier()"(overrides?: Overrides): Promise<BigNumber>;

    excluded(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "excluded(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPauser(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isPauser(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exclude(addr: string, overrides?: Overrides): Promise<BigNumber>;

    "exclude(address)"(addr: string, overrides?: Overrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    "paused()"(overrides?: CallOverrides): Promise<BigNumber>;

    renouncePauser(overrides?: Overrides): Promise<BigNumber>;

    "renouncePauser()"(overrides?: Overrides): Promise<BigNumber>;

    _userInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "_userInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    resettingCount(overrides?: CallOverrides): Promise<BigNumber>;

    "resettingCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    addPauser(account: string, overrides?: Overrides): Promise<BigNumber>;

    "addPauser(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    pause(overrides?: Overrides): Promise<BigNumber>;

    "pause()"(overrides?: Overrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "isOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    TOTAL_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;

    "TOTAL_SUPPLY()"(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    "symbol()"(overrides?: CallOverrides): Promise<BigNumber>;

    NAME(overrides?: CallOverrides): Promise<BigNumber>;

    "NAME()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transfer(address,uint256)"(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    include(addr: string, overrides?: Overrides): Promise<BigNumber>;

    "include(address)"(addr: string, overrides?: Overrides): Promise<BigNumber>;

    allowance(
      user: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      user: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    SYMBOL(overrides?: CallOverrides): Promise<BigNumber>;

    "SYMBOL()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    accMultiplier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "accMultiplier()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updateMultiplier(
      _addresses: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateMultiplier(address[])"(
      _addresses: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    DECIMALS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "DECIMALS()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "decimals()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unpause(overrides?: Overrides): Promise<PopulatedTransaction>;

    "unpause()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    finishUpdatingMultiplier(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "finishUpdatingMultiplier()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    excluded(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "excluded(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPauser(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isPauser(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exclude(addr: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "exclude(address)"(
      addr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "paused()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renouncePauser(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renouncePauser()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    _userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "_userInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    resettingCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "resettingCount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addPauser(
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addPauser(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    pause(overrides?: Overrides): Promise<PopulatedTransaction>;

    "pause()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TOTAL_SUPPLY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "TOTAL_SUPPLY()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "symbol()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "NAME()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transfer(address,uint256)"(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    include(addr: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "include(address)"(
      addr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    allowance(
      user: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowance(address,address)"(
      user: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    SYMBOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "SYMBOL()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
