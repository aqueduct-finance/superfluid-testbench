"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUPSProxiableMock__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "uuid",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "w",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
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
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
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
    {
        inputs: [],
        name: "waterMark",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x60c060405234801561001057600080fd5b5060405161059438038061059483398101604081905261002f9161003d565b60809190915260a052610061565b6000806040838503121561005057600080fd5b505080516020909101519092909150565b60805160a051610502610092600039600060d601526000818160a30152818161032d015261044801526105026000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063469519541461006757806350d75d251461007c57806352d1902d146100a15780636154b102146100d15780638129fc1c146100f85780639903ad38146100f8575b600080fd5b61007a610075366004610483565b610100565b005b61008461010c565b6040516001600160a01b0390911681526020015b60405180910390f35b7f00000000000000000000000000000000000000000000000000000000000000005b604051908152602001610098565b6100c37f000000000000000000000000000000000000000000000000000000000000000081565b61007a61013b565b61010981610249565b50565b60006101367f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b600054610100900460ff161580801561015b5750600054600160ff909116105b806101755750303b158015610175575060005460ff166001145b6101dd5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff191660011790558015610200576000805461ff0019166101001790555b8015610109576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020015b60405180910390a150565b60006102737f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b0316036102c95760405162461bcd60e51b815260206004820152601d60248201527f5555505350726f786961626c653a206e6f742075706772616461626c6500000060448201526064016101d4565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610307573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061032b91906104b3565b7f0000000000000000000000000000000000000000000000000000000000000000146103a55760405162461bcd60e51b815260206004820152602360248201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60448201526267696360e81b60648201526084016101d4565b6001600160a01b03811630036103fd5760405162461bcd60e51b815260206004820152601960248201527f5555505350726f786961626c653a2070726f7879206c6f6f700000000000000060448201526064016101d4565b610425817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc7f0000000000000000000000000000000000000000000000000000000000000000604080519182526001600160a01b03841660208301520161023e565b60006020828403121561049557600080fd5b81356001600160a01b03811681146104ac57600080fd5b9392505050565b6000602082840312156104c557600080fd5b505191905056fea2646970667358221220c3e2230c08c0f9af113536c4d0a8967f204780e3f88f4cb18cc322b20fcadc3764736f6c63430008130033";
const isSuperArgs = (xs) => xs.length > 1;
class UUPSProxiableMock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(uuid, w, overrides) {
        return super.deploy(uuid, w, overrides || {});
    }
    getDeployTransaction(uuid, w, overrides) {
        return super.getDeployTransaction(uuid, w, overrides || {});
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
exports.UUPSProxiableMock__factory = UUPSProxiableMock__factory;
UUPSProxiableMock__factory.bytecode = _bytecode;
UUPSProxiableMock__factory.abi = _abi;
//# sourceMappingURL=UUPSProxiableMock__factory.js.map