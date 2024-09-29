/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  SignExecuteContractMethodParams,
  SignExecuteScriptTxResult,
  signExecuteMethod,
  addStdIdToFields,
  encodeContractFields,
} from "@alephium/web3";
import { default as FarmContractJson } from "../farm/Farm.ral.json";
import { getContractByCodeHash } from "./contracts";
import { Trait, AllStructs } from "./types";

// Custom types for the contract
export namespace FarmTypes {
  export type Fields = {
    cropTemplateId: HexString;
    parentId: HexString;
    collectionUri: HexString;
    renewLength: bigint;
    totalSupply: bigint;
  };

  export type State = ContractState<Fields>;

  export type NameCreatedEvent = ContractEvent<{
    nftIndex: bigint;
    name: HexString;
    capitalisation: HexString;
    creator: Address;
    expires: bigint;
  }>;
  export type NameRenewedEvent = ContractEvent<{
    nftIndex: bigint;
    name: HexString;
    renewer: Address;
    expires: bigint;
  }>;
  export type AddressSetEvent = ContractEvent<{
    nftIndex: bigint;
    name: HexString;
    newAddress: Address;
  }>;
  export type CapitalisationSetEvent = ContractEvent<{
    nftIndex: bigint;
    name: HexString;
    newCapitalisation: HexString;
  }>;
  export type NameDeletedEvent = ContractEvent<{
    nftIndex: bigint;
    name: HexString;
    deleter: Address;
  }>;
  export type ReverseAddressSetEvent = ContractEvent<{
    address: Address;
    newName: HexString;
  }>;
  export type ReverseAddressDeletedEvent = ContractEvent<{
    address: Address;
    name: HexString;
  }>;
  export type CropCreatedEvent = ContractEvent<{
    nftIndex: bigint;
    amount: bigint;
    creator: Address;
    expires: bigint;
  }>;
  export type CropDeletedEvent = ContractEvent<{
    nftIndex: bigint;
    deleter: Address;
  }>;

  export interface CallMethodTable {
    getCollectionUri: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    totalSupply: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    nftByIndex: {
      params: CallContractParams<{ index: bigint }>;
      result: CallContractResult<HexString>;
    };
    validateNFT: {
      params: CallContractParams<{ nftId: HexString; nftIndex: bigint }>;
      result: CallContractResult<null>;
    };
    getCrop: {
      params: CallContractParams<{ index: bigint }>;
      result: CallContractResult<HexString>;
    };
    hasExpired: {
      params: CallContractParams<{ crop: HexString }>;
      result: CallContractResult<boolean>;
    };
    createCrop: {
      params: CallContractParams<{
        minter: Address;
        rewardTokenAmount: bigint;
        alphAmount: bigint;
      }>;
      result: CallContractResult<bigint>;
    };
    deleteCrop: {
      params: CallContractParams<{ cropOwner: Address; nftIndex: bigint }>;
      result: CallContractResult<null>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
  export type MulticallReturnType<Callss extends MultiCallParams[]> =
    Callss["length"] extends 1
      ? MultiCallResults<Callss[0]>
      : { [index in keyof Callss]: MultiCallResults<Callss[index]> };

  export interface SignExecuteMethodTable {
    getCollectionUri: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    totalSupply: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    nftByIndex: {
      params: SignExecuteContractMethodParams<{ index: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    validateNFT: {
      params: SignExecuteContractMethodParams<{
        nftId: HexString;
        nftIndex: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    getCrop: {
      params: SignExecuteContractMethodParams<{ index: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    hasExpired: {
      params: SignExecuteContractMethodParams<{ crop: HexString }>;
      result: SignExecuteScriptTxResult;
    };
    createCrop: {
      params: SignExecuteContractMethodParams<{
        minter: Address;
        rewardTokenAmount: bigint;
        alphAmount: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    deleteCrop: {
      params: SignExecuteContractMethodParams<{
        cropOwner: Address;
        nftIndex: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<FarmInstance, FarmTypes.Fields> {
  encodeFields(fields: FarmTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      AllStructs
    );
  }

  eventIndex = {
    NameCreated: 0,
    NameRenewed: 1,
    AddressSet: 2,
    CapitalisationSet: 3,
    NameDeleted: 4,
    ReverseAddressSet: 5,
    ReverseAddressDeleted: 6,
    CropCreated: 7,
    CropDeleted: 8,
  };
  consts = {
    ErrorCodes: {
      OnlyParentAllowed: BigInt("0"),
      NFTNotFound: BigInt("1"),
      NFTNotPartOfCollection: BigInt("2"),
      OnlyNftOwnerAllowed: BigInt("3"),
      NameHasNotExpired: BigInt("4"),
      CannotRenewName: BigInt("5"),
      TokenAlreadyGenerated: BigInt("6"),
      ReverseAddressNotFound: BigInt("7"),
      OnlyNftOwnerOrHolderAllowed: BigInt("8"),
      IncorrectFarmInputAmount: BigInt("9"),
      CropHasNotExpired: BigInt("10"),
      FarmInputAmountNotConsumed: BigInt("11"),
      FarmAlreadyGenerated: BigInt("12"),
    },
    Keys: { Names: "01", Token: "02", Farm: "03" },
  };

  at(address: string): FarmInstance {
    return new FarmInstance(address);
  }

  tests = {
    getCollectionUri: async (
      params: Omit<
        TestContractParamsWithoutMaps<FarmTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(
        this,
        "getCollectionUri",
        params,
        getContractByCodeHash
      );
    },
    totalSupply: async (
      params: Omit<
        TestContractParamsWithoutMaps<FarmTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "totalSupply", params, getContractByCodeHash);
    },
    nftByIndex: async (
      params: TestContractParamsWithoutMaps<FarmTypes.Fields, { index: bigint }>
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "nftByIndex", params, getContractByCodeHash);
    },
    validateNFT: async (
      params: TestContractParamsWithoutMaps<
        FarmTypes.Fields,
        { nftId: HexString; nftIndex: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "validateNFT", params, getContractByCodeHash);
    },
    getCrop: async (
      params: TestContractParamsWithoutMaps<FarmTypes.Fields, { index: bigint }>
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getCrop", params, getContractByCodeHash);
    },
    hasExpired: async (
      params: TestContractParamsWithoutMaps<
        FarmTypes.Fields,
        { crop: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<boolean>> => {
      return testMethod(this, "hasExpired", params, getContractByCodeHash);
    },
    createCrop: async (
      params: TestContractParamsWithoutMaps<
        FarmTypes.Fields,
        { minter: Address; rewardTokenAmount: bigint; alphAmount: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "createCrop", params, getContractByCodeHash);
    },
    deleteCrop: async (
      params: TestContractParamsWithoutMaps<
        FarmTypes.Fields,
        { cropOwner: Address; nftIndex: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "deleteCrop", params, getContractByCodeHash);
    },
  };
}

// Use this object to test and deploy the contract
export const Farm = new Factory(
  Contract.fromJson(
    FarmContractJson,
    "",
    "4cafea5ed660e0edd4c4a863b813eca220d89ec28631d67fce5e8a8f755b58e1",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class FarmInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<FarmTypes.State> {
    return fetchContractState(Farm, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeNameCreatedEvent(
    options: EventSubscribeOptions<FarmTypes.NameCreatedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Farm.contract,
      this,
      options,
      "NameCreated",
      fromCount
    );
  }

  subscribeNameRenewedEvent(
    options: EventSubscribeOptions<FarmTypes.NameRenewedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Farm.contract,
      this,
      options,
      "NameRenewed",
      fromCount
    );
  }

  subscribeAddressSetEvent(
    options: EventSubscribeOptions<FarmTypes.AddressSetEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Farm.contract,
      this,
      options,
      "AddressSet",
      fromCount
    );
  }

  subscribeCapitalisationSetEvent(
    options: EventSubscribeOptions<FarmTypes.CapitalisationSetEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Farm.contract,
      this,
      options,
      "CapitalisationSet",
      fromCount
    );
  }

  subscribeNameDeletedEvent(
    options: EventSubscribeOptions<FarmTypes.NameDeletedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Farm.contract,
      this,
      options,
      "NameDeleted",
      fromCount
    );
  }

  subscribeReverseAddressSetEvent(
    options: EventSubscribeOptions<FarmTypes.ReverseAddressSetEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Farm.contract,
      this,
      options,
      "ReverseAddressSet",
      fromCount
    );
  }

  subscribeReverseAddressDeletedEvent(
    options: EventSubscribeOptions<FarmTypes.ReverseAddressDeletedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Farm.contract,
      this,
      options,
      "ReverseAddressDeleted",
      fromCount
    );
  }

  subscribeCropCreatedEvent(
    options: EventSubscribeOptions<FarmTypes.CropCreatedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Farm.contract,
      this,
      options,
      "CropCreated",
      fromCount
    );
  }

  subscribeCropDeletedEvent(
    options: EventSubscribeOptions<FarmTypes.CropDeletedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Farm.contract,
      this,
      options,
      "CropDeleted",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      | FarmTypes.NameCreatedEvent
      | FarmTypes.NameRenewedEvent
      | FarmTypes.AddressSetEvent
      | FarmTypes.CapitalisationSetEvent
      | FarmTypes.NameDeletedEvent
      | FarmTypes.ReverseAddressSetEvent
      | FarmTypes.ReverseAddressDeletedEvent
      | FarmTypes.CropCreatedEvent
      | FarmTypes.CropDeletedEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(Farm.contract, this, options, fromCount);
  }

  view = {
    getCollectionUri: async (
      params?: FarmTypes.CallMethodParams<"getCollectionUri">
    ): Promise<FarmTypes.CallMethodResult<"getCollectionUri">> => {
      return callMethod(
        Farm,
        this,
        "getCollectionUri",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    totalSupply: async (
      params?: FarmTypes.CallMethodParams<"totalSupply">
    ): Promise<FarmTypes.CallMethodResult<"totalSupply">> => {
      return callMethod(
        Farm,
        this,
        "totalSupply",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    nftByIndex: async (
      params: FarmTypes.CallMethodParams<"nftByIndex">
    ): Promise<FarmTypes.CallMethodResult<"nftByIndex">> => {
      return callMethod(
        Farm,
        this,
        "nftByIndex",
        params,
        getContractByCodeHash
      );
    },
    validateNFT: async (
      params: FarmTypes.CallMethodParams<"validateNFT">
    ): Promise<FarmTypes.CallMethodResult<"validateNFT">> => {
      return callMethod(
        Farm,
        this,
        "validateNFT",
        params,
        getContractByCodeHash
      );
    },
    getCrop: async (
      params: FarmTypes.CallMethodParams<"getCrop">
    ): Promise<FarmTypes.CallMethodResult<"getCrop">> => {
      return callMethod(Farm, this, "getCrop", params, getContractByCodeHash);
    },
    hasExpired: async (
      params: FarmTypes.CallMethodParams<"hasExpired">
    ): Promise<FarmTypes.CallMethodResult<"hasExpired">> => {
      return callMethod(
        Farm,
        this,
        "hasExpired",
        params,
        getContractByCodeHash
      );
    },
    createCrop: async (
      params: FarmTypes.CallMethodParams<"createCrop">
    ): Promise<FarmTypes.CallMethodResult<"createCrop">> => {
      return callMethod(
        Farm,
        this,
        "createCrop",
        params,
        getContractByCodeHash
      );
    },
    deleteCrop: async (
      params: FarmTypes.CallMethodParams<"deleteCrop">
    ): Promise<FarmTypes.CallMethodResult<"deleteCrop">> => {
      return callMethod(
        Farm,
        this,
        "deleteCrop",
        params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    getCollectionUri: async (
      params: FarmTypes.SignExecuteMethodParams<"getCollectionUri">
    ): Promise<FarmTypes.SignExecuteMethodResult<"getCollectionUri">> => {
      return signExecuteMethod(Farm, this, "getCollectionUri", params);
    },
    totalSupply: async (
      params: FarmTypes.SignExecuteMethodParams<"totalSupply">
    ): Promise<FarmTypes.SignExecuteMethodResult<"totalSupply">> => {
      return signExecuteMethod(Farm, this, "totalSupply", params);
    },
    nftByIndex: async (
      params: FarmTypes.SignExecuteMethodParams<"nftByIndex">
    ): Promise<FarmTypes.SignExecuteMethodResult<"nftByIndex">> => {
      return signExecuteMethod(Farm, this, "nftByIndex", params);
    },
    validateNFT: async (
      params: FarmTypes.SignExecuteMethodParams<"validateNFT">
    ): Promise<FarmTypes.SignExecuteMethodResult<"validateNFT">> => {
      return signExecuteMethod(Farm, this, "validateNFT", params);
    },
    getCrop: async (
      params: FarmTypes.SignExecuteMethodParams<"getCrop">
    ): Promise<FarmTypes.SignExecuteMethodResult<"getCrop">> => {
      return signExecuteMethod(Farm, this, "getCrop", params);
    },
    hasExpired: async (
      params: FarmTypes.SignExecuteMethodParams<"hasExpired">
    ): Promise<FarmTypes.SignExecuteMethodResult<"hasExpired">> => {
      return signExecuteMethod(Farm, this, "hasExpired", params);
    },
    createCrop: async (
      params: FarmTypes.SignExecuteMethodParams<"createCrop">
    ): Promise<FarmTypes.SignExecuteMethodResult<"createCrop">> => {
      return signExecuteMethod(Farm, this, "createCrop", params);
    },
    deleteCrop: async (
      params: FarmTypes.SignExecuteMethodParams<"deleteCrop">
    ): Promise<FarmTypes.SignExecuteMethodResult<"deleteCrop">> => {
      return signExecuteMethod(Farm, this, "deleteCrop", params);
    },
  };

  async multicall<Callss extends FarmTypes.MultiCallParams[]>(
    ...callss: Callss
  ): Promise<FarmTypes.MulticallReturnType<Callss>> {
    return (await multicallMethods(
      Farm,
      this,
      callss,
      getContractByCodeHash
    )) as FarmTypes.MulticallReturnType<Callss>;
  }
}
