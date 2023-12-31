import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface ISuperTokenFactoryInterface extends utils.Interface {
    functions: {
        "computeCanonicalERC20WrapperAddress(address)": FunctionFragment;
        "createCanonicalERC20Wrapper(address)": FunctionFragment;
        "createERC20Wrapper(address,uint8,string,string)": FunctionFragment;
        "createERC20Wrapper(address,uint8,uint8,string,string)": FunctionFragment;
        "getCanonicalERC20Wrapper(address)": FunctionFragment;
        "getHost()": FunctionFragment;
        "getSuperTokenLogic()": FunctionFragment;
        "initialize()": FunctionFragment;
        "initializeCustomSuperToken(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "computeCanonicalERC20WrapperAddress" | "createCanonicalERC20Wrapper" | "createERC20Wrapper(address,uint8,string,string)" | "createERC20Wrapper(address,uint8,uint8,string,string)" | "getCanonicalERC20Wrapper" | "getHost" | "getSuperTokenLogic" | "initialize" | "initializeCustomSuperToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "computeCanonicalERC20WrapperAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "createCanonicalERC20Wrapper", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "createERC20Wrapper(address,uint8,string,string)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "createERC20Wrapper(address,uint8,uint8,string,string)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getCanonicalERC20Wrapper", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getHost", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSuperTokenLogic", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializeCustomSuperToken", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "computeCanonicalERC20WrapperAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createCanonicalERC20Wrapper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createERC20Wrapper(address,uint8,string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createERC20Wrapper(address,uint8,uint8,string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCanonicalERC20Wrapper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getHost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSuperTokenLogic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeCustomSuperToken", data: BytesLike): Result;
    events: {
        "CustomSuperTokenCreated(address)": EventFragment;
        "SuperTokenCreated(address)": EventFragment;
        "SuperTokenLogicCreated(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CustomSuperTokenCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SuperTokenCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SuperTokenLogicCreated"): EventFragment;
}
export interface CustomSuperTokenCreatedEventObject {
    token: string;
}
export type CustomSuperTokenCreatedEvent = TypedEvent<[
    string
], CustomSuperTokenCreatedEventObject>;
export type CustomSuperTokenCreatedEventFilter = TypedEventFilter<CustomSuperTokenCreatedEvent>;
export interface SuperTokenCreatedEventObject {
    token: string;
}
export type SuperTokenCreatedEvent = TypedEvent<[
    string
], SuperTokenCreatedEventObject>;
export type SuperTokenCreatedEventFilter = TypedEventFilter<SuperTokenCreatedEvent>;
export interface SuperTokenLogicCreatedEventObject {
    tokenLogic: string;
}
export type SuperTokenLogicCreatedEvent = TypedEvent<[
    string
], SuperTokenLogicCreatedEventObject>;
export type SuperTokenLogicCreatedEventFilter = TypedEventFilter<SuperTokenLogicCreatedEvent>;
export interface ISuperTokenFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISuperTokenFactoryInterface;
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
        computeCanonicalERC20WrapperAddress(_underlyingToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string,
            boolean
        ] & {
            superTokenAddress: string;
            isDeployed: boolean;
        }>;
        createCanonicalERC20Wrapper(_underlyingToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "createERC20Wrapper(address,uint8,string,string)"(underlyingToken: PromiseOrValue<string>, upgradability: PromiseOrValue<BigNumberish>, name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "createERC20Wrapper(address,uint8,uint8,string,string)"(underlyingToken: PromiseOrValue<string>, underlyingDecimals: PromiseOrValue<BigNumberish>, upgradability: PromiseOrValue<BigNumberish>, name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getCanonicalERC20Wrapper(_underlyingTokenAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            superTokenAddress: string;
        }>;
        getHost(overrides?: CallOverrides): Promise<[string] & {
            host: string;
        }>;
        getSuperTokenLogic(overrides?: CallOverrides): Promise<[string] & {
            superToken: string;
        }>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initializeCustomSuperToken(customSuperTokenProxy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    computeCanonicalERC20WrapperAddress(_underlyingToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        string,
        boolean
    ] & {
        superTokenAddress: string;
        isDeployed: boolean;
    }>;
    createCanonicalERC20Wrapper(_underlyingToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "createERC20Wrapper(address,uint8,string,string)"(underlyingToken: PromiseOrValue<string>, upgradability: PromiseOrValue<BigNumberish>, name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "createERC20Wrapper(address,uint8,uint8,string,string)"(underlyingToken: PromiseOrValue<string>, underlyingDecimals: PromiseOrValue<BigNumberish>, upgradability: PromiseOrValue<BigNumberish>, name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getCanonicalERC20Wrapper(_underlyingTokenAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getHost(overrides?: CallOverrides): Promise<string>;
    getSuperTokenLogic(overrides?: CallOverrides): Promise<string>;
    initialize(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initializeCustomSuperToken(customSuperTokenProxy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        computeCanonicalERC20WrapperAddress(_underlyingToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string,
            boolean
        ] & {
            superTokenAddress: string;
            isDeployed: boolean;
        }>;
        createCanonicalERC20Wrapper(_underlyingToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "createERC20Wrapper(address,uint8,string,string)"(underlyingToken: PromiseOrValue<string>, upgradability: PromiseOrValue<BigNumberish>, name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "createERC20Wrapper(address,uint8,uint8,string,string)"(underlyingToken: PromiseOrValue<string>, underlyingDecimals: PromiseOrValue<BigNumberish>, upgradability: PromiseOrValue<BigNumberish>, name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getCanonicalERC20Wrapper(_underlyingTokenAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getHost(overrides?: CallOverrides): Promise<string>;
        getSuperTokenLogic(overrides?: CallOverrides): Promise<string>;
        initialize(overrides?: CallOverrides): Promise<void>;
        initializeCustomSuperToken(customSuperTokenProxy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CustomSuperTokenCreated(address)"(token?: PromiseOrValue<string> | null): CustomSuperTokenCreatedEventFilter;
        CustomSuperTokenCreated(token?: PromiseOrValue<string> | null): CustomSuperTokenCreatedEventFilter;
        "SuperTokenCreated(address)"(token?: PromiseOrValue<string> | null): SuperTokenCreatedEventFilter;
        SuperTokenCreated(token?: PromiseOrValue<string> | null): SuperTokenCreatedEventFilter;
        "SuperTokenLogicCreated(address)"(tokenLogic?: PromiseOrValue<string> | null): SuperTokenLogicCreatedEventFilter;
        SuperTokenLogicCreated(tokenLogic?: PromiseOrValue<string> | null): SuperTokenLogicCreatedEventFilter;
    };
    estimateGas: {
        computeCanonicalERC20WrapperAddress(_underlyingToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        createCanonicalERC20Wrapper(_underlyingToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "createERC20Wrapper(address,uint8,string,string)"(underlyingToken: PromiseOrValue<string>, upgradability: PromiseOrValue<BigNumberish>, name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "createERC20Wrapper(address,uint8,uint8,string,string)"(underlyingToken: PromiseOrValue<string>, underlyingDecimals: PromiseOrValue<BigNumberish>, upgradability: PromiseOrValue<BigNumberish>, name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getCanonicalERC20Wrapper(_underlyingTokenAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getHost(overrides?: CallOverrides): Promise<BigNumber>;
        getSuperTokenLogic(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initializeCustomSuperToken(customSuperTokenProxy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        computeCanonicalERC20WrapperAddress(_underlyingToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createCanonicalERC20Wrapper(_underlyingToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "createERC20Wrapper(address,uint8,string,string)"(underlyingToken: PromiseOrValue<string>, upgradability: PromiseOrValue<BigNumberish>, name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "createERC20Wrapper(address,uint8,uint8,string,string)"(underlyingToken: PromiseOrValue<string>, underlyingDecimals: PromiseOrValue<BigNumberish>, upgradability: PromiseOrValue<BigNumberish>, name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getCanonicalERC20Wrapper(_underlyingTokenAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getHost(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSuperTokenLogic(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initializeCustomSuperToken(customSuperTokenProxy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ISuperTokenFactory.d.ts.map