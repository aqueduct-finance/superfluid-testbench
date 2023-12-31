import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SuperAppMockReturningInvalidCtx, SuperAppMockReturningInvalidCtxInterface } from "../../../../contracts/mocks/SuperAppMocks.sol/SuperAppMockReturningInvalidCtx";
type SuperAppMockReturningInvalidCtxConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperAppMockReturningInvalidCtx__factory extends ContractFactory {
    constructor(...args: SuperAppMockReturningInvalidCtxConstructorParams);
    deploy(host: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperAppMockReturningInvalidCtx>;
    getDeployTransaction(host: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperAppMockReturningInvalidCtx;
    connect(signer: Signer): SuperAppMockReturningInvalidCtx__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516102be3803806102be83398101604081905261002f916100b3565b600080546001600160a01b0319166001600160a01b03831690811782556040805163bd1c448b60e01b815260016004820152602481019190915260448101929092529063bd1c448b90606401600060405180830381600087803b15801561009557600080fd5b505af11580156100a9573d6000803e3d6000fd5b50505050506100e3565b6000602082840312156100c557600080fd5b81516001600160a01b03811681146100dc57600080fd5b9392505050565b6101cc806100f26000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806353c11f991461003b578063d86ed3e51461003b575b600080fd5b6100586100493660046100cb565b602a9998505050505050505050565b60405190815260200160405180910390f35b6001600160a01b038116811461007f57600080fd5b50565b60008083601f84011261009457600080fd5b50813567ffffffffffffffff8111156100ac57600080fd5b6020830191508360208285010111156100c457600080fd5b9250929050565b600080600080600080600080600060c08a8c0312156100e957600080fd5b89356100f48161006a565b985060208a01356101048161006a565b975060408a0135965060608a013567ffffffffffffffff8082111561012857600080fd5b6101348d838e01610082565b909850965060808c013591508082111561014d57600080fd5b6101598d838e01610082565b909650945060a08c013591508082111561017257600080fd5b5061017f8c828d01610082565b91508093505080915050929598509295985092959856fea26469706673582212202d0ee81c3be1039f95a61d9068782057c9ce6505e87d12ea49790cd4daac4b3264736f6c63430008130033";
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
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
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
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): SuperAppMockReturningInvalidCtxInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperAppMockReturningInvalidCtx;
}
export {};
//# sourceMappingURL=SuperAppMockReturningInvalidCtx__factory.d.ts.map