import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { SuperfluidDestructorMock, SuperfluidDestructorMockInterface } from "../../../contracts/mocks/SuperfluidDestructorMock";
type SuperfluidDestructorMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperfluidDestructorMock__factory extends ContractFactory {
    constructor(...args: SuperfluidDestructorMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperfluidDestructorMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperfluidDestructorMock;
    connect(signer: Signer): SuperfluidDestructorMock__factory;
    static readonly bytecode = "0x60a06040526000608052348015601457600080fd5b50608051609c61002d600039600060300152609c6000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063cd312ec414602c575b6000ff5b60527f000000000000000000000000000000000000000000000000000000000000000081565b604051901515815260200160405180910390f3fea264697066735822122065028e6cc3a1447f60610dded44e58a413f3848e4b4a34b86a10c0987bdfac5764736f6c63430008130033";
    static readonly abi: readonly [{
        readonly stateMutability: "nonpayable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [];
        readonly name: "NON_UPGRADABLE_DEPLOYMENT";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): SuperfluidDestructorMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperfluidDestructorMock;
}
export {};
//# sourceMappingURL=SuperfluidDestructorMock__factory.d.ts.map