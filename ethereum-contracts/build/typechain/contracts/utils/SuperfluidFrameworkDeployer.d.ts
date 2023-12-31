import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace SuperfluidFrameworkDeployer {
    type TestFrameworkConfigsStruct = {
        nonUpgradeable: PromiseOrValue<boolean>;
        appWhitelistingEnabled: PromiseOrValue<boolean>;
        trustedForwarders: PromiseOrValue<string>[];
        defaultRewardAddress: PromiseOrValue<string>;
        liquidationPeriod: PromiseOrValue<BigNumberish>;
        patricianPeriod: PromiseOrValue<BigNumberish>;
        minBondDuration: PromiseOrValue<BigNumberish>;
    };
    type TestFrameworkConfigsStructOutput = [
        boolean,
        boolean,
        string[],
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        nonUpgradeable: boolean;
        appWhitelistingEnabled: boolean;
        trustedForwarders: string[];
        defaultRewardAddress: string;
        liquidationPeriod: BigNumber;
        patricianPeriod: BigNumber;
        minBondDuration: BigNumber;
    };
}
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
export interface SuperfluidFrameworkDeployerInterface extends utils.Interface {
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
        "deployAgreementContracts()": FunctionFragment;
        "deployCoreContracts()": FunctionFragment;
        "deployCoreContracts((bool,bool,address[],address,uint256,uint256,uint256))": FunctionFragment;
        "deployNativeAssetSuperToken(string,string)": FunctionFragment;
        "deployPeripheralContracts()": FunctionFragment;
        "deployPeripheralContracts((bool,bool,address[],address,uint256,uint256,uint256))": FunctionFragment;
        "deployPureSuperToken(string,string,uint256)": FunctionFragment;
        "deploySuperTokenContracts()": FunctionFragment;
        "deployTestFramework()": FunctionFragment;
        "deployWrapperSuperToken(string,string,uint8,uint256)": FunctionFragment;
        "executeStep(uint8)": FunctionFragment;
        "getFramework()": FunctionFragment;
        "getNumSteps()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_APP_WHITELISTING_ENABLED" | "DEFAULT_LIQUIDATION_PERIOD" | "DEFAULT_NON_UPGRADEABLE" | "DEFAULT_PATRICIAN_PERIOD" | "DEFAULT_REWARD_ADDRESS" | "DEFAULT_TOGA_MIN_BOND_DURATION" | "DEFAULT_TRUSTED_FORWARDERS" | "RESOLVER_BASE_SUPER_TOKEN_KEY" | "RESOLVER_BASE_TOKEN_KEY" | "deployAgreementContracts" | "deployCoreContracts()" | "deployCoreContracts((bool,bool,address[],address,uint256,uint256,uint256))" | "deployNativeAssetSuperToken" | "deployPeripheralContracts()" | "deployPeripheralContracts((bool,bool,address[],address,uint256,uint256,uint256))" | "deployPureSuperToken" | "deploySuperTokenContracts" | "deployTestFramework" | "deployWrapperSuperToken" | "executeStep" | "getFramework" | "getNumSteps" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_APP_WHITELISTING_ENABLED", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_LIQUIDATION_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_NON_UPGRADEABLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_PATRICIAN_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_REWARD_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_TOGA_MIN_BOND_DURATION", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_TRUSTED_FORWARDERS", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "RESOLVER_BASE_SUPER_TOKEN_KEY", values?: undefined): string;
    encodeFunctionData(functionFragment: "RESOLVER_BASE_TOKEN_KEY", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployAgreementContracts", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployCoreContracts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployCoreContracts((bool,bool,address[],address,uint256,uint256,uint256))", values: [SuperfluidFrameworkDeployer.TestFrameworkConfigsStruct]): string;
    encodeFunctionData(functionFragment: "deployNativeAssetSuperToken", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "deployPeripheralContracts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployPeripheralContracts((bool,bool,address[],address,uint256,uint256,uint256))", values: [SuperfluidFrameworkDeployer.TestFrameworkConfigsStruct]): string;
    encodeFunctionData(functionFragment: "deployPureSuperToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "deploySuperTokenContracts", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployTestFramework", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployWrapperSuperToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "executeStep", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getFramework", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNumSteps", values?: undefined): string;
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
    decodeFunctionResult(functionFragment: "deployAgreementContracts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployCoreContracts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployCoreContracts((bool,bool,address[],address,uint256,uint256,uint256))", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployNativeAssetSuperToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployPeripheralContracts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployPeripheralContracts((bool,bool,address[],address,uint256,uint256,uint256))", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployPureSuperToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deploySuperTokenContracts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployTestFramework", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployWrapperSuperToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeStep", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFramework", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNumSteps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {};
}
export interface SuperfluidFrameworkDeployer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SuperfluidFrameworkDeployerInterface;
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
        deployAgreementContracts(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "deployCoreContracts()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "deployCoreContracts((bool,bool,address[],address,uint256,uint256,uint256))"(configs: SuperfluidFrameworkDeployer.TestFrameworkConfigsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deployNativeAssetSuperToken(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "deployPeripheralContracts()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "deployPeripheralContracts((bool,bool,address[],address,uint256,uint256,uint256))"(configs: SuperfluidFrameworkDeployer.TestFrameworkConfigsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deployPureSuperToken(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _initialSupply: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deploySuperTokenContracts(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deployTestFramework(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deployWrapperSuperToken(_underlyingName: PromiseOrValue<string>, _underlyingSymbol: PromiseOrValue<string>, _decimals: PromiseOrValue<BigNumberish>, _mintLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeStep(step: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getFramework(overrides?: CallOverrides): Promise<[
            SuperfluidFrameworkDeploymentSteps.FrameworkStructOutput
        ] & {
            sf: SuperfluidFrameworkDeploymentSteps.FrameworkStructOutput;
        }>;
        getNumSteps(overrides?: CallOverrides): Promise<[number]>;
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
    deployAgreementContracts(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "deployCoreContracts()"(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "deployCoreContracts((bool,bool,address[],address,uint256,uint256,uint256))"(configs: SuperfluidFrameworkDeployer.TestFrameworkConfigsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deployNativeAssetSuperToken(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "deployPeripheralContracts()"(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "deployPeripheralContracts((bool,bool,address[],address,uint256,uint256,uint256))"(configs: SuperfluidFrameworkDeployer.TestFrameworkConfigsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deployPureSuperToken(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _initialSupply: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deploySuperTokenContracts(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deployTestFramework(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deployWrapperSuperToken(_underlyingName: PromiseOrValue<string>, _underlyingSymbol: PromiseOrValue<string>, _decimals: PromiseOrValue<BigNumberish>, _mintLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeStep(step: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getFramework(overrides?: CallOverrides): Promise<SuperfluidFrameworkDeploymentSteps.FrameworkStructOutput>;
    getNumSteps(overrides?: CallOverrides): Promise<number>;
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
        deployAgreementContracts(overrides?: CallOverrides): Promise<void>;
        "deployCoreContracts()"(overrides?: CallOverrides): Promise<void>;
        "deployCoreContracts((bool,bool,address[],address,uint256,uint256,uint256))"(configs: SuperfluidFrameworkDeployer.TestFrameworkConfigsStruct, overrides?: CallOverrides): Promise<void>;
        deployNativeAssetSuperToken(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "deployPeripheralContracts()"(overrides?: CallOverrides): Promise<void>;
        "deployPeripheralContracts((bool,bool,address[],address,uint256,uint256,uint256))"(configs: SuperfluidFrameworkDeployer.TestFrameworkConfigsStruct, overrides?: CallOverrides): Promise<void>;
        deployPureSuperToken(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _initialSupply: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        deploySuperTokenContracts(overrides?: CallOverrides): Promise<void>;
        deployTestFramework(overrides?: CallOverrides): Promise<void>;
        deployWrapperSuperToken(_underlyingName: PromiseOrValue<string>, _underlyingSymbol: PromiseOrValue<string>, _decimals: PromiseOrValue<BigNumberish>, _mintLimit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            string
        ] & {
            underlyingToken: string;
            superToken: string;
        }>;
        executeStep(step: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getFramework(overrides?: CallOverrides): Promise<SuperfluidFrameworkDeploymentSteps.FrameworkStructOutput>;
        getNumSteps(overrides?: CallOverrides): Promise<number>;
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
        deployAgreementContracts(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "deployCoreContracts()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "deployCoreContracts((bool,bool,address[],address,uint256,uint256,uint256))"(configs: SuperfluidFrameworkDeployer.TestFrameworkConfigsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deployNativeAssetSuperToken(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "deployPeripheralContracts()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "deployPeripheralContracts((bool,bool,address[],address,uint256,uint256,uint256))"(configs: SuperfluidFrameworkDeployer.TestFrameworkConfigsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deployPureSuperToken(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _initialSupply: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deploySuperTokenContracts(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deployTestFramework(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deployWrapperSuperToken(_underlyingName: PromiseOrValue<string>, _underlyingSymbol: PromiseOrValue<string>, _decimals: PromiseOrValue<BigNumberish>, _mintLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeStep(step: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getFramework(overrides?: CallOverrides): Promise<BigNumber>;
        getNumSteps(overrides?: CallOverrides): Promise<BigNumber>;
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
        deployAgreementContracts(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "deployCoreContracts()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "deployCoreContracts((bool,bool,address[],address,uint256,uint256,uint256))"(configs: SuperfluidFrameworkDeployer.TestFrameworkConfigsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deployNativeAssetSuperToken(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "deployPeripheralContracts()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "deployPeripheralContracts((bool,bool,address[],address,uint256,uint256,uint256))"(configs: SuperfluidFrameworkDeployer.TestFrameworkConfigsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deployPureSuperToken(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, _initialSupply: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deploySuperTokenContracts(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deployTestFramework(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deployWrapperSuperToken(_underlyingName: PromiseOrValue<string>, _underlyingSymbol: PromiseOrValue<string>, _decimals: PromiseOrValue<BigNumberish>, _mintLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeStep(step: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getFramework(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNumSteps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=SuperfluidFrameworkDeployer.d.ts.map