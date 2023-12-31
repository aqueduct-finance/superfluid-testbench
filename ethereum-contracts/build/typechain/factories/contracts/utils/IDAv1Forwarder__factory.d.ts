import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { IDAv1Forwarder, IDAv1ForwarderInterface } from "../../../contracts/utils/IDAv1Forwarder";
type IDAv1ForwarderConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class IDAv1Forwarder__factory extends ContractFactory {
    constructor(...args: IDAv1ForwarderConstructorParams);
    deploy(host: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<IDAv1Forwarder>;
    getDeployTransaction(host: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): IDAv1Forwarder;
    connect(signer: Signer): IDAv1Forwarder__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162001aaa38038062001aaa8339810160408190526200003491620000ef565b6001600160a01b0381166080819052604051635b69006f60e11b81527f8aedc3b5d4bf031e11a7e2940f7251c005698405d58e02e1c247fed3b1b3a674600482015263b6d200de90602401602060405180830381865afa1580156200009d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000c39190620000ef565b6001600160a01b031660a0525062000116565b6001600160a01b0381168114620000ec57600080fd5b50565b6000602082840312156200010257600080fd5b81516200010f81620000d6565b9392505050565b60805160a051611905620001a56000396000818161032b015281816103c3015281816104330152818161050a01528181610594015281816106300152818161066d015281816106f10152818161073a01528181610796015281816108210152818161089501528181610965015281816109d10152610a47015260008181610b770152610be901526119056000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063acf4a6c21161008c578063c5feb12711610066578063c5feb12714610241578063cd7245c514610254578063d787840a146102ac578063dbaee0b4146102bf57600080fd5b8063acf4a6c2146101f9578063b6dacdb81461020c578063bc6fc4691461022e57600080fd5b80635b534051116100c85780635b5340511461017c5780636041ae96146101c05780637fbc7639146101d35780639567741f146101e657600080fd5b806323fc23f3146100ef5780632e5e74c6146101385780634f90fda91461015b575b600080fd5b6101026100fd366004610ddb565b6102ef565b6040805194151585526001600160801b039384166020860152918316918401919091521660608201526080015b60405180910390f35b61014b610146366004610edd565b6103a7565b604051901515815260200161012f565b61016e610169366004610f65565b610464565b60405190815260200161012f565b61018f61018a366004610f9e565b6104c6565b60405161012f9493929190931515845291151560208401526001600160801b03166040830152606082015260800190565b61014b6101ce366004610ffa565b610587565b61014b6101e1366004611084565b610660565b61014b6101f43660046110c5565b6106d5565b61014b610207366004610ffa565b61072d565b61021f61021a366004611118565b610768565b60405161012f9392919061118a565b61014b61023c366004611084565b610814565b61016e61024f366004611227565b61084f565b610267610262366004611227565b61088b565b604080516001600160a01b03909616865263ffffffff9094166020860152911515928401929092526001600160801b039091166060830152608082015260a00161012f565b61014b6102ba366004611253565b610949565b6102d26102cd3660046112b5565b610a00565b604080519283526001600160801b0390911660208301520161012f565b6040516323fc23f360e01b81526001600160a01b038481166004830152838116602483015263ffffffff831660448301526000918291829182917f000000000000000000000000000000000000000000000000000000000000000016906323fc23f390606401608060405180830381865afa158015610372573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610396919061131b565b935093509350935093509350935093565b6040805160008082526020820190925281906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690632e5e74c6906103ff908a908a908a908a90604481016113bc565b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505090506104597f00000000000000000000000000000000000000000000000000000000000000008285610abe565b979650505050505050565b60405168383ab13634b9b432b960b91b60208201526001600160601b0319606084901b1660298201526001600160e01b031960e083901b16603d8201526000906041015b60405160208183030381529060405280519060200120905092915050565b604051635b53405160e01b81526001600160a01b038581166004830152848116602483015263ffffffff8416604483015282811660648301526000918291829182917f00000000000000000000000000000000000000000000000000000000000000001690635b53405190608401608060405180830381865afa158015610551573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057591906113fc565b929b919a509850909650945050505050565b6000806001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016636041ae96878787855b6040519080825280601f01601f1916602001820160405280156105e8576020820181803683370190505b506040516024016105fc9493929190611449565b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505090506106567f00000000000000000000000000000000000000000000000000000000000000008285610abe565b9695505050505050565b6000806001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016637fbc7639878787855b6040519080825280601f01601f1916602001820160405280156106c1576020820181803683370190505b506040516024016105fc9493929190611481565b6040805160008082526020820190925281906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063232d2b58906103ff908a908a908a908a90604481016114c0565b6000806001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663acf4a6c2878787856105be565b6040516316db59b760e31b81526001600160a01b0383811660048301528281166024830152606091829182917f00000000000000000000000000000000000000000000000000000000000000009091169063b6dacdb890604401600060405180830381865afa1580156107df573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108079190810190611603565b9250925092509250925092565b6000806001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663b96731c287878785610697565b604080516b39bab139b1b934b83a34b7b760a11b6020820152606084811b6001600160601b031916602c830152918101839052600091016104a8565b60008060008060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663cd7245c588886040518363ffffffff1660e01b81526004016108f59291906001600160a01b03929092168252602082015260400190565b60a060405180830381865afa158015610912573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093691906116e2565b939b929a50909850965090945092505050565b6040805160008082526020820190925281906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d787840a9061099d908890889060448101611749565b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505090506109f77f00000000000000000000000000000000000000000000000000000000000000008285610abe565b95945050505050565b604051632266eabb60e21b81526001600160a01b038581166004830152848116602483015263ffffffff841660448301526001600160801b038316606483015260009182917f0000000000000000000000000000000000000000000000000000000000000000169063899baaec906084016040805180830381865afa158015610a8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab19190611779565b9150915094509492505050565b604080516001808252818301909252600091829190816020015b60408051606080820183526000808352602083015291810191909152815260200190600190039081610ad8579050509050604051806060016040528060c963ffffffff168152602001866001600160a01b031681526020018585604051602001610b4392919061179e565b60405160208183030381529060405281525081600081518110610b6857610b686117c3565b602002602001018190525060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663670e77e383604051602401610bb591906117d9565b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505090506000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168333604051602001610c24929190611867565b60408051601f1981840301815290829052610c3e91611899565b6000604051808303816000865af19150503d8060008114610c7b576040519150601f19603f3d011682016040523d82523d6000602084013e610c80565b606091505b509150915081610c9357610c9381610ca1565b506001979650505050505050565b600481511015610cf85760405162461bcd60e51b815260206004820152601a60248201527f43616c6c5574696c733a2074617267657420726576657274282900000000000060448201526064015b60405180910390fd5b602081015163b1b7848f60e01b6001600160e01b0319821601610da85760408051808201825260208082527f43616c6c5574696c733a207461726765742070616e69636b65643a2030785f5f90820190815260248501517f43616c6c5574696c733a207461726765742070616e69636b65643a2030780000600482811c600f908116603090810160081b918516011791909117909252925162461bcd60e51b8152919291610cef918491016118b5565b81518060208401fd5b50565b6001600160a01b0381168114610db157600080fd5b63ffffffff81168114610db157600080fd5b600080600060608486031215610df057600080fd5b8335610dfb81610db4565b92506020840135610e0b81610db4565b91506040840135610e1b81610dc9565b809150509250925092565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610e6557610e65610e26565b604052919050565b600082601f830112610e7e57600080fd5b813567ffffffffffffffff811115610e9857610e98610e26565b610eab601f8201601f1916602001610e3c565b818152846020838601011115610ec057600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215610ef557600080fd5b8535610f0081610db4565b94506020860135610f1081610db4565b93506040860135610f2081610dc9565b92506060860135610f3081610db4565b9150608086013567ffffffffffffffff811115610f4c57600080fd5b610f5888828901610e6d565b9150509295509295909350565b60008060408385031215610f7857600080fd5b8235610f8381610db4565b91506020830135610f9381610dc9565b809150509250929050565b60008060008060808587031215610fb457600080fd5b8435610fbf81610db4565b93506020850135610fcf81610db4565b92506040850135610fdf81610dc9565b91506060850135610fef81610db4565b939692955090935050565b6000806000806080858703121561101057600080fd5b843561101b81610db4565b9350602085013561102b81610db4565b9250604085013561103b81610dc9565b9150606085013567ffffffffffffffff81111561105757600080fd5b61106387828801610e6d565b91505092959194509250565b6001600160801b0381168114610db157600080fd5b6000806000806080858703121561109a57600080fd5b84356110a581610db4565b935060208501356110b581610dc9565b9250604085013561103b8161106f565b600080600080600060a086880312156110dd57600080fd5b85356110e881610db4565b945060208601356110f881610dc9565b9350604086013561110881610db4565b92506060860135610f308161106f565b6000806040838503121561112b57600080fd5b823561113681610db4565b91506020830135610f9381610db4565b600081518084526020808501945080840160005b8381101561117f5781516001600160801b03168752958201959082019060010161115a565b509495945050505050565b606080825284519082018190526000906020906080840190828801845b828110156111cc5781516001600160a01b0316845292840192908401906001016111a7565b5050508381038285015285518082528683019183019060005b8181101561120757835163ffffffff16835292840192918401916001016111e5565b5050848103604086015261121b8187611146565b98975050505050505050565b6000806040838503121561123a57600080fd5b823561124581610db4565b946020939093013593505050565b60008060006060848603121561126857600080fd5b833561127381610db4565b9250602084013561128381610dc9565b9150604084013567ffffffffffffffff81111561129f57600080fd5b6112ab86828701610e6d565b9150509250925092565b600080600080608085870312156112cb57600080fd5b84356112d681610db4565b935060208501356112e681610db4565b925060408501356112f681610dc9565b91506060850135610fef8161106f565b8051801515811461131657600080fd5b919050565b6000806000806080858703121561133157600080fd5b61133a85611306565b9350602085015161134a8161106f565b604086015190935061135b8161106f565b6060860151909250610fef8161106f565b60005b8381101561138757818101518382015260200161136f565b50506000910152565b600081518084526113a881602086016020860161136c565b601f01601f19169290920160200192915050565b6001600160a01b038681168252858116602083015263ffffffff851660408301528316606082015260a06080820181905260009061045990830184611390565b6000806000806080858703121561141257600080fd5b61141b85611306565b935061142960208601611306565b925060408501516114398161106f565b6060959095015193969295505050565b6001600160a01b0385811682528416602082015263ffffffff8316604082015260806060820181905260009061065690830184611390565b6001600160a01b038516815263ffffffff841660208201526001600160801b038316604082015260806060820181905260009061065690830184611390565b6001600160a01b03868116825263ffffffff86166020830152841660408201526001600160801b038316606082015260a06080820181905260009061045990830184611390565b600067ffffffffffffffff82111561152157611521610e26565b5060051b60200190565b600082601f83011261153c57600080fd5b8151602061155161154c83611507565b610e3c565b82815260059290921b8401810191818101908684111561157057600080fd5b8286015b8481101561159457805161158781610dc9565b8352918301918301611574565b509695505050505050565b600082601f8301126115b057600080fd5b815160206115c061154c83611507565b82815260059290921b840181019181810190868411156115df57600080fd5b8286015b848110156115945780516115f68161106f565b83529183019183016115e3565b60008060006060848603121561161857600080fd5b835167ffffffffffffffff8082111561163057600080fd5b818601915086601f83011261164457600080fd5b8151602061165461154c83611507565b82815260059290921b8401810191818101908a84111561167357600080fd5b948201945b8386101561169a57855161168b81610db4565b82529482019490820190611678565b918901519197509093505050808211156116b357600080fd5b6116bf8783880161152b565b935060408601519150808211156116d557600080fd5b506112ab8682870161159f565b600080600080600060a086880312156116fa57600080fd5b855161170581610db4565b602087015190955061171681610dc9565b935061172460408701611306565b925060608601516117348161106f565b80925050608086015190509295509295909350565b6001600160a01b038416815263ffffffff831660208201526060604082018190526000906109f790830184611390565b6000806040838503121561178c57600080fd5b825191506020830151610f938161106f565b6040815260006117b16040830185611390565b82810360208401526109f78185611390565b634e487b7160e01b600052603260045260246000fd5b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561185957888303603f190185528151805163ffffffff168452878101516001600160a01b031688850152860151606087850181905261184581860183611390565b968901969450505090860190600101611800565b509098975050505050505050565b6000835161187981846020880161136c565b60609390931b6001600160601b0319169190920190815260140192915050565b600082516118ab81846020870161136c565b9190910192915050565b6020815260006118c86020830184611390565b939250505056fea26469706673582212209f3ca73db0cfce78f3f6496d0403ce0ba5cd005587a2a0c83fbe36327a4cbd2464736f6c63430008130033";
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
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "approveSubscription";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
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
            readonly internalType: "uint128";
            readonly name: "amount";
            readonly type: "uint128";
        }];
        readonly name: "calculateDistribution";
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
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "createIndex";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
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
        readonly name: "deleteSubscription";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
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
            readonly name: "amount";
            readonly type: "uint128";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "distribute";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
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
        readonly name: "getIndex";
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
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }];
        readonly name: "getPublisherId";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "publisherId";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
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
        readonly name: "getSubscription";
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
            readonly internalType: "bytes32";
            readonly name: "subscriptionId";
            readonly type: "bytes32";
        }];
        readonly name: "getSubscriptionByID";
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
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "publisherId";
            readonly type: "bytes32";
        }];
        readonly name: "getSubscriptionId";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "subscriptionId";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
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
        readonly name: "listSubscriptions";
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
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "revokeSubscription";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
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
        readonly name: "updateIndex";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
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
        readonly name: "updateSubscriptionUnits";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IDAv1ForwarderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDAv1Forwarder;
}
export {};
//# sourceMappingURL=IDAv1Forwarder__factory.d.ts.map