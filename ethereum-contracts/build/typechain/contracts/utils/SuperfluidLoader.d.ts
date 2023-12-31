import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace SuperfluidLoader {
    type FrameworkStruct = {
        superfluid: PromiseOrValue<string>;
        superTokenFactory: PromiseOrValue<string>;
        agreementCFAv1: PromiseOrValue<string>;
        agreementIDAv1: PromiseOrValue<string>;
    };
    type FrameworkStructOutput = [string, string, string, string] & {
        superfluid: string;
        superTokenFactory: string;
        agreementCFAv1: string;
        agreementIDAv1: string;
    };
}
export interface SuperfluidLoaderInterface extends utils.Interface {
    functions: {
        "loadFramework(string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "loadFramework"): FunctionFragment;
    encodeFunctionData(functionFragment: "loadFramework", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "loadFramework", data: BytesLike): Result;
    events: {};
}
export interface SuperfluidLoader extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SuperfluidLoaderInterface;
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
        loadFramework(releaseVersion: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            SuperfluidLoader.FrameworkStructOutput
        ] & {
            result: SuperfluidLoader.FrameworkStructOutput;
        }>;
    };
    loadFramework(releaseVersion: PromiseOrValue<string>, overrides?: CallOverrides): Promise<SuperfluidLoader.FrameworkStructOutput>;
    callStatic: {
        loadFramework(releaseVersion: PromiseOrValue<string>, overrides?: CallOverrides): Promise<SuperfluidLoader.FrameworkStructOutput>;
    };
    filters: {};
    estimateGas: {
        loadFramework(releaseVersion: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        loadFramework(releaseVersion: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=SuperfluidLoader.d.ts.map