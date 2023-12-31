import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface IConstantFlowAgreementV1Interface extends utils.Interface {
    functions: {
        "agreementType()": FunctionFragment;
        "authorizeFlowOperatorWithFullControl(address,address,bytes)": FunctionFragment;
        "createFlow(address,address,int96,bytes)": FunctionFragment;
        "createFlowByOperator(address,address,address,int96,bytes)": FunctionFragment;
        "decreaseFlowRateAllowance(address,address,int96,bytes)": FunctionFragment;
        "deleteFlow(address,address,address,bytes)": FunctionFragment;
        "deleteFlowByOperator(address,address,address,bytes)": FunctionFragment;
        "getAccountFlowInfo(address,address)": FunctionFragment;
        "getDepositRequiredForFlowRate(address,int96)": FunctionFragment;
        "getFlow(address,address,address)": FunctionFragment;
        "getFlowByID(address,bytes32)": FunctionFragment;
        "getFlowOperatorData(address,address,address)": FunctionFragment;
        "getFlowOperatorDataByID(address,bytes32)": FunctionFragment;
        "getMaximumFlowRateFromDeposit(address,uint256)": FunctionFragment;
        "getNetFlow(address,address)": FunctionFragment;
        "increaseFlowRateAllowance(address,address,int96,bytes)": FunctionFragment;
        "isPatricianPeriod(address,address,uint256)": FunctionFragment;
        "isPatricianPeriodNow(address,address)": FunctionFragment;
        "realtimeBalanceOf(address,address,uint256)": FunctionFragment;
        "revokeFlowOperatorWithFullControl(address,address,bytes)": FunctionFragment;
        "updateFlow(address,address,int96,bytes)": FunctionFragment;
        "updateFlowByOperator(address,address,address,int96,bytes)": FunctionFragment;
        "updateFlowOperatorPermissions(address,address,uint8,int96,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "agreementType" | "authorizeFlowOperatorWithFullControl" | "createFlow" | "createFlowByOperator" | "decreaseFlowRateAllowance" | "deleteFlow" | "deleteFlowByOperator" | "getAccountFlowInfo" | "getDepositRequiredForFlowRate" | "getFlow" | "getFlowByID" | "getFlowOperatorData" | "getFlowOperatorDataByID" | "getMaximumFlowRateFromDeposit" | "getNetFlow" | "increaseFlowRateAllowance" | "isPatricianPeriod" | "isPatricianPeriodNow" | "realtimeBalanceOf" | "revokeFlowOperatorWithFullControl" | "updateFlow" | "updateFlowByOperator" | "updateFlowOperatorPermissions"): FunctionFragment;
    encodeFunctionData(functionFragment: "agreementType", values?: undefined): string;
    encodeFunctionData(functionFragment: "authorizeFlowOperatorWithFullControl", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "createFlow", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "createFlowByOperator", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "decreaseFlowRateAllowance", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "deleteFlow", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "deleteFlowByOperator", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getAccountFlowInfo", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getDepositRequiredForFlowRate", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getFlow", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getFlowByID", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getFlowOperatorData", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getFlowOperatorDataByID", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getMaximumFlowRateFromDeposit", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getNetFlow", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "increaseFlowRateAllowance", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "isPatricianPeriod", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "isPatricianPeriodNow", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "realtimeBalanceOf", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "revokeFlowOperatorWithFullControl", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "updateFlow", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "updateFlowByOperator", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "updateFlowOperatorPermissions", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "agreementType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizeFlowOperatorWithFullControl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createFlow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createFlowByOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseFlowRateAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteFlow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteFlowByOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountFlowInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDepositRequiredForFlowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFlow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFlowByID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFlowOperatorData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFlowOperatorDataByID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaximumFlowRateFromDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNetFlow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseFlowRateAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPatricianPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPatricianPeriodNow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "realtimeBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeFlowOperatorWithFullControl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFlow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFlowByOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFlowOperatorPermissions", data: BytesLike): Result;
    events: {
        "FlowOperatorUpdated(address,address,address,uint8,int96)": EventFragment;
        "FlowUpdated(address,address,address,int96,int256,int256,bytes)": EventFragment;
        "FlowUpdatedExtension(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "FlowOperatorUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FlowUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FlowUpdatedExtension"): EventFragment;
}
export interface FlowOperatorUpdatedEventObject {
    token: string;
    sender: string;
    flowOperator: string;
    permissions: number;
    flowRateAllowance: BigNumber;
}
export type FlowOperatorUpdatedEvent = TypedEvent<[
    string,
    string,
    string,
    number,
    BigNumber
], FlowOperatorUpdatedEventObject>;
export type FlowOperatorUpdatedEventFilter = TypedEventFilter<FlowOperatorUpdatedEvent>;
export interface FlowUpdatedEventObject {
    token: string;
    sender: string;
    receiver: string;
    flowRate: BigNumber;
    totalSenderFlowRate: BigNumber;
    totalReceiverFlowRate: BigNumber;
    userData: string;
}
export type FlowUpdatedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string
], FlowUpdatedEventObject>;
export type FlowUpdatedEventFilter = TypedEventFilter<FlowUpdatedEvent>;
export interface FlowUpdatedExtensionEventObject {
    flowOperator: string;
    deposit: BigNumber;
}
export type FlowUpdatedExtensionEvent = TypedEvent<[
    string,
    BigNumber
], FlowUpdatedExtensionEventObject>;
export type FlowUpdatedExtensionEventFilter = TypedEventFilter<FlowUpdatedExtensionEvent>;
export interface IConstantFlowAgreementV1 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IConstantFlowAgreementV1Interface;
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
        authorizeFlowOperatorWithFullControl(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createFlow(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createFlowByOperator(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decreaseFlowRateAllowance(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, subtractedFlowRateAllowance: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deleteFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deleteFlowByOperator(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAccountFlowInfo(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            timestamp: BigNumber;
            flowRate: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        getDepositRequiredForFlowRate(token: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            deposit: BigNumber;
        }>;
        getFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            timestamp: BigNumber;
            flowRate: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        getFlowByID(token: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            timestamp: BigNumber;
            flowRate: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        getFlowOperatorData(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string,
            number,
            BigNumber
        ] & {
            flowOperatorId: string;
            permissions: number;
            flowRateAllowance: BigNumber;
        }>;
        getFlowOperatorDataByID(token: PromiseOrValue<string>, flowOperatorId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            number,
            BigNumber
        ] & {
            permissions: number;
            flowRateAllowance: BigNumber;
        }>;
        getMaximumFlowRateFromDeposit(token: PromiseOrValue<string>, deposit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            flowRate: BigNumber;
        }>;
        getNetFlow(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            flowRate: BigNumber;
        }>;
        increaseFlowRateAllowance(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, addedFlowRateAllowance: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isPatricianPeriod(token: PromiseOrValue<string>, account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        isPatricianPeriodNow(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            isCurrentlyPatricianPeriod: boolean;
            timestamp: BigNumber;
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
        revokeFlowOperatorWithFullControl(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateFlow(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateFlowByOperator(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateFlowOperatorPermissions(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, permissions: PromiseOrValue<BigNumberish>, flowRateAllowance: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    agreementType(overrides?: CallOverrides): Promise<string>;
    authorizeFlowOperatorWithFullControl(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createFlow(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createFlowByOperator(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decreaseFlowRateAllowance(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, subtractedFlowRateAllowance: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deleteFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deleteFlowByOperator(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAccountFlowInfo(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        timestamp: BigNumber;
        flowRate: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
    }>;
    getDepositRequiredForFlowRate(token: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        timestamp: BigNumber;
        flowRate: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
    }>;
    getFlowByID(token: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        timestamp: BigNumber;
        flowRate: BigNumber;
        deposit: BigNumber;
        owedDeposit: BigNumber;
    }>;
    getFlowOperatorData(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        string,
        number,
        BigNumber
    ] & {
        flowOperatorId: string;
        permissions: number;
        flowRateAllowance: BigNumber;
    }>;
    getFlowOperatorDataByID(token: PromiseOrValue<string>, flowOperatorId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        number,
        BigNumber
    ] & {
        permissions: number;
        flowRateAllowance: BigNumber;
    }>;
    getMaximumFlowRateFromDeposit(token: PromiseOrValue<string>, deposit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getNetFlow(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    increaseFlowRateAllowance(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, addedFlowRateAllowance: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isPatricianPeriod(token: PromiseOrValue<string>, account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    isPatricianPeriodNow(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        boolean,
        BigNumber
    ] & {
        isCurrentlyPatricianPeriod: boolean;
        timestamp: BigNumber;
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
    revokeFlowOperatorWithFullControl(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateFlow(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateFlowByOperator(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateFlowOperatorPermissions(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, permissions: PromiseOrValue<BigNumberish>, flowRateAllowance: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        agreementType(overrides?: CallOverrides): Promise<string>;
        authorizeFlowOperatorWithFullControl(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        createFlow(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        createFlowByOperator(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        decreaseFlowRateAllowance(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, subtractedFlowRateAllowance: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        deleteFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        deleteFlowByOperator(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getAccountFlowInfo(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            timestamp: BigNumber;
            flowRate: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        getDepositRequiredForFlowRate(token: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            timestamp: BigNumber;
            flowRate: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        getFlowByID(token: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            timestamp: BigNumber;
            flowRate: BigNumber;
            deposit: BigNumber;
            owedDeposit: BigNumber;
        }>;
        getFlowOperatorData(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string,
            number,
            BigNumber
        ] & {
            flowOperatorId: string;
            permissions: number;
            flowRateAllowance: BigNumber;
        }>;
        getFlowOperatorDataByID(token: PromiseOrValue<string>, flowOperatorId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            number,
            BigNumber
        ] & {
            permissions: number;
            flowRateAllowance: BigNumber;
        }>;
        getMaximumFlowRateFromDeposit(token: PromiseOrValue<string>, deposit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getNetFlow(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        increaseFlowRateAllowance(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, addedFlowRateAllowance: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        isPatricianPeriod(token: PromiseOrValue<string>, account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        isPatricianPeriodNow(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            isCurrentlyPatricianPeriod: boolean;
            timestamp: BigNumber;
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
        revokeFlowOperatorWithFullControl(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        updateFlow(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        updateFlowByOperator(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        updateFlowOperatorPermissions(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, permissions: PromiseOrValue<BigNumberish>, flowRateAllowance: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "FlowOperatorUpdated(address,address,address,uint8,int96)"(token?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null, flowOperator?: PromiseOrValue<string> | null, permissions?: null, flowRateAllowance?: null): FlowOperatorUpdatedEventFilter;
        FlowOperatorUpdated(token?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null, flowOperator?: PromiseOrValue<string> | null, permissions?: null, flowRateAllowance?: null): FlowOperatorUpdatedEventFilter;
        "FlowUpdated(address,address,address,int96,int256,int256,bytes)"(token?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, flowRate?: null, totalSenderFlowRate?: null, totalReceiverFlowRate?: null, userData?: null): FlowUpdatedEventFilter;
        FlowUpdated(token?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, flowRate?: null, totalSenderFlowRate?: null, totalReceiverFlowRate?: null, userData?: null): FlowUpdatedEventFilter;
        "FlowUpdatedExtension(address,uint256)"(flowOperator?: PromiseOrValue<string> | null, deposit?: null): FlowUpdatedExtensionEventFilter;
        FlowUpdatedExtension(flowOperator?: PromiseOrValue<string> | null, deposit?: null): FlowUpdatedExtensionEventFilter;
    };
    estimateGas: {
        agreementType(overrides?: CallOverrides): Promise<BigNumber>;
        authorizeFlowOperatorWithFullControl(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createFlow(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createFlowByOperator(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decreaseFlowRateAllowance(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, subtractedFlowRateAllowance: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deleteFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deleteFlowByOperator(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAccountFlowInfo(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getDepositRequiredForFlowRate(token: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getFlowByID(token: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getFlowOperatorData(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getFlowOperatorDataByID(token: PromiseOrValue<string>, flowOperatorId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getMaximumFlowRateFromDeposit(token: PromiseOrValue<string>, deposit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getNetFlow(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        increaseFlowRateAllowance(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, addedFlowRateAllowance: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isPatricianPeriod(token: PromiseOrValue<string>, account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isPatricianPeriodNow(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        realtimeBalanceOf(token: PromiseOrValue<string>, account: PromiseOrValue<string>, time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        revokeFlowOperatorWithFullControl(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateFlow(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateFlowByOperator(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateFlowOperatorPermissions(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, permissions: PromiseOrValue<BigNumberish>, flowRateAllowance: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        agreementType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        authorizeFlowOperatorWithFullControl(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createFlow(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createFlowByOperator(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decreaseFlowRateAllowance(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, subtractedFlowRateAllowance: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deleteFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deleteFlowByOperator(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAccountFlowInfo(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDepositRequiredForFlowRate(token: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFlow(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFlowByID(token: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFlowOperatorData(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFlowOperatorDataByID(token: PromiseOrValue<string>, flowOperatorId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMaximumFlowRateFromDeposit(token: PromiseOrValue<string>, deposit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNetFlow(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseFlowRateAllowance(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, addedFlowRateAllowance: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isPatricianPeriod(token: PromiseOrValue<string>, account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPatricianPeriodNow(token: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        realtimeBalanceOf(token: PromiseOrValue<string>, account: PromiseOrValue<string>, time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revokeFlowOperatorWithFullControl(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateFlow(token: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateFlowByOperator(token: PromiseOrValue<string>, sender: PromiseOrValue<string>, receiver: PromiseOrValue<string>, flowRate: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateFlowOperatorPermissions(token: PromiseOrValue<string>, flowOperator: PromiseOrValue<string>, permissions: PromiseOrValue<BigNumberish>, flowRateAllowance: PromiseOrValue<BigNumberish>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IConstantFlowAgreementV1.d.ts.map