import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { ExclusiveInflowTestApp, ExclusiveInflowTestAppInterface } from "../../../../contracts/mocks/CFAAppMocks.sol/ExclusiveInflowTestApp";
type ExclusiveInflowTestAppConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ExclusiveInflowTestApp__factory extends ContractFactory {
    constructor(...args: ExclusiveInflowTestAppConstructorParams);
    deploy(cfa: PromiseOrValue<string>, superfluid: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ExclusiveInflowTestApp>;
    getDeployTransaction(cfa: PromiseOrValue<string>, superfluid: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ExclusiveInflowTestApp;
    connect(signer: Signer): ExclusiveInflowTestApp__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50604051610c6e380380610c6e83398101604081905261002f91610117565b6001600160a01b03821661004557610045610151565b6001600160a01b03811661005b5761005b610151565b600080546001600160a01b038085166001600160a01b03199283161790925560018054928416929091168217905560405163bd1c448b60e01b8152641d00000001919063bd1c448b906100c590849060040190815260406020820181905260009082015260600190565b600060405180830381600087803b1580156100df57600080fd5b505af11580156100f3573d6000803e3d6000fd5b50505050505050610167565b6001600160a01b038116811461011457600080fd5b50565b6000806040838503121561012a57600080fd5b8251610135816100ff565b6020840151909250610146816100ff565b809150509250929050565b634e487b7160e01b600052600160045260246000fd5b610af8806101766000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063230dbd291461006757806330d9c9151461009057806353c11f99146100a35780635f9e7d77146100b6578063884d1f40146100c9578063d86ed3e5146100dc575b600080fd5b61007a61007536600461057b565b6100ef565b6040516100879190610696565b60405180910390f35b61007a61009e3660046106b0565b610156565b61007a6100b136600461057b565b6101b9565b61007a6100c43660046106b0565b61023e565b61007a6100d73660046106b0565b6102a5565b61007a6100ea36600461057b565b610308565b60405162461bcd60e51b815260206004820152602e60248201527f556e737570706f727465642063616c6c6261636b202d2041667465722041677260448201526d19595b595b9d08155c19185d195960921b60648201526060906084015b60405180910390fd5b60405162461bcd60e51b815260206004820152602f60248201527f556e737570706f727465642063616c6c6261636b202d204265666f726520416760448201526e1c99595b595b9d0810dc99585d1959608a1b606482015260609060840161014d565b606060006101c98789018961074f565b506002549091506001600160a01b038083169116146101ea576101ea610788565b600280546001600160a01b0319169055604080516020601f8601819004810282018101909252848152908590859081908401838280828437600092019190915250929e9d5050505050505050505050505050565b60405162461bcd60e51b815260206004820152603360248201527f556e737570706f727465642063616c6c6261636b202d20204265666f7265204160448201527219dc99595b595b9d0815195c9b5a5b985d1959606a1b606482015260609060840161014d565b60405162461bcd60e51b815260206004820152602f60248201527f556e737570706f727465642063616c6c6261636b202d204265666f726520416760448201526e1c99595b595b9d081d5c19185d1959608a1b606482015260609060840161014d565b606082828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250600154604051631fb6491d60e11b815295965090946001600160a01b039091169350633f6c923a925061037691508790879060040161079e565b600060405180830381865afa158015610393573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103bb91908101906108ce565b6002549091506001600160a01b0316156104ea57600080546002546001600160a01b039182169163b4b333c6918f911630856040519080825280601f01601f191660200182016040528015610417576020820181803683370190505b5060405160240161042b94939291906109d5565b60408051601f19818403018152918152602080830180516001600160e01b031660e09590951b9490941790935260015460008054835191825294810192839052634329d29360e01b9092529194506001600160a01b039182169350634329d2939261049e92169085908860248201610a09565b6000604051808303816000875af11580156104bd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104e59190810190610a5e565b509250505b60600151600280546001600160a01b0319166001600160a01b039092169190911790559998505050505050505050565b6001600160a01b038116811461052f57600080fd5b50565b60008083601f84011261054457600080fd5b50813567ffffffffffffffff81111561055c57600080fd5b60208301915083602082850101111561057457600080fd5b9250929050565b600080600080600080600080600060c08a8c03121561059957600080fd5b89356105a48161051a565b985060208a01356105b48161051a565b975060408a0135965060608a013567ffffffffffffffff808211156105d857600080fd5b6105e48d838e01610532565b909850965060808c01359150808211156105fd57600080fd5b6106098d838e01610532565b909650945060a08c013591508082111561062257600080fd5b5061062f8c828d01610532565b915080935050809150509295985092959850929598565b60005b83811015610661578181015183820152602001610649565b50506000910152565b60008151808452610682816020860160208601610646565b601f01601f19169290920160200192915050565b6020815260006106a9602083018461066a565b9392505050565b600080600080600080600060a0888a0312156106cb57600080fd5b87356106d68161051a565b965060208801356106e68161051a565b955060408801359450606088013567ffffffffffffffff8082111561070a57600080fd5b6107168b838c01610532565b909650945060808a013591508082111561072f57600080fd5b5061073c8a828b01610532565b989b979a50959850939692959293505050565b6000806040838503121561076257600080fd5b823561076d8161051a565b9150602083013561077d8161051a565b809150509250929050565b634e487b7160e01b600052600160045260246000fd5b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b634e487b7160e01b600052604160045260246000fd5b604051610160810167ffffffffffffffff81118282101715610807576108076107cd565b60405290565b805160ff8116811461081e57600080fd5b919050565b805161081e8161051a565b80516001600160e01b03198116811461081e57600080fd5b600082601f83011261085757600080fd5b815167ffffffffffffffff80821115610872576108726107cd565b604051601f8301601f19908116603f0116810190828211818310171561089a5761089a6107cd565b816040528381528660208588010111156108b357600080fd5b6108c4846020830160208901610646565b9695505050505050565b6000602082840312156108e057600080fd5b815167ffffffffffffffff808211156108f857600080fd5b90830190610160828603121561090d57600080fd5b6109156107e3565b61091e8361080d565b815261092c6020840161080d565b60208201526040830151604082015261094760608401610823565b60608201526109586080840161082e565b608082015260a08301518281111561096f57600080fd5b61097b87828601610846565b60a08301525060c083015160c082015260e083015160e08201526101009150818301518282015261012091506109b2828401610823565b8282015261014091506109c6828401610823565b91810191909152949350505050565b6001600160a01b0385811682528481166020830152831660408201526080606082018190526000906108c49083018461066a565b6001600160a01b0385168152608060208201819052600090610a2d9083018661066a565b8281036040840152610a3f818661066a565b90508281036060840152610a53818561066a565b979650505050505050565b60008060408385031215610a7157600080fd5b825167ffffffffffffffff80821115610a8957600080fd5b610a9586838701610846565b93506020850151915080821115610aab57600080fd5b50610ab885828601610846565b915050925092905056fea26469706673582212202ca50c02f78f3f3d992217ba5b1d324931747c656ef67fd1201d5ac13ae9ae3364736f6c63430008130033";
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
            readonly name: "";
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
    }];
    static createInterface(): ExclusiveInflowTestAppInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ExclusiveInflowTestApp;
}
export {};
//# sourceMappingURL=ExclusiveInflowTestApp__factory.d.ts.map