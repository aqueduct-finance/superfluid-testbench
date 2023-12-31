import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type { ERC1820Implementer, ERC1820ImplementerInterface } from "../../../../../@openzeppelin/contracts/utils/introspection/ERC1820Implementer";
type ERC1820ImplementerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC1820Implementer__factory extends ContractFactory {
    constructor(...args: ERC1820ImplementerConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ERC1820Implementer>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ERC1820Implementer;
    connect(signer: Signer): ERC1820Implementer__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610114806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063249cb3fa14602d575b600080fd5b603c603836600460a4565b604e565b60405190815260200160405180910390f35b6000828152602081815260408083206001600160a01b038516845290915281205460ff16607b576000609d565b7fa2ef4600d742022d532d4747cb3547474667d6f13804902513b2ec01c848f4b45b9392505050565b6000806040838503121560b657600080fd5b8235915060208301356001600160a01b038116811460d357600080fd5b80915050925092905056fea2646970667358221220d80fb0bf9c5675d45354495deb80a4eb38021843d47dad7ef9b8bed7566fd06264736f6c63430008130033";
    static readonly abi: readonly [{
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
    }];
    static createInterface(): ERC1820ImplementerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC1820Implementer;
}
export {};
//# sourceMappingURL=ERC1820Implementer__factory.d.ts.map