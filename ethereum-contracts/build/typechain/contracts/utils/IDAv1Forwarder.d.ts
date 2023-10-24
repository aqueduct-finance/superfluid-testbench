import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface IDAv1ForwarderInterface extends utils.Interface {
    functions: {
        "approveSubscription(address,address,uint32,bytes)": FunctionFragment;
        "calculateDistribution(address,address,uint32,uint128)": FunctionFragment;
        "createIndex(address,uint32,bytes)": FunctionFragment;
        "deleteSubscription(address,address,uint32,address,bytes)": FunctionFragment;
        "distribute(address,uint32,uint128,bytes)": FunctionFragment;
        "getIndex(address,address,uint32)": FunctionFragment;
        "getPublisherId(address,uint32)": FunctionFragment;
        "getSubscription(address,address,uint32,address)": FunctionFragment;
        "getSubscriptionByID(address,bytes32)": FunctionFragment;
        "getSubscriptionId(address,bytes32)": FunctionFragment;
        "listSubscriptions(address,address)": FunctionFragment;
        "revokeSubscription(address,address,uint32,bytes)": FunctionFragment;
        "updateIndex(address,uint32,uint128,bytes)": FunctionFragment;
        "updateSubscriptionUnits(address,uint32,address,uint128,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "approveSubscription" | "calculateDistribution" | "createIndex" | "deleteSubscription" | "distribute" | "getIndex" | "getPublisherId" | "getSubscription" | "getSubscriptionByID" | "getSubscriptionId" | "listSubscriptions" | "revokeSubscription" | "updateIndex" | "updateSubscriptionUnits"): FunctionFragment;
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
    encodeFunctionData(functionFragment: "getPublisherId", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getSubscription", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getSubscriptionByID", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getSubscriptionId", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "listSubscriptions", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
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
    encodeFunctionData(functionFragment: "updateSubscriptionUnits", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "approveSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateDistribution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPublisherId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSubscriptionByID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSubscriptionId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "listSubscriptions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSubscriptionUnits", data: BytesLike): Result;
    events: {};
}
export interface IDAv1Forwarder extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IDAv1ForwarderInterface;
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
        approveSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        calculateDistribution(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            actualAmount: BigNumber;
            newIndexValue: BigNumber;
        }>;
        createIndex(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deleteSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        distribute(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
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
        getPublisherId(publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            publisherId: string;
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
        getSubscriptionByID(token: PromiseOrValue<string>, subscriptionId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
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
        getSubscriptionId(subscriber: PromiseOrValue<string>, publisherId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            subscriptionId: string;
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
        revokeSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateIndex(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, indexValue: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateSubscriptionUnits(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    approveSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    calculateDistribution(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        actualAmount: BigNumber;
        newIndexValue: BigNumber;
    }>;
    createIndex(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deleteSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    distribute(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
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
    getPublisherId(publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
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
    getSubscriptionByID(token: PromiseOrValue<string>, subscriptionId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
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
    getSubscriptionId(subscriber: PromiseOrValue<string>, publisherId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    listSubscriptions(token: PromiseOrValue<string>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        string[],
        number[],
        BigNumber[]
    ] & {
        publishers: string[];
        indexIds: number[];
        unitsList: BigNumber[];
    }>;
    revokeSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateIndex(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, indexValue: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateSubscriptionUnits(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        approveSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        calculateDistribution(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            actualAmount: BigNumber;
            newIndexValue: BigNumber;
        }>;
        createIndex(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        deleteSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        distribute(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
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
        getPublisherId(publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
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
        getSubscriptionByID(token: PromiseOrValue<string>, subscriptionId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
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
        getSubscriptionId(subscriber: PromiseOrValue<string>, publisherId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        listSubscriptions(token: PromiseOrValue<string>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string[],
            number[],
            BigNumber[]
        ] & {
            publishers: string[];
            indexIds: number[];
            unitsList: BigNumber[];
        }>;
        revokeSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        updateIndex(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, indexValue: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        updateSubscriptionUnits(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        approveSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        calculateDistribution(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        createIndex(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deleteSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        distribute(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getIndex(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPublisherId(publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getSubscriptionByID(token: PromiseOrValue<string>, subscriptionId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getSubscriptionId(subscriber: PromiseOrValue<string>, publisherId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        listSubscriptions(token: PromiseOrValue<string>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        revokeSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateIndex(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, indexValue: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateSubscriptionUnits(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        approveSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        calculateDistribution(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createIndex(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deleteSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        distribute(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getIndex(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPublisherId(publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSubscriptionByID(token: PromiseOrValue<string>, subscriptionId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSubscriptionId(subscriber: PromiseOrValue<string>, publisherId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        listSubscriptions(token: PromiseOrValue<string>, subscriber: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revokeSubscription(token: PromiseOrValue<string>, publisher: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateIndex(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, indexValue: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateSubscriptionUnits(token: PromiseOrValue<string>, indexId: PromiseOrValue<BigNumberish>, subscriber: PromiseOrValue<string>, units: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IDAv1Forwarder.d.ts.map