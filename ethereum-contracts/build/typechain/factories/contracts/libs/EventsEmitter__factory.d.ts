import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { EventsEmitter, EventsEmitterInterface } from "../../../contracts/libs/EventsEmitter";
type EventsEmitterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EventsEmitter__factory extends ContractFactory {
    constructor(...args: EventsEmitterConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<EventsEmitter>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): EventsEmitter;
    connect(signer: Signer): EventsEmitter__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220d4f035db208db60e270656614cb3fb29ef439bcb20f1d90af31ee90f27ac847364736f6c63430008130033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }];
    static createInterface(): EventsEmitterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): EventsEmitter;
}
export {};
//# sourceMappingURL=EventsEmitter__factory.d.ts.map