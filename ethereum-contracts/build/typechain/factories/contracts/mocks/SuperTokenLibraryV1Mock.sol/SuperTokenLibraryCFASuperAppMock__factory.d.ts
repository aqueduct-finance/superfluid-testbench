import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SuperTokenLibraryCFASuperAppMock, SuperTokenLibraryCFASuperAppMockInterface } from "../../../../contracts/mocks/SuperTokenLibraryV1Mock.sol/SuperTokenLibraryCFASuperAppMock";
type SuperTokenLibraryCFASuperAppMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperTokenLibraryCFASuperAppMock__factory extends ContractFactory {
    constructor(...args: SuperTokenLibraryCFASuperAppMockConstructorParams);
    deploy(_host: PromiseOrValue<string>, defaultSender: PromiseOrValue<string>, defaultReceiver: PromiseOrValue<string>, defaultFlowOperator: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperTokenLibraryCFASuperAppMock>;
    getDeployTransaction(_host: PromiseOrValue<string>, defaultSender: PromiseOrValue<string>, defaultReceiver: PromiseOrValue<string>, defaultFlowOperator: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperTokenLibraryCFASuperAppMock;
    connect(signer: Signer): SuperTokenLibraryCFASuperAppMock__factory;
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b5060405162001b6338038062001b638339810160408190526200003491620000f0565b600080546001600160a01b0319166001600160a01b03868116918217835585811660805284811660a052831660c0526040805163bd1c448b60e01b8152643d0000000160048201819052602482019290925260448101939093529163bd1c448b90606401600060405180830381600087803b158015620000b357600080fd5b505af1158015620000c8573d6000803e3d6000fd5b50505050505050505062000158565b6001600160a01b0381168114620000ed57600080fd5b50565b600080600080608085870312156200010757600080fd5b84516200011481620000d7565b60208601519094506200012781620000d7565b60408601519093506200013a81620000d7565b60608601519092506200014d81620000d7565b939692955090935050565b60805160a05160c05161198e620001d56000396000818161031f015281816107fe01528181610848015261088801526000818161027b015281816105f8015281816106460152818161068e015281816106ef0152818161075601526107be0152600081816106ce01528181610735015261079d015261198e6000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80635f9e7d771161005b5780635f9e7d77146100f15780637d5b08de14610104578063884d1f4014610117578063d86ed3e51461012a57600080fd5b8063230dbd291461008d57806330d9c915146100b657806353c11f99146100c9578063558aea25146100dc575b600080fd5b6100a061009b3660046112cf565b61013d565b6040516100ad91906113e9565b60405180910390f35b6100a06100c4366004611403565b6101a4565b6100a06100d73660046112cf565b610207565b6100ef6100ea3660046114a1565b61026c565b005b6100a06100ff366004611403565b6102a9565b6100ef6101123660046114a1565b610310565b6100a0610125366004611403565b610343565b6100a06101383660046112cf565b6103a6565b60405162461bcd60e51b815260206004820152602e60248201527f556e737570706f727465642063616c6c6261636b202d2041667465722041677260448201526d19595b595b9d08155c19185d195960921b60648201526060906084015b60405180910390fd5b60405162461bcd60e51b815260206004820152602f60248201527f556e737570706f727465642063616c6c6261636b202d204265666f726520416760448201526e1c99595b595b9d0810dc99585d1959608a1b606482015260609060840161019b565b60405162461bcd60e51b815260206004820152603160248201527f556e737570706f727465642063616c6c6261636b202d2041667465722041677260448201527019595b595b9d0815195c9b5a5b985d1959607a1b606482015260609060840161019b565b6102a56001600160a01b0382167f000000000000000000000000000000000000000000000000000000000000000064e8d4a510006103f6565b5050565b60405162461bcd60e51b815260206004820152603360248201527f556e737570706f727465642063616c6c6261636b202d20204265666f7265204160448201527219dc99595b595b9d0815195c9b5a5b985d1959606a1b606482015260609060840161019b565b6102a56001600160a01b0382167f000000000000000000000000000000000000000000000000000000000000000061041d565b60405162461bcd60e51b815260206004820152602f60248201527f556e737570706f727465642063616c6c6261636b202d204265666f726520416760448201526e1c99595b595b9d081d5c19185d1959608a1b606482015260609060840161019b565b60606103e88a84848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061055092505050565b9a9950505050505050505050565b60408051600080825260208201909252610415908590859085906108ee565b949350505050565b600080600061042b85610a19565b91509150816001600160a01b03166339255d5b82836001600160a01b03166354b770e3898960006001600160401b03811115610469576104696114be565b6040519080825280601f01601f191660200182016040528015610493576020820181803683370190505b506040516024016104a6939291906114d4565b60408051601f19818403018152918152602080830180516001600160e01b031660e095861b179052815160008152908101918290529286901b6001600160e01b03191690526104fb9392509060248101611509565b6000604051808303816000875af115801561051a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261054291908101906115ef565b506001925050505b92915050565b60008054604051631fb6491d60e11b8152606092916001600160a01b031690633f6c923a906105839086906004016113e9565b600060405180830381865afa1580156105a0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105c8919081019061165c565b60a001518060200190518101906105df9190611762565b905060ff811661062b576106236001600160a01b0385167f000000000000000000000000000000000000000000000000000000000000000064e8d4a5100086610be0565b91505061054a565b60001960ff821601610672576106236001600160a01b0385167f00000000000000000000000000000000000000000000000000000000000000006501d1a94a200086610d09565b60011960ff8216016106b3576106236001600160a01b038516307f000000000000000000000000000000000000000000000000000000000000000086610d56565b60021960ff82160161071a576106236001600160a01b0385167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000064e8d4a5100087610de1565b60031960ff821601610782576106236001600160a01b0385167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006501d1a94a200087610f0d565b60041960ff8216016107e3576106236001600160a01b0385167f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000086610f5b565b60051960ff82160161082d576106236001600160a01b0385167f00000000000000000000000000000000000000000000000000000000000000006001808064e8d4a5100089610fa8565b60061960ff82160161086d576106236001600160a01b0385167f0000000000000000000000000000000000000000000000000000000000000000856110fd565b60071960ff8216016108ad576106236001600160a01b0385167f000000000000000000000000000000000000000000000000000000000000000085611223565b60405162461bcd60e51b81526020600482015260166024820152750d2dcecc2d8d2c840cceadcc6e8d2dedc40d2dcc8caf60531b604482015260640161019b565b60008060006108fc87610a19565b91509150816001600160a01b03166339255d5b82836001600160a01b03166362fc305e8b8b8b60006001600160401b0381111561093b5761093b6114be565b6040519080825280601f01601f191660200182016040528015610965576020820181803683370190505b50604051602401610979949392919061177d565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b03191682526109c4939250908990600401611509565b6000604051808303816000875af11580156109e3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a0b91908101906115ef565b506001979650505050505050565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a546001600160a01b038116610baf576001600160a01b038216610ade57826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ab7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610adb91906117b3565b91505b604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201526001600160a01b0383169063b6d200de90602401602060405180830381865afa158015610b42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6691906117b3565b9050817f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea83755807fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a555b6001600160a01b038216610bc557610bc56117d0565b6001600160a01b038116610bdb57610bdb6117d0565b915091565b6060600080610bee87610a19565b91509150816001600160a01b0316634329d29382836001600160a01b03166362fc305e8b8b8b60006001600160401b03811115610c2d57610c2d6114be565b6040519080825280601f01601f191660200182016040528015610c57576020820181803683370190505b50604051602401610c6b949392919061177d565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b0319168252610cb69392509089906004016117e6565b6000604051808303816000875af1158015610cd5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610cfd9190810190611839565b50979650505050505050565b6060600080610d1787610a19565b91509150816001600160a01b0316634329d29382836001600160a01b03166350209a628b8b8b60006001600160401b03811115610c2d57610c2d6114be565b6060600080610d6487610a19565b91509150816001600160a01b0316634329d29382836001600160a01b031663b4b333c68b8b8b60006001600160401b03811115610da357610da36114be565b6040519080825280601f01601f191660200182016040528015610dcd576020820181803683370190505b50604051602401610c6b949392919061189c565b6060600080610def88610a19565b91509150816001600160a01b0316634329d29382836001600160a01b03166394229ecb8c8c8c8c60006001600160401b03811115610e2f57610e2f6114be565b6040519080825280601f01601f191660200182016040528015610e59576020820181803683370190505b50604051602401610e6e9594939291906118d0565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b0319168252610eb99392509089906004016117e6565b6000604051808303816000875af1158015610ed8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f009190810190611839565b5098975050505050505050565b6060600080610f1b88610a19565b91509150816001600160a01b0316634329d29382836001600160a01b031663354b95908c8c8c8c60006001600160401b03811115610e2f57610e2f6114be565b6060600080610f6987610a19565b91509150816001600160a01b0316634329d29382836001600160a01b0316634c8b181f8b8b8b60006001600160401b03811115610da357610da36114be565b6060600080610fb68a610a19565b915091506000600287610fca576000610fcd565b60015b60ff16901b600189610fe0576000610fe3565b60015b60ff16901b8a610ff4576000610ff7565b60015b171790506001600160a01b0380841690634329d293908490811663811b3d408f8f878d60006040519080825280601f01601f191660200182016040528015611046576020820181803683370190505b5060405160240161105b959493929190611919565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b03191682526110a6939250908a906004016117e6565b6000604051808303816000875af11580156110c5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526110ed9190810190611839565b509b9a5050505050505050505050565b606060008061110b86610a19565b91509150816001600160a01b0316634329d29382836001600160a01b03166354b770e38a8a60006001600160401b03811115611149576111496114be565b6040519080825280601f01601f191660200182016040528015611173576020820181803683370190505b50604051602401611186939291906114d4565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b03191682526111d19392509089906004016117e6565b6000604051808303816000875af11580156111f0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526112189190810190611839565b509695505050505050565b606060008061123186610a19565b91509150816001600160a01b0316634329d29382836001600160a01b031663062e56ec8a8a60006001600160401b03811115611149576111496114be565b6001600160a01b038116811461128457600080fd5b50565b60008083601f84011261129957600080fd5b5081356001600160401b038111156112b057600080fd5b6020830191508360208285010111156112c857600080fd5b9250929050565b600080600080600080600080600060c08a8c0312156112ed57600080fd5b89356112f88161126f565b985060208a01356113088161126f565b975060408a0135965060608a01356001600160401b038082111561132b57600080fd5b6113378d838e01611287565b909850965060808c013591508082111561135057600080fd5b61135c8d838e01611287565b909650945060a08c013591508082111561137557600080fd5b506113828c828d01611287565b915080935050809150509295985092959850929598565b60005b838110156113b457818101518382015260200161139c565b50506000910152565b600081518084526113d5816020860160208601611399565b601f01601f19169290920160200192915050565b6020815260006113fc60208301846113bd565b9392505050565b600080600080600080600060a0888a03121561141e57600080fd5b87356114298161126f565b965060208801356114398161126f565b95506040880135945060608801356001600160401b038082111561145c57600080fd5b6114688b838c01611287565b909650945060808a013591508082111561148157600080fd5b5061148e8a828b01611287565b989b979a50959850939692959293505050565b6000602082840312156114b357600080fd5b81356113fc8161126f565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03848116825283166020820152606060408201819052600090611500908301846113bd565b95945050505050565b6001600160a01b038416815260606020820181905260009061152d908301856113bd565b828103604084015261153f81856113bd565b9695505050505050565b60405161016081016001600160401b038111828210171561156c5761156c6114be565b60405290565b600082601f83011261158357600080fd5b81516001600160401b038082111561159d5761159d6114be565b604051601f8301601f19908116603f011681019082821181831017156115c5576115c56114be565b816040528381528660208588010111156115de57600080fd5b61153f846020830160208901611399565b60006020828403121561160157600080fd5b81516001600160401b0381111561161757600080fd5b61041584828501611572565b805160ff8116811461163457600080fd5b919050565b80516116348161126f565b80516001600160e01b03198116811461163457600080fd5b60006020828403121561166e57600080fd5b81516001600160401b038082111561168557600080fd5b90830190610160828603121561169a57600080fd5b6116a2611549565b6116ab83611623565b81526116b960208401611623565b6020820152604083015160408201526116d460608401611639565b60608201526116e560808401611644565b608082015260a0830151828111156116fc57600080fd5b61170887828601611572565b60a08301525060c083015160c082015260e083015160e082015261010091508183015182820152610120915061173f828401611639565b828201526101409150611753828401611639565b91810191909152949350505050565b60006020828403121561177457600080fd5b6113fc82611623565b6001600160a01b03858116825284166020820152600b83900b604082015260806060820181905260009061153f908301846113bd565b6000602082840312156117c557600080fd5b81516113fc8161126f565b634e487b7160e01b600052600160045260246000fd5b6001600160a01b038416815260806020820181905260009061180a908301856113bd565b8281038060408501526002825261060f60f31b60208301526040810160608501525061153f60408201856113bd565b6000806040838503121561184c57600080fd5b82516001600160401b038082111561186357600080fd5b61186f86838701611572565b9350602085015191508082111561188557600080fd5b5061189285828601611572565b9150509250929050565b6001600160a01b03858116825284811660208301528316604082015260806060820181905260009061153f908301846113bd565b6001600160a01b038681168252858116602083015284166040820152600b83900b606082015260a06080820181905260009061190e908301846113bd565b979650505050505050565b6001600160a01b0386811682528516602082015260ff84166040820152600b83900b606082015260a06080820181905260009061190e908301846113bd56fea26469706673582212208ec5634dc2e83f6c89f72dab66534232ed02368efd42cbb2b4c986c620cc5da264736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "_host";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "defaultSender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "defaultReceiver";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "defaultFlowOperator";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "afterAgreementCreated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "afterAgreementTerminated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "afterAgreementUpdated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "authorizeFlowOperatorWithFullControl";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "beforeAgreementCreated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "beforeAgreementTerminated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "beforeAgreementUpdated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "createFlow";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SuperTokenLibraryCFASuperAppMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperTokenLibraryCFASuperAppMock;
}
export {};
//# sourceMappingURL=SuperTokenLibraryCFASuperAppMock__factory.d.ts.map