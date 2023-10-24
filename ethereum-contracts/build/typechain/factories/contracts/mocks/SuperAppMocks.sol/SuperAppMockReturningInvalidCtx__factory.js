"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperAppMockReturningInvalidCtx__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract ISuperfluid",
                name: "host",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
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
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "afterAgreementCreated",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
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
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "afterAgreementTerminated",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506040516102be3803806102be83398101604081905261002f916100b3565b600080546001600160a01b0319166001600160a01b03831690811782556040805163bd1c448b60e01b815260016004820152602481019190915260448101929092529063bd1c448b90606401600060405180830381600087803b15801561009557600080fd5b505af11580156100a9573d6000803e3d6000fd5b50505050506100e3565b6000602082840312156100c557600080fd5b81516001600160a01b03811681146100dc57600080fd5b9392505050565b6101cc806100f26000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806353c11f991461003b578063d86ed3e51461003b575b600080fd5b6100586100493660046100cb565b602a9998505050505050505050565b60405190815260200160405180910390f35b6001600160a01b038116811461007f57600080fd5b50565b60008083601f84011261009457600080fd5b50813567ffffffffffffffff8111156100ac57600080fd5b6020830191508360208285010111156100c457600080fd5b9250929050565b600080600080600080600080600060c08a8c0312156100e957600080fd5b89356100f48161006a565b985060208a01356101048161006a565b975060408a0135965060608a013567ffffffffffffffff8082111561012857600080fd5b6101348d838e01610082565b909850965060808c013591508082111561014d57600080fd5b6101598d838e01610082565b909650945060a08c013591508082111561017257600080fd5b5061017f8c828d01610082565b91508093505080915050929598509295985092959856fea26469706673582212202d0ee81c3be1039f95a61d9068782057c9ce6505e87d12ea49790cd4daac4b3264736f6c63430008130033";
const isSuperArgs = (xs) => xs.length > 1;
class SuperAppMockReturningInvalidCtx__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(host, overrides) {
        return super.deploy(host, overrides || {});
    }
    getDeployTransaction(host, overrides) {
        return super.getDeployTransaction(host, overrides || {});
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
exports.SuperAppMockReturningInvalidCtx__factory = SuperAppMockReturningInvalidCtx__factory;
SuperAppMockReturningInvalidCtx__factory.bytecode = _bytecode;
SuperAppMockReturningInvalidCtx__factory.abi = _abi;
//# sourceMappingURL=SuperAppMockReturningInvalidCtx__factory.js.map