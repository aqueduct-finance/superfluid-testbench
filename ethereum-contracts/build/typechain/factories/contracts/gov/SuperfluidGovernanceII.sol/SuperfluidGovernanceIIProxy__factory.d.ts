import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SuperfluidGovernanceIIProxy, SuperfluidGovernanceIIProxyInterface } from "../../../../contracts/gov/SuperfluidGovernanceII.sol/SuperfluidGovernanceIIProxy";
type SuperfluidGovernanceIIProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperfluidGovernanceIIProxy__factory extends ContractFactory {
    constructor(...args: SuperfluidGovernanceIIProxyConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperfluidGovernanceIIProxy>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperfluidGovernanceIIProxy;
    connect(signer: Signer): SuperfluidGovernanceIIProxy__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6103de8061007e6000396000f3fe6080604052600436106100435760003560e01c80634a0687ef1461005a578063715018a61461007a5780638da5cb5b1461008f578063f2fde38b146100bb57610052565b36610052576100506100db565b005b6100506100db565b34801561006657600080fd5b50610050610075366004610378565b6100ed565b34801561008657600080fd5b506100506101f3565b34801561009b57600080fd5b50600054604080516001600160a01b039092168252519081900360200190f35b3480156100c757600080fd5b506100506100d6366004610378565b610205565b6100eb6100e661027b565b6102aa565b565b6001600160a01b0381166101485760405162461bcd60e51b815260206004820152601760248201527f5555505350726f78793a207a65726f206164647265737300000000000000000060448201526064015b60405180910390fd5b60006101727f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b0316146101c85760405162461bcd60e51b815260206004820152601e60248201527f5555505350726f78793a20616c726561647920696e697469616c697a65640000604482015260640161013f565b6101f0817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b50565b6101fb6102ce565b6100eb6000610328565b61020d6102ce565b6001600160a01b0381166102725760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161013f565b6101f081610328565b60006102a57f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b3660008037600080366000845af43d6000803e8080156102c9573d6000f35b3d6000fd5b6000546001600160a01b031633146100eb5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161013f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561038a57600080fd5b81356001600160a01b03811681146103a157600080fd5b939250505056fea2646970667358221220b9025a75524c77e086f69d4f26111053f4674d36367812b537fbefc18bc39f6164736f6c63430008130033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "initialAddress";
            readonly type: "address";
        }];
        readonly name: "initializeProxy";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): SuperfluidGovernanceIIProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperfluidGovernanceIIProxy;
}
export {};
//# sourceMappingURL=SuperfluidGovernanceIIProxy__factory.d.ts.map