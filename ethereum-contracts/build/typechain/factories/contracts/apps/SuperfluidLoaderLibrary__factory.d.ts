import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { SuperfluidLoaderLibrary, SuperfluidLoaderLibraryInterface } from "../../../contracts/apps/SuperfluidLoaderLibrary";
type SuperfluidLoaderLibraryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperfluidLoaderLibrary__factory extends ContractFactory {
    constructor(...args: SuperfluidLoaderLibraryConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperfluidLoaderLibrary>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperfluidLoaderLibrary;
    connect(signer: Signer): SuperfluidLoaderLibrary__factory;
    static readonly bytecode = "0x6102ab61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c806320bc44251461003a575b600080fd5b61004261005e565b6040516001600160a01b03909116815260200160405180910390f35b6000600146036100815750734e583d9390082b65bef884b629dfa426114ced6d90565b600a46036100a2575073567c4b141ed61923967ca25ef4906c8781069a1090565b603846036100c3575073d1e2cfb6441680002eb7a44223160ab9b67d7e6e90565b606446036100e45750732dfe937cd98ab92e59cf3139138f18c823a4efe790565b608946036101055750733e14dc1b13c488a8d5d310918780c983bd5982e790565b61a4b14603610127575073cf8acb4ef033eff16e8080aed4c7d5b9285d219290565b61a4ec4603610149575073a4ff07cf81c02cfd356184879d953970ca95758590565b61a86a460361016b57507360377c7016e4cdb03c87ef474896c11cb560752c90565b6005460361018c57507322ff293e14f1ec3a09b137e9e06084afd63addf990565b62066eed46036101af575073e40983c2476032a0915600b9472b3141aa5b5ba990565b6101a446036101d1575073e40983c2476032a0915600b9472b3141aa5b5ba990565b61a86946036101f357507385fe79b998509b77bf10a8bd4001d58475d2938690565b620138814603610216575073eb796bdb90ffa0f28255275e16936d25d341860390565b62aa36a74603610239575073109412e3c84f0539b43d39db691b08c90f58dc7c90565b62014a33460361025c575073507c3a7c6ccc253884a2e3a3ee2a211cc7e796a690565b604051633732a25760e11b815260040160405180910390fdfea2646970667358221220c0024553761c01c9ea4069fa6e77a9ec6d74182dd7c599f2a7b8af793cd7adf964736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "UnsupportedNetwork";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "getHost";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): SuperfluidLoaderLibraryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperfluidLoaderLibrary;
}
export {};
//# sourceMappingURL=SuperfluidLoaderLibrary__factory.d.ts.map