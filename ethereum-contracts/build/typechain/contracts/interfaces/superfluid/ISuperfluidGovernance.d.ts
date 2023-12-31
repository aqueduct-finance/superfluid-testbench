import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface ISuperfluidGovernanceInterface extends utils.Interface {
    functions: {
        "batchUpdateSuperTokenLogic(address,address[])": FunctionFragment;
        "clearConfig(address,address,bytes32)": FunctionFragment;
        "getConfigAsAddress(address,address,bytes32)": FunctionFragment;
        "getConfigAsUint256(address,address,bytes32)": FunctionFragment;
        "registerAgreementClass(address,address)": FunctionFragment;
        "replaceGovernance(address,address)": FunctionFragment;
        "setConfig(address,address,bytes32,address)": FunctionFragment;
        "setConfig(address,address,bytes32,uint256)": FunctionFragment;
        "updateContracts(address,address,address[],address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "batchUpdateSuperTokenLogic" | "clearConfig" | "getConfigAsAddress" | "getConfigAsUint256" | "registerAgreementClass" | "replaceGovernance" | "setConfig(address,address,bytes32,address)" | "setConfig(address,address,bytes32,uint256)" | "updateContracts"): FunctionFragment;
    encodeFunctionData(functionFragment: "batchUpdateSuperTokenLogic", values: [PromiseOrValue<string>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "clearConfig", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getConfigAsAddress", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getConfigAsUint256", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "registerAgreementClass", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "replaceGovernance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setConfig(address,address,bytes32,address)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "setConfig(address,address,bytes32,uint256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "updateContracts", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "batchUpdateSuperTokenLogic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfigAsAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfigAsUint256", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerAgreementClass", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "replaceGovernance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfig(address,address,bytes32,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfig(address,address,bytes32,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateContracts", data: BytesLike): Result;
    events: {};
}
export interface ISuperfluidGovernance extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISuperfluidGovernanceInterface;
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
        batchUpdateSuperTokenLogic(host: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        clearConfig(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getConfigAsAddress(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            value: string;
        }>;
        getConfigAsUint256(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber] & {
            value: BigNumber;
        }>;
        registerAgreementClass(host: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        replaceGovernance(host: PromiseOrValue<string>, newGov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "setConfig(address,address,bytes32,address)"(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, value: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "setConfig(address,address,bytes32,uint256)"(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateContracts(host: PromiseOrValue<string>, hostNewLogic: PromiseOrValue<string>, agreementClassNewLogics: PromiseOrValue<string>[], superTokenFactoryNewLogic: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    batchUpdateSuperTokenLogic(host: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    clearConfig(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getConfigAsAddress(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getConfigAsUint256(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    registerAgreementClass(host: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    replaceGovernance(host: PromiseOrValue<string>, newGov: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "setConfig(address,address,bytes32,address)"(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, value: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "setConfig(address,address,bytes32,uint256)"(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateContracts(host: PromiseOrValue<string>, hostNewLogic: PromiseOrValue<string>, agreementClassNewLogics: PromiseOrValue<string>[], superTokenFactoryNewLogic: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        batchUpdateSuperTokenLogic(host: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        clearConfig(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getConfigAsAddress(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getConfigAsUint256(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        registerAgreementClass(host: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        replaceGovernance(host: PromiseOrValue<string>, newGov: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "setConfig(address,address,bytes32,address)"(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "setConfig(address,address,bytes32,uint256)"(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateContracts(host: PromiseOrValue<string>, hostNewLogic: PromiseOrValue<string>, agreementClassNewLogics: PromiseOrValue<string>[], superTokenFactoryNewLogic: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        batchUpdateSuperTokenLogic(host: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        clearConfig(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getConfigAsAddress(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getConfigAsUint256(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        registerAgreementClass(host: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        replaceGovernance(host: PromiseOrValue<string>, newGov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "setConfig(address,address,bytes32,address)"(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, value: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "setConfig(address,address,bytes32,uint256)"(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateContracts(host: PromiseOrValue<string>, hostNewLogic: PromiseOrValue<string>, agreementClassNewLogics: PromiseOrValue<string>[], superTokenFactoryNewLogic: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        batchUpdateSuperTokenLogic(host: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        clearConfig(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getConfigAsAddress(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getConfigAsUint256(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerAgreementClass(host: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        replaceGovernance(host: PromiseOrValue<string>, newGov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "setConfig(address,address,bytes32,address)"(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, value: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "setConfig(address,address,bytes32,uint256)"(host: PromiseOrValue<string>, superToken: PromiseOrValue<string>, key: PromiseOrValue<BytesLike>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateContracts(host: PromiseOrValue<string>, hostNewLogic: PromiseOrValue<string>, agreementClassNewLogics: PromiseOrValue<string>[], superTokenFactoryNewLogic: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ISuperfluidGovernance.d.ts.map