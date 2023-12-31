import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface IInstantDistributionAgreementV1Interface extends utils.Interface {
    functions: {
        "agreementType()": FunctionFragment;
        "approveSubscription(address,address,uint32,bytes)": FunctionFragment;
        "calculateDistribution(address,address,uint32,uint256)": FunctionFragment;
        "claim(address,address,uint32,address,bytes)": FunctionFragment;
        "createIndex(address,uint32,bytes)": FunctionFragment;
        "deleteSubscription(address,address,uint32,address,bytes)": FunctionFragment;
        "distribute(address,uint32,uint256,bytes)": FunctionFragment;
        "getIndex(address,address,uint32)": FunctionFragment;
        "getSubscription(address,address,uint32,address)": FunctionFragment;
        "getSubscriptionByID(address,bytes32)": FunctionFragment;
        "listSubscriptions(address,address)": FunctionFragment;
        "realtimeBalanceOf(address,address,uint256)": FunctionFragment;
        "revokeSubscription(address,address,uint32,bytes)": FunctionFragment;
        "updateIndex(address,uint32,uint128,bytes)": FunctionFragment;
        "updateSubscription(address,uint32,address,uint128,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "agreementType" | "approveSubscription" | "calculateDistribution" | "claim" | "createIndex" | "deleteSubscription" | "distribute" | "getIndex" | "getSubscription" | "getSubscriptionByID" | "listSubscriptions" | "realtimeBalanceOf" | "revokeSubscription" | "updateIndex" | "updateSubscription"): FunctionFragment;
    encodeFunctionData(functionFragment: "agreementType", values?: undefined): string;
    encodeFunctionData(functionFragment: "approveSubscription", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "calculateDistribution", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "claim", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "createIndex", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "deleteSubscription", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "distribute", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getIndex", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getSubscription", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getSubscriptionByID", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "listSubscriptions", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "realtimeBalanceOf", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "revokeSubscription", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "updateIndex", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "updateSubscription", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "agreementType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateDistribution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSubscriptionByID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "listSubscriptions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "realtimeBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSubscription", data: BytesLike): Result;
    events: {
        "IndexCreated(address,address,uint32,bytes)": EventFragment;
        "IndexDistributionClaimed(address,address,uint32,address,uint256)": EventFragment;
        "IndexSubscribed(address,address,uint32,address,bytes)": EventFragment;
        "IndexUnitsUpdated(address,address,uint32,address,uint128,bytes)": EventFragment;
        "IndexUnsubscribed(address,address,uint32,address,bytes)": EventFragment;
        "IndexUpdated(address,address,uint32,uint128,uint128,uint128,uint128,bytes)": EventFragment;
        "SubscriptionApproved(address,address,address,uint32,bytes)": EventFragment;
        "SubscriptionDistributionClaimed(address,address,address,uint32,uint256)": EventFragment;
        "SubscriptionRevoked(address,address,address,uint32,bytes)": EventFragment;
        "SubscriptionUnitsUpdated(address,address,address,uint32,uint128,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "IndexCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IndexDistributionClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IndexSubscribed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IndexUnitsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IndexUnsubscribed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IndexUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SubscriptionApproved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SubscriptionDistributionClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SubscriptionRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SubscriptionUnitsUpdated"): EventFragment;
}
export interface IndexCreatedEventObject {
    token: string;
    publisher: string;
    indexId: number;
    userData: string;
}
export type IndexCreatedEvent = TypedEvent<[
    string,
    string,
    number,
    string
], IndexCreatedEventObject>;
export type IndexCreatedEventFilter = TypedEventFilter<IndexCreatedEvent>;
export interface IndexDistributionClaimedEventObject {
    token: string;
    publisher: string;
    indexId: number;
    subscriber: string;
    amount: BigNumber;
}
export type IndexDistributionClaimedEvent = TypedEvent<[
    string,
    string,
    number,
    string,
    BigNumber
], IndexDistributionClaimedEventObject>;
export type IndexDistributionClaimedEventFilter = TypedEventFilter<IndexDistributionClaimedEvent>;
export interface IndexSubscribedEventObject {
    token: string;
    publisher: string;
    indexId: number;
    subscriber: string;
    userData: string;
}
export type IndexSubscribedEvent = TypedEvent<[
    string,
    string,
    number,
    string,
    string
], IndexSubscribedEventObject>;
export type IndexSubscribedEventFilter = TypedEventFilter<IndexSubscribedEvent>;
export interface IndexUnitsUpdatedEventObject {
    token: string;
    publisher: string;
    indexId: number;
    subscriber: string;
    units: BigNumber;
    userData: string;
}
export type IndexUnitsUpdatedEvent = TypedEvent<[
    string,
    string,
    number,
    string,
    BigNumber,
    string
], IndexUnitsUpdatedEventObject>;
export type IndexUnitsUpdatedEventFilter = TypedEventFilter<IndexUnitsUpdatedEvent>;
export interface IndexUnsubscribedEventObject {
    token: string;
    publisher: string;
    indexId: number;
    subscriber: string;
    userData: string;
}
export type IndexUnsubscribedEvent = TypedEvent<[
    string,
    string,
    number,
    string,
    string
], IndexUnsubscribedEventObject>;
export type IndexUnsubscribedEventFilter = TypedEventFilter<IndexUnsubscribedEvent>;
export interface IndexUpdatedEventObject {
    token: string;
    publisher: string;
    indexId: number;
    oldIndexValue: BigNumber;
    newIndexValue: BigNumber;
    totalUnitsPending: BigNumber;
    totalUnitsApproved: BigNumber;
    userData: string;
}
export type IndexUpdatedEvent = TypedEvent<[
    string,
    string,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
], IndexUpdatedEventObject>;
export type IndexUpdatedEventFilter = TypedEventFilter<IndexUpdatedEvent>;
export interface SubscriptionApprovedEventObject {
    token: string;
    subscriber: string;
    publisher: string;
    indexId: number;
    userData: string;
}
export type SubscriptionApprovedEvent = TypedEvent<[
    string,
    string,
    string,
    number,
    string
], SubscriptionApprovedEventObject>;
export type SubscriptionApprovedEventFilter = TypedEventFilter<SubscriptionApprovedEvent>;
export interface SubscriptionDistributionClaimedEventObject {
    token: string;
    subscriber: string;
    publisher: string;
    indexId: number;
    amount: BigNumber;
}
export type SubscriptionDistributionClaimedEvent = TypedEvent<[
    string,
    string,
    string,
    number,
    BigNumber
], SubscriptionDistributionClaimedEventObject>;
export type SubscriptionDistributionClaimedEventFilter = TypedEventFilter<SubscriptionDistributionClaimedEvent>;
export interface SubscriptionRevokedEventObject {
    token: string;
    subscriber: string;
    publisher: string;
    indexId: number;
    userData: string;
}
export type SubscriptionRevokedEvent = TypedEvent<[
    string,
    string,
    string,
    number,
    string
], SubscriptionRevokedEventObject>;
export type SubscriptionRevokedEventFilter = TypedEventFilter<SubscriptionRevokedEvent>;
export interface SubscriptionUnitsUpdatedEventObject {
    token: string;
    subscriber: string;
    publisher: string;
    indexId: number;
    units: BigNumber;
    userData: string;
}
export type SubscriptionUnitsUpdatedEvent = TypedEvent<[
    string,
    string,
    string,
    number,
    BigNumber,
    string
], SubscriptionUnitsUpdatedEventObject>;
export type SubscriptionUnitsUpdatedEventFilter = TypedEventFilter<SubscriptionUnitsUpdatedEvent>;
export interface IInstantDistributionAgreementV1 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IInstantDistributionAgreementV1Interface;
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
        agreementType(overrides?: CallOverrides): Promise<[string]>;
        approveSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        calculateDistribution(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            actualAmount: BigNumber;
            newIndexValue: BigNumber;
        }>;
        claim(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createIndex(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deleteSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        distribute(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getIndex(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            exist: boolean;
            indexValue: BigNumber;
            totalUnitsApproved: BigNumber;
            totalUnitsPending: BigNumber;
        }>;
        getSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            boolean,
            boolean,
            BigNumber,
            BigNumber
        ] & {
            exist: boolean;
            approved: boolean;
            units: BigNumber;
            pendingDistribution: BigNumber;
        }>;
        getSubscriptionByID(token: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            string,
            number,
            boolean,
            BigNumber,
            BigNumber
        ] & {
            publisher: string;
            indexId: number;
            approved: boolean;
            units: BigNumber;
            pendingDistribution: BigNumber;
        }>;
        listSubscriptions(token: PromiseOrValue<string>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string[],
            number[],
            BigNumber[]
        ] & {
            publishers: string[];
            indexIds: number[];
            unitsList: BigNumber[];
        }>;
        realtimeBalanceOf(token: PromiseOrValue<string>, account: PromiseOrValue<string>, time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            dynamicBalance: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        revokeSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateIndex(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, indexValue: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateSubscription(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    agreementType(overrides?: CallOverrides): Promise<string>;
    approveSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    calculateDistribution(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        actualAmount: BigNumber;
        newIndexValue: BigNumber;
    }>;
    claim(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createIndex(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deleteSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    distribute(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getIndex(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        boolean,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        exist: boolean;
        indexValue: BigNumber;
        totalUnitsApproved: BigNumber;
        totalUnitsPending: BigNumber;
    }>;
    getSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        boolean,
        boolean,
        BigNumber,
        BigNumber
    ] & {
        exist: boolean;
        approved: boolean;
        units: BigNumber;
        pendingDistribution: BigNumber;
    }>;
    getSubscriptionByID(token: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        string,
        number,
        boolean,
        BigNumber,
        BigNumber
    ] & {
        publisher: string;
        indexId: number;
        approved: boolean;
        units: BigNumber;
        pendingDistribution: BigNumber;
    }>;
    listSubscriptions(token: PromiseOrValue<string>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        string[],
        number[],
        BigNumber[]
    ] & {
        publishers: string[];
        indexIds: number[];
        unitsList: BigNumber[];
    }>;
    realtimeBalanceOf(token: PromiseOrValue<string>, account: PromiseOrValue<string>, time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        dynamicBalance: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
    }>;
    revokeSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateIndex(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, indexValue: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateSubscription(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        agreementType(overrides?: CallOverrides): Promise<string>;
        approveSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        calculateDistribution(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            actualAmount: BigNumber;
            newIndexValue: BigNumber;
        }>;
        claim(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        createIndex(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        deleteSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        distribute(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getIndex(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            exist: boolean;
            indexValue: BigNumber;
            totalUnitsApproved: BigNumber;
            totalUnitsPending: BigNumber;
        }>;
        getSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            boolean,
            boolean,
            BigNumber,
            BigNumber
        ] & {
            exist: boolean;
            approved: boolean;
            units: BigNumber;
            pendingDistribution: BigNumber;
        }>;
        getSubscriptionByID(token: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            string,
            number,
            boolean,
            BigNumber,
            BigNumber
        ] & {
            publisher: string;
            indexId: number;
            approved: boolean;
            units: BigNumber;
            pendingDistribution: BigNumber;
        }>;
        listSubscriptions(token: PromiseOrValue<string>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string[],
            number[],
            BigNumber[]
        ] & {
            publishers: string[];
            indexIds: number[];
            unitsList: BigNumber[];
        }>;
        realtimeBalanceOf(token: PromiseOrValue<string>, account: PromiseOrValue<string>, time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            dynamicBalance: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        revokeSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        updateIndex(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, indexValue: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        updateSubscription(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "IndexCreated(address,address,uint32,bytes)"(token?: PromiseOrValue<string> | null, publisher?: PromiseOrValue<string> | null, indexId?: PromiseOrValue<BigNumberish> | null, userData?: null): IndexCreatedEventFilter;
        IndexCreated(token?: PromiseOrValue<string> | null, publisher?: PromiseOrValue<string> | null, indexId?: PromiseOrValue<BigNumberish> | null, userData?: null): IndexCreatedEventFilter;
        "IndexDistributionClaimed(address,address,uint32,address,uint256)"(token?: PromiseOrValue<string> | null, publisher?: PromiseOrValue<string> | null, indexId?: PromiseOrValue<BigNumberish> | null, subscriber?: null, amount?: null): IndexDistributionClaimedEventFilter;
        IndexDistributionClaimed(token?: PromiseOrValue<string> | null, publisher?: PromiseOrValue<string> | null, indexId?: PromiseOrValue<BigNumberish> | null, subscriber?: null, amount?: null): IndexDistributionClaimedEventFilter;
        "IndexSubscribed(address,address,uint32,address,bytes)"(token?: PromiseOrValue<string> | null, publisher?: PromiseOrValue<string> | null, indexId?: PromiseOrValue<BigNumberish> | null, subscriber?: null, userData?: null): IndexSubscribedEventFilter;
        IndexSubscribed(token?: PromiseOrValue<string> | null, publisher?: PromiseOrValue<string> | null, indexId?: PromiseOrValue<BigNumberish> | null, subscriber?: null, userData?: null): IndexSubscribedEventFilter;
        "IndexUnitsUpdated(address,address,uint32,address,uint128,bytes)"(token?: PromiseOrValue<string> | null, publisher?: PromiseOrValue<string> | null, indexId?: PromiseOrValue<BigNumberish> | null, subscriber?: null, units?: null, userData?: null): IndexUnitsUpdatedEventFilter;
        IndexUnitsUpdated(token?: PromiseOrValue<string> | null, publisher?: PromiseOrValue<string> | null, indexId?: PromiseOrValue<BigNumberish> | null, subscriber?: null, units?: null, userData?: null): IndexUnitsUpdatedEventFilter;
        "IndexUnsubscribed(address,address,uint32,address,bytes)"(token?: PromiseOrValue<string> | null, publisher?: PromiseOrValue<string> | null, indexId?: PromiseOrValue<BigNumberish> | null, subscriber?: null, userData?: null): IndexUnsubscribedEventFilter;
        IndexUnsubscribed(token?: PromiseOrValue<string> | null, publisher?: PromiseOrValue<string> | null, indexId?: PromiseOrValue<BigNumberish> | null, subscriber?: null, userData?: null): IndexUnsubscribedEventFilter;
        "IndexUpdated(address,address,uint32,uint128,uint128,uint128,uint128,bytes)"(token?: PromiseOrValue<string> | null, publisher?: PromiseOrValue<string> | null, indexId?: PromiseOrValue<BigNumberish> | null, oldIndexValue?: null, newIndexValue?: null, totalUnitsPending?: null, totalUnitsApproved?: null, userData?: null): IndexUpdatedEventFilter;
        IndexUpdated(token?: PromiseOrValue<string> | null, publisher?: PromiseOrValue<string> | null, indexId?: PromiseOrValue<BigNumberish> | null, oldIndexValue?: null, newIndexValue?: null, totalUnitsPending?: null, totalUnitsApproved?: null, userData?: null): IndexUpdatedEventFilter;
        "SubscriptionApproved(address,address,address,uint32,bytes)"(token?: PromiseOrValue<string> | null, subscriber?: PromiseOrValue<string> | null, publisher?: null, indexId?: null, userData?: null): SubscriptionApprovedEventFilter;
        SubscriptionApproved(token?: PromiseOrValue<string> | null, subscriber?: PromiseOrValue<string> | null, publisher?: null, indexId?: null, userData?: null): SubscriptionApprovedEventFilter;
        "SubscriptionDistributionClaimed(address,address,address,uint32,uint256)"(token?: PromiseOrValue<string> | null, subscriber?: PromiseOrValue<string> | null, publisher?: null, indexId?: null, amount?: null): SubscriptionDistributionClaimedEventFilter;
        SubscriptionDistributionClaimed(token?: PromiseOrValue<string> | null, subscriber?: PromiseOrValue<string> | null, publisher?: null, indexId?: null, amount?: null): SubscriptionDistributionClaimedEventFilter;
        "SubscriptionRevoked(address,address,address,uint32,bytes)"(token?: PromiseOrValue<string> | null, subscriber?: PromiseOrValue<string> | null, publisher?: null, indexId?: null, userData?: null): SubscriptionRevokedEventFilter;
        SubscriptionRevoked(token?: PromiseOrValue<string> | null, subscriber?: PromiseOrValue<string> | null, publisher?: null, indexId?: null, userData?: null): SubscriptionRevokedEventFilter;
        "SubscriptionUnitsUpdated(address,address,address,uint32,uint128,bytes)"(token?: PromiseOrValue<string> | null, subscriber?: PromiseOrValue<string> | null, publisher?: null, indexId?: null, units?: null, userData?: null): SubscriptionUnitsUpdatedEventFilter;
        SubscriptionUnitsUpdated(token?: PromiseOrValue<string> | null, subscriber?: PromiseOrValue<string> | null, publisher?: null, indexId?: null, units?: null, userData?: null): SubscriptionUnitsUpdatedEventFilter;
    };
    estimateGas: {
        agreementType(overrides?: CallOverrides): Promise<BigNumber>;
        approveSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        calculateDistribution(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        claim(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createIndex(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deleteSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        distribute(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getIndex(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getSubscriptionByID(token: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        listSubscriptions(token: PromiseOrValue<string>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        realtimeBalanceOf(token: PromiseOrValue<string>, account: PromiseOrValue<string>, time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        revokeSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateIndex(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, indexValue: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateSubscription(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        agreementType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approveSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        calculateDistribution(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claim(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createIndex(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deleteSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        distribute(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getIndex(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSubscriptionByID(token: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        listSubscriptions(token: PromiseOrValue<string>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        realtimeBalanceOf(token: PromiseOrValue<string>, account: PromiseOrValue<string>, time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revokeSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateIndex(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, indexValue: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateSubscription(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IInstantDistributionAgreementV1.d.ts.map