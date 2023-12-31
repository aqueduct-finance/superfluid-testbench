import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { SafeGasLibrary, SafeGasLibraryInterface } from "../../../contracts/libs/SafeGasLibrary";
type SafeGasLibraryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SafeGasLibrary__factory extends ContractFactory {
    constructor(...args: SafeGasLibraryConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SafeGasLibrary>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SafeGasLibrary;
    connect(signer: Signer): SafeGasLibrary__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220784510cd69808ad2c4a5bcb1683a3accafb6358d6eec93735914640b5ca5986264736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "OUT_OF_GAS";
        readonly type: "error";
    }];
    static createInterface(): SafeGasLibraryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SafeGasLibrary;
}
export {};
//# sourceMappingURL=SafeGasLibrary__factory.d.ts.map