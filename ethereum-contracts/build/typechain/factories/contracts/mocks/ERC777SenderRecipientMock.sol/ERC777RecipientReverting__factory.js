"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC777RecipientReverting__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "interfaceHash",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "canImplementInterfaceForAddress",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
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
        name: "tokensReceived",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506040516329965a1d60e01b815230600482018190527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b60248301526044820152731820a4b7618bde71dce8cdc73aab6c95905fad249081906329965a1d90606401600060405180830381600087803b15801561008c57600080fd5b505af11580156100a0573d6000803e3d6000fd5b5050505050610299806100b46000396000f3fe608060405234801561001057600080fd5b50600436106100355760003560e01c806223de291461003a578063249cb3fa1461004f575b600080fd5b61004d61004836600461018c565b610074565b005b61006261005d366004610237565b6100b6565b60405190815260200160405180910390f35b60405162461bcd60e51b815260206004820152601360248201527274686579207368616c6c206e6f74207061737360681b604482015260640160405180910390fd5b60007fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b83146100e6576000610120565b60405173455243313832305f4143434550545f4d4147494360601b6020820152603401604051602081830303815290604052805190602001205b9392505050565b80356001600160a01b038116811461013e57600080fd5b919050565b60008083601f84011261015557600080fd5b50813567ffffffffffffffff81111561016d57600080fd5b60208301915083602082850101111561018557600080fd5b9250929050565b60008060008060008060008060c0898b0312156101a857600080fd5b6101b189610127565b97506101bf60208a01610127565b96506101cd60408a01610127565b955060608901359450608089013567ffffffffffffffff808211156101f157600080fd5b6101fd8c838d01610143565b909650945060a08b013591508082111561021657600080fd5b506102238b828c01610143565b999c989b5096995094979396929594505050565b6000806040838503121561024a57600080fd5b8235915061025a60208401610127565b9050925092905056fea2646970667358221220c53d5ba2f842dac11868422ef7136f54e1496e5d8b77fa0995ef158ccfa29d8464736f6c63430008130033";
const isSuperArgs = (xs) => xs.length > 1;
class ERC777RecipientReverting__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ERC777RecipientReverting__factory = ERC777RecipientReverting__factory;
ERC777RecipientReverting__factory.bytecode = _bytecode;
ERC777RecipientReverting__factory.abi = _abi;
//# sourceMappingURL=ERC777RecipientReverting__factory.js.map