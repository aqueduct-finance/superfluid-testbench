import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { SuperUpgrader, SuperUpgraderInterface } from "../../../contracts/utils/SuperUpgrader";
type SuperUpgraderConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperUpgrader__factory extends ContractFactory {
    constructor(...args: SuperUpgraderConstructorParams);
    deploy(adminRole: PromiseOrValue<string>, backendAddr: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperUpgrader>;
    getDeployTransaction(adminRole: PromiseOrValue<string>, backendAddr: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperUpgrader;
    connect(signer: Signer): SuperUpgrader__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200198b3803806200198b833981016040819052620000349162000309565b6001600160a01b038216620000855760405162461bcd60e51b815260206004820152601260248201527161646d696e526f6c6520697320656d70747960701b60448201526064015b60405180910390fd5b6200009260008362000189565b60005b8151811015620001805760006001600160a01b0316828281518110620000bf57620000bf620003f2565b60200260200101516001600160a01b0316036200011f5760405162461bcd60e51b815260206004820152601560248201527f6261636b656e642063616e2774206265207a65726f000000000000000000000060448201526064016200007c565b6200016d7f25cf2b509f2a7f322675b2a5322b182f44ad2c03ac941a0af17c9b178f5d5d5f838381518110620001595762000159620003f2565b60200260200101516200018960201b60201c565b620001788162000408565b905062000095565b50505062000430565b62000195828262000199565b5050565b620001a58282620001c4565b6000828152600160205260409020620001bf908262000264565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000195576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002203390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006200027b836001600160a01b03841662000284565b90505b92915050565b6000818152600183016020526040812054620002cd575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556200027e565b5060006200027e565b80516001600160a01b0381168114620002ee57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156200031d57600080fd5b6200032883620002d6565b602084810151919350906001600160401b03808211156200034857600080fd5b818601915086601f8301126200035d57600080fd5b815181811115620003725762000372620002f3565b8060051b604051601f19603f830116810181811085821117156200039a576200039a620002f3565b604052918252848201925083810185019189831115620003b957600080fd5b938501935b82851015620003e257620003d285620002d6565b84529385019392850192620003be565b8096505050505050509250929050565b634e487b7160e01b600052603260045260246000fd5b6000600182016200042957634e487b7160e01b600052601160045260246000fd5b5060010190565b61154b80620004406000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806361985da7116100a2578063a217fddf11610071578063a217fddf1461023a578063abcac5eb14610242578063ca15c87314610255578063d547741f14610268578063ec3282531461027b57600080fd5b806361985da7146101d45780639010d07c146101e757806391d148541461021257806392c2becc1461022557600080fd5b80632f2ff15d116100de5780632f2ff15d1461019357806336568abe146101a657806344e9d2fb146101b95780635d730c58146101cc57600080fd5b806301ffc9a7146101105780630f01a4a214610138578063248a9ca31461014d5780632a1972981461017e575b600080fd5b61012361011e36600461115f565b610283565b60405190151581526020015b60405180910390f35b6101406102ae565b60405161012f9190611189565b61017061015b3660046111d6565b60009081526020819052604090206001015490565b60405190815260200161012f565b61019161018c366004611204565b610376565b005b6101916101a1366004611245565b610610565b6101916101b4366004611245565b61063a565b6101236101c7366004611275565b6106b8565b6101916106d2565b6101916101e2366004611275565b610711565b6101fa6101f5366004611292565b61077a565b6040516001600160a01b03909116815260200161012f565b610123610220366004611245565b610799565b6101706000805160206114f683398151915281565b610170600081565b610191610250366004611275565b6107c2565b6101706102633660046111d6565b6107da565b610191610276366004611245565b6107f1565b610191610816565b60006001600160e01b03198216635a05180f60e01b14806102a857506102a882610858565b92915050565b606060006102c96000805160206114f68339815191526107da565b905060008167ffffffffffffffff8111156102e6576102e66112b4565b60405190808252806020026020018201604052801561030f578160200160208202803683370190505b50905060005b8281101561036f576103356000805160206114f68339815191528261077a565b828281518110610347576103476112ca565b6001600160a01b0390921660209283029190910190910152610368816112f6565b9050610315565b5092915050565b336001600160a01b03831614806103c557506103a06000805160206114f683398151915233610799565b80156103c557506001600160a01b03821660009081526002602052604090205460ff16155b61040e5760405162461bcd60e51b81526020600482015260156024820152741bdc195c985d1a5bdb881b9bdd08185b1b1bddd959605a1b60448201526064015b60405180910390fd5b60008390506000816001600160a01b031663ee719bc86040518163ffffffff1660e01b8152600401602060405180830381865afa158015610453573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610477919061130f565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038316906370a0823190602401602060405180830381865afa1580156104c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e5919061132c565b90506104fc6001600160a01b03831686308761088d565b6105116001600160a01b0383168460006108fe565b6105256001600160a01b03831684866108fe565b6040516370a0823160e01b81523060048201526001600160a01b0380851691635b9d09cc91889185918716906370a0823190602401602060405180830381865afa158015610577573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059b919061132c565b6105a59190611345565b604080516000815260208101918290526001600160e01b031960e086901b169091526105d6929190602481016113a8565b600060405180830381600087803b1580156105f057600080fd5b505af1158015610604573d6000803e3d6000fd5b50505050505050505050565b60008281526020819052604090206001015461062b81610a13565b6106358383610a1d565b505050565b6001600160a01b03811633146106aa5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610405565b6106b48282610a3f565b5050565b60006102a86000805160206114f683398151915283610799565b33600081815260026020526040808220805460ff19169055517fde802370a7a9557e8d50bffe30a1bbd3d327beb1964088485a5465325bc5fb7a9190a2565b6001600160a01b03811661075f5760405162461bcd60e51b81526020600482015260156024820152741bdc195c985d1a5bdb881b9bdd08185b1b1bddd959605a1b6044820152606401610405565b6107776000805160206114f683398151915282610610565b50565b60008281526001602052604081206107929083610a61565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6107776000805160206114f6833981519152826107f1565b60008181526001602052604081206102a890610a6d565b60008281526020819052604090206001015461080c81610a13565b6106358383610a3f565b33600081815260026020526040808220805460ff19166001179055517fd07f586f18c37aa8ec13ebc5523e50304e2aa7711505bfa7242fcb7152eaee259190a2565b60006001600160e01b03198216637965db0b60e01b14806102a857506301ffc9a760e01b6001600160e01b03198316146102a8565b6040516001600160a01b03808516602483015283166044820152606481018290526108f89085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610a77565b50505050565b8015806109785750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610952573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610976919061132c565b155b6109e35760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608401610405565b6040516001600160a01b03831660248201526044810182905261063590849063095ea7b360e01b906064016108c1565b6107778133610b49565b610a278282610ba2565b60008281526001602052604090206106359082610c26565b610a498282610c3b565b60008281526001602052604090206106359082610ca0565b60006107928383610cb5565b60006102a8825490565b6000610acc826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610cdf9092919063ffffffff16565b8051909150156106355780806020019051810190610aea91906113d8565b6106355760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610405565b610b538282610799565b6106b457610b6081610cf6565b610b6b836020610d08565b604051602001610b7c9291906113fa565b60408051601f198184030181529082905262461bcd60e51b82526104059160040161146f565b610bac8282610799565b6106b4576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610be23390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610792836001600160a01b038416610ea4565b610c458282610799565b156106b4576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610792836001600160a01b038416610ef3565b6000826000018281548110610ccc57610ccc6112ca565b9060005260206000200154905092915050565b6060610cee8484600085610fe6565b949350505050565b60606102a86001600160a01b03831660145b60606000610d17836002611482565b610d22906002611499565b67ffffffffffffffff811115610d3a57610d3a6112b4565b6040519080825280601f01601f191660200182016040528015610d64576020820181803683370190505b509050600360fc1b81600081518110610d7f57610d7f6112ca565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610dae57610dae6112ca565b60200101906001600160f81b031916908160001a9053506000610dd2846002611482565b610ddd906001611499565b90505b6001811115610e55576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610e1157610e116112ca565b1a60f81b828281518110610e2757610e276112ca565b60200101906001600160f81b031916908160001a90535060049490941c93610e4e816114ac565b9050610de0565b5083156107925760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610405565b6000818152600183016020526040812054610eeb575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556102a8565b5060006102a8565b60008181526001830160205260408120548015610fdc576000610f17600183611345565b8554909150600090610f2b90600190611345565b9050818114610f90576000866000018281548110610f4b57610f4b6112ca565b9060005260206000200154905080876000018481548110610f6e57610f6e6112ca565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610fa157610fa16114c3565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506102a8565b60009150506102a8565b6060824710156110475760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610405565b600080866001600160a01b0316858760405161106391906114d9565b60006040518083038185875af1925050503d80600081146110a0576040519150601f19603f3d011682016040523d82523d6000602084013e6110a5565b606091505b50915091506110b6878383876110c1565b979650505050505050565b60608315611130578251600003611129576001600160a01b0385163b6111295760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610405565b5081610cee565b610cee83838151156111455781518083602001fd5b8060405162461bcd60e51b8152600401610405919061146f565b60006020828403121561117157600080fd5b81356001600160e01b03198116811461079257600080fd5b6020808252825182820181905260009190848201906040850190845b818110156111ca5783516001600160a01b0316835292840192918401916001016111a5565b50909695505050505050565b6000602082840312156111e857600080fd5b5035919050565b6001600160a01b038116811461077757600080fd5b60008060006060848603121561121957600080fd5b8335611224816111ef565b92506020840135611234816111ef565b929592945050506040919091013590565b6000806040838503121561125857600080fd5b82359150602083013561126a816111ef565b809150509250929050565b60006020828403121561128757600080fd5b8135610792816111ef565b600080604083850312156112a557600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201611308576113086112e0565b5060010190565b60006020828403121561132157600080fd5b8151610792816111ef565b60006020828403121561133e57600080fd5b5051919050565b818103818111156102a8576102a86112e0565b60005b8381101561137357818101518382015260200161135b565b50506000910152565b60008151808452611394816020860160208601611358565b601f01601f19169290920160200192915050565b60018060a01b03841681528260208201526060604082015260006113cf606083018461137c565b95945050505050565b6000602082840312156113ea57600080fd5b8151801515811461079257600080fd5b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611432816017850160208801611358565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611463816028840160208801611358565b01602801949350505050565b602081526000610792602083018461137c565b80820281158282048414176102a8576102a86112e0565b808201808211156102a8576102a86112e0565b6000816114bb576114bb6112e0565b506000190190565b634e487b7160e01b600052603160045260246000fd5b600082516114eb818460208701611358565b919091019291505056fe25cf2b509f2a7f322675b2a5322b182f44ad2c03ac941a0af17c9b178f5d5d5fa264697066735822122057e8ca6c21cc4d0f6a8ff2514d71763b90fb6b78ace6b093dfac8c7d2c83fcac64736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "adminRole";
            readonly type: "address";
        }, {
            readonly internalType: "address[]";
            readonly name: "backendAddr";
            readonly type: "address[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "OptinAutoUpgrade";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "OptoutAutoUpgrade";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "previousAdminRole";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "newAdminRole";
            readonly type: "bytes32";
        }];
        readonly name: "RoleAdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleGranted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleRevoked";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "BACKEND_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DEFAULT_ADMIN_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getBackendAgents";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }];
        readonly name: "getRoleAdmin";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getRoleMember";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }];
        readonly name: "getRoleMemberCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "grantBackendAgent";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "grantRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "hasRole";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "isBackendAgent";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "yes";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "optinAutoUpgrades";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "optoutAutoUpgrades";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "renounceRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "revokeBackendAgent";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "revokeRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "superTokenAddr";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "upgrade";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SuperUpgraderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperUpgrader;
}
export {};
//# sourceMappingURL=SuperUpgrader__factory.d.ts.map