import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { StreamRedirector, StreamRedirectorInterface } from "../../../contracts/mocks/StreamRedirector";
type StreamRedirectorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class StreamRedirector__factory extends ContractFactory {
    constructor(...args: StreamRedirectorConstructorParams);
    deploy(_host: PromiseOrValue<string>, _token: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _appLevel: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<StreamRedirector>;
    getDeployTransaction(_host: PromiseOrValue<string>, _token: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _appLevel: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): StreamRedirector;
    connect(signer: Signer): StreamRedirector__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620016da380380620016da83398101604081905262000034916200021c565b6001600160a01b0383166200004d576200004d62000276565b6001600160a01b03821662000066576200006662000276565b6001600160a01b0384166200007f576200007f62000276565b600280546001600160a01b0319166001600160a01b0386169081179091556040805180820182528281529051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201529091602083019163b6d200de90602401602060405180830381865afa15801562000109573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200012f91906200028c565b6001600160a01b039081169091528151600080546001600160a01b031990811692841692909217815560209093015160018054831691841691909117905560048054821687841617815560038054909216868416179091556002546040805163bd1c448b60e01b8152641100000000871793810184905260248101919091526044810194909452909291169063bd1c448b90606401600060405180830381600087803b158015620001df57600080fd5b505af1158015620001f4573d6000803e3d6000fd5b505050505050505050620002b3565b6001600160a01b03811681146200021957600080fd5b50565b600080600080608085870312156200023357600080fd5b8451620002408162000203565b6020860151909450620002538162000203565b6040860151909350620002668162000203565b6060959095015193969295505050565b634e487b7160e01b600052600160045260246000fd5b6000602082840312156200029f57600080fd5b8151620002ac8162000203565b9392505050565b61141780620002c36000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063b6e1b56111610097578063f437bc5911610066578063f437bc5914610246578063f7260d3e14610271578063fae7e7e414610284578063fc0c546a1461029757600080fd5b8063b6e1b561146101d3578063bddd7ec3146101e6578063d3112b2e146101f9578063d86ed3e51461023357600080fd5b806353c11f99116100d357806353c11f991461018757806357121e0c1461019a5780635f9e7d77146101ad578063884d1f40146101c057600080fd5b80631d5ae1b514610105578063215eed021461011a578063230dbd291461015457806330d9c91514610174575b600080fd5b610118610113366004610e60565b6102aa565b005b6101417fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd381565b6040519081526020015b60405180910390f35b610167610162366004610ee2565b6102ca565b60405161014b9190610ffd565b610167610182366004611017565b610331565b610167610195366004610ee2565b610394565b6101186101a83660046110b6565b61056c565b6101676101bb366004611017565b6105ce565b6101676101ce366004611017565b610635565b6101186101e13660046110e2565b610698565b6101186101f43660046110e2565b6106b3565b600054600154610213916001600160a01b03908116911682565b604080516001600160a01b0393841681529290911660208301520161014b565b610167610241366004610ee2565b6106d5565b600254610259906001600160a01b031681565b6040516001600160a01b03909116815260200161014b565b600354610259906001600160a01b031681565b6101186102923660046110b6565b61087f565b600454610259906001600160a01b031681565b6004546102c690600090849084906001600160a01b031661089b565b5050565b60405162461bcd60e51b815260206004820152602e60248201527f556e737570706f727465642063616c6c6261636b202d2041667465722041677260448201526d19595b595b9d08155c19185d195960921b60648201526060906084015b60405180910390fd5b60405162461bcd60e51b815260206004820152602f60248201527f556e737570706f727465642063616c6c6261636b202d204265666f726520416760448201526e1c99595b595b9d0810dc99585d1959608a1b6064820152606090608401610328565b6002546060906001600160a01b031633146103c157604051620f491b60e11b815260040160405180910390fd5b6103ca896108c1565b15806103e457506004546001600160a01b038b8116911614155b156104285782828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092935061055f92505050565b82828080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050905060008060010160009054906101000a90046001600160a01b03166001600160a01b031663e6a1e8888c30600360009054906101000a90046001600160a01b03166040518463ffffffff1660e01b81526004016104eb939291906001600160a01b0393841681529183166020830152909116604082015260600190565b608060405180830381865afa158015610508573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052c9190611110565b5050915050600081600b0b131561055d5760035461055a90600090849030906001600160a01b03168f61094d565b91505b505b9998505050505050505050565b6002546040516315c4878360e21b81526001600160a01b038381166004830152909116906357121e0c90602401600060405180830381600087803b1580156105b357600080fd5b505af11580156105c7573d6000803e3d6000fd5b5050505050565b60405162461bcd60e51b815260206004820152603360248201527f556e737570706f727465642063616c6c6261636b202d20204265666f7265204160448201527219dc99595b595b9d0815195c9b5a5b985d1959606a1b6064820152606090608401610328565b60405162461bcd60e51b815260206004820152602f60248201527f556e737570706f727465642063616c6c6261636b202d204265666f726520416760448201526e1c99595b595b9d081d5c19185d1959608a1b6064820152606090608401610328565b6004546102c69060009084906001600160a01b03168461097c565b6004546106d090600090849030906001600160a01b03168561099c565b505050565b6002546060906001600160a01b0316331461070257604051620f491b60e11b815260040160405180910390fd5b6004548a906001600160a01b038083169116146107325760405163350b944160e11b815260040160405180910390fd5b8961073c816108c1565b6107595760405163d191999160e01b815260040160405180910390fd5b84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050925060008060010160009054906101000a90046001600160a01b03166001600160a01b031663e8e7e2d18e306040518363ffffffff1660e01b81526004016107fc9291906001600160a01b0392831681529116602082015260400190565b602060405180830381865afa158015610819573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083d919061114e565b905061086e84600360009054906101000a90046001600160a01b03168f8460006109c190949392919063ffffffff16565b9d9c50505050505050505050505050565b6004546102c690600090839030906001600160a01b03166109e6565b6040805160008152602081019091526108bb908590859085908590610a12565b50505050565b60007fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd3826001600160a01b0316637730599e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610922573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109469190611181565b1492915050565b6040805160008152602081019091526060906109729087908790879087908790610af1565b9695505050505050565b6040805160008152602081019091526108bb908590859085908590610bda565b6040805160008152602081019091526060906109729087908790879087908790610c1f565b6040805160008152602081019091526060906109729087908790879087908790610d24565b604080516000815260208101909152606090610a09908690869086908690610d6d565b95945050505050565b845460018601546040805160008152602081019091526001600160a01b03928316926339255d5b921690819063b4b333c690610a579088908b908b906044810161119a565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b0319168252610aa29392509086906004016111ce565b6000604051808303816000875af1158015610ac1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610ae99190810190611282565b505050505050565b855460018701546040805160008152602081019091526060926001600160a01b0390811692634329d29392911690819063b4b333c690610b3a9089908c908c906044810161119a565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b0319168252610b879392509087908c906004016112bf565b6000604051808303816000875af1158015610ba6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610bce9190810190611309565b50979650505050505050565b845460018601546040805160008152602081019091526001600160a01b03928316926339255d5b92169081906362fc305e90610a579089908b908a906044810161136d565b855460018701546060916001600160a01b03908116916339255d5b9116806394229ecb888b8b8a60006040519080825280601f01601f191660200182016040528015610c72576020820181803683370190505b50604051602401610c879594939291906113a3565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b0319168252610cd29392509087906004016111ce565b6000604051808303816000875af1158015610cf1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610d199190810190611282565b979650505050505050565b855460018701546040805160008152602081019091526060926001600160a01b0390811692634329d2939291169081906362fc305e90610b3a908a908c908b906044810161136d565b845460018601546040805160008152602081019091526060926001600160a01b03908116926339255d5b929116908190634c8b181f90610db69089908c908c906044810161119a565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b0319168252610e019392509087906004016111ce565b6000604051808303816000875af1158015610e20573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109729190810190611282565b6001600160a01b0381168114610e5d57600080fd5b50565b60008060408385031215610e7357600080fd5b8235610e7e81610e48565b91506020830135610e8e81610e48565b809150509250929050565b60008083601f840112610eab57600080fd5b50813567ffffffffffffffff811115610ec357600080fd5b602083019150836020828501011115610edb57600080fd5b9250929050565b600080600080600080600080600060c08a8c031215610f0057600080fd5b8935610f0b81610e48565b985060208a0135610f1b81610e48565b975060408a0135965060608a013567ffffffffffffffff80821115610f3f57600080fd5b610f4b8d838e01610e99565b909850965060808c0135915080821115610f6457600080fd5b610f708d838e01610e99565b909650945060a08c0135915080821115610f8957600080fd5b50610f968c828d01610e99565b915080935050809150509295985092959850929598565b60005b83811015610fc8578181015183820152602001610fb0565b50506000910152565b60008151808452610fe9816020860160208601610fad565b601f01601f19169290920160200192915050565b6020815260006110106020830184610fd1565b9392505050565b600080600080600080600060a0888a03121561103257600080fd5b873561103d81610e48565b9650602088013561104d81610e48565b955060408801359450606088013567ffffffffffffffff8082111561107157600080fd5b61107d8b838c01610e99565b909650945060808a013591508082111561109657600080fd5b506110a38a828b01610e99565b989b979a50959850939692959293505050565b6000602082840312156110c857600080fd5b813561101081610e48565b80600b0b8114610e5d57600080fd5b600080604083850312156110f557600080fd5b823561110081610e48565b91506020830135610e8e816110d3565b6000806000806080858703121561112657600080fd5b845193506020850151611138816110d3565b6040860151606090960151949790965092505050565b60006020828403121561116057600080fd5b8151611010816110d3565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561119357600080fd5b5051919050565b6001600160a01b03858116825284811660208301528316604082015260806060820181905260009061097290830184610fd1565b6001600160a01b03841681526060602082018190526000906111f290830185610fd1565b82810360408401526109728185610fd1565b600082601f83011261121557600080fd5b815167ffffffffffffffff808211156112305761123061116b565b604051601f8301601f19908116603f011681019082821181831017156112585761125861116b565b8160405283815286602085880101111561127157600080fd5b610972846020830160208901610fad565b60006020828403121561129457600080fd5b815167ffffffffffffffff8111156112ab57600080fd5b6112b784828501611204565b949350505050565b6001600160a01b03851681526080602082018190526000906112e390830186610fd1565b82810360408401526112f58186610fd1565b90508281036060840152610d198185610fd1565b6000806040838503121561131c57600080fd5b825167ffffffffffffffff8082111561133457600080fd5b61134086838701611204565b9350602085015191508082111561135657600080fd5b5061136385828601611204565b9150509250929050565b6001600160a01b03858116825284166020820152600b83900b604082015260806060820181905260009061097290830184610fd1565b6001600160a01b038681168252858116602083015284166040820152600b83900b606082015260a060808201819052600090610d1990830184610fd156fea2646970667358221220b7ef7d45e2d55eec42e1e4e12f01c8a8581baead53e3a72f1b4934a39b74408d64736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "_host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperToken";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_appLevel";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "OnlyCFA";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OnlyHost";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsupportedToken";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_ID";
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
            readonly name: "_superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_agreementClass";
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
            readonly name: "_ctx";
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
            readonly name: "_superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_agreementClass";
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
            readonly name: "_ctx";
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
            readonly internalType: "address";
            readonly name: "_targetApp";
            readonly type: "address";
        }];
        readonly name: "allowCompositeApp";
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
        readonly inputs: readonly [];
        readonly name: "cfaV1";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract IConstantFlowAgreementV1";
            readonly name: "cfa";
            readonly type: "address";
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
        readonly inputs: readonly [];
        readonly name: "receiver";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_originAccount";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "_flowRate";
            readonly type: "int96";
        }];
        readonly name: "startStreamToSelf";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_superApp";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "_flowRate";
            readonly type: "int96";
        }];
        readonly name: "startStreamToSuperApp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_originAccount";
            readonly type: "address";
        }];
        readonly name: "stopStreamToSelf";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }];
        readonly name: "stopStreamToSuperApp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "token";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): StreamRedirectorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StreamRedirector;
}
export {};
//# sourceMappingURL=StreamRedirector__factory.d.ts.map