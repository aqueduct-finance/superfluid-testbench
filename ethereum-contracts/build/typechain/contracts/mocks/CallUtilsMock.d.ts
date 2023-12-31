import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface CallUtilsMockInterface extends utils.Interface {
    functions: {
        "a(uint256)": FunctionFragment;
        "revertArrayAccess()": FunctionFragment;
        "revertAssert()": FunctionFragment;
        "revertBigArray()": FunctionFragment;
        "revertCustom()": FunctionFragment;
        "revertCustomVal()": FunctionFragment;
        "revertDivByZero()": FunctionFragment;
        "revertEmpty()": FunctionFragment;
        "revertEnum()": FunctionFragment;
        "revertOverflow()": FunctionFragment;
        "revertPop()": FunctionFragment;
        "revertString()": FunctionFragment;
        "revertTest(string)": FunctionFragment;
        "revertZeroInitializedFunctionPointer()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "a" | "revertArrayAccess" | "revertAssert" | "revertBigArray" | "revertCustom" | "revertCustomVal" | "revertDivByZero" | "revertEmpty" | "revertEnum" | "revertOverflow" | "revertPop" | "revertString" | "revertTest" | "revertZeroInitializedFunctionPointer"): FunctionFragment;
    encodeFunctionData(functionFragment: "a", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "revertArrayAccess", values?: undefined): string;
    encodeFunctionData(functionFragment: "revertAssert", values?: undefined): string;
    encodeFunctionData(functionFragment: "revertBigArray", values?: undefined): string;
    encodeFunctionData(functionFragment: "revertCustom", values?: undefined): string;
    encodeFunctionData(functionFragment: "revertCustomVal", values?: undefined): string;
    encodeFunctionData(functionFragment: "revertDivByZero", values?: undefined): string;
    encodeFunctionData(functionFragment: "revertEmpty", values?: undefined): string;
    encodeFunctionData(functionFragment: "revertEnum", values?: undefined): string;
    encodeFunctionData(functionFragment: "revertOverflow", values?: undefined): string;
    encodeFunctionData(functionFragment: "revertPop", values?: undefined): string;
    encodeFunctionData(functionFragment: "revertString", values?: undefined): string;
    encodeFunctionData(functionFragment: "revertTest", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revertZeroInitializedFunctionPointer", values?: undefined): string;
    decodeFunctionResult(functionFragment: "a", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertArrayAccess", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertAssert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertBigArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertCustom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertCustomVal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertDivByZero", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertEmpty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertEnum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertOverflow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertPop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertString", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertZeroInitializedFunctionPointer", data: BytesLike): Result;
    events: {};
}
export interface CallUtilsMock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CallUtilsMockInterface;
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
        a(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        revertArrayAccess(overrides?: CallOverrides): Promise<[void]>;
        revertAssert(overrides?: CallOverrides): Promise<[void]>;
        revertBigArray(overrides?: CallOverrides): Promise<[number[]]>;
        revertCustom(overrides?: CallOverrides): Promise<[void]>;
        revertCustomVal(overrides?: CallOverrides): Promise<[void]>;
        revertDivByZero(overrides?: CallOverrides): Promise<[void]>;
        revertEmpty(overrides?: CallOverrides): Promise<[void]>;
        revertEnum(overrides?: CallOverrides): Promise<[void]>;
        revertOverflow(overrides?: CallOverrides): Promise<[BigNumber]>;
        revertPop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revertString(overrides?: CallOverrides): Promise<[void]>;
        revertTest(funcSig: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revertZeroInitializedFunctionPointer(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    a(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    revertArrayAccess(overrides?: CallOverrides): Promise<void>;
    revertAssert(overrides?: CallOverrides): Promise<void>;
    revertBigArray(overrides?: CallOverrides): Promise<number[]>;
    revertCustom(overrides?: CallOverrides): Promise<void>;
    revertCustomVal(overrides?: CallOverrides): Promise<void>;
    revertDivByZero(overrides?: CallOverrides): Promise<void>;
    revertEmpty(overrides?: CallOverrides): Promise<void>;
    revertEnum(overrides?: CallOverrides): Promise<void>;
    revertOverflow(overrides?: CallOverrides): Promise<BigNumber>;
    revertPop(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revertString(overrides?: CallOverrides): Promise<void>;
    revertTest(funcSig: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revertZeroInitializedFunctionPointer(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        a(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        revertArrayAccess(overrides?: CallOverrides): Promise<void>;
        revertAssert(overrides?: CallOverrides): Promise<void>;
        revertBigArray(overrides?: CallOverrides): Promise<number[]>;
        revertCustom(overrides?: CallOverrides): Promise<void>;
        revertCustomVal(overrides?: CallOverrides): Promise<void>;
        revertDivByZero(overrides?: CallOverrides): Promise<void>;
        revertEmpty(overrides?: CallOverrides): Promise<void>;
        revertEnum(overrides?: CallOverrides): Promise<void>;
        revertOverflow(overrides?: CallOverrides): Promise<BigNumber>;
        revertPop(overrides?: CallOverrides): Promise<void>;
        revertString(overrides?: CallOverrides): Promise<void>;
        revertTest(funcSig: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        revertZeroInitializedFunctionPointer(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        a(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        revertArrayAccess(overrides?: CallOverrides): Promise<BigNumber>;
        revertAssert(overrides?: CallOverrides): Promise<BigNumber>;
        revertBigArray(overrides?: CallOverrides): Promise<BigNumber>;
        revertCustom(overrides?: CallOverrides): Promise<BigNumber>;
        revertCustomVal(overrides?: CallOverrides): Promise<BigNumber>;
        revertDivByZero(overrides?: CallOverrides): Promise<BigNumber>;
        revertEmpty(overrides?: CallOverrides): Promise<BigNumber>;
        revertEnum(overrides?: CallOverrides): Promise<BigNumber>;
        revertOverflow(overrides?: CallOverrides): Promise<BigNumber>;
        revertPop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revertString(overrides?: CallOverrides): Promise<BigNumber>;
        revertTest(funcSig: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revertZeroInitializedFunctionPointer(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        a(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revertArrayAccess(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revertAssert(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revertBigArray(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revertCustom(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revertCustomVal(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revertDivByZero(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revertEmpty(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revertEnum(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revertOverflow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revertPop(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revertString(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revertTest(funcSig: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revertZeroInitializedFunctionPointer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=CallUtilsMock.d.ts.map