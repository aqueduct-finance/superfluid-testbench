import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SuperAppMockReturningEmptyCtx, SuperAppMockReturningEmptyCtxInterface } from "../../../../contracts/mocks/SuperAppMocks.sol/SuperAppMockReturningEmptyCtx";
type SuperAppMockReturningEmptyCtxConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperAppMockReturningEmptyCtx__factory extends ContractFactory {
    constructor(...args: SuperAppMockReturningEmptyCtxConstructorParams);
    deploy(host: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperAppMockReturningEmptyCtx>;
    getDeployTransaction(host: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperAppMockReturningEmptyCtx;
    connect(signer: Signer): SuperAppMockReturningEmptyCtx__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161037638038061037683398101604081905261002f916100b3565b600080546001600160a01b0319166001600160a01b03831690811782556040805163bd1c448b60e01b815260016004820152602481019190915260448101929092529063bd1c448b90606401600060405180830381600087803b15801561009557600080fd5b505af11580156100a9573d6000803e3d6000fd5b50505050506100e3565b6000602082840312156100c557600080fd5b81516001600160a01b03811681146100dc57600080fd5b9392505050565b610284806100f26000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806330d9c9151461005157806353c11f991461006a5780635f9e7d7714610051578063d86ed3e51461006a575b600080fd5b61006861005f3660046100e4565b50505050505050565b005b610068610078366004610183565b505050505050505050565b6001600160a01b038116811461009857600080fd5b50565b60008083601f8401126100ad57600080fd5b50813567ffffffffffffffff8111156100c557600080fd5b6020830191508360208285010111156100dd57600080fd5b9250929050565b600080600080600080600060a0888a0312156100ff57600080fd5b873561010a81610083565b9650602088013561011a81610083565b955060408801359450606088013567ffffffffffffffff8082111561013e57600080fd5b61014a8b838c0161009b565b909650945060808a013591508082111561016357600080fd5b506101708a828b0161009b565b989b979a50959850939692959293505050565b600080600080600080600080600060c08a8c0312156101a157600080fd5b89356101ac81610083565b985060208a01356101bc81610083565b975060408a0135965060608a013567ffffffffffffffff808211156101e057600080fd5b6101ec8d838e0161009b565b909850965060808c013591508082111561020557600080fd5b6102118d838e0161009b565b909650945060a08c013591508082111561022a57600080fd5b506102378c828d0161009b565b91508093505080915050929598509295985092959856fea26469706673582212206e201321c1412b2fed3529512be5f5d6e12f02ee57abb3691e5dabab77c358ee64736f6c63430008130033";
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
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
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
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
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
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
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
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): SuperAppMockReturningEmptyCtxInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperAppMockReturningEmptyCtx;
}
export {};
//# sourceMappingURL=SuperAppMockReturningEmptyCtx__factory.d.ts.map