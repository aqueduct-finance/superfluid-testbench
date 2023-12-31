import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Resolver, ResolverInterface } from "../../../contracts/utils/Resolver";
type ResolverConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Resolver__factory extends ContractFactory {
    constructor(...args: ResolverConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Resolver>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Resolver;
    connect(signer: Signer): Resolver__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001c600033610021565b610161565b61002b828261002f565b5050565b6100398282610056565b600082815260016020526040902061005190826100f4565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661002b576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556100b03390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610109836001600160a01b038416610112565b90505b92915050565b60008181526001830160205260408120546101595750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561010c565b50600061010c565b610ca6806101706000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80639010d07c116100715780639010d07c1461015a57806391d148541461016d578063a217fddf14610180578063a815ff1514610188578063ca15c8731461019b578063d547741f146101ae57600080fd5b806301ffc9a7146100ae578063248a9ca3146100d65780632f2ff15d1461010757806336568abe1461011c578063693ec85e1461012f575b600080fd5b6100c16100bc36600461095c565b6101c1565b60405190151581526020015b60405180910390f35b6100f96100e4366004610986565b60009081526020819052604090206001015490565b6040519081526020016100cd565b61011a6101153660046109bb565b6101ec565b005b61011a61012a3660046109bb565b610216565b61014261013d366004610a30565b610299565b6040516001600160a01b0390911681526020016100cd565b610142610168366004610a72565b6102ce565b6100c161017b3660046109bb565b6102ed565b6100f9600081565b61011a610196366004610a94565b610316565b6100f96101a9366004610986565b6103fe565b61011a6101bc3660046109bb565b610415565b60006001600160e01b03198216635a05180f60e01b14806101e657506101e68261043a565b92915050565b6000828152602081905260409020600101546102078161046f565b610211838361047c565b505050565b6001600160a01b038116331461028b5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b610295828261049e565b5050565b6000600283836040516102ad929190610ae8565b908152604051908190036020019020546001600160a01b0316905092915050565b60008281526001602052604081206102e690836104c0565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6103216000336102ed565b6103665760405162461bcd60e51b815260206004820152601660248201527521b0b63632b91034b9903737ba1030b71030b236b4b760511b6044820152606401610282565b8060028484604051610379929190610ae8565b90815260405190819003602001812080546001600160a01b03939093166001600160a01b0319909316929092179091556103b69084908490610ae8565b6040519081900381206001600160a01b0383168252907f496595ced95720268cf8bc60bae3f35024ff2a130f73ac4e20f5c1eaca35db999060200160405180910390a2505050565b60008181526001602052604081206101e6906104cc565b6000828152602081905260409020600101546104308161046f565b610211838361049e565b60006001600160e01b03198216637965db0b60e01b14806101e657506301ffc9a760e01b6001600160e01b03198316146101e6565b61047981336104d6565b50565b610486828261052f565b600082815260016020526040902061021190826105b3565b6104a882826105c8565b6000828152600160205260409020610211908261062d565b60006102e68383610642565b60006101e6825490565b6104e082826102ed565b610295576104ed8161066c565b6104f883602061067e565b604051602001610509929190610b1c565b60408051601f198184030181529082905262461bcd60e51b825261028291600401610b91565b61053982826102ed565b610295576000828152602081815260408083206001600160a01b03851684529091529020805460ff1916600117905561056f3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006102e6836001600160a01b03841661081a565b6105d282826102ed565b15610295576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006102e6836001600160a01b038416610869565b600082600001828154811061065957610659610bc4565b9060005260206000200154905092915050565b60606101e66001600160a01b03831660145b6060600061068d836002610bf0565b610698906002610c07565b67ffffffffffffffff8111156106b0576106b0610c1a565b6040519080825280601f01601f1916602001820160405280156106da576020820181803683370190505b509050600360fc1b816000815181106106f5576106f5610bc4565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061072457610724610bc4565b60200101906001600160f81b031916908160001a9053506000610748846002610bf0565b610753906001610c07565b90505b60018111156107cb576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061078757610787610bc4565b1a60f81b82828151811061079d5761079d610bc4565b60200101906001600160f81b031916908160001a90535060049490941c936107c481610c30565b9050610756565b5083156102e65760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610282565b6000818152600183016020526040812054610861575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556101e6565b5060006101e6565b6000818152600183016020526040812054801561095257600061088d600183610c47565b85549091506000906108a190600190610c47565b90508181146109065760008660000182815481106108c1576108c1610bc4565b90600052602060002001549050808760000184815481106108e4576108e4610bc4565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061091757610917610c5a565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506101e6565b60009150506101e6565b60006020828403121561096e57600080fd5b81356001600160e01b0319811681146102e657600080fd5b60006020828403121561099857600080fd5b5035919050565b80356001600160a01b03811681146109b657600080fd5b919050565b600080604083850312156109ce57600080fd5b823591506109de6020840161099f565b90509250929050565b60008083601f8401126109f957600080fd5b50813567ffffffffffffffff811115610a1157600080fd5b602083019150836020828501011115610a2957600080fd5b9250929050565b60008060208385031215610a4357600080fd5b823567ffffffffffffffff811115610a5a57600080fd5b610a66858286016109e7565b90969095509350505050565b60008060408385031215610a8557600080fd5b50508035926020909101359150565b600080600060408486031215610aa957600080fd5b833567ffffffffffffffff811115610ac057600080fd5b610acc868287016109e7565b9094509250610adf90506020850161099f565b90509250925092565b8183823760009101908152919050565b60005b83811015610b13578181015183820152602001610afb565b50506000910152565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610b54816017850160208801610af8565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610b85816028840160208801610af8565b01602801949350505050565b6020815260008251806020840152610bb0816040850160208701610af8565b601f01601f19169190910160400192915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176101e6576101e6610bda565b808201808211156101e6576101e6610bda565b634e487b7160e01b600052604160045260246000fd5b600081610c3f57610c3f610bda565b506000190190565b818103818111156101e6576101e6610bda565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220d51abd4a6a436582a7de443c461d197a5ebb59c37ac4ef7f296917c8bd317bd364736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
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
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "Set";
        readonly type: "event";
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
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "get";
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
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "set";
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
    }];
    static createInterface(): ResolverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Resolver;
}
export {};
//# sourceMappingURL=Resolver__factory.d.ts.map