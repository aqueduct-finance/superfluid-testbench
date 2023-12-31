import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { NonClosableOutflowTestApp, NonClosableOutflowTestAppInterface } from "../../../../contracts/mocks/CFAAppMocks.sol/NonClosableOutflowTestApp";
type NonClosableOutflowTestAppConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NonClosableOutflowTestApp__factory extends ContractFactory {
    constructor(...args: NonClosableOutflowTestAppConstructorParams);
    deploy(cfa: PromiseOrValue<string>, superfluid: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<NonClosableOutflowTestApp>;
    getDeployTransaction(cfa: PromiseOrValue<string>, superfluid: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): NonClosableOutflowTestApp;
    connect(signer: Signer): NonClosableOutflowTestApp__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50604051610c2b380380610c2b83398101604081905261002f91610117565b6001600160a01b03821661004557610045610151565b6001600160a01b03811661005b5761005b610151565b600080546001600160a01b038085166001600160a01b03199283161790925560018054928416929091168217905560405163bd1c448b60e01b8152641f00000001919063bd1c448b906100c590849060040190815260406020820181905260009082015260600190565b600060405180830381600087803b1580156100df57600080fd5b505af11580156100f3573d6000803e3d6000fd5b50505050505050610167565b6001600160a01b038116811461011457600080fd5b50565b6000806040838503121561012a57600080fd5b8251610135816100ff565b6020840151909250610146816100ff565b809150509250929050565b634e487b7160e01b600052600160045260246000fd5b610ab5806101766000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80635f9e7d771161005b5780635f9e7d77146100d1578063884d1f40146100e4578063b9e1323d146100f7578063d86ed3e51461010c57600080fd5b8063230dbd291461008257806330d9c915146100ab57806353c11f99146100be575b600080fd5b6100956100903660046105ea565b61011f565b6040516100a29190610705565b60405180910390f35b6100956100b936600461071f565b610186565b6100956100cc3660046105ea565b6101e9565b6100956100df36600461071f565b61035c565b6100956100f236600461071f565b6103c3565b61010a6101053660046107be565b610426565b005b61009561011a3660046105ea565b610527565b60405162461bcd60e51b815260206004820152602e60248201527f556e737570706f727465642063616c6c6261636b202d2041667465722041677260448201526d19595b595b9d08155c19185d195960921b60648201526060906084015b60405180910390fd5b60405162461bcd60e51b815260206004820152602f60248201527f556e737570706f727465642063616c6c6261636b202d204265666f726520416760448201526e1c99595b595b9d0810dc99585d1959608a1b606482015260609060840161017d565b60606000806101fa888a018a610810565b90925090506001600160a01b038216301461021757610217610849565b6002546001600160a01b0382811691161461023457610234610849565b600080546002546001600160a01b03909116906362fc305e908f908590600160a01b9004600b0b856040519080825280601f01601f191660200182016040528015610286576020820181803683370190505b5060405160240161029a9493929190610875565b60408051601f198184030181529181526020820180516001600160e01b031660e09490941b939093179092526001546000549251634329d29360e01b81529194506001600160a01b039081169350634329d293926103039291169085908b908b906004016108b5565b6000604051808303816000875af1158015610322573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261034a91908101906109a8565b509d9c50505050505050505050505050565b60405162461bcd60e51b815260206004820152603360248201527f556e737570706f727465642063616c6c6261636b202d20204265666f7265204160448201527219dc99595b595b9d0815195c9b5a5b985d1959606a1b606482015260609060840161017d565b60405162461bcd60e51b815260206004820152602f60248201527f556e737570706f727465642063616c6c6261636b202d204265666f726520416760448201526e1c99595b595b9d081d5c19185d1959608a1b606482015260609060840161017d565b6001600160a01b03828116600160a01b6bffffffffffffffffffffffff841602176002556001546000805460408051928352602083019052918316926339255d5b92169081906362fc305e906104859089908990899060448101610875565b60408051601f19818403018152918152602080830180516001600160e01b031660e095861b179052815160008152908101918290529286901b6001600160e01b03191690526104da9392509060248101610a0c565b6000604051808303816000875af11580156104f9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105219190810190610a42565b50505050565b60405162461bcd60e51b815260206004820152602e60248201527f556e737570706f727465642063616c6c6261636b202d2041667465722041677260448201526d19595b595b9d0810dc99585d195960921b606482015260609060840161017d565b6001600160a01b038116811461059e57600080fd5b50565b60008083601f8401126105b357600080fd5b50813567ffffffffffffffff8111156105cb57600080fd5b6020830191508360208285010111156105e357600080fd5b9250929050565b600080600080600080600080600060c08a8c03121561060857600080fd5b893561061381610589565b985060208a013561062381610589565b975060408a0135965060608a013567ffffffffffffffff8082111561064757600080fd5b6106538d838e016105a1565b909850965060808c013591508082111561066c57600080fd5b6106788d838e016105a1565b909650945060a08c013591508082111561069157600080fd5b5061069e8c828d016105a1565b915080935050809150509295985092959850929598565b60005b838110156106d05781810151838201526020016106b8565b50506000910152565b600081518084526106f18160208601602086016106b5565b601f01601f19169290920160200192915050565b60208152600061071860208301846106d9565b9392505050565b600080600080600080600060a0888a03121561073a57600080fd5b873561074581610589565b9650602088013561075581610589565b955060408801359450606088013567ffffffffffffffff8082111561077957600080fd5b6107858b838c016105a1565b909650945060808a013591508082111561079e57600080fd5b506107ab8a828b016105a1565b989b979a50959850939692959293505050565b6000806000606084860312156107d357600080fd5b83356107de81610589565b925060208401356107ee81610589565b91506040840135600b81900b811461080557600080fd5b809150509250925092565b6000806040838503121561082357600080fd5b823561082e81610589565b9150602083013561083e81610589565b809150509250929050565b634e487b7160e01b600052600160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03858116825284166020820152600b83900b60408201526080606082018190526000906108ab908301846106d9565b9695505050505050565b6001600160a01b03851681526080602082018190526000906108d9908301866106d9565b8281038060408501526002825261060f60f31b602083015260408101606085015250836040820152838560608301376000606085830101526060601f19601f86011682010191505095945050505050565b600082601f83011261093b57600080fd5b815167ffffffffffffffff808211156109565761095661085f565b604051601f8301601f19908116603f0116810190828211818310171561097e5761097e61085f565b8160405283815286602085880101111561099757600080fd5b6108ab8460208301602089016106b5565b600080604083850312156109bb57600080fd5b825167ffffffffffffffff808211156109d357600080fd5b6109df8683870161092a565b935060208501519150808211156109f557600080fd5b50610a028582860161092a565b9150509250929050565b6001600160a01b0384168152606060208201819052600090610a30908301856106d9565b82810360408401526108ab81856106d9565b600060208284031215610a5457600080fd5b815167ffffffffffffffff811115610a6b57600080fd5b610a778482850161092a565b94935050505056fea264697066735822122044a1e35293eb23773161e95bf3574496bf0c316fc6c2b909dc2dd971a94db28664736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IConstantFlowAgreementV1";
            readonly name: "cfa";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluid";
            readonly name: "superfluid";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
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
        readonly name: "afterAgreementCreated";
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
            readonly name: "superToken";
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
        readonly name: "setupOutflow";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): NonClosableOutflowTestAppInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NonClosableOutflowTestApp;
}
export {};
//# sourceMappingURL=NonClosableOutflowTestApp__factory.d.ts.map