import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export declare namespace SuperTokenFactoryBase {
    type InitializeDataStruct = {
        underlyingToken: PromiseOrValue<string>;
        superToken: PromiseOrValue<string>;
    };
    type InitializeDataStructOutput = [string, string] & {
        underlyingToken: string;
        superToken: string;
    };
}
export interface SuperTokenFactoryMock42Interface extends utils.Interface {
    functions: {
        "CONSTANT_INFLOW_NFT_LOGIC()": FunctionFragment;
        "CONSTANT_OUTFLOW_NFT_LOGIC()": FunctionFragment;
        "_SUPER_TOKEN_LOGIC()": FunctionFragment;
        "castrate()": FunctionFragment;
        "computeCanonicalERC20WrapperAddress(address)": FunctionFragment;
        "createCanonicalERC20Wrapper(address)": FunctionFragment;
        "createERC20Wrapper(address,uint8,string,string)": FunctionFragment;
        "createERC20Wrapper(address,uint8,uint8,string,string)": FunctionFragment;
        "getCanonicalERC20Wrapper(address)": FunctionFragment;
        "getCodeAddress()": FunctionFragment;
        "getHost()": FunctionFragment;
        "getSuperTokenLogic()": FunctionFragment;
        "initialize()": FunctionFragment;
        "initializeCanonicalWrapperSuperTokens((address,address)[])": FunctionFragment;
        "initializeCustomSuperToken(address)": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "updateCode(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "CONSTANT_INFLOW_NFT_LOGIC" | "CONSTANT_OUTFLOW_NFT_LOGIC" | "_SUPER_TOKEN_LOGIC" | "castrate" | "computeCanonicalERC20WrapperAddress" | "createCanonicalERC20Wrapper" | "createERC20Wrapper(address,uint8,string,string)" | "createERC20Wrapper(address,uint8,uint8,string,string)" | "getCanonicalERC20Wrapper" | "getCodeAddress" | "getHost" | "getSuperTokenLogic" | "initialize" | "initializeCanonicalWrapperSuperTokens" | "initializeCustomSuperToken" | "proxiableUUID" | "updateCode"): FunctionFragment;
    encodeFunctionData(functionFragment: "CONSTANT_INFLOW_NFT_LOGIC", values?: undefined): string;
    encodeFunctionData(functionFragment: "CONSTANT_OUTFLOW_NFT_LOGIC", values?: undefined): string;
    encodeFunctionData(functionFragment: "_SUPER_TOKEN_LOGIC", values?: undefined): string;
    encodeFunctionData(functionFragment: "castrate", values?: undefined): string;
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
    encodeFunctionData(functionFragment: "getCodeAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "getHost", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSuperTokenLogic", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializeCanonicalWrapperSuperTokens", values: [SuperTokenFactoryBase.InitializeDataStruct[]]): string;
    encodeFunctionData(functionFragment: "initializeCustomSuperToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateCode", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "CONSTANT_INFLOW_NFT_LOGIC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CONSTANT_OUTFLOW_NFT_LOGIC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_SUPER_TOKEN_LOGIC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castrate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "computeCanonicalERC20WrapperAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createCanonicalERC20Wrapper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createERC20Wrapper(address,uint8,string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createERC20Wrapper(address,uint8,uint8,string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCanonicalERC20Wrapper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCodeAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getHost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSuperTokenLogic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeCanonicalWrapperSuperTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeCustomSuperToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCode", data: BytesLike): Result;
    events: {
        "CodeUpdated(bytes32,address)": EventFragment;
        "CustomSuperTokenCreated(address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "SuperTokenCreated(address)": EventFragment;
        "SuperTokenLogicCreated(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CodeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CustomSuperTokenCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SuperTokenCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SuperTokenLogicCreated"): EventFragment;
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
export interface CustomSuperTokenCreatedEventObject {
    token: string;
}
export type CustomSuperTokenCreatedEvent = TypedEvent<[
    string
], CustomSuperTokenCreatedEventObject>;
export type CustomSuperTokenCreatedEventFilter = TypedEventFilter<CustomSuperTokenCreatedEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
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
export interface SuperTokenFactoryMock42 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SuperTokenFactoryMock42Interface;
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
        CONSTANT_INFLOW_NFT_LOGIC(overrides?: CallOverrides): Promise<[string]>;
        CONSTANT_OUTFLOW_NFT_LOGIC(overrides?: CallOverrides): Promise<[string]>;
        _SUPER_TOKEN_LOGIC(overrides?: CallOverrides): Promise<[string]>;
        castrate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
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
        getCodeAddress(overrides?: CallOverrides): Promise<[string] & {
            codeAddress: string;
        }>;
        getHost(overrides?: CallOverrides): Promise<[string] & {
            host: string;
        }>;
        getSuperTokenLogic(overrides?: CallOverrides): Promise<[string]>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initializeCanonicalWrapperSuperTokens(_data: SuperTokenFactoryBase.InitializeDataStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initializeCustomSuperToken(customSuperTokenProxy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        updateCode(newAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    CONSTANT_INFLOW_NFT_LOGIC(overrides?: CallOverrides): Promise<string>;
    CONSTANT_OUTFLOW_NFT_LOGIC(overrides?: CallOverrides): Promise<string>;
    _SUPER_TOKEN_LOGIC(overrides?: CallOverrides): Promise<string>;
    castrate(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
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
    getCodeAddress(overrides?: CallOverrides): Promise<string>;
    getHost(overrides?: CallOverrides): Promise<string>;
    getSuperTokenLogic(overrides?: CallOverrides): Promise<string>;
    initialize(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initializeCanonicalWrapperSuperTokens(_data: SuperTokenFactoryBase.InitializeDataStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initializeCustomSuperToken(customSuperTokenProxy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    updateCode(newAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        CONSTANT_INFLOW_NFT_LOGIC(overrides?: CallOverrides): Promise<string>;
        CONSTANT_OUTFLOW_NFT_LOGIC(overrides?: CallOverrides): Promise<string>;
        _SUPER_TOKEN_LOGIC(overrides?: CallOverrides): Promise<string>;
        castrate(overrides?: CallOverrides): Promise<void>;
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
        getCodeAddress(overrides?: CallOverrides): Promise<string>;
        getHost(overrides?: CallOverrides): Promise<string>;
        getSuperTokenLogic(overrides?: CallOverrides): Promise<string>;
        initialize(overrides?: CallOverrides): Promise<void>;
        initializeCanonicalWrapperSuperTokens(_data: SuperTokenFactoryBase.InitializeDataStruct[], overrides?: CallOverrides): Promise<void>;
        initializeCustomSuperToken(customSuperTokenProxy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        updateCode(newAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CodeUpdated(bytes32,address)"(uuid?: null, codeAddress?: null): CodeUpdatedEventFilter;
        CodeUpdated(uuid?: null, codeAddress?: null): CodeUpdatedEventFilter;
        "CustomSuperTokenCreated(address)"(token?: PromiseOrValue<string> | null): CustomSuperTokenCreatedEventFilter;
        CustomSuperTokenCreated(token?: PromiseOrValue<string> | null): CustomSuperTokenCreatedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "SuperTokenCreated(address)"(token?: PromiseOrValue<string> | null): SuperTokenCreatedEventFilter;
        SuperTokenCreated(token?: PromiseOrValue<string> | null): SuperTokenCreatedEventFilter;
        "SuperTokenLogicCreated(address)"(tokenLogic?: PromiseOrValue<string> | null): SuperTokenLogicCreatedEventFilter;
        SuperTokenLogicCreated(tokenLogic?: PromiseOrValue<string> | null): SuperTokenLogicCreatedEventFilter;
    };
    estimateGas: {
        CONSTANT_INFLOW_NFT_LOGIC(overrides?: CallOverrides): Promise<BigNumber>;
        CONSTANT_OUTFLOW_NFT_LOGIC(overrides?: CallOverrides): Promise<BigNumber>;
        _SUPER_TOKEN_LOGIC(overrides?: CallOverrides): Promise<BigNumber>;
        castrate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
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
        getCodeAddress(overrides?: CallOverrides): Promise<BigNumber>;
        getHost(overrides?: CallOverrides): Promise<BigNumber>;
        getSuperTokenLogic(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initializeCanonicalWrapperSuperTokens(_data: SuperTokenFactoryBase.InitializeDataStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initializeCustomSuperToken(customSuperTokenProxy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        updateCode(newAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        CONSTANT_INFLOW_NFT_LOGIC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        CONSTANT_OUTFLOW_NFT_LOGIC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _SUPER_TOKEN_LOGIC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        castrate(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
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
        getCodeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getHost(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSuperTokenLogic(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initializeCanonicalWrapperSuperTokens(_data: SuperTokenFactoryBase.InitializeDataStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initializeCustomSuperToken(customSuperTokenProxy: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateCode(newAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=SuperTokenFactoryMock42.d.ts.map