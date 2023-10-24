import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { CFAv1Forwarder, CFAv1ForwarderInterface } from "../../../contracts/utils/CFAv1Forwarder";
type CFAv1ForwarderConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CFAv1Forwarder__factory extends ContractFactory {
    constructor(...args: CFAv1ForwarderConstructorParams);
    deploy(host: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CFAv1Forwarder>;
    getDeployTransaction(host: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CFAv1Forwarder;
    connect(signer: Signer): CFAv1Forwarder__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b50604051620017db380380620017db8339810160408190526200003491620000ef565b6001600160a01b0381166080819052604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd3600482015263b6d200de90602401602060405180830381865afa1580156200009d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000c39190620000ef565b6001600160a01b031660a0525062000116565b6001600160a01b0381168114620000ec57600080fd5b50565b6000602082840312156200010257600080fd5b81516200010f81620000d6565b9392505050565b60805160a051611628620001b36000396000818161029a01528181610366015281816103fb015281816104ab01528181610520015281816105de015281816106e901528181610766015281816107aa01528181610851015281816108ef0152818161092501528181610abc01528181610b4101528181610bb001528181610bf30152610c2d015260008181610d150152610d8701526116286000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063308855911161008c5780637243fb93116100665780637243fb9314610222578063b4b333c614610235578063c5ad5c1a14610248578063e15536b61461025b57600080fd5b806330885591146101cd5780634d3f60f9146101e057806357e6aa361461020f57600080fd5b80630f1ac495116100c85780630f1ac4951461014b5780631d8b65261461018157806322c904d9146101a75780632860fd93146101ba57600080fd5b806309f0b495146100ef5780630bd0728d146101155780630c03399114610138575b600080fd5b6101026100fd366004610f76565b61026e565b6040519081526020015b60405180910390f35b610128610123366004610faf565b61030e565b604051901515815260200161010c565b610128610146366004611080565b61031d565b61015e610159366004610faf565b610336565b60408051948552600b9390930b602085015291830152606082015260800161010c565b61019461018f366004611108565b6103e1565b604051600b9190910b815260200161010c565b6101946101b5366004610faf565b610481565b61015e6101c8366004611108565b610518565b6101286101db366004611162565b6105c0565b6101f36101ee366004611108565b6105d9565b6040805160ff9093168352600b9190910b60208301520161010c565b61012861021d3660046111be565b610679565b610128610230366004610faf565b610687565b6101286102433660046111fe565b6106a2565b610128610256366004611273565b6106b0565b610128610269366004611080565b6106be565b6040516346ccbfb760e11b81526001600160a01b038381166004830152600b83900b60248301526000917f000000000000000000000000000000000000000000000000000000000000000090911690638d997f6e90604401602060405180830381865afa1580156102e3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030791906112b4565b9392505050565b600061030783836000806106cd565b600061032c868686868661078d565b9695505050505050565b604051630f1ac49560e01b81526001600160a01b03838116600483015282811660248301526000918291829182917f00000000000000000000000000000000000000000000000000000000000000001690630f1ac49590604401608060405180830381865afa1580156103ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d191906112cd565b9299919850965090945092505050565b604051631cd43d1160e31b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063e6a1e888906104349087908790879060040161130b565b608060405180830381865afa158015610451573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047591906112cd565b50909695505050505050565b60405163e8e7e2d160e01b81526001600160a01b03838116600483015282811660248301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063e8e7e2d190604401602060405180830381865afa1580156104f4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610307919061132e565b6000806000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e6a1e8888888886040518463ffffffff1660e01b815260040161056e9392919061130b565b608060405180830381865afa15801561058b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105af91906112cd565b929a91995097509095509350505050565b60006105ce858585856106cd565b90505b949350505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031662422bbe8686866040518463ffffffff1660e01b815260040161062b9392919061130b565b606060405180830381865afa158015610648573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066c919061134b565b9097909650945050505050565b60006105d184338585610920565b6000610307838360076b7fffffffffffffffffffffff6106cd565b60006105ce85858585610a7d565b60006105ce85858585610920565b600061032c8686868686610bd6565b6040805160008082526020820190925281906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063811b3d4090610725908990899089908990604481016113d3565b60408051601f19818403018152918152602080830180516001600160e01b031660e09590951b949094179093528051600081529283019052925061032c91507f0000000000000000000000000000000000000000000000000000000000000000908390610c5c565b6000806001600160a01b0386163314610847576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663354b95908888888860005b6040519080825280601f01601f191660200182016040528015610800576020820181803683370190505b50604051602401610815959493929190611412565b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050506108e8565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166350209a6288878760005b6040519080825280601f01601f1916602001820160405280156108a6576020820181803683370190505b506040516024016108ba9493929190611450565b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050505b90506109157f00000000000000000000000000000000000000000000000000000000000000008285610c5c565b979650505050505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e6a1e8888787876040518463ffffffff1660e01b81526004016109739392919061130b565b608060405180830381865afa158015610990573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b491906112cd565b5050915050600083600b0b1315610a2f5780600b0b6000036109f8576040805160008152602081019091526109f0908790879087908790610bd6565b9150506105d1565b82600b0b81600b0b14610a25576040805160008152602081019091526109f090879087908790879061078d565b60019150506105d1565b82600b0b600003610a6457600081600b0b1315610a25576040805160008152602081019091526109f090879087908790610a7d565b60405163cea9aa5f60e01b815260040160405180910390fd5b6000806001600160a01b038516331480610a9f57506001600160a01b03841633145b610b28576040805160008152602081019091526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690634c8b181f90610af69089908990899060448101611486565b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050610ba9565b6040805160008152602081019091526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063b4b333c690610b7b9089908990899060448101611486565b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050505b905061032c7f00000000000000000000000000000000000000000000000000000000000000008285610c5c565b6000806001600160a01b0386163314610c23576001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166394229ecb8888888860006107d6565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166362fc305e888787600061087c565b604080516001808252818301909252600091829190816020015b60408051606080820183526000808352602083015291810191909152815260200190600190039081610c76579050509050604051806060016040528060c963ffffffff168152602001866001600160a01b031681526020018585604051602001610ce19291906114ba565b60405160208183030381529060405281525081600081518110610d0657610d066114e8565b602002602001018190525060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663670e77e383604051602401610d5391906114fe565b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505090506000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168333604051602001610dc292919061158c565b60408051601f1981840301815290829052610ddc916115c3565b6000604051808303816000865af19150503d8060008114610e19576040519150601f19603f3d011682016040523d82523d6000602084013e610e1e565b606091505b509150915081610e3157610e3181610e3f565b506001979650505050505050565b600481511015610e965760405162461bcd60e51b815260206004820152601a60248201527f43616c6c5574696c733a2074617267657420726576657274282900000000000060448201526064015b60405180910390fd5b602081015163b1b7848f60e01b6001600160e01b0319821601610f465760408051808201825260208082527f43616c6c5574696c733a207461726765742070616e69636b65643a2030785f5f90820190815260248501517f43616c6c5574696c733a207461726765742070616e69636b65643a2030780000600482811c600f908116603090810160081b918516011791909117909252925162461bcd60e51b8152919291610e8d918491016115df565b81518060208401fd5b50565b6001600160a01b0381168114610f4f57600080fd5b80600b0b8114610f4f57600080fd5b60008060408385031215610f8957600080fd5b8235610f9481610f52565b91506020830135610fa481610f67565b809150509250929050565b60008060408385031215610fc257600080fd5b8235610fcd81610f52565b91506020830135610fa481610f52565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261100457600080fd5b813567ffffffffffffffff8082111561101f5761101f610fdd565b604051601f8301601f19908116603f0116810190828211818310171561104757611047610fdd565b8160405283815286602085880101111561106057600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600060a0868803121561109857600080fd5b85356110a381610f52565b945060208601356110b381610f52565b935060408601356110c381610f52565b925060608601356110d381610f67565b9150608086013567ffffffffffffffff8111156110ef57600080fd5b6110fb88828901610ff3565b9150509295509295909350565b60008060006060848603121561111d57600080fd5b833561112881610f52565b9250602084013561113881610f52565b9150604084013561114881610f52565b809150509250925092565b60ff81168114610f4f57600080fd5b6000806000806080858703121561117857600080fd5b843561118381610f52565b9350602085013561119381610f52565b925060408501356111a381611153565b915060608501356111b381610f67565b939692955090935050565b6000806000606084860312156111d357600080fd5b83356111de81610f52565b925060208401356111ee81610f52565b9150604084013561114881610f67565b6000806000806080858703121561121457600080fd5b843561121f81610f52565b9350602085013561122f81610f52565b9250604085013561123f81610f52565b9150606085013567ffffffffffffffff81111561125b57600080fd5b61126787828801610ff3565b91505092959194509250565b6000806000806080858703121561128957600080fd5b843561129481610f52565b935060208501356112a481610f52565b925060408501356111a381610f52565b6000602082840312156112c657600080fd5b5051919050565b600080600080608085870312156112e357600080fd5b8451935060208501516112f581610f67565b6040860151606090960151949790965092505050565b6001600160a01b0393841681529183166020830152909116604082015260600190565b60006020828403121561134057600080fd5b815161030781610f67565b60008060006060848603121561136057600080fd5b83519250602084015161137281611153565b604085015190925061114881610f67565b60005b8381101561139e578181015183820152602001611386565b50506000910152565b600081518084526113bf816020860160208601611383565b601f01601f19169290920160200192915050565b6001600160a01b0386811682528516602082015260ff84166040820152600b83900b606082015260a060808201819052600090610915908301846113a7565b6001600160a01b038681168252858116602083015284166040820152600b83900b606082015260a060808201819052600090610915908301846113a7565b6001600160a01b03858116825284166020820152600b83900b604082015260806060820181905260009061032c908301846113a7565b6001600160a01b03858116825284811660208301528316604082015260806060820181905260009061032c908301846113a7565b6040815260006114cd60408301856113a7565b82810360208401526114df81856113a7565b95945050505050565b634e487b7160e01b600052603260045260246000fd5b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561157e57888303603f190185528151805163ffffffff168452878101516001600160a01b031688850152860151606087850181905261156a818601836113a7565b968901969450505090860190600101611525565b509098975050505050505050565b6000835161159e818460208801611383565b60609390931b6bffffffffffffffffffffffff19169190920190815260140192915050565b600082516115d5818460208701611383565b9190910192915050565b60208152600061030760208301846113a756fea2646970667358221220791735a4672dc2361c4af12f33616b40a1dd9dfd822d27cda9b1a10b0e182eff64736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_FWD_INVALID_FLOW_RATE";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowrate";
            readonly type: "int96";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "createFlow";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "deleteFlow";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getAccountFlowInfo";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "lastUpdated";
            readonly type: "uint256";
        }, {
            readonly internalType: "int96";
            readonly name: "flowrate";
            readonly type: "int96";
        }, {
            readonly internalType: "uint256";
            readonly name: "deposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "owedDeposit";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getAccountFlowrate";
        readonly outputs: readonly [{
            readonly internalType: "int96";
            readonly name: "flowrate";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowrate";
            readonly type: "int96";
        }];
        readonly name: "getBufferAmountByFlowrate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "bufferAmount";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "getFlowInfo";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "lastUpdated";
            readonly type: "uint256";
        }, {
            readonly internalType: "int96";
            readonly name: "flowrate";
            readonly type: "int96";
        }, {
            readonly internalType: "uint256";
            readonly name: "deposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "owedDeposit";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }];
        readonly name: "getFlowOperatorPermissions";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "permissions";
            readonly type: "uint8";
        }, {
            readonly internalType: "int96";
            readonly name: "flowrateAllowance";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "getFlowrate";
        readonly outputs: readonly [{
            readonly internalType: "int96";
            readonly name: "flowrate";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }];
        readonly name: "grantPermissions";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }];
        readonly name: "revokePermissions";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowrate";
            readonly type: "int96";
        }];
        readonly name: "setFlowrate";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowrate";
            readonly type: "int96";
        }];
        readonly name: "setFlowrateFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowrate";
            readonly type: "int96";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "updateFlow";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }, {
            readonly internalType: "uint8";
            readonly name: "permissions";
            readonly type: "uint8";
        }, {
            readonly internalType: "int96";
            readonly name: "flowrateAllowance";
            readonly type: "int96";
        }];
        readonly name: "updateFlowOperatorPermissions";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): CFAv1ForwarderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CFAv1Forwarder;
}
export {};
//# sourceMappingURL=CFAv1Forwarder__factory.d.ts.map