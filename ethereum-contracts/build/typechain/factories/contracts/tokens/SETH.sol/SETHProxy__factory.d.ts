import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SETHProxy, SETHProxyInterface } from "../../../../contracts/tokens/SETH.sol/SETHProxy";
type SETHProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SETHProxy__factory extends ContractFactory {
    constructor(...args: SETHProxyConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SETHProxy>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SETHProxy;
    connect(signer: Signer): SETHProxy__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506105a4806100206000396000f3fe6080604052600436106100435760003560e01c8063160e8be3146100ef5780634a0687ef1461010f5780637687d19b1461012f578063cf81464b14610142576100e5565b366100e5576040805160008152602081019182905263c68d428360e01b909152309063c68d42839061007c9033903490602481016104c0565b600060405180830381600087803b15801561009657600080fd5b505af11580156100aa573d6000803e3d6000fd5b50506040513481523392507f25ca84076773b0455db53621c459ddc84fe40840e4932a62706a032566f399df915060200160405180910390a2005b6100ed61014a565b005b3480156100fb57600080fd5b506100ed61010a366004610525565b61015c565b34801561011b57600080fd5b506100ed61012a36600461053e565b610229565b6100ed61013d36600461053e565b61032f565b6100ed6103d0565b61015a61015561046d565b61049c565b565b60408051600081526020810191829052639d87674160e01b9091523090639d876741906101909033908590602481016104c0565b600060405180830381600087803b1580156101aa57600080fd5b505af11580156101be573d6000803e3d6000fd5b505060405133925083156108fc02915083906000818181858888f193505050501580156101ef573d6000803e3d6000fd5b5060405181815233907f3bc27981aebbb57f9247dc00fde9d6cd91e4b230083fec3238fedbcba1f9ab3d906020015b60405180910390a250565b6001600160a01b0381166102845760405162461bcd60e51b815260206004820152601760248201527f5555505350726f78793a207a65726f206164647265737300000000000000000060448201526064015b60405180910390fd5b60006102ae7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b0316146103045760405162461bcd60e51b815260206004820152601e60248201527f5555505350726f78793a20616c726561647920696e697469616c697a65640000604482015260640161027b565b61032c817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b50565b6040805160008152602081019182905263c68d428360e01b909152309063c68d4283906103639084903490602481016104c0565b600060405180830381600087803b15801561037d57600080fd5b505af1158015610391573d6000803e3d6000fd5b50505050806001600160a01b03167f25ca84076773b0455db53621c459ddc84fe40840e4932a62706a032566f399df3460405161021e91815260200190565b6040805160008152602081019182905263c68d428360e01b909152309063c68d4283906104049033903490602481016104c0565b600060405180830381600087803b15801561041e57600080fd5b505af1158015610432573d6000803e3d6000fd5b50506040513481523392507f25ca84076773b0455db53621c459ddc84fe40840e4932a62706a032566f399df915060200160405180910390a2565b60006104977f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b3660008037600080366000845af43d6000803e8080156104bb573d6000f35b3d6000fd5b60018060a01b038416815260006020848184015260606040840152835180606085015260005b81811015610502578581018301518582016080015282016104e6565b506000608082860101526080601f19601f83011685010192505050949350505050565b60006020828403121561053757600080fd5b5035919050565b60006020828403121561055057600080fd5b81356001600160a01b038116811461056757600080fd5b939250505056fea2646970667358221220490b06cbbce9568f10ceabbfd3d4ebe6e337b4c4446c976b8f84cd882fb7a8f764736f6c63430008130033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "TokenDowngraded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "TokenUpgraded";
        readonly type: "event";
    }, {
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "downgradeToETH";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
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
        readonly name: "upgradeByETH";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "upgradeByETHTo";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): SETHProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SETHProxy;
}
export {};
//# sourceMappingURL=SETHProxy__factory.d.ts.map