import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SelfDeletingFlowTestApp, SelfDeletingFlowTestAppInterface } from "../../../../contracts/mocks/CFAAppMocks.sol/SelfDeletingFlowTestApp";
type SelfDeletingFlowTestAppConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SelfDeletingFlowTestApp__factory extends ContractFactory {
    constructor(...args: SelfDeletingFlowTestAppConstructorParams);
    deploy(cfa: PromiseOrValue<string>, superfluid: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SelfDeletingFlowTestApp>;
    getDeployTransaction(cfa: PromiseOrValue<string>, superfluid: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SelfDeletingFlowTestApp;
    connect(signer: Signer): SelfDeletingFlowTestApp__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50604051610c08380380610c0883398101604081905261002f91610117565b6001600160a01b03821661004557610045610151565b6001600160a01b03811661005b5761005b610151565b600080546001600160a01b038085166001600160a01b03199283161790925560018054928416929091168217905560405163bd1c448b60e01b8152643d00000001919063bd1c448b906100c590849060040190815260406020820181905260009082015260600190565b600060405180830381600087803b1580156100df57600080fd5b505af11580156100f3573d6000803e3d6000fd5b50505050505050610167565b6001600160a01b038116811461011457600080fd5b50565b6000806040838503121561012a57600080fd5b8251610135816100ff565b6020840151909250610146816100ff565b809150509250929050565b634e487b7160e01b600052600160045260246000fd5b610a92806101766000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063230dbd291461006757806330d9c9151461009057806353c11f99146100a35780635f9e7d77146100b6578063884d1f40146100c9578063d86ed3e5146100dc575b600080fd5b61007a610075366004610564565b6100ef565b604051610087919061067f565b60405180910390f35b61007a61009e366004610699565b610156565b61007a6100b1366004610564565b6101b9565b61007a6100c4366004610699565b61021e565b61007a6100d7366004610699565b610285565b61007a6100ea366004610564565b6102e8565b60405162461bcd60e51b815260206004820152602e60248201527f556e737570706f727465642063616c6c6261636b202d2041667465722041677260448201526d19595b595b9d08155c19185d195960921b60648201526060906084015b60405180910390fd5b60405162461bcd60e51b815260206004820152602f60248201527f556e737570706f727465642063616c6c6261636b202d204265666f726520416760448201526e1c99595b595b9d0810dc99585d1959608a1b606482015260609060840161014d565b60405162461bcd60e51b815260206004820152603160248201527f556e737570706f727465642063616c6c6261636b202d2041667465722041677260448201527019595b595b9d0815195c9b5a5b985d1959607a1b606482015260609060840161014d565b60405162461bcd60e51b815260206004820152603360248201527f556e737570706f727465642063616c6c6261636b202d20204265666f7265204160448201527219dc99595b595b9d0815195c9b5a5b985d1959606a1b606482015260609060840161014d565b60405162461bcd60e51b815260206004820152602f60248201527f556e737570706f727465642063616c6c6261636b202d204265666f726520416760448201526e1c99595b595b9d081d5c19185d1959608a1b606482015260609060840161014d565b606082828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250600154604051631fb6491d60e11b815295965090946001600160a01b039091169350633f6c923a9250610356915087908790600401610738565b600060405180830381865afa158015610373573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261039b9190810190610868565b9050600160009054906101000a90046001600160a01b03166001600160a01b0316634329d29360008054906101000a90046001600160a01b031660008054906101000a90046001600160a01b03166001600160a01b031663b4b333c68f866060015130600067ffffffffffffffff81111561041857610418610767565b6040519080825280601f01601f191660200182016040528015610442576020820181803683370190505b50604051602401610456949392919061096f565b60408051601f19818403018152918152602080830180516001600160e01b031660e095861b179052815160008152908101918290529286901b6001600160e01b03191690526104ac9392509087602482016109a3565b6000604051808303816000875af11580156104cb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104f391908101906109f8565b509b9a5050505050505050505050565b6001600160a01b038116811461051857600080fd5b50565b60008083601f84011261052d57600080fd5b50813567ffffffffffffffff81111561054557600080fd5b60208301915083602082850101111561055d57600080fd5b9250929050565b600080600080600080600080600060c08a8c03121561058257600080fd5b893561058d81610503565b985060208a013561059d81610503565b975060408a0135965060608a013567ffffffffffffffff808211156105c157600080fd5b6105cd8d838e0161051b565b909850965060808c01359150808211156105e657600080fd5b6105f28d838e0161051b565b909650945060a08c013591508082111561060b57600080fd5b506106188c828d0161051b565b915080935050809150509295985092959850929598565b60005b8381101561064a578181015183820152602001610632565b50506000910152565b6000815180845261066b81602086016020860161062f565b601f01601f19169290920160200192915050565b6020815260006106926020830184610653565b9392505050565b600080600080600080600060a0888a0312156106b457600080fd5b87356106bf81610503565b965060208801356106cf81610503565b955060408801359450606088013567ffffffffffffffff808211156106f357600080fd5b6106ff8b838c0161051b565b909650945060808a013591508082111561071857600080fd5b506107258a828b0161051b565b989b979a50959850939692959293505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b634e487b7160e01b600052604160045260246000fd5b604051610160810167ffffffffffffffff811182821017156107a1576107a1610767565b60405290565b805160ff811681146107b857600080fd5b919050565b80516107b881610503565b80516001600160e01b0319811681146107b857600080fd5b600082601f8301126107f157600080fd5b815167ffffffffffffffff8082111561080c5761080c610767565b604051601f8301601f19908116603f0116810190828211818310171561083457610834610767565b8160405283815286602085880101111561084d57600080fd5b61085e84602083016020890161062f565b9695505050505050565b60006020828403121561087a57600080fd5b815167ffffffffffffffff8082111561089257600080fd5b9083019061016082860312156108a757600080fd5b6108af61077d565b6108b8836107a7565b81526108c6602084016107a7565b6020820152604083015160408201526108e1606084016107bd565b60608201526108f2608084016107c8565b608082015260a08301518281111561090957600080fd5b610915878286016107e0565b60a08301525060c083015160c082015260e083015160e082015261010091508183015182820152610120915061094c8284016107bd565b8282015261014091506109608284016107bd565b91810191909152949350505050565b6001600160a01b03858116825284811660208301528316604082015260806060820181905260009061085e90830184610653565b6001600160a01b03851681526080602082018190526000906109c790830186610653565b82810360408401526109d98186610653565b905082810360608401526109ed8185610653565b979650505050505050565b60008060408385031215610a0b57600080fd5b825167ffffffffffffffff80821115610a2357600080fd5b610a2f868387016107e0565b93506020850151915080821115610a4557600080fd5b50610a52858286016107e0565b915050925092905056fea264697066735822122026ee175e55fb6a6f35692fac7e9efa52265bc4dcd59bcf0df4f20048bcce742064736f6c63430008130033";
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
        readonly name: "afterAgreementTerminated";
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
    static createInterface(): SelfDeletingFlowTestAppInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SelfDeletingFlowTestApp;
}
export {};
//# sourceMappingURL=SelfDeletingFlowTestApp__factory.d.ts.map