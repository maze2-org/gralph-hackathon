"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContractByCodeHash = getContractByCodeHash;
const _1 = require(".");
let contracts = undefined;
function getContractByCodeHash(codeHash) {
    if (contracts === undefined) {
        contracts = [
            _1.Crop,
            _1.Farm,
            _1.ForwardNameResolver,
            _1.Name,
            _1.ReverseNameResolver,
            _1.RewardToken,
        ];
    }
    const c = contracts.find((c) => c.contract.codeHash === codeHash || c.contract.codeHashDebug === codeHash);
    if (c === undefined) {
        throw new Error("Unknown code with code hash: " + codeHash);
    }
    return c.contract;
}
