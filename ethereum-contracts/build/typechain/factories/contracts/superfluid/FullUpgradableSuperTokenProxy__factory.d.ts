import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { FullUpgradableSuperTokenProxy, FullUpgradableSuperTokenProxyInterface } from "../../../contracts/superfluid/FullUpgradableSuperTokenProxy";
type FullUpgradableSuperTokenProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FullUpgradableSuperTokenProxy__factory extends ContractFactory {
    constructor(...args: FullUpgradableSuperTokenProxyConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<FullUpgradableSuperTokenProxy>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): FullUpgradableSuperTokenProxy;
    connect(signer: Signer): FullUpgradableSuperTokenProxy__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610213806100206000396000f3fe6080604052600436106100225760003560e01c80638129fc1c1461003957610031565b366100315761002f61004e565b005b61002f61004e565b34801561004557600080fd5b5061002f610060565b61005e6100596100d0565b610173565b565b7fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a0546001600160a01b038116156100aa576040516305c5d81960e01b815260040160405180910390fd5b50337fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a055565b7fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a0546000906001600160a01b03811661010b5761010b610197565b806001600160a01b0316639470a5b26040518163ffffffff1660e01b8152600401602060405180830381865afa158015610149573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061016d91906101ad565b91505090565b3660008037600080366000845af43d6000803e808015610192573d6000f35b3d6000fd5b634e487b7160e01b600052600160045260246000fd5b6000602082840312156101bf57600080fd5b81516001600160a01b03811681146101d657600080fd5b939250505056fea2646970667358221220d5944624d7ac37060e3921acfef50739d5c89189a003fea4b35a8970f675364264736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "FUSTP_ALREADY_INITIALIZED";
        readonly type: "error";
    }, {
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): FullUpgradableSuperTokenProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FullUpgradableSuperTokenProxy;
}
export {};
//# sourceMappingURL=FullUpgradableSuperTokenProxy__factory.d.ts.map