import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { SuperAppBaseFlowTester, SuperAppBaseFlowTesterInterface } from "../../../contracts/mocks/SuperAppBaseFlowTester";
type SuperAppBaseFlowTesterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperAppBaseFlowTester__factory extends ContractFactory {
    constructor(...args: SuperAppBaseFlowTesterConstructorParams);
    deploy(host: PromiseOrValue<string>, activateOnCreated: PromiseOrValue<boolean>, activateOnUpdated: PromiseOrValue<boolean>, activateOnDeleted: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperAppBaseFlowTester>;
    getDeployTransaction(host: PromiseOrValue<string>, activateOnCreated: PromiseOrValue<boolean>, activateOnUpdated: PromiseOrValue<boolean>, activateOnDeleted: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperAppBaseFlowTester;
    connect(signer: Signer): SuperAppBaseFlowTester__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200151f3803806200151f83398101604081905262000034916200010a565b600080546001600160a01b0319166001600160a01b03861617905583838383640100000001836200006757640200000000175b826200007557640c00000000175b816200008357643000000000175b6040516315a722b960e31b8152600481018290526001600160a01b0386169063ad3915c890602401600060405180830381600087803b158015620000c657600080fd5b505af1158015620000db573d6000803e3d6000fd5b5050600060015550620001749950505050505050505050565b805180151581146200010557600080fd5b919050565b600080600080608085870312156200012157600080fd5b84516001600160a01b03811681146200013957600080fd5b93506200014960208601620000f4565b92506200015960408601620000f4565b91506200016960608601620000f4565b905092959194509250565b61139b80620001846000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806381596a2411610097578063de83f18811610066578063de83f1881461020d578063e4776b3314610238578063e5d719581461024b578063f437bc591461029057600080fd5b806381596a24146101bd578063884d1f40146101d2578063bcb4546f146101e5578063d86ed3e5146101fa57600080fd5b806330d9c915116100d357806330d9c9151461016157806353c11f99146101745780635f9e7d771461018757806372ca8a3e1461019a57600080fd5b8063230dbd29146100fa578063284c578114610123578063303a0cf51461013a575b600080fd5b61010d610108366004610e9e565b6102a3565b60405161011a9190610fb9565b60405180910390f35b61012c60015481565b60405190815260200161011a565b60005461014e90600160a01b9004600b0b81565b604051600b9190910b815260200161011a565b61010d61016f366004610fd3565b610388565b61010d610182366004610e9e565b6103ad565b61010d610195366004610fd3565b61046d565b6101ad6101a8366004611072565b610535565b604051901515815260200161011a565b6101d06101cb36600461109e565b61056c565b005b61010d6101e0366004610fd3565b610586565b61012c60008051602061134683398151915281565b61010d610208366004610e9e565b610666565b600254610220906001600160a01b031681565b6040516001600160a01b03909116815260200161011a565b600354610220906001600160a01b031681565b6101d06102593660046110e9565b6005805460ff199081166001179091556001600160a01b039092166000908152600460205260409020805491151591909216179055565b600054610220906001600160a01b031681565b6000546060906001600160a01b031633146102d157604051632f2d36a760e01b815260040160405180910390fd5b6102da89610732565b61031d5782828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092935061037b92505050565b6103268a610535565b61034357604051631ea25bab60e31b815260040160405180910390fd5b600061035187890189611127565b50905060008061036387890189611155565b915091506103758d8484848a8a6107c8565b93505050505b9998505050505050505050565b604080518082019091526002815261060f60f31b60208201525b979650505050505050565b6000546060906001600160a01b0316331415806103d057506103ce89610732565b155b806103e157506103df8a610535565b155b156104255782828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092935061037b92505050565b600080610434888a018a611127565b9092509050600080610448888a018a611181565b9150915061045b8e858584868c8c61084e565b9e9d5050505050505050505050505050565b6000546060906001600160a01b031633141580610490575061048e87610732565b155b806104a1575061049f88610535565b155b156104c55750604080518082019091526002815261060f60f31b60208201526103a2565b6000806104d486880188611127565b90925090506000806104f06001600160a01b038d1685856108e5565b5050915091508181604051602001610515929190918252600b0b602082015260400190565b604051602081830303815290604052945050505050979650505050505050565b60055460009060ff16610549576001610566565b6001600160a01b03821660009081526004602052604090205460ff165b92915050565b6105806001600160a01b0384168383610987565b50505050565b6000546060906001600160a01b031633146105b457604051632f2d36a760e01b815260040160405180910390fd5b6105bd87610732565b6105e05750604080518082019091526002815261060f60f31b60208201526103a2565b6105e988610535565b61060657604051631ea25bab60e31b815260040160405180910390fd5b600061061485870187611127565b50905060008061062e6001600160a01b038c1684306108e5565b505060408051600b9290920b60208301528181019290925281518082038301815260609091019091529b9a5050505050505050505050565b6000546060906001600160a01b0316331461069457604051632f2d36a760e01b815260040160405180910390fd5b61069d89610732565b6106e05782828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092935061037b92505050565b6106e98a610535565b61070657604051631ea25bab60e31b815260040160405180910390fd5b600061071487890189611127565b5090506107238b8286866109ae565b9b9a5050505050505050505050565b60008054604051635b69006f60e11b815260008051602061134683398151915260048201526001600160a01b039091169063b6d200de90602401602060405180830381865afa158015610789573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ad91906111a6565b6001600160a01b0316826001600160a01b0316149050919050565b6001839055600080546001600160a01b03908116600160a01b6bffffffffffffffffffffffff88160217909155600280546001600160a01b031916918716919091179055604080516020601f84018190048102820181019092528281526060918490849081908401838280828437600092019190915250929a9950505050505050505050565b6001839055600080546001600160a01b03908116600160a01b6bffffffffffffffffffffffff88160217909155600280546001600160a01b03199081168984161790915560038054909116918716919091179055604080516020601f84018190048102820181019092528281526060918490849081908401838280828437600092019190915250929b9a5050505050505050505050565b60008060008060006108f688610a09565b604051631cd43d1160e31b81526001600160a01b038b811660048301528a811660248301528981166044830152919350908316915063e6a1e88890606401608060405180830381865afa158015610951573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097591906111c3565b929b919a509850909650945050505050565b604080516000808252602082019092526109a690859085908590610b78565b949350505050565b600280546001600160a01b0319166001600160a01b038516179055604080516020601f840181900481028201810190925282815260609184908490819084018382808284376000920191909152509298975050505050505050565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a546001600160a01b038116610b47576001600160a01b038216610ace57826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa158015610aa7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610acb91906111a6565b91505b604051635b69006f60e11b815260008051602061134683398151915260048201526001600160a01b0383169063b6d200de90602401602060405180830381865afa158015610b20573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4491906111a6565b90505b6001600160a01b038216610b5d57610b5d611217565b6001600160a01b038116610b7357610b73611217565b915091565b6000806000610b8687610ca4565b91509150816001600160a01b03166339255d5b82836001600160a01b03166362fc305e8b8b8b600067ffffffffffffffff811115610bc657610bc6611201565b6040519080825280601f01601f191660200182016040528015610bf0576020820181803683370190505b50604051602401610c04949392919061122d565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b0319168252610c4f93925090899060040161126d565b6000604051808303816000875af1158015610c6e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c9691908101906112a3565b506001979650505050505050565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a546001600160a01b038116610b47576001600160a01b038216610d6957826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d6691906111a6565b91505b604051635b69006f60e11b815260008051602061134683398151915260048201526001600160a01b0383169063b6d200de90602401602060405180830381865afa158015610dbb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ddf91906111a6565b9050817f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea83755807fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a556001600160a01b038216610b5d57610b5d611217565b6001600160a01b0381168114610e5257600080fd5b50565b60008083601f840112610e6757600080fd5b50813567ffffffffffffffff811115610e7f57600080fd5b602083019150836020828501011115610e9757600080fd5b9250929050565b600080600080600080600080600060c08a8c031215610ebc57600080fd5b8935610ec781610e3d565b985060208a0135610ed781610e3d565b975060408a0135965060608a013567ffffffffffffffff80821115610efb57600080fd5b610f078d838e01610e55565b909850965060808c0135915080821115610f2057600080fd5b610f2c8d838e01610e55565b909650945060a08c0135915080821115610f4557600080fd5b50610f528c828d01610e55565b915080935050809150509295985092959850929598565b60005b83811015610f84578181015183820152602001610f6c565b50506000910152565b60008151808452610fa5816020860160208601610f69565b601f01601f19169290920160200192915050565b602081526000610fcc6020830184610f8d565b9392505050565b600080600080600080600060a0888a031215610fee57600080fd5b8735610ff981610e3d565b9650602088013561100981610e3d565b955060408801359450606088013567ffffffffffffffff8082111561102d57600080fd5b6110398b838c01610e55565b909650945060808a013591508082111561105257600080fd5b5061105f8a828b01610e55565b989b979a50959850939692959293505050565b60006020828403121561108457600080fd5b8135610fcc81610e3d565b80600b0b8114610e5257600080fd5b6000806000606084860312156110b357600080fd5b83356110be81610e3d565b925060208401356110ce81610e3d565b915060408401356110de8161108f565b809150509250925092565b600080604083850312156110fc57600080fd5b823561110781610e3d565b91506020830135801515811461111c57600080fd5b809150509250929050565b6000806040838503121561113a57600080fd5b823561114581610e3d565b9150602083013561111c81610e3d565b6000806040838503121561116857600080fd5b82356111738161108f565b946020939093013593505050565b6000806040838503121561119457600080fd5b82359150602083013561111c8161108f565b6000602082840312156111b857600080fd5b8151610fcc81610e3d565b600080600080608085870312156111d957600080fd5b8451935060208501516111eb8161108f565b6040860151606090960151949790965092505050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052600160045260246000fd5b6001600160a01b03858116825284166020820152600b83900b604082015260806060820181905260009061126390830184610f8d565b9695505050505050565b6001600160a01b038416815260606020820181905260009061129190830185610f8d565b82810360408401526112638185610f8d565b6000602082840312156112b557600080fd5b815167ffffffffffffffff808211156112cd57600080fd5b818401915084601f8301126112e157600080fd5b8151818111156112f3576112f3611201565b604051601f8201601f19908116603f0116810190838211818310171561131b5761131b611201565b8160405282815287602084870101111561133457600080fd5b6103a2836020830160208801610f6956fea9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd3a2646970667358221220262e700c4984b91a1d1fa3f20cc957ec60b4a1d9243095016a2bdec0bc34c1f864736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "activateOnCreated";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "activateOnUpdated";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "activateOnDeleted";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotAcceptedSuperToken";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotImplemented";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnauthorizedHost";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFAV1_TYPE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "agreementData";
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
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "agreementData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "cbdata";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "afterAgreementTerminated";
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
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "agreementData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "cbdata";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "afterAgreementUpdated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "afterReceiverHolder";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "afterSenderHolder";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
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
        readonly name: "beforeAgreementCreated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "agreementData";
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
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "agreementData";
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
        readonly inputs: readonly [];
        readonly name: "host";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }];
        readonly name: "isAcceptedSuperToken";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lastUpdateHolder";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "oldFlowRateHolder";
        readonly outputs: readonly [{
            readonly internalType: "int96";
            readonly name: "";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "acceptedSuperToken";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "accepted";
            readonly type: "bool";
        }];
        readonly name: "setAcceptedSuperToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }];
        readonly name: "startStream";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SuperAppBaseFlowTesterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperAppBaseFlowTester;
}
export {};
//# sourceMappingURL=SuperAppBaseFlowTester__factory.d.ts.map