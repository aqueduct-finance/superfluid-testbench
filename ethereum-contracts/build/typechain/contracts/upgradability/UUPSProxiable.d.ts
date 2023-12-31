import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface UUPSProxiableInterface extends utils.Interface {
    functions: {
        "castrate()": FunctionFragment;
        "getCodeAddress()": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "updateCode(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "castrate" | "getCodeAddress" | "proxiableUUID" | "updateCode"): FunctionFragment;
    encodeFunctionData(functionFragment: "castrate", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCodeAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateCode", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "castrate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCodeAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCode", data: BytesLike): Result;
    events: {
        "CodeUpdated(bytes32,address)": EventFragment;
        "Initialized(uint8)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CodeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}
export interface CodeUpdatedEventObject {
    uuid: string;
    codeAddress: string;
}
export type CodeUpdatedEvent = TypedEvent<[
    string,
    string
], CodeUpdatedEventObject>;
export type CodeUpdatedEventFilter = TypedEventFilter<CodeUpdatedEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface UUPSProxiable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UUPSProxiableInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        castrate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getCodeAddress(overrides?: CallOverrides): Promise<[string] & {
            codeAddress: string;
        }>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        updateCode(newAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    castrate(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getCodeAddress(overrides?: CallOverrides): Promise<string>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    updateCode(newAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        castrate(overrides?: CallOverrides): Promise<void>;
        getCodeAddress(overrides?: CallOverrides): Promise<string>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        updateCode(newAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CodeUpdated(bytes32,address)"(uuid?: null, codeAddress?: null): CodeUpdatedEventFilter;
        CodeUpdated(uuid?: null, codeAddress?: null): CodeUpdatedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
    };
    estimateGas: {
        castrate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getCodeAddress(overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        updateCode(newAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        castrate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getCodeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateCode(newAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=UUPSProxiable.d.ts.map