import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface SuperAppMock2ndLevelInterface extends utils.Interface {
    functions: {
        "afterAgreementCreated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
        "allowCompositeApp()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "afterAgreementCreated" | "allowCompositeApp"): FunctionFragment;
    encodeFunctionData(functionFragment: "afterAgreementCreated", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "allowCompositeApp", values?: undefined): string;
    decodeFunctionResult(functionFragment: "afterAgreementCreated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowCompositeApp", data: BytesLike): Result;
    events: {};
}
export interface SuperAppMock2ndLevel extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SuperAppMock2ndLevelInterface;
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
        afterAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        allowCompositeApp(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    afterAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    allowCompositeApp(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        afterAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        allowCompositeApp(overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        afterAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        allowCompositeApp(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        afterAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        allowCompositeApp(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=SuperAppMock2ndLevel.d.ts.map