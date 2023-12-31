import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { CFALibraryMock, CFALibraryMockInterface } from "../../../../contracts/mocks/CFALibraryMock.sol/CFALibraryMock";
type CFALibraryMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CFALibraryMock__factory extends ContractFactory {
    constructor(...args: CFALibraryMockConstructorParams);
    deploy(host: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CFALibraryMock>;
    getDeployTransaction(host: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CFALibraryMock;
    connect(signer: Signer): CFALibraryMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50604051610dde380380610dde83398101604081905261002f91610121565b6040805180820182526001600160a01b0383168082529151635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201529091602083019163b6d200de90602401602060405180830381865afa1580156100a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100c89190610121565b6001600160a01b039081169091528151600080546001600160a01b031990811692841692909217905560209092015160018054909316911617905550610145565b6001600160a01b038116811461011e57600080fd5b50565b60006020828403121561013357600080fd5b815161013e81610109565b9392505050565b610c8a806101546000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063a9014c0011610066578063a9014c0014610104578063ab0c1e5f14610117578063c5eb59de1461012a578063d3112b2e1461013d578063ef7074901461017b57600080fd5b80632cc1e970146100a35780635a8e0f5a146100b857806380f742fa146100cb5780638aaf4513146100de5780638e33f761146100f1575b600080fd5b6100b66100b1366004610880565b61018e565b005b6100b66100c6366004610880565b61019f565b6100b66100d93660046108d0565b6101ab565b6100b66100ec3660046108d0565b6101c0565b6100b66100ff36600461092a565b6101ce565b6100b6610112366004610971565b6101db565b6100b661012536600461092a565b6101e9565b6100b6610138366004610880565b6101f6565b600054600154610157916001600160a01b03908116911682565b604080516001600160a01b0393841681529290911660208301520160405180910390f35b6100b66101893660046109b8565b610207565b61019a6000838361021a565b505050565b61019a60008383610323565b6101b960008585858561034f565b5050505050565b6101b960008585858561037e565b61019a60008385846103a3565b6101b96000858585856103c3565b61019a60008385846104c7565b61020360003083856104e7565b5050565b6102146000848484610507565b50505050565b825460018401546060916001600160a01b03908116916339255d5b91168063062e56ec868860005b6040519080825280601f01601f19166020018201604052801561026c576020820181803683370190505b5060405160240161027f93929190610a69565b60408051601f19818403018152918152602080830180516001600160e01b031660e095861b179052815160008152908101918290529286901b6001600160e01b03191690526102d49392509060248101610a95565b6000604051808303816000875af11580156102f3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261031b9190810190610acb565b949350505050565b825460018401546060916001600160a01b03908116916339255d5b9116806354b770e386886000610242565b6040805160008152602081019091526060906103749087908790879087908790610533565b9695505050505050565b6040805160008152602081019091526060906103749087908790879087908790610639565b604080516000815260208101909152610214908590859085908590610667565b845460018601546060916001600160a01b03908116916339255d5b91168063811b3d40888a898960006040519080825280601f01601f191660200182016040528015610416576020820181803683370190505b5060405160240161042b959493929190610b6d565b60408051601f19818403018152918152602080830180516001600160e01b031660e095861b179052815160008152908101918290529286901b6001600160e01b03191690526104809392509060248101610a95565b6000604051808303816000875af115801561049f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103749190810190610acb565b604080516000815260208101909152610214908590859085908590610765565b60408051600081526020810190915261021490859085908590859061078f565b60408051600081526020810190915260609061052a9086908690869086906107d4565b95945050505050565b855460018701546060916001600160a01b03908116916339255d5b91168063354b9590888b8b8a60005b6040519080825280601f01601f191660200182016040528015610587576020820181803683370190505b5060405160240161059c959493929190610bac565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b03191682526105e7939250908790600401610a95565b6000604051808303816000875af1158015610606573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261062e9190810190610acb565b979650505050505050565b855460018701546060916001600160a01b03908116916339255d5b9116806394229ecb888b8b8a600061055d565b845460018601546001600160a01b03918216916339255d5b9116806350209a6287898860005b6040519080825280601f01601f1916602001820160405280156106b7576020820181803683370190505b506040516024016106cb9493929190610bea565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b0319168252610716939250908690600401610a95565b6000604051808303816000875af1158015610735573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261075d9190810190610acb565b505050505050565b845460018601546001600160a01b03918216916339255d5b9116806362fc305e878988600061068d565b845460018601546040805160008152602081019091526001600160a01b03928316926339255d5b921690819063b4b333c6906106cb9088908b908b9060448101610c20565b845460018601546040805160008152602081019091526060926001600160a01b03908116926339255d5b929116908190634c8b181f9061081d9089908c908c9060448101610c20565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b0319168252610480939250908790600401610a95565b6001600160a01b038116811461087d57600080fd5b50565b6000806040838503121561089357600080fd5b823561089e81610868565b915060208301356108ae81610868565b809150509250929050565b8035600b81900b81146108cb57600080fd5b919050565b600080600080608085870312156108e657600080fd5b84356108f181610868565b9350602085013561090181610868565b9250604085013561091181610868565b915061091f606086016108b9565b905092959194509250565b60008060006060848603121561093f57600080fd5b833561094a81610868565b9250602084013561095a81610868565b9150610968604085016108b9565b90509250925092565b6000806000806080858703121561098757600080fd5b843561099281610868565b935060208501356109a281610868565b9250604085013560ff8116811461091157600080fd5b6000806000606084860312156109cd57600080fd5b83356109d881610868565b925060208401356109e881610868565b915060408401356109f881610868565b809150509250925092565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610a34578181015183820152602001610a1c565b50506000910152565b60008151808452610a55816020860160208601610a19565b601f01601f19169290920160200192915050565b6001600160a01b0384811682528316602082015260606040820181905260009061052a90830184610a3d565b6001600160a01b0384168152606060208201819052600090610ab990830185610a3d565b82810360408401526103748185610a3d565b600060208284031215610add57600080fd5b815167ffffffffffffffff80821115610af557600080fd5b818401915084601f830112610b0957600080fd5b815181811115610b1b57610b1b610a03565b604051601f8201601f19908116603f01168101908382118183101715610b4357610b43610a03565b81604052828152876020848701011115610b5c57600080fd5b61062e836020830160208801610a19565b6001600160a01b0386811682528516602082015260ff84166040820152600b83900b606082015260a06080820181905260009061062e90830184610a3d565b6001600160a01b038681168252858116602083015284166040820152600b83900b606082015260a06080820181905260009061062e90830184610a3d565b6001600160a01b03858116825284166020820152600b83900b604082015260806060820181905260009061037490830184610a3d565b6001600160a01b03858116825284811660208301528316604082015260806060820181905260009061037490830184610a3d56fea2646970667358221220279e22805a848d78fe13a3f4c68106d40891ee252bdc1e36502cf46c0f4c621864736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "authorizeFlowOperatorWithFullControlTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }];
        readonly name: "createFlowByOperatorTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
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
        readonly name: "createFlowTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "deleteFlowByOperator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "deleteFlowTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "revokeFlowOperatorWithFullControlTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }];
        readonly name: "updateFlowByOperatorTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint8";
            readonly name: "permissions";
            readonly type: "uint8";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRateAllowance";
            readonly type: "int96";
        }];
        readonly name: "updateFlowOperatorPermissionsTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
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
        readonly name: "updateFlowTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): CFALibraryMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CFALibraryMock;
}
export {};
//# sourceMappingURL=CFALibraryMock__factory.d.ts.map