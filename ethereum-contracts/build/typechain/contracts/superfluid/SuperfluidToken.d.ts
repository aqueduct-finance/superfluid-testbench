import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface SuperfluidTokenInterface extends utils.Interface {
    functions: {
        "createAgreement(bytes32,bytes32[])": FunctionFragment;
        "getAccountActiveAgreements(address)": FunctionFragment;
        "getAgreementData(address,bytes32,uint256)": FunctionFragment;
        "getAgreementStateSlot(address,address,uint256,uint256)": FunctionFragment;
        "getHost()": FunctionFragment;
        "isAccountCritical(address,uint256)": FunctionFragment;
        "isAccountCriticalNow(address)": FunctionFragment;
        "isAccountSolvent(address,uint256)": FunctionFragment;
        "isAccountSolventNow(address)": FunctionFragment;
        "makeLiquidationPayoutsV2(bytes32,bytes,address,bool,address,uint256,int256)": FunctionFragment;
        "realtimeBalanceOf(address,uint256)": FunctionFragment;
        "realtimeBalanceOfNow(address)": FunctionFragment;
        "settleBalance(address,int256)": FunctionFragment;
        "terminateAgreement(bytes32,uint256)": FunctionFragment;
        "updateAgreementData(bytes32,bytes32[])": FunctionFragment;
        "updateAgreementStateSlot(address,uint256,bytes32[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createAgreement" | "getAccountActiveAgreements" | "getAgreementData" | "getAgreementStateSlot" | "getHost" | "isAccountCritical" | "isAccountCriticalNow" | "isAccountSolvent" | "isAccountSolventNow" | "makeLiquidationPayoutsV2" | "realtimeBalanceOf" | "realtimeBalanceOfNow" | "settleBalance" | "terminateAgreement" | "updateAgreementData" | "updateAgreementStateSlot"): FunctionFragment;
    encodeFunctionData(functionFragment: "createAgreement", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "getAccountActiveAgreements", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getAgreementData", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getAgreementStateSlot", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getHost", values?: undefined): string;
    encodeFunctionData(functionFragment: "isAccountCritical", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isAccountCriticalNow", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isAccountSolvent", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isAccountSolventNow", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "makeLiquidationPayoutsV2", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "realtimeBalanceOf", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "realtimeBalanceOfNow", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "settleBalance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "terminateAgreement", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "updateAgreementData", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "updateAgreementStateSlot", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>[]
    ]): string;
    decodeFunctionResult(functionFragment: "createAgreement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountActiveAgreements", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAgreementData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAgreementStateSlot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getHost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAccountCritical", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAccountCriticalNow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAccountSolvent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAccountSolventNow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makeLiquidationPayoutsV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "realtimeBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "realtimeBalanceOfNow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settleBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "terminateAgreement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAgreementData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAgreementStateSlot", data: BytesLike): Result;
    events: {
        "AgreementCreated(address,bytes32,bytes32[])": EventFragment;
        "AgreementLiquidated(address,bytes32,address,address,uint256)": EventFragment;
        "AgreementLiquidatedBy(address,address,bytes32,address,address,uint256,uint256)": EventFragment;
        "AgreementLiquidatedV2(address,bytes32,address,address,address,uint256,int256,bytes)": EventFragment;
        "AgreementStateUpdated(address,address,uint256)": EventFragment;
        "AgreementTerminated(address,bytes32)": EventFragment;
        "AgreementUpdated(address,bytes32,bytes32[])": EventFragment;
        "Bailout(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AgreementCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AgreementLiquidated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AgreementLiquidatedBy"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AgreementLiquidatedV2"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AgreementStateUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AgreementTerminated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AgreementUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Bailout"): EventFragment;
}
export interface AgreementCreatedEventObject {
    agreementClass: string;
    id: string;
    data: string[];
}
export type AgreementCreatedEvent = TypedEvent<[
    string,
    string,
    string[]
], AgreementCreatedEventObject>;
export type AgreementCreatedEventFilter = TypedEventFilter<AgreementCreatedEvent>;
export interface AgreementLiquidatedEventObject {
    agreementClass: string;
    id: string;
    penaltyAccount: string;
    rewardAccount: string;
    rewardAmount: BigNumber;
}
export type AgreementLiquidatedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber
], AgreementLiquidatedEventObject>;
export type AgreementLiquidatedEventFilter = TypedEventFilter<AgreementLiquidatedEvent>;
export interface AgreementLiquidatedByEventObject {
    liquidatorAccount: string;
    agreementClass: string;
    id: string;
    penaltyAccount: string;
    bondAccount: string;
    rewardAmount: BigNumber;
    bailoutAmount: BigNumber;
}
export type AgreementLiquidatedByEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], AgreementLiquidatedByEventObject>;
export type AgreementLiquidatedByEventFilter = TypedEventFilter<AgreementLiquidatedByEvent>;
export interface AgreementLiquidatedV2EventObject {
    agreementClass: string;
    id: string;
    liquidatorAccount: string;
    targetAccount: string;
    rewardAmountReceiver: string;
    rewardAmount: BigNumber;
    targetAccountBalanceDelta: BigNumber;
    liquidationTypeData: string;
}
export type AgreementLiquidatedV2Event = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    string
], AgreementLiquidatedV2EventObject>;
export type AgreementLiquidatedV2EventFilter = TypedEventFilter<AgreementLiquidatedV2Event>;
export interface AgreementStateUpdatedEventObject {
    agreementClass: string;
    account: string;
    slotId: BigNumber;
}
export type AgreementStateUpdatedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], AgreementStateUpdatedEventObject>;
export type AgreementStateUpdatedEventFilter = TypedEventFilter<AgreementStateUpdatedEvent>;
export interface AgreementTerminatedEventObject {
    agreementClass: string;
    id: string;
}
export type AgreementTerminatedEvent = TypedEvent<[
    string,
    string
], AgreementTerminatedEventObject>;
export type AgreementTerminatedEventFilter = TypedEventFilter<AgreementTerminatedEvent>;
export interface AgreementUpdatedEventObject {
    agreementClass: string;
    id: string;
    data: string[];
}
export type AgreementUpdatedEvent = TypedEvent<[
    string,
    string,
    string[]
], AgreementUpdatedEventObject>;
export type AgreementUpdatedEventFilter = TypedEventFilter<AgreementUpdatedEvent>;
export interface BailoutEventObject {
    bailoutAccount: string;
    bailoutAmount: BigNumber;
}
export type BailoutEvent = TypedEvent<[string, BigNumber], BailoutEventObject>;
export type BailoutEventFilter = TypedEventFilter<BailoutEvent>;
export interface SuperfluidToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SuperfluidTokenInterface;
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
        createAgreement(id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAccountActiveAgreements(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]]>;
        getAgreementData(agreementClass: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            data: string[];
        }>;
        getAgreementStateSlot(agreementClass: PromiseOrValue<string>, account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            slotData: string[];
        }>;
        getHost(overrides?: CallOverrides): Promise<[string] & {
            host: string;
        }>;
        isAccountCritical(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean] & {
            isCritical: boolean;
        }>;
        isAccountCriticalNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean] & {
            isCritical: boolean;
        }>;
        isAccountSolvent(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean] & {
            isSolvent: boolean;
        }>;
        isAccountSolventNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean] & {
            isSolvent: boolean;
        }>;
        makeLiquidationPayoutsV2(id: PromiseOrValue<BytesLike>, liquidationTypeData: PromiseOrValue<BytesLike>, liquidatorAccount: PromiseOrValue<string>, useDefaultRewardAccount: PromiseOrValue<boolean>, targetAccount: PromiseOrValue<string>, rewardAmount: PromiseOrValue<BigNumberish>, targetAccountBalanceDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        realtimeBalanceOf(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            availableBalance: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        realtimeBalanceOfNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            availableBalance: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
            timestamp: BigNumber;
        }>;
        settleBalance(account: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        terminateAgreement(id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateAgreementData(id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateAgreementStateSlot(account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, slotData: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    createAgreement(id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAccountActiveAgreements(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
    getAgreementData(agreementClass: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getAgreementStateSlot(agreementClass: PromiseOrValue<string>, account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getHost(overrides?: CallOverrides): Promise<string>;
    isAccountCritical(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    isAccountCriticalNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isAccountSolvent(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    isAccountSolventNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    makeLiquidationPayoutsV2(id: PromiseOrValue<BytesLike>, liquidationTypeData: PromiseOrValue<BytesLike>, liquidatorAccount: PromiseOrValue<string>, useDefaultRewardAccount: PromiseOrValue<boolean>, targetAccount: PromiseOrValue<string>, rewardAmount: PromiseOrValue<BigNumberish>, targetAccountBalanceDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    realtimeBalanceOf(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        availableBalance: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
    }>;
    realtimeBalanceOfNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        availableBalance: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
        timestamp: BigNumber;
    }>;
    settleBalance(account: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    terminateAgreement(id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateAgreementData(id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateAgreementStateSlot(account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, slotData: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        createAgreement(id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        getAccountActiveAgreements(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        getAgreementData(agreementClass: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getAgreementStateSlot(agreementClass: PromiseOrValue<string>, account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getHost(overrides?: CallOverrides): Promise<string>;
        isAccountCritical(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        isAccountCriticalNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isAccountSolvent(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        isAccountSolventNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        makeLiquidationPayoutsV2(id: PromiseOrValue<BytesLike>, liquidationTypeData: PromiseOrValue<BytesLike>, liquidatorAccount: PromiseOrValue<string>, useDefaultRewardAccount: PromiseOrValue<boolean>, targetAccount: PromiseOrValue<string>, rewardAmount: PromiseOrValue<BigNumberish>, targetAccountBalanceDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        realtimeBalanceOf(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            availableBalance: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        realtimeBalanceOfNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            availableBalance: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
            timestamp: BigNumber;
        }>;
        settleBalance(account: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        terminateAgreement(id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateAgreementData(id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        updateAgreementStateSlot(account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, slotData: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AgreementCreated(address,bytes32,bytes32[])"(agreementClass?: PromiseOrValue<string> | null, id?: null, data?: null): AgreementCreatedEventFilter;
        AgreementCreated(agreementClass?: PromiseOrValue<string> | null, id?: null, data?: null): AgreementCreatedEventFilter;
        "AgreementLiquidated(address,bytes32,address,address,uint256)"(agreementClass?: PromiseOrValue<string> | null, id?: null, penaltyAccount?: PromiseOrValue<string> | null, rewardAccount?: PromiseOrValue<string> | null, rewardAmount?: null): AgreementLiquidatedEventFilter;
        AgreementLiquidated(agreementClass?: PromiseOrValue<string> | null, id?: null, penaltyAccount?: PromiseOrValue<string> | null, rewardAccount?: PromiseOrValue<string> | null, rewardAmount?: null): AgreementLiquidatedEventFilter;
        "AgreementLiquidatedBy(address,address,bytes32,address,address,uint256,uint256)"(liquidatorAccount?: null, agreementClass?: PromiseOrValue<string> | null, id?: null, penaltyAccount?: PromiseOrValue<string> | null, bondAccount?: PromiseOrValue<string> | null, rewardAmount?: null, bailoutAmount?: null): AgreementLiquidatedByEventFilter;
        AgreementLiquidatedBy(liquidatorAccount?: null, agreementClass?: PromiseOrValue<string> | null, id?: null, penaltyAccount?: PromiseOrValue<string> | null, bondAccount?: PromiseOrValue<string> | null, rewardAmount?: null, bailoutAmount?: null): AgreementLiquidatedByEventFilter;
        "AgreementLiquidatedV2(address,bytes32,address,address,address,uint256,int256,bytes)"(agreementClass?: PromiseOrValue<string> | null, id?: null, liquidatorAccount?: PromiseOrValue<string> | null, targetAccount?: PromiseOrValue<string> | null, rewardAmountReceiver?: null, rewardAmount?: null, targetAccountBalanceDelta?: null, liquidationTypeData?: null): AgreementLiquidatedV2EventFilter;
        AgreementLiquidatedV2(agreementClass?: PromiseOrValue<string> | null, id?: null, liquidatorAccount?: PromiseOrValue<string> | null, targetAccount?: PromiseOrValue<string> | null, rewardAmountReceiver?: null, rewardAmount?: null, targetAccountBalanceDelta?: null, liquidationTypeData?: null): AgreementLiquidatedV2EventFilter;
        "AgreementStateUpdated(address,address,uint256)"(agreementClass?: PromiseOrValue<string> | null, account?: PromiseOrValue<string> | null, slotId?: null): AgreementStateUpdatedEventFilter;
        AgreementStateUpdated(agreementClass?: PromiseOrValue<string> | null, account?: PromiseOrValue<string> | null, slotId?: null): AgreementStateUpdatedEventFilter;
        "AgreementTerminated(address,bytes32)"(agreementClass?: PromiseOrValue<string> | null, id?: null): AgreementTerminatedEventFilter;
        AgreementTerminated(agreementClass?: PromiseOrValue<string> | null, id?: null): AgreementTerminatedEventFilter;
        "AgreementUpdated(address,bytes32,bytes32[])"(agreementClass?: PromiseOrValue<string> | null, id?: null, data?: null): AgreementUpdatedEventFilter;
        AgreementUpdated(agreementClass?: PromiseOrValue<string> | null, id?: null, data?: null): AgreementUpdatedEventFilter;
        "Bailout(address,uint256)"(bailoutAccount?: PromiseOrValue<string> | null, bailoutAmount?: null): BailoutEventFilter;
        Bailout(bailoutAccount?: PromiseOrValue<string> | null, bailoutAmount?: null): BailoutEventFilter;
    };
    estimateGas: {
        createAgreement(id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAccountActiveAgreements(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAgreementData(agreementClass: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAgreementStateSlot(agreementClass: PromiseOrValue<string>, account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getHost(overrides?: CallOverrides): Promise<BigNumber>;
        isAccountCritical(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isAccountCriticalNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isAccountSolvent(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isAccountSolventNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        makeLiquidationPayoutsV2(id: PromiseOrValue<BytesLike>, liquidationTypeData: PromiseOrValue<BytesLike>, liquidatorAccount: PromiseOrValue<string>, useDefaultRewardAccount: PromiseOrValue<boolean>, targetAccount: PromiseOrValue<string>, rewardAmount: PromiseOrValue<BigNumberish>, targetAccountBalanceDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        realtimeBalanceOf(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        realtimeBalanceOfNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        settleBalance(account: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        terminateAgreement(id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateAgreementData(id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateAgreementStateSlot(account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, slotData: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        createAgreement(id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAccountActiveAgreements(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAgreementData(agreementClass: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAgreementStateSlot(agreementClass: PromiseOrValue<string>, account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getHost(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAccountCritical(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAccountCriticalNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAccountSolvent(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAccountSolventNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        makeLiquidationPayoutsV2(id: PromiseOrValue<BytesLike>, liquidationTypeData: PromiseOrValue<BytesLike>, liquidatorAccount: PromiseOrValue<string>, useDefaultRewardAccount: PromiseOrValue<boolean>, targetAccount: PromiseOrValue<string>, rewardAmount: PromiseOrValue<BigNumberish>, targetAccountBalanceDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        realtimeBalanceOf(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        realtimeBalanceOfNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        settleBalance(account: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        terminateAgreement(id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateAgreementData(id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateAgreementStateSlot(account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, slotData: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=SuperfluidToken.d.ts.map