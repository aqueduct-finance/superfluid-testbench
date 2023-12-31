"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperAppBaseFlow__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "NotAcceptedSuperToken",
        type: "error",
    },
    {
        inputs: [],
        name: "NotImplemented",
        type: "error",
    },
    {
        inputs: [],
        name: "UnauthorizedHost",
        type: "error",
    },
    {
        inputs: [],
        name: "CFAV1_TYPE",
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
                internalType: "contract ISuperToken",
                name: "superToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "agreementClass",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "agreementData",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "afterAgreementCreated",
        outputs: [
            {
                internalType: "bytes",
                name: "newCtx",
                type: "bytes",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ISuperToken",
                name: "superToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "agreementClass",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "agreementData",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "cbdata",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "afterAgreementTerminated",
        outputs: [
            {
                internalType: "bytes",
                name: "newCtx",
                type: "bytes",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ISuperToken",
                name: "superToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "agreementClass",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "agreementData",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "cbdata",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "ctx",
                type: "bytes",
            },
        ],
        name: "afterAgreementUpdated",
        outputs: [
            {
                internalType: "bytes",
                name: "newCtx",
                type: "bytes",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ISuperToken",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "beforeAgreementCreated",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ISuperToken",
                name: "superToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "agreementClass",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "agreementData",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "beforeAgreementTerminated",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ISuperToken",
                name: "superToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "agreementClass",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "agreementData",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "beforeAgreementUpdated",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "host",
        outputs: [
            {
                internalType: "contract ISuperfluid",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ISuperToken",
                name: "",
                type: "address",
            },
        ],
        name: "isAcceptedSuperToken",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class SuperAppBaseFlow__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.SuperAppBaseFlow__factory = SuperAppBaseFlow__factory;
SuperAppBaseFlow__factory.abi = _abi;
//# sourceMappingURL=SuperAppBaseFlow__factory.js.map