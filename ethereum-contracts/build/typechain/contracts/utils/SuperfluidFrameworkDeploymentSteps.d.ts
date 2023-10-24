import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace CFAv1Library {
    type InitDataStruct = {
        host: PromiseOrValue<string>;
        cfa: PromiseOrValue<string>;
    };
    type InitDataStructOutput = [string, string] & {
        host: string;
        cfa: string;
    };
}
export declare namespace IDAv1Library {
    type InitDataStruct = {
        host: PromiseOrValue<string>;
        ida: PromiseOrValue<string>;
    };
    type InitDataStructOutput = [string, string] & {
        host: string;
        ida: string;
    };
}
export declare namespace SuperfluidFrameworkDeploymentSteps {
    type FrameworkStruct = {
        governance: PromiseOrValue<string>;
        host: PromiseOrValue<string>;
        cfa: PromiseOrValue<string>;
        cfaLib: CFAv1Library.InitDataStruct;
        ida: PromiseOrValue<string>;
        idaLib: IDAv1Library.InitDataStruct;
        superTokenFactory: PromiseOrValue<string>;
        resolver: PromiseOrValue<string>;
        superfluidLoader: PromiseOrValue<string>;
        cfaV1Forwarder: PromiseOrValue<string>;
        idaV1Forwarder: PromiseOrValue<string>;
    };
    type FrameworkStructOutput = [
        string,
        string,
        string,
        CFAv1Library.InitDataStructOutput,
        string,
        IDAv1Library.InitDataStructOutput,
        string,
        string,
        string,
        string,
        string
    ] & {
        governance: string;
        host: string;
        cfa: string;
        cfaLib: CFAv1Library.InitDataStructOutput;
        ida: string;
        idaLib: IDAv1Library.InitDataStructOutput;
        superTokenFactory: string;
        resolver: string;
        superfluidLoader: string;
        cfaV1Forwarder: string;
        idaV1Forwarder: string;
    };
}
export interface SuperfluidFrameworkDeploymentStepsInterface extends utils.Interface {
    functions: {
        "DEFAULT_APP_WHITELISTING_ENABLED()": FunctionFragment;
        "DEFAULT_LIQUIDATION_PERIOD()": FunctionFragment;
        "DEFAULT_NON_UPGRADEABLE()": FunctionFragment;
        "DEFAULT_PATRICIAN_PERIOD()": FunctionFragment;
        "DEFAULT_REWARD_ADDRESS()": FunctionFragment;
        "DEFAULT_TOGA_MIN_BOND_DURATION()": FunctionFragment;
        "DEFAULT_TRUSTED_FORWARDERS(uint256)": FunctionFragment;
        "RESOLVER_BASE_SUPER_TOKEN_KEY()": FunctionFragment;
        "RESOLVER_BASE_TOKEN_KEY()": FunctionFragment;
        "getFramework()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_APP_WHITELISTING_ENABLED" | "DEFAULT_LIQUIDATION_PERIOD" | "DEFAULT_NON_UPGRADEABLE" | "DEFAULT_PATRICIAN_PERIOD" | "DEFAULT_REWARD_ADDRESS" | "DEFAULT_TOGA_MIN_BOND_DURATION" | "DEFAULT_TRUSTED_FORWARDERS" | "RESOLVER_BASE_SUPER_TOKEN_KEY" | "RESOLVER_BASE_TOKEN_KEY" | "getFramework" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_APP_WHITELISTING_ENABLED", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_LIQUIDATION_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_NON_UPGRADEABLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_PATRICIAN_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_REWARD_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_TOGA_MIN_BOND_DURATION", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_TRUSTED_FORWARDERS", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "RESOLVER_BASE_SUPER_TOKEN_KEY", values?: undefined): string;
    encodeFunctionData(functionFragment: "RESOLVER_BASE_TOKEN_KEY", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFramework", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_APP_WHITELISTING_ENABLED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_LIQUIDATION_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_NON_UPGRADEABLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_PATRICIAN_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_REWARD_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_TOGA_MIN_BOND_DURATION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_TRUSTED_FORWARDERS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RESOLVER_BASE_SUPER_TOKEN_KEY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RESOLVER_BASE_TOKEN_KEY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFramework", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {};
}
export interface SuperfluidFrameworkDeploymentSteps extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SuperfluidFrameworkDeploymentStepsInterface;
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
        DEFAULT_APP_WHITELISTING_ENABLED(overrides?: CallOverrides): Promise<[boolean]>;
        DEFAULT_LIQUIDATION_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;
        DEFAULT_NON_UPGRADEABLE(overrides?: CallOverrides): Promise<[boolean]>;
        DEFAULT_PATRICIAN_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;
        DEFAULT_REWARD_ADDRESS(overrides?: CallOverrides): Promise<[string]>;
        DEFAULT_TOGA_MIN_BOND_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;
        DEFAULT_TRUSTED_FORWARDERS(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        RESOLVER_BASE_SUPER_TOKEN_KEY(overrides?: CallOverrides): Promise<[string]>;
        RESOLVER_BASE_TOKEN_KEY(overrides?: CallOverrides): Promise<[string]>;
        getFramework(overrides?: CallOverrides): Promise<[
            SuperfluidFrameworkDeploymentSteps.FrameworkStructOutput
        ] & {
            sf: SuperfluidFrameworkDeploymentSteps.FrameworkStructOutput;
        }>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    DEFAULT_APP_WHITELISTING_ENABLED(overrides?: CallOverrides): Promise<boolean>;
    DEFAULT_LIQUIDATION_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
    DEFAULT_NON_UPGRADEABLE(overrides?: CallOverrides): Promise<boolean>;
    DEFAULT_PATRICIAN_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
    DEFAULT_REWARD_ADDRESS(overrides?: CallOverrides): Promise<string>;
    DEFAULT_TOGA_MIN_BOND_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
    DEFAULT_TRUSTED_FORWARDERS(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    RESOLVER_BASE_SUPER_TOKEN_KEY(overrides?: CallOverrides): Promise<string>;
    RESOLVER_BASE_TOKEN_KEY(overrides?: CallOverrides): Promise<string>;
    getFramework(overrides?: CallOverrides): Promise<SuperfluidFrameworkDeploymentSteps.FrameworkStructOutput>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEFAULT_APP_WHITELISTING_ENABLED(overrides?: CallOverrides): Promise<boolean>;
        DEFAULT_LIQUIDATION_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_NON_UPGRADEABLE(overrides?: CallOverrides): Promise<boolean>;
        DEFAULT_PATRICIAN_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_REWARD_ADDRESS(overrides?: CallOverrides): Promise<string>;
        DEFAULT_TOGA_MIN_BOND_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_TRUSTED_FORWARDERS(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        RESOLVER_BASE_SUPER_TOKEN_KEY(overrides?: CallOverrides): Promise<string>;
        RESOLVER_BASE_TOKEN_KEY(overrides?: CallOverrides): Promise<string>;
        getFramework(overrides?: CallOverrides): Promise<SuperfluidFrameworkDeploymentSteps.FrameworkStructOutput>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        DEFAULT_APP_WHITELISTING_ENABLED(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_LIQUIDATION_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_NON_UPGRADEABLE(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_PATRICIAN_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_REWARD_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_TOGA_MIN_BOND_DURATION(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_TRUSTED_FORWARDERS(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        RESOLVER_BASE_SUPER_TOKEN_KEY(overrides?: CallOverrides): Promise<BigNumber>;
        RESOLVER_BASE_TOKEN_KEY(overrides?: CallOverrides): Promise<BigNumber>;
        getFramework(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_APP_WHITELISTING_ENABLED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DEFAULT_LIQUIDATION_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DEFAULT_NON_UPGRADEABLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DEFAULT_PATRICIAN_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DEFAULT_REWARD_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DEFAULT_TOGA_MIN_BOND_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DEFAULT_TRUSTED_FORWARDERS(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        RESOLVER_BASE_SUPER_TOKEN_KEY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        RESOLVER_BASE_TOKEN_KEY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFramework(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=SuperfluidFrameworkDeploymentSteps.d.ts.map