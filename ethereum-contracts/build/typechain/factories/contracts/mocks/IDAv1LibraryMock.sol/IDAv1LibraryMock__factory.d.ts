import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { IDAv1LibraryMock, IDAv1LibraryMockInterface } from "../../../../contracts/mocks/IDAv1LibraryMock.sol/IDAv1LibraryMock";
type IDAv1LibraryMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class IDAv1LibraryMock__factory extends ContractFactory {
    constructor(...args: IDAv1LibraryMockConstructorParams);
    deploy(host: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<IDAv1LibraryMock>;
    getDeployTransaction(host: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): IDAv1LibraryMock;
    connect(signer: Signer): IDAv1LibraryMock__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162001ad638038062001ad683398101604081905262000034916200012b565b6040805180820182526001600160a01b0383168082529151635b69006f60e11b81527f8aedc3b5d4bf031e11a7e2940f7251c005698405d58e02e1c247fed3b1b3a67460048201529091602083019163b6d200de90602401602060405180830381865afa158015620000aa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d091906200012b565b6001600160a01b039081169091528151600080546001600160a01b03199081169284169290921790556020909201516001805490931691161790555062000152565b6001600160a01b03811681146200012857600080fd5b50565b6000602082840312156200013e57600080fd5b81516200014b8162000112565b9392505050565b61197480620001626000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80635158472c116100b85780639cdf4d671161007c5780639cdf4d6714610302578063c9869ed014610315578063c9b8a2f614610328578063d39363c01461036c578063eadc45511461037f578063fe134e9f1461039257600080fd5b80635158472c146102a35780636436e3d3146102b65780636ddb6798146102c95780637489c503146102dc57806378bb14ea146102ef57600080fd5b80633939709e116100ff5780633939709e146102045780634018cb64146102175780634277b78f146102395780635002bb091461024c57806350c8da8f1461025f57600080fd5b8063068f3d191461013c57806306f75d2e1461015157806316dfe9271461016457806325a108af146101775780632a722c06146101d4575b600080fd5b61014f61014a366004610e1c565b6103a5565b005b61014f61015f366004610ea4565b6103bb565b61014f610172366004610f19565b6103cf565b61018a610185366004610f7b565b6103e1565b604080516001600160a01b03909616865263ffffffff9094166020860152911515928401929092526001600160801b039091166060830152608082015260a0015b60405180910390f35b6101e76101e2366004610fa7565b610405565b604080519283526001600160801b039091166020830152016101cb565b61014f61021236600461100d565b610422565b61022a61022536600461104e565b610430565b6040516101cb939291906110cb565b61014f610247366004611168565b61044d565b61014f61025a3660046111bb565b61045c565b61027261026d366004611217565b61046a565b6040805194151585526001600160801b039384166020860152918316918401919091521660608201526080016101cb565b61014f6102b1366004610e1c565b61048c565b61014f6102c4366004610ea4565b61049b565b61014f6102d7366004611217565b6104a9565b61014f6102ea366004611262565b6104b6565b61014f6102fd3660046112a3565b6104c3565b61014f6103103660046112e3565b6104d0565b61014f6103233660046111bb565b6104de565b61033b6103363660046111bb565b6104ec565b6040516101cb9493929190931515845291151560208401526001600160801b03166040830152606082015260800190565b61014f61037a366004611217565b610510565b61014f61038d366004611334565b61051d565b61014f6103a0366004611362565b61052d565b6103b46000868686868661053b565b5050505050565b6103c960008585858561063c565b50505050565b6103dc600084848461073a565b505050565b6000808080806103f281888861080f565b939b929a50909850965090945092505050565b60008061041581878787876108a4565b9150915094509492505050565b6103c9600085858585610940565b6060808061044060008686610985565b9250925092509250925092565b6103b460008686868686610a17565b6103c9600085858585610a5e565b600080808061047b81888888610a80565b935093509350935093509350935093565b6103b460008686868686610b0b565b6103c9600085858585610b36565b6103dc6000848484610b60565b6103dc6000848484610b80565b6103dc6000848484610ba0565b6103c9600085858585610bc0565b6103c9600085858585610be2565b60008080806104fe8189898989610c04565b929b919a509850909650945050505050565b6103dc6000848484610caa565b61052960008383610cca565b5050565b6103c9600085858585610ce8565b855460018701546001600160a01b03918216916339255d5b91168063acafa1b88989898960005b6040519080825280601f01601f19166020018201604052801561058c576020820181803683370190505b506040516024016105a1959493929190611406565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b03191682526105ec939250908690600401611451565b6000604051808303816000875af115801561060b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106339190810190611491565b50505050505050565b845460018601546001600160a01b03918216916339255d5b911680636041ae9688888860005b6040519080825280601f01601f19166020018201604052801561068c576020820181803683370190505b506040516024016106a09493929190611508565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b03191682526106eb939250908690600401611451565b6000604051808303816000875af115801561070a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107329190810190611491565b505050505050565b835460018501546040805160008152602081019091526001600160a01b03928316926339255d5b921690819063d787840a9061077d908990899060448101611540565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b03191682526107c8939250908690600401611451565b6000604051808303816000875af11580156107e7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103b49190810190611491565b600183015460405163cd7245c560e01b81526001600160a01b03848116600483015260248201849052600092839283928392839291169063cd7245c59060440160a060405180830381865afa15801561086c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108909190611585565b939c929b5090995097509095509350505050565b6001850154604051632266eabb60e21b81526001600160a01b038681166004830152858116602483015263ffffffff8516604483015260648201849052600092839291169063899baaec906084016040805180830381865afa15801561090e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093291906115ec565b915091509550959350505050565b845460018601546040805160008152602081019091526001600160a01b03928316926339255d5b9216908190637fbc7639906106a0908a908a908a9060448101611611565b60018301546040516316db59b760e31b81526001600160a01b0384811660048301528381166024830152606092839283929091169063b6dacdb890604401600060405180830381865afa1580156109e0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a089190810190611747565b92509250925093509350939050565b855460018701546040805160008152602081019091526001600160a01b03928316926339255d5b921690819063232d2b58906105a1908b908b908b908b9060448101611826565b6040805160008152602081019091526103b49086908690869086908690610b0b565b60018401546040516323fc23f360e01b81526001600160a01b038581166004830152848116602483015263ffffffff8416604483015260009283928392839216906323fc23f390606401608060405180830381865afa158015610ae7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104fe919061186d565b855460018701546001600160a01b03918216916339255d5b911680632e5e74c6898989896000610562565b845460018601546001600160a01b03918216916339255d5b91168063acf4a6c28888886000610662565b6040805160008152602081019091526103c9908590859085908590610b36565b6040805160008152602081019091526103c9908590859085908590610ce8565b6040805160008152602081019091526103c9908590859085908590610940565b6040805160008152602081019091526103b49086908690869086908690610a17565b6040805160008152602081019091526103b4908690869086908690869061053b565b6001850154604051635b53405160e01b81526001600160a01b038681166004830152858116602483015263ffffffff8516604483015283811660648301526000928392839283921690635b53405190608401608060405180830381865afa158015610c73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9791906118be565b929c919b50995090975095505050505050565b6040805160008152602081019091526103c990859085908590859061063c565b6040805160008152602081019091526103dc9084908490849061073a565b845460018601546040805160008152602081019091526001600160a01b03928316926339255d5b921690819063b96731c2906106a0908a908a908a906044810161190b565b6001600160a01b0381168114610d4257600080fd5b50565b63ffffffff81168114610d4257600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610d9657610d96610d57565b604052919050565b600067ffffffffffffffff821115610db857610db8610d57565b50601f01601f191660200190565b600082601f830112610dd757600080fd5b8135610dea610de582610d9e565b610d6d565b818152846020838601011115610dff57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215610e3457600080fd5b8535610e3f81610d2d565b94506020860135610e4f81610d2d565b93506040860135610e5f81610d45565b92506060860135610e6f81610d2d565b9150608086013567ffffffffffffffff811115610e8b57600080fd5b610e9788828901610dc6565b9150509295509295909350565b60008060008060808587031215610eba57600080fd5b8435610ec581610d2d565b93506020850135610ed581610d2d565b92506040850135610ee581610d45565b9150606085013567ffffffffffffffff811115610f0157600080fd5b610f0d87828801610dc6565b91505092959194509250565b600080600060608486031215610f2e57600080fd5b8335610f3981610d2d565b92506020840135610f4981610d45565b9150604084013567ffffffffffffffff811115610f6557600080fd5b610f7186828701610dc6565b9150509250925092565b60008060408385031215610f8e57600080fd5b8235610f9981610d2d565b946020939093013593505050565b60008060008060808587031215610fbd57600080fd5b8435610fc881610d2d565b93506020850135610fd881610d2d565b92506040850135610fe881610d45565b9396929550929360600135925050565b6001600160801b0381168114610d4257600080fd5b6000806000806080858703121561102357600080fd5b843561102e81610d2d565b9350602085013561103e81610d45565b92506040850135610ee581610ff8565b6000806040838503121561106157600080fd5b823561106c81610d2d565b9150602083013561107c81610d2d565b809150509250929050565b600081518084526020808501945080840160005b838110156110c05781516001600160801b03168752958201959082019060010161109b565b509495945050505050565b606080825284519082018190526000906020906080840190828801845b8281101561110d5781516001600160a01b0316845292840192908401906001016110e8565b5050508381038285015285518082528683019183019060005b8181101561114857835163ffffffff1683529284019291840191600101611126565b5050848103604086015261115c8187611087565b98975050505050505050565b600080600080600060a0868803121561118057600080fd5b853561118b81610d2d565b9450602086013561119b81610d45565b935060408601356111ab81610d2d565b92506060860135610e6f81610ff8565b600080600080608085870312156111d157600080fd5b84356111dc81610d2d565b935060208501356111ec81610d2d565b925060408501356111fc81610d45565b9150606085013561120c81610d2d565b939692955090935050565b60008060006060848603121561122c57600080fd5b833561123781610d2d565b9250602084013561124781610d2d565b9150604084013561125781610d45565b809150509250925092565b60008060006060848603121561127757600080fd5b833561128281610d2d565b9250602084013561129281610d45565b929592945050506040919091013590565b6000806000606084860312156112b857600080fd5b83356112c381610d2d565b925060208401356112d381610d45565b9150604084013561125781610ff8565b600080600080608085870312156112f957600080fd5b843561130481610d2d565b9350602085013561131481610d45565b9250604085013561132481610d2d565b9150606085013561120c81610ff8565b6000806040838503121561134757600080fd5b823561135281610d2d565b9150602083013561107c81610d45565b6000806000806080858703121561137857600080fd5b843561138381610d2d565b9350602085013561139381610d45565b925060408501359150606085013567ffffffffffffffff811115610f0157600080fd5b60005b838110156113d15781810151838201526020016113b9565b50506000910152565b600081518084526113f28160208601602086016113b6565b601f01601f19169290920160200192915050565b6001600160a01b038681168252858116602083015263ffffffff851660408301528316606082015260a060808201819052600090611446908301846113da565b979650505050505050565b6001600160a01b0384168152606060208201819052600090611475908301856113da565b828103604084015261148781856113da565b9695505050505050565b6000602082840312156114a357600080fd5b815167ffffffffffffffff8111156114ba57600080fd5b8201601f810184136114cb57600080fd5b80516114d9610de582610d9e565b8181528560208385010111156114ee57600080fd5b6114ff8260208301602086016113b6565b95945050505050565b6001600160a01b0385811682528416602082015263ffffffff83166040820152608060608201819052600090611487908301846113da565b6001600160a01b038416815263ffffffff831660208201526060604082018190526000906114ff908301846113da565b8051801515811461158057600080fd5b919050565b600080600080600060a0868803121561159d57600080fd5b85516115a881610d2d565b60208701519095506115b981610d45565b93506115c760408701611570565b925060608601516115d781610ff8565b80925050608086015190509295509295909350565b600080604083850312156115ff57600080fd5b82519150602083015161107c81610ff8565b6001600160a01b038516815263ffffffff841660208201526001600160801b0383166040820152608060608201819052600090611487908301846113da565b600067ffffffffffffffff82111561166a5761166a610d57565b5060051b60200190565b600082601f83011261168557600080fd5b81516020611695610de583611650565b82815260059290921b840181019181810190868411156116b457600080fd5b8286015b848110156116d85780516116cb81610d45565b83529183019183016116b8565b509695505050505050565b600082601f8301126116f457600080fd5b81516020611704610de583611650565b82815260059290921b8401810191818101908684111561172357600080fd5b8286015b848110156116d857805161173a81610ff8565b8352918301918301611727565b60008060006060848603121561175c57600080fd5b835167ffffffffffffffff8082111561177457600080fd5b818601915086601f83011261178857600080fd5b81516020611798610de583611650565b82815260059290921b8401810191818101908a8411156117b757600080fd5b948201945b838610156117de5785516117cf81610d2d565b825294820194908201906117bc565b918901519197509093505050808211156117f757600080fd5b61180387838801611674565b9350604086015191508082111561181957600080fd5b50610f71868287016116e3565b6001600160a01b03868116825263ffffffff86166020830152841660408201526001600160801b038316606082015260a060808201819052600090611446908301846113da565b6000806000806080858703121561188357600080fd5b61188c85611570565b9350602085015161189c81610ff8565b60408601519093506118ad81610ff8565b606086015190925061120c81610ff8565b600080600080608085870312156118d457600080fd5b6118dd85611570565b93506118eb60208601611570565b925060408501516118fb81610ff8565b6060959095015193969295505050565b60018060a01b038516815263ffffffff8416602082015282604082015260806060820152600061148760808301846113da56fea26469706673582212204bfaece38250c7a958f7d2f632363deaacd45a232491720c64611cfaad3faa6564736f6c63430008130033";
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
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }];
        readonly name: "approveSubscriptionTest";
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
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "approveSubscriptionWithUserDataTest";
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
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "calculateDistributionTest";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "actualAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint128";
            readonly name: "newIndexValue";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }];
        readonly name: "claimTest";
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
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "claimWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }];
        readonly name: "createIndexTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "createIndexWithUserDataTest";
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
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }];
        readonly name: "deleteSubscriptionTest";
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
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "deleteSubscriptionWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "distributeTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "distributeWithUserDataTest";
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
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }];
        readonly name: "getIndexTest";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "exist";
            readonly type: "bool";
        }, {
            readonly internalType: "uint128";
            readonly name: "indexValue";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "totalUnitsApproved";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "totalUnitsPending";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "agreementId";
            readonly type: "bytes32";
        }];
        readonly name: "getSubscriptionByIDTest";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }, {
            readonly internalType: "uint128";
            readonly name: "units";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint256";
            readonly name: "pendingDistribution";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }];
        readonly name: "getSubscriptionTest";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "exist";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }, {
            readonly internalType: "uint128";
            readonly name: "units";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint256";
            readonly name: "pendingDistribution";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }];
        readonly name: "listSubscriptionsTest";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "publishers";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint32[]";
            readonly name: "indexIds";
            readonly type: "uint32[]";
        }, {
            readonly internalType: "uint128[]";
            readonly name: "unitsList";
            readonly type: "uint128[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }];
        readonly name: "revokeSubscriptionTest";
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
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "revokeSubscriptionWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint128";
            readonly name: "indexValue";
            readonly type: "uint128";
        }];
        readonly name: "updateIndexValueTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint128";
            readonly name: "indexValue";
            readonly type: "uint128";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "updateIndexValueWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly internalType: "uint128";
            readonly name: "units";
            readonly type: "uint128";
        }];
        readonly name: "updateSubscriptionUnitsTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly internalType: "uint128";
            readonly name: "units";
            readonly type: "uint128";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "updateSubscriptionUnitsWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IDAv1LibraryMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDAv1LibraryMock;
}
export {};
//# sourceMappingURL=IDAv1LibraryMock__factory.d.ts.map