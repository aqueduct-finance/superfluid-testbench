"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUPSProxiable__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "uuid",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "codeAddress",
                type: "address",
            },
        ],
        name: "CodeUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        inputs: [],
        name: "castrate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getCodeAddress",
        outputs: [
            {
                internalType: "address",
                name: "codeAddress",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "proxiableUUID",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newAddress",
                type: "address",
            },
        ],
        name: "updateCode",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class UUPSProxiable__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.UUPSProxiable__factory = UUPSProxiable__factory;
UUPSProxiable__factory.abi = _abi;
//# sourceMappingURL=UUPSProxiable__factory.js.map