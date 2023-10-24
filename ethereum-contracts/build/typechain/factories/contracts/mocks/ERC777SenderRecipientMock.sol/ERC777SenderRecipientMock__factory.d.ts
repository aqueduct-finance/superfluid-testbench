import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { ERC777SenderRecipientMock, ERC777SenderRecipientMockInterface } from "../../../../contracts/mocks/ERC777SenderRecipientMock.sol/ERC777SenderRecipientMock";
type ERC777SenderRecipientMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC777SenderRecipientMock__factory extends ContractFactory {
    constructor(...args: ERC777SenderRecipientMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ERC777SenderRecipientMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ERC777SenderRecipientMock;
    connect(signer: Signer): ERC777SenderRecipientMock__factory;
    static readonly bytecode = "0x60806040526001805462010000600160b01b031916751820a4b7618bde71dce8cdc73aab6c95905fad24000017905534801561003a57600080fd5b50610f918061004a6000396000f3fe608060405234801561001057600080fd5b50600436106100ce5760003560e01c8063780329301161008c578063c97e18fc11610066578063c97e18fc146101a0578063d2de6474146101c8578063e0eb2180146101db578063e1ecbd30146101ee57600080fd5b80637803293014610167578063833a2fe01461017a578063a8badaa51461018d57600080fd5b806223de29146100d3578063249cb3fa146100e85780633836ef891461010d57806344d17187146101205780634e4ae5a51461013357806375ab978214610154575b600080fd5b6100e66100e1366004610b40565b610201565b005b6100fb6100f6366004610bf1565b610392565b60405190815260200160405180910390f35b6100e661011b366004610cc4565b6103ea565b6100e661012e366004610d30565b610452565b6100e6610141366004610d97565b6001805460ff1916911515919091179055565b6100e6610162366004610b40565b6104b7565b6100e6610175366004610db4565b610626565b6100e6610188366004610db4565b6107b1565b6100e661019b366004610db4565b610928565b6100e66101ae366004610d97565b600180549115156101000261ff0019909216919091179055565b6100e66101d6366004610db4565b6109be565b6100e66101e9366004610db4565b610a07565b6100e66101fc366004610db4565b610a4c565b600154610100900460ff16156102555760405162461bcd60e51b81526020600482015260146024820152735f73686f756c645265766572745265636569766560601b60448201526064015b60405180910390fd5b6000336040516370a0823160e01b81526001600160a01b038a811660048301529192506000918316906370a0823190602401602060405180830381865afa1580156102a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c89190610dd1565b6040516370a0823160e01b81526001600160a01b038a811660048301529192506000918416906370a0823190602401602060405180830381865afa158015610314573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103389190610dd1565b90507f47e915878c47f3ec4d7ff646a2becb229f64fd2abe4d2b5e2bb4275b0cf50d4e8b8b8b8b8b8b8b8b8b8b8b60405161037d9b9a99989796959493929190610e13565b60405180910390a15050505050505050505050565b6000828152602081815260408083206001600160a01b038516845290915281205460ff166103c15760006103e3565b7fa2ef4600d742022d532d4747cb3547474667d6f13804902513b2ec01c848f4b45b9392505050565b604051634decdde360e11b81526001600160a01b03851690639bd9bbc69061041a90869086908690600401610ed0565b600060405180830381600087803b15801561043457600080fd5b505af1158015610448573d6000803e3d6000fd5b5050505050505050565b60405163fe9d930360e01b81526001600160a01b0384169063fe9d9303906104809085908590600401610f00565b600060405180830381600087803b15801561049a57600080fd5b505af11580156104ae573d6000803e3d6000fd5b50505050505050565b60015460ff16156104fe5760405162461bcd60e51b815260206004820152601160248201527017dcda1bdd5b1914995d995c9d14d95b99607a1b604482015260640161024c565b6000336040516370a0823160e01b81526001600160a01b038a811660048301529192506000918316906370a0823190602401602060405180830381865afa15801561054d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105719190610dd1565b6040516370a0823160e01b81526001600160a01b038a811660048301529192506000918416906370a0823190602401602060405180830381865afa1580156105bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e19190610dd1565b90507faa3e88aca472e90221daf7d3d601abafb62b120319089d7a2c2f63588da855298b8b8b8b8b8b8b8b8b8b8b60405161037d9b9a99989796959493929190610e13565b6000816001600160a01b031663ee719bc86040518163ffffffff1660e01b8152600401602060405180830381865afa158015610666573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068a9190610f21565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038316906370a0823190602401602060405180830381865afa1580156106d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f89190610dd1565b60405163095ea7b360e01b81526001600160a01b038581166004830152602482018390529192509083169063095ea7b3906044016020604051808303816000875af115801561074b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076f9190610f3e565b506040516316e7427360e21b81523060048201526024810182905260606044820152600060648201526001600160a01b03841690635b9d09cc90608401610480565b6000816001600160a01b031663ee719bc86040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108159190610f21565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038316906370a0823190602401602060405180830381865afa15801561085f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108839190610dd1565b60405163095ea7b360e01b81526001600160a01b038581166004830152602482018390529192509083169063095ea7b3906044016020604051808303816000875af11580156108d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fa9190610f3e565b506040516345977d0360e01b8152600481018290526001600160a01b038416906345977d0390602401610480565b6001546040516329965a1d60e01b81523060048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b60248201526001600160a01b03838116604483015262010000909204909116906329965a1d906064015b600060405180830381600087803b1580156109a357600080fd5b505af11580156109b7573d6000803e3d6000fd5b5050505050565b6109e87f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe89582610ab1565b306001600160a01b038216819003610a0357610a0381610a4c565b5050565b610a317fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b82610ab1565b306001600160a01b038216819003610a0357610a0381610928565b6001546040516329965a1d60e01b81523060048201527f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe89560248201526001600160a01b03838116604483015262010000909204909116906329965a1d90606401610989565b6000918252602082815260408084206001600160a01b0390931684529190529020805460ff19166001179055565b6001600160a01b0381168114610af457600080fd5b50565b60008083601f840112610b0957600080fd5b50813567ffffffffffffffff811115610b2157600080fd5b602083019150836020828501011115610b3957600080fd5b9250929050565b60008060008060008060008060c0898b031215610b5c57600080fd5b8835610b6781610adf565b97506020890135610b7781610adf565b96506040890135610b8781610adf565b955060608901359450608089013567ffffffffffffffff80821115610bab57600080fd5b610bb78c838d01610af7565b909650945060a08b0135915080821115610bd057600080fd5b50610bdd8b828c01610af7565b999c989b5096995094979396929594505050565b60008060408385031215610c0457600080fd5b823591506020830135610c1681610adf565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610c4857600080fd5b813567ffffffffffffffff80821115610c6357610c63610c21565b604051601f8301601f19908116603f01168101908282118183101715610c8b57610c8b610c21565b81604052838152866020858801011115610ca457600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060808587031215610cda57600080fd5b8435610ce581610adf565b93506020850135610cf581610adf565b925060408501359150606085013567ffffffffffffffff811115610d1857600080fd5b610d2487828801610c37565b91505092959194509250565b600080600060608486031215610d4557600080fd5b8335610d5081610adf565b925060208401359150604084013567ffffffffffffffff811115610d7357600080fd5b610d7f86828701610c37565b9150509250925092565b8015158114610af457600080fd5b600060208284031215610da957600080fd5b81356103e381610d89565b600060208284031215610dc657600080fd5b81356103e381610adf565b600060208284031215610de357600080fd5b5051919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b038c811682528b811660208301528a81166040830152606082018a905261012060808301819052600091610e518483018b8d610dea565b915083820360a0850152610e6682898b610dea565b961660c0840152505060e08101929092526101009091015298975050505050505050565b6000815180845260005b81811015610eb057602081850181015186830182015201610e94565b506000602082860101526020601f19601f83011685010191505092915050565b60018060a01b0384168152826020820152606060408201526000610ef76060830184610e8a565b95945050505050565b828152604060208201526000610f196040830184610e8a565b949350505050565b600060208284031215610f3357600080fd5b81516103e381610adf565b600060208284031215610f5057600080fd5b81516103e381610d8956fea2646970667358221220cdb89162b85a63c700e3d1537d4c68b0d80b9d3ccc89bf350a9677b0aeff79b464736f6c63430008130033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "operatorData";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromBalance";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toBalance";
            readonly type: "uint256";
        }];
        readonly name: "TokensReceivedCalled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "operatorData";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromBalance";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toBalance";
            readonly type: "uint256";
        }];
        readonly name: "TokensToSendCalled";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC777";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "interfaceHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "canImplementInterfaceForAddress";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "recipientFor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }];
        readonly name: "registerRecipient";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "registerSender";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC777";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "send";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "senderFor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "shouldRevert";
            readonly type: "bool";
        }];
        readonly name: "setShouldRevertReceive";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "shouldRevert";
            readonly type: "bool";
        }];
        readonly name: "setShouldRevertSend";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "operatorData";
            readonly type: "bytes";
        }];
        readonly name: "tokensReceived";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "operatorData";
            readonly type: "bytes";
        }];
        readonly name: "tokensToSend";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "upgradeAll";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "upgradeAllToSelf";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ERC777SenderRecipientMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC777SenderRecipientMock;
}
export {};
//# sourceMappingURL=ERC777SenderRecipientMock__factory.d.ts.map