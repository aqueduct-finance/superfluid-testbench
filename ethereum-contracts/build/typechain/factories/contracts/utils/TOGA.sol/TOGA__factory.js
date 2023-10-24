"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOGA__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract ISuperfluid",
                name: "host_",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "minBondDuration_",
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
                indexed: true,
                internalType: "contract ISuperToken",
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "additionalBond",
                type: "uint256",
            },
        ],
        name: "BondIncreased",
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
            {
                indexed: false,
                internalType: "int96",
                name: "exitRate",
                type: "int96",
            },
        ],
        name: "ExitRateChanged",
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
            {
                indexed: false,
                internalType: "address",
                name: "pic",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "bond",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "int96",
                name: "exitRate",
                type: "int96",
            },
        ],
        name: "NewPIC",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "contract ISuperToken",
                name: "token",
                type: "address",
            },
            {
                internalType: "int96",
                name: "newExitRate",
                type: "int96",
            },
        ],
        name: "changeExitRate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ISuperToken",
                name: "token",
                type: "address",
            },
        ],
        name: "getCurrentPIC",
        outputs: [
            {
                internalType: "address",
                name: "pic",
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
                name: "token",
                type: "address",
            },
        ],
        name: "getCurrentPICInfo",
        outputs: [
            {
                internalType: "address",
                name: "pic",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "bond",
                type: "uint256",
            },
            {
                internalType: "int96",
                name: "exitRate",
                type: "int96",
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
            {
                internalType: "uint256",
                name: "bondAmount",
                type: "uint256",
            },
        ],
        name: "getDefaultExitRateFor",
        outputs: [
            {
                internalType: "int96",
                name: "exitRate",
                type: "int96",
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
            {
                internalType: "uint256",
                name: "bondAmount",
                type: "uint256",
            },
        ],
        name: "getMaxExitRateFor",
        outputs: [
            {
                internalType: "int96",
                name: "exitRate",
                type: "int96",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "minBondDuration",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "userData",
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
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60e06040523480156200001157600080fd5b5060405162001833380380620018338339810160408190526200003491620002b5565b6001600160a01b038216608081905260c0829052604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd3600482015263b6d200de90602401602060405180830381865afa158015620000a2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000c89190620002e6565b6001600160a01b031660a0526040516329965a1d60e01b815230600482018190527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b60248301819052604483019190915290731820a4b7618bde71dce8cdc73aab6c95905fad24906329965a1d90606401600060405180830381600087803b1580156200015457600080fd5b505af115801562000169573d6000803e3d6000fd5b50506040516329965a1d60e01b815230600482018190527fece6fc2bcfc93e4c34c28aeaa114be1a6161decb8268f79cbe7c3c7f31b1e8c660248301526044820152731820a4b7618bde71dce8cdc73aab6c95905fad2492506329965a1d9150606401600060405180830381600087803b158015620001e757600080fd5b505af1158015620001fc573d6000803e3d6000fd5b50506040516329965a1d60e01b815230600482018190527fca6323f8f0faf3d4f41f2397ee46c8d85bed576d54aadeb20b6cf7b45b3a696460248301526044820152731820a4b7618bde71dce8cdc73aab6c95905fad2492506329965a1d9150606401600060405180830381600087803b1580156200027a57600080fd5b505af11580156200028f573d6000803e3d6000fd5b505050505050506200030d565b6001600160a01b0381168114620002b257600080fd5b50565b60008060408385031215620002c957600080fd5b8251620002d6816200029c565b6020939093015192949293505050565b600060208284031215620002f957600080fd5b815162000306816200029c565b9392505050565b60805160a05160c05161148d620003a66000396000818161011d015281816102dd0152818161074201528181610792015261093501526000818161037e0152818161043f0152818161058f0152818161061e015281816107fa01528181610a5601528181610b170152610ce701526000818161041501528181610565015281816105f401528181610aed0152610cbd015261148d6000f3fe608060405234801561001057600080fd5b506004361061007c5760003560e01c8063362910631161005b57806336291063146100d457806360dfa69514610118578063b8a140331461014d578063bf8903dd1461016057600080fd5b806223de291461008157806302f3c6c51461009657806316e23b9f146100a9575b600080fd5b61009461008f366004610fc0565b61019b565b005b6100946100a4366004611080565b610243565b6100bc6100b73660046110b9565b610735565b604051600b9190910b81526020015b60405180910390f35b6101006100e23660046110e5565b6001600160a01b039081166000908152602081905260409020541690565b6040516001600160a01b0390911681526020016100cb565b61013f7f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020016100cb565b6100bc61015b3660046110b9565b610785565b61017361016e3660046110e5565b6107b7565b604080516001600160a01b0390941684526020840192909252600b0b908201526060016100cb565b336000818152602081905260409020546001600160a01b038981169116146101f457600084156101d6576101d185870187611109565b6101e0565b6101e08288610735565b90506101ee828a898461089b565b50610238565b806001600160a01b03167fb9c1b85a7ee70d95c61aca7cda03ef957abc5265a191ca74cc335faf594095668760405161022f91815260200190565b60405180910390a25b505050505050505050565b6001600160a01b03808316600090815260208190526040902054163381146102ab5760405162461bcd60e51b81526020600482015260166024820152751513d1d04e881bdb9b1e48141250c8185b1b1bddd95960521b60448201526064015b60405180910390fd5b600082600b0b12156102cf5760405162461bcd60e51b81526004016102a290611126565b6102d883610e28565b6103067f0000000000000000000000000000000000000000000000000000000000000000600b85900b61117f565b111561034e5760405162461bcd60e51b81526020600482015260176024820152760a89e8e827440caf0d2e8a4c2e8ca40e8dede40d0d2ced604b1b60448201526064016102a2565b604051631cd43d1160e31b81526001600160a01b03848116600483015230602483015282811660448301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063e6a1e88890606401608060405180830381865afa1580156103c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103eb9190611196565b5050915050600081600b0b1380156104065750600083600b0b135b15610540576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116906339255d5b907f00000000000000000000000000000000000000000000000000000000000000009081166350209a6288878960005b6040519080825280601f01601f191660200182016040528015610496576020820181803683370190505b506040516024016104aa949392919061123a565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b03191682526104f39392509060040161127a565b6000604051808303816000875af1158015610512573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261053a91908101906112c1565b506106ed565b80600b0b60001480156105565750600083600b0b135b156105c0576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116906339255d5b907f00000000000000000000000000000000000000000000000000000000000000009081166362fc305e888789600061046c565b600081600b0b1380156105d6575082600b0b6000145b156106ed576040805160008152602081019091526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116916339255d5b917f0000000000000000000000000000000000000000000000000000000000000000919082169063b4b333c69061065b908a9030908a906044810161136e565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b03191682526106a49392509060040161127a565b6000604051808303816000875af11580156106c3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106eb91908101906112c1565b505b604051600b84900b81526001600160a01b038516907f0988aefa675e81e1db7fca08264db5dc2a1cc2a604f2a78d902a9747146a56719060200160405180910390a250505050565b600061077c6107776107687f0000000000000000000000000000000000000000000000000000000000000000600461117f565b61077290856113a2565b610ec9565b610f37565b90505b92915050565b600061077c6107776107727f0000000000000000000000000000000000000000000000000000000000000000856113a2565b6001600160a01b03818116600081815260208190526040808220549051631cd43d1160e31b815260048101939093523060248401528316604483015291829182917f0000000000000000000000000000000000000000000000000000000000000000169063e6a1e88890606401608060405180830381865afa158015610841573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108659190611196565b50506001600160a01b0380871660009081526020819052604090205491935016905061089085610e28565b925092509193909250565b6001600160a01b038416600090815260208190526040902054600160a01b900460ff161561090b5760405162461bcd60e51b815260206004820152601c60248201527f544f47413a207265656e7472616e6379206e6f7420616c6c6f7765640000000060448201526064016102a2565b600081600b0b121561092f5760405162461bcd60e51b81526004016102a290611126565b8161095e7f0000000000000000000000000000000000000000000000000000000000000000600b84900b61117f565b11156109a65760405162461bcd60e51b81526020600482015260176024820152760a89e8e827440caf0d2e8a4c2e8ca40e8dede40d0d2ced604b1b60448201526064016102a2565b6000826109b286610e28565b6109bc91906113c4565b9050808311610a015760405162461bcd60e51b8152602060048201526011602482015270544f47413a2062696420746f6f206c6f7760781b60448201526064016102a2565b6001600160a01b038581166000818152602081905260408082208054600160a01b60ff60a01b198216179091559051631cd43d1160e31b815260048101939093523060248401528316604483018190529290917f00000000000000000000000000000000000000000000000000000000000000009091169063e6a1e88890606401608060405180830381865afa158015610a9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac39190611196565b5050915050600081600b0b1315610be6576040805160008152602081019091526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116916339255d5b917f0000000000000000000000000000000000000000000000000000000000000000919082169063b4b333c690610b54908d9030908a906044810161136e565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b0319168252610b9d9392509060040161127a565b6000604051808303816000875af1158015610bbc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610be491908101906112c1565b505b6001600160a01b03821615610c6a5760405163a9059cbb60e01b81526001600160a01b0383811660048301526024820185905288169063a9059cbb906044016020604051808303816000875af1158015610c44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6891906113d7565b505b6001600160a01b03878116600090815260208190526040812080546001600160a01b03191692891692909217909155600b85900b1315610db6576040805160008152602081019091526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116916339255d5b917f000000000000000000000000000000000000000000000000000000000000000091908216906362fc305e90610d24908d908d908c906044810161123a565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b0319168252610d6d9392509060040161127a565b6000604051808303816000875af1158015610d8c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610db491908101906112c1565b505b6001600160a01b0387811660008181526020818152604091829020805460ff60a01b191690558151938a1684528301889052600b87900b90830152907f836808e57755d5535898b7203c7d68b1bfb2701b1943ecb133c675e0d00780159060600160405180910390a250505050505050565b604051632ec8eec760e01b8152306004820152600090819081906001600160a01b03851690632ec8eec790602401608060405180830381865afa158015610e73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9791906113f9565b50509150915060008183610eab919061142f565b13610eb7576000610ec1565b610ec1818361142f565b949350505050565b60006001600160ff1b03821115610f335760405162461bcd60e51b815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2061604482015267371034b73a191a9b60c11b60648201526084016102a2565b5090565b60006b7fffffffffffffffffffffff8212610f33576b7fffffffffffffffffffffff92915050565b6001600160a01b0381168114610f7457600080fd5b50565b60008083601f840112610f8957600080fd5b50813567ffffffffffffffff811115610fa157600080fd5b602083019150836020828501011115610fb957600080fd5b9250929050565b60008060008060008060008060c0898b031215610fdc57600080fd5b8835610fe781610f5f565b97506020890135610ff781610f5f565b9650604089013561100781610f5f565b955060608901359450608089013567ffffffffffffffff8082111561102b57600080fd5b6110378c838d01610f77565b909650945060a08b013591508082111561105057600080fd5b5061105d8b828c01610f77565b999c989b5096995094979396929594505050565b80600b0b8114610f7457600080fd5b6000806040838503121561109357600080fd5b823561109e81610f5f565b915060208301356110ae81611071565b809150509250929050565b600080604083850312156110cc57600080fd5b82356110d781610f5f565b946020939093013593505050565b6000602082840312156110f757600080fd5b813561110281610f5f565b9392505050565b60006020828403121561111b57600080fd5b813561110281611071565b60208082526023908201527f544f47413a206e65676174697665206578697452617465206e6f7420616c6c6f6040820152621dd95960ea1b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761077f5761077f611169565b600080600080608085870312156111ac57600080fd5b8451935060208501516111be81611071565b6040860151606090960151949790965092505050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156112055781810151838201526020016111ed565b50506000910152565b600081518084526112268160208601602086016111ea565b601f01601f19169290920160200192915050565b6001600160a01b03858116825284166020820152600b83900b60408201526080606082018190526000906112709083018461120e565b9695505050505050565b6001600160a01b038316815260606020820181905260009061129e9083018461120e565b8281036040938401526002815261060f60f31b6020820152919091019392505050565b6000602082840312156112d357600080fd5b815167ffffffffffffffff808211156112eb57600080fd5b818401915084601f8301126112ff57600080fd5b815181811115611311576113116111d4565b604051601f8201601f19908116603f01168101908382118183101715611339576113396111d4565b8160405282815287602084870101111561135257600080fd5b6113638360208301602088016111ea565b979650505050505050565b6001600160a01b0385811682528481166020830152831660408201526080606082018190526000906112709083018461120e565b6000826113bf57634e487b7160e01b600052601260045260246000fd5b500490565b8181038181111561077f5761077f611169565b6000602082840312156113e957600080fd5b8151801515811461110257600080fd5b6000806000806080858703121561140f57600080fd5b505082516020840151604085015160609095015191969095509092509050565b808201828112600083128015821682158216171561144f5761144f611169565b50509291505056fea2646970667358221220e570cb188b4158d7eef89a1a4474bdc8be27d06148c58542457eebb685ef604164736f6c63430008130033";
const isSuperArgs = (xs) => xs.length > 1;
class TOGA__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(host_, minBondDuration_, overrides) {
        return super.deploy(host_, minBondDuration_, overrides || {});
    }
    getDeployTransaction(host_, minBondDuration_, overrides) {
        return super.getDeployTransaction(host_, minBondDuration_, overrides || {});
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
exports.TOGA__factory = TOGA__factory;
TOGA__factory.bytecode = _bytecode;
TOGA__factory.abi = _abi;
//# sourceMappingURL=TOGA__factory.js.map