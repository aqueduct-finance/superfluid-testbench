"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISuperTokenFactory__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "SUPER_TOKEN_FACTORY_ALREADY_EXISTS",
        type: "error",
    },
    {
        inputs: [],
        name: "SUPER_TOKEN_FACTORY_DOES_NOT_EXIST",
        type: "error",
    },
    {
        inputs: [],
        name: "SUPER_TOKEN_FACTORY_NON_UPGRADEABLE_IS_DEPRECATED",
        type: "error",
    },
    {
        inputs: [],
        name: "SUPER_TOKEN_FACTORY_ONLY_HOST",
        type: "error",
    },
    {
        inputs: [],
        name: "SUPER_TOKEN_FACTORY_UNINITIALIZED",
        type: "error",
    },
    {
        inputs: [],
        name: "SUPER_TOKEN_FACTORY_ZERO_ADDRESS",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "contract ISuperToken",
                name: "token",
                type: "address",
            },
        ],
        name: "CustomSuperTokenCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "contract ISuperToken",
                name: "token",
                type: "address",
            },
        ],
        name: "SuperTokenCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "contract ISuperToken",
                name: "tokenLogic",
                type: "address",
            },
        ],
        name: "SuperTokenLogicCreated",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_underlyingToken",
                type: "address",
            },
        ],
        name: "computeCanonicalERC20WrapperAddress",
        outputs: [
            {
                internalType: "address",
                name: "superTokenAddress",
                type: "address",
            },
            {
                internalType: "bool",
                name: "isDeployed",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ERC20WithTokenInfo",
                name: "_underlyingToken",
                type: "address",
            },
        ],
        name: "createCanonicalERC20Wrapper",
        outputs: [
            {
                internalType: "contract ISuperToken",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ERC20WithTokenInfo",
                name: "underlyingToken",
                type: "address",
            },
            {
                internalType: "enum ISuperTokenFactory.Upgradability",
                name: "upgradability",
                type: "uint8",
            },
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol",
                type: "string",
            },
        ],
        name: "createERC20Wrapper",
        outputs: [
            {
                internalType: "contract ISuperToken",
                name: "superToken",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "underlyingToken",
                type: "address",
            },
            {
                internalType: "uint8",
                name: "underlyingDecimals",
                type: "uint8",
            },
            {
                internalType: "enum ISuperTokenFactory.Upgradability",
                name: "upgradability",
                type: "uint8",
            },
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol",
                type: "string",
            },
        ],
        name: "createERC20Wrapper",
        outputs: [
            {
                internalType: "contract ISuperToken",
                name: "superToken",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_underlyingTokenAddress",
                type: "address",
            },
        ],
        name: "getCanonicalERC20Wrapper",
        outputs: [
            {
                internalType: "address",
                name: "superTokenAddress",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getHost",
        outputs: [
            {
                internalType: "address",
                name: "host",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getSuperTokenLogic",
        outputs: [
            {
                internalType: "contract ISuperToken",
                name: "superToken",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "customSuperTokenProxy",
                type: "address",
            },
        ],
        name: "initializeCustomSuperToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class ISuperTokenFactory__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ISuperTokenFactory__factory = ISuperTokenFactory__factory;
ISuperTokenFactory__factory.abi = _abi;
//# sourceMappingURL=ISuperTokenFactory__factory.js.map