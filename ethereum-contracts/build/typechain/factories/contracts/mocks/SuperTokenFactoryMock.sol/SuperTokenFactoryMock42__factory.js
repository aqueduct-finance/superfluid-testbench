"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperTokenFactoryMock42__factory = void 0;
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
            {
                internalType: "contract ISuperToken",
                name: "superTokenLogic",
                type: "address",
            },
            {
                internalType: "contract IConstantOutflowNFT",
                name: "constantOutflowNFT",
                type: "address",
            },
            {
                internalType: "contract IConstantInflowNFT",
                name: "constantInflowNFT",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
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
        name: "SUPER_TOKEN_FACTORY_ONLY_GOVERNANCE_OWNER",
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
        inputs: [],
        name: "CONSTANT_INFLOW_NFT_LOGIC",
        outputs: [
            {
                internalType: "contract IConstantInflowNFT",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "CONSTANT_OUTFLOW_NFT_LOGIC",
        outputs: [
            {
                internalType: "contract IConstantOutflowNFT",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "_SUPER_TOKEN_LOGIC",
        outputs: [
            {
                internalType: "contract ISuperToken",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "castrate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
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
                name: "",
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
                components: [
                    {
                        internalType: "address",
                        name: "underlyingToken",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "superToken",
                        type: "address",
                    },
                ],
                internalType: "struct SuperTokenFactoryBase.InitializeData[]",
                name: "_data",
                type: "tuple[]",
            },
        ],
        name: "initializeCanonicalWrapperSuperTokens",
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
        stateMutability: "pure",
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
const _bytecode = "0x6101006040523480156200001257600080fd5b5060405162001fe638038062001fe683398101604081905262000035916200010d565b6001600160a01b0380851660a052831660808190526040805163132075a760e31b81529051869286928692869291639903ad3891600480830192600092919082900301818387803b1580156200008a57600080fd5b505af11580156200009f573d6000803e3d6000fd5b5050506001600160a01b0380841660c05282811660e052608051604051911691507fc13fb19d60857980e565bf5dae406b8802d3c1cec50c6156b30b12b87402978390600090a2505050505050505062000175565b6001600160a01b03811681146200010a57600080fd5b50565b600080600080608085870312156200012457600080fd5b84516200013181620000f4565b60208601519094506200014481620000f4565b60408601519093506200015781620000f4565b60608601519092506200016a81620000f4565b939692955090935050565b60805160a05160c05160e051611df1620001f5600039600081816101f001526109760152600081816101c9015261085d015260008181610142015281816107390152610bcb01526000818161021c0152818161029d015281816104290152818161088c015281816109a501528181610e8c01526111410152611df16000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80638129fc1c116100a2578063a6d0c53411610071578063a6d0c53414610253578063bab74c8914610266578063cbf927b314610298578063d412d344146102bf578063eff0a89d146102d257600080fd5b80638129fc1c146102125780639470a5b21461021a57806397e011ed146102405780639903ad381461021257600080fd5b806350d75d25116100de57806350d75d251461018e57806352d1902d146101965780635365d19f146101c45780635a7792df146101eb57600080fd5b8063151188dc1461011057806320bc442514610140578063431f1481146101665780634695195414610179575b600080fd5b61012361011e366004611449565b6102fe565b6040516001600160a01b0390911681526020015b60405180910390f35b7f0000000000000000000000000000000000000000000000000000000000000000610123565b6101236101743660046114ca565b6106b1565b61018c610187366004611449565b61072e565b005b610123610a89565b6040517fb146a22bc9644a3313a7e28592f37d32718a2b618d3d136aa524b0d86b87b6208152602001610137565b6101237f000000000000000000000000000000000000000000000000000000000000000081565b6101237f000000000000000000000000000000000000000000000000000000000000000081565b61018c610ab8565b7f0000000000000000000000000000000000000000000000000000000000000000610123565b61018c61024e36600461155d565b610bc7565b6101236102613660046115e1565b610dd6565b610279610274366004611449565b611027565b604080516001600160a01b039093168352901515602083015201610137565b6101237f000000000000000000000000000000000000000000000000000000000000000081565b61018c6102cd366004611449565b61112a565b6101236102e0366004611449565b6001600160a01b039081166000908152600160205260409020541690565b600080805260016020527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49546001600160a01b0316610350576040516306ce6e6d60e21b815260040160405180910390fd5b6001600160a01b03808316600090815260016020526040902054839116801561038c576040516348eb3cb960e11b815260040160405180910390fd5b604080516001600160a01b0384166020820152600091016040516020818303038152906040528051906020012090506000816040516103ca9061141a565b8190604051809103906000f59050801580156103ea573d6000803e3d6000fd5b506001600160a01b038581166000908152600160205260409081902080546001600160a01b0319168484169081179091559051634a0687ef60e01b81527f00000000000000000000000000000000000000000000000000000000000000009092166004830152919250634a0687ef90602401600060405180830381600087803b15801561047657600080fd5b505af115801561048a573d6000803e3d6000fd5b5050505060008190506000876001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f79190611687565b90506000886001600160a01b03166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa158015610539573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261056191908101906116de565b90506000896001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa1580156105a3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105cb91908101906116de565b9050836001600160a01b03166342fe09808b85856040516020016105ef9190611780565b6040516020818303038152906040528560405160200161060f91906117ae565b6040516020818303038152906040526040518563ffffffff1660e01b815260040161063d94939291906117ff565b600060405180830381600087803b15801561065757600080fd5b505af115801561066b573d6000803e3d6000fd5b50506040516001600160a01b03871692507fb52c6d9d122e8c07769b96d7bb14e66db58ee03fdebaaa2f92547e9c7ef0e65f9150600090a2509198975050505050505050565b600061072387886001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107199190611687565b8888888888610dd6565b979650505050505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107775760405163478b8e8360e01b815260040160405180910390fd5b610780816111e0565b60008190506000816001600160a01b0316635365d19f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e9919061183e565b90506000826001600160a01b0316635a7792df6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561082b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084f919061183e565b9050816001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161461096a577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ef43d2c66040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090c919061183e565b6040516311a5465560e21b81526001600160a01b0384811660048301529190911690634695195490602401600060405180830381600087803b15801561095157600080fd5b505af1158015610965573d6000803e3d6000fd5b505050505b806001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614610a83577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634c5c0c856040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a01573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a25919061183e565b6040516311a5465560e21b81526001600160a01b0383811660048301529190911690634695195490602401600060405180830381600087803b158015610a6a57600080fd5b505af1158015610a7e573d6000803e3d6000fd5b505050505b50505050565b6000610ab37f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b600054610100900460ff1615808015610ad85750600054600160ff909116105b80610af25750303b158015610af2575060005460ff166001145b610b5a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff191660011790558015610b7d576000805461ff0019166101001790555b8015610bc4576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020015b60405180910390a15b50565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663289b3c0d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c4b919061183e565b9050806001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610caf919061183e565b6001600160a01b0316336001600160a01b031614610ce057604051632bf2a63360e21b815260040160405180910390fd5b6000805260016020527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49546001600160a01b031615610d32576040516348eb3cb960e11b815260040160405180910390fd5b60005b82811015610a8357838382818110610d4f57610d4f61185b565b9050604002016020016020810190610d679190611449565b60016000868685818110610d7d57610d7d61185b565b610d939260206040909202019081019150611449565b6001600160a01b039081168252602082019290925260400160002080546001600160a01b0319169290911691909117905580610dce81611871565b915050610d35565b60006001600160a01b038816610dff5760405163182e4f4160e11b815260040160405180910390fd5b6000866002811115610e1357610e13611898565b03610e315760405163c4901a4360e01b815260040160405180910390fd5b6001866002811115610e4557610e45611898565b03610efd576000604051610e589061141a565b604051809103906000f080158015610e74573d6000803e3d6000fd5b50604051634a0687ef60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116600483015291925090821690634a0687ef90602401600060405180830381600087803b158015610edc57600080fd5b505af1158015610ef0573d6000803e3d6000fd5b5050505080915050610f81565b6000604051610f0b90611427565b604051809103906000f080158015610f27573d6000803e3d6000fd5b509050806001600160a01b0316638129fc1c6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610f6557600080fd5b505af1158015610f79573d6000803e3d6000fd5b509293505050505b6040516285fc1360e71b81526001600160a01b038216906342fe098090610fb6908b908b908a908a908a908a906004016118d7565b600060405180830381600087803b158015610fd057600080fd5b505af1158015610fe4573d6000803e3d6000fd5b50506040516001600160a01b03841692507fb52c6d9d122e8c07769b96d7bb14e66db58ee03fdebaaa2f92547e9c7ef0e65f9150600090a2979650505050505050565b6001600160a01b03808216600090815260016020526040812054909182911680156110585780925060019150611124565b60006040518060200161106a9061141a565b601f1982820381018352601f9091011660408181526001600160a01b03881660208301529192506001600160f81b03199130910160405160208183030381529060405280519060200120838051906020012060405160200161110394939291906001600160f81b031994909416845260609290921b6bffffffffffffffffffffffff191660018401526015830152603582015260550190565b6040516020818303038152906040528051906020012060001c935060009250505b50915091565b604051634a0687ef60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152829190821690634a0687ef90602401600060405180830381600087803b15801561119057600080fd5b505af11580156111a4573d6000803e3d6000fd5b50506040516001600160a01b03851692507f437790724a6e97b75d23117f28cdd4b1beeafc34f7a0911ef256e9334f4369a59150600090a25050565b600061120a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b0316036112605760405162461bcd60e51b815260206004820152601d60248201527f5555505350726f786961626c653a206e6f742075706772616461626c650000006044820152606401610b51565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561129e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c29190611925565b7fb146a22bc9644a3313a7e28592f37d32718a2b618d3d136aa524b0d86b87b6201461133c5760405162461bcd60e51b815260206004820152602360248201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60448201526267696360e81b6064820152608401610b51565b6001600160a01b03811630036113945760405162461bcd60e51b815260206004820152601960248201527f5555505350726f786961626c653a2070726f7879206c6f6f70000000000000006044820152606401610b51565b6113bc817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc7fb146a22bc9644a3313a7e28592f37d32718a2b618d3d136aa524b0d86b87b620604080519182526001600160a01b038416602083015201610bbb565b61024a8061193f83390190565b61023380611b8983390190565b6001600160a01b0381168114610bc457600080fd5b60006020828403121561145b57600080fd5b813561146681611434565b9392505050565b80356003811061147c57600080fd5b919050565b60008083601f84011261149357600080fd5b50813567ffffffffffffffff8111156114ab57600080fd5b6020830191508360208285010111156114c357600080fd5b9250929050565b600080600080600080608087890312156114e357600080fd5b86356114ee81611434565b95506114fc6020880161146d565b9450604087013567ffffffffffffffff8082111561151957600080fd5b6115258a838b01611481565b9096509450606089013591508082111561153e57600080fd5b5061154b89828a01611481565b979a9699509497509295939492505050565b6000806020838503121561157057600080fd5b823567ffffffffffffffff8082111561158857600080fd5b818501915085601f83011261159c57600080fd5b8135818111156115ab57600080fd5b8660208260061b85010111156115c057600080fd5b60209290920196919550909350505050565b60ff81168114610bc457600080fd5b600080600080600080600060a0888a0312156115fc57600080fd5b873561160781611434565b96506020880135611617816115d2565b95506116256040890161146d565b9450606088013567ffffffffffffffff8082111561164257600080fd5b61164e8b838c01611481565b909650945060808a013591508082111561166757600080fd5b506116748a828b01611481565b989b979a50959850939692959293505050565b60006020828403121561169957600080fd5b8151611466816115d2565b634e487b7160e01b600052604160045260246000fd5b60005b838110156116d55781810151838201526020016116bd565b50506000910152565b6000602082840312156116f057600080fd5b815167ffffffffffffffff8082111561170857600080fd5b818401915084601f83011261171c57600080fd5b81518181111561172e5761172e6116a4565b604051601f8201601f19908116603f01168101908382118183101715611756576117566116a4565b8160405282815287602084870101111561176f57600080fd5b6107238360208301602088016116ba565b65029bab832b9160d51b8152600082516117a18160068501602087016116ba565b9190910160060192915050565b600082516117c08184602087016116ba565b600f60fb1b920191825250600101919050565b600081518084526117eb8160208601602086016116ba565b601f01601f19169290920160200192915050565b6001600160a01b038516815260ff8416602082015260806040820181905260009061182c908301856117d3565b828103606084015261072381856117d3565b60006020828403121561185057600080fd5b815161146681611434565b634e487b7160e01b600052603260045260246000fd5b60006001820161189157634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052602160045260246000fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b038716815260ff8616602082015260806040820181905260009061190590830186886118ae565b82810360608401526119188185876118ae565b9998505050505050505050565b60006020828403121561193757600080fd5b505191905056fe608060405234801561001057600080fd5b5061022a806100206000396000f3fe6080604052600436106100225760003560e01c80634a0687ef1461003957610031565b366100315761002f610059565b005b61002f610059565b34801561004557600080fd5b5061002f6100543660046101c4565b61006b565b610069610064610171565b6101a0565b565b6001600160a01b0381166100c65760405162461bcd60e51b815260206004820152601760248201527f5555505350726f78793a207a65726f206164647265737300000000000000000060448201526064015b60405180910390fd5b60006100f07f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b0316146101465760405162461bcd60e51b815260206004820152601e60248201527f5555505350726f78793a20616c726561647920696e697469616c697a6564000060448201526064016100bd565b61016e817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b50565b600061019b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b3660008037600080366000845af43d6000803e8080156101bf573d6000f35b3d6000fd5b6000602082840312156101d657600080fd5b81356001600160a01b03811681146101ed57600080fd5b939250505056fea264697066735822122093a2bbcf49dd2895177212eeb11e9921080374fd8cd93d5be93a80935603195a64736f6c63430008130033608060405234801561001057600080fd5b50610213806100206000396000f3fe6080604052600436106100225760003560e01c80638129fc1c1461003957610031565b366100315761002f61004e565b005b61002f61004e565b34801561004557600080fd5b5061002f610060565b61005e6100596100d0565b610173565b565b7fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a0546001600160a01b038116156100aa576040516305c5d81960e01b815260040160405180910390fd5b50337fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a055565b7fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a0546000906001600160a01b03811661010b5761010b610197565b806001600160a01b0316639470a5b26040518163ffffffff1660e01b8152600401602060405180830381865afa158015610149573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061016d91906101ad565b91505090565b3660008037600080366000845af43d6000803e808015610192573d6000f35b3d6000fd5b634e487b7160e01b600052600160045260246000fd5b6000602082840312156101bf57600080fd5b81516001600160a01b03811681146101d657600080fd5b939250505056fea2646970667358221220d5944624d7ac37060e3921acfef50739d5c89189a003fea4b35a8970f675364264736f6c63430008130033a2646970667358221220b964d1b9a24c011c39d64c456dac8e47e5c783a7e194215428e0a18007e9e4ab64736f6c63430008130033";
const isSuperArgs = (xs) => xs.length > 1;
class SuperTokenFactoryMock42__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(host, superTokenLogic, constantOutflowNFT, constantInflowNFT, overrides) {
        return super.deploy(host, superTokenLogic, constantOutflowNFT, constantInflowNFT, overrides || {});
    }
    getDeployTransaction(host, superTokenLogic, constantOutflowNFT, constantInflowNFT, overrides) {
        return super.getDeployTransaction(host, superTokenLogic, constantOutflowNFT, constantInflowNFT, overrides || {});
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
exports.SuperTokenFactoryMock42__factory = SuperTokenFactoryMock42__factory;
SuperTokenFactoryMock42__factory.bytecode = _bytecode;
SuperTokenFactoryMock42__factory.abi = _abi;
//# sourceMappingURL=SuperTokenFactoryMock42__factory.js.map