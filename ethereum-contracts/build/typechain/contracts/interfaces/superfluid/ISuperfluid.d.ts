import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export declare namespace ISuperfluid {
    type OperationStruct = {
        operationType: PromiseOrValue<BigNumberish>;
        target: PromiseOrValue<string>;
        data: PromiseOrValue<BytesLike>;
    };
    type OperationStructOutput = [number, string, string] & {
        operationType: number;
        target: string;
        data: string;
    };
    type ContextStruct = {
        appCallbackLevel: PromiseOrValue<BigNumberish>;
        callType: PromiseOrValue<BigNumberish>;
        timestamp: PromiseOrValue<BigNumberish>;
        msgSender: PromiseOrValue<string>;
        agreementSelector: PromiseOrValue<BytesLike>;
        userData: PromiseOrValue<BytesLike>;
        appCreditGranted: PromiseOrValue<BigNumberish>;
        appCreditWantedDeprecated: PromiseOrValue<BigNumberish>;
        appCreditUsed: PromiseOrValue<BigNumberish>;
        appAddress: PromiseOrValue<string>;
        appCreditToken: PromiseOrValue<string>;
    };
    type ContextStructOutput = [
        number,
        number,
        BigNumber,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string
    ] & {
        appCallbackLevel: number;
        callType: number;
        timestamp: BigNumber;
        msgSender: string;
        agreementSelector: string;
        userData: string;
        appCreditGranted: BigNumber;
        appCreditWantedDeprecated: BigNumber;
        appCreditUsed: BigNumber;
        appAddress: string;
        appCreditToken: string;
    };
}
export interface ISuperfluidInterface extends utils.Interface {
    functions: {
        "addToAgreementClassesBitmap(uint256,bytes32)": FunctionFragment;
        "allowCompositeApp(address)": FunctionFragment;
        "appCallbackPop(bytes,int256)": FunctionFragment;
        "appCallbackPush(bytes,address,uint256,int256,address)": FunctionFragment;
        "batchCall((uint32,address,bytes)[])": FunctionFragment;
        "callAgreement(address,bytes,bytes)": FunctionFragment;
        "callAgreementWithContext(address,bytes,bytes,bytes)": FunctionFragment;
        "callAppAction(address,bytes)": FunctionFragment;
        "callAppActionWithContext(address,bytes,bytes)": FunctionFragment;
        "callAppAfterCallback(address,bytes,bool,bytes)": FunctionFragment;
        "callAppBeforeCallback(address,bytes,bool,bytes)": FunctionFragment;
        "ctxUseCredit(bytes,int256)": FunctionFragment;
        "decodeCtx(bytes)": FunctionFragment;
        "forwardBatchCall((uint32,address,bytes)[])": FunctionFragment;
        "getAgreementClass(bytes32)": FunctionFragment;
        "getAppCallbackLevel(address)": FunctionFragment;
        "getAppManifest(address)": FunctionFragment;
        "getGovernance()": FunctionFragment;
        "getNow()": FunctionFragment;
        "getSuperTokenFactory()": FunctionFragment;
        "getSuperTokenFactoryLogic()": FunctionFragment;
        "isAgreementClassListed(address)": FunctionFragment;
        "isAgreementTypeListed(bytes32)": FunctionFragment;
        "isApp(address)": FunctionFragment;
        "isAppJailed(address)": FunctionFragment;
        "isCompositeAppAllowed(address,address)": FunctionFragment;
        "isCtxValid(bytes)": FunctionFragment;
        "jailApp(bytes,address,uint256)": FunctionFragment;
        "mapAgreementClasses(uint256)": FunctionFragment;
        "registerAgreementClass(address)": FunctionFragment;
        "registerApp(uint256)": FunctionFragment;
        "registerAppByFactory(address,uint256)": FunctionFragment;
        "registerAppWithKey(uint256,string)": FunctionFragment;
        "removeFromAgreementClassesBitmap(uint256,bytes32)": FunctionFragment;
        "replaceGovernance(address)": FunctionFragment;
        "updateAgreementClass(address)": FunctionFragment;
        "updateSuperTokenFactory(address)": FunctionFragment;
        "updateSuperTokenLogic(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addToAgreementClassesBitmap" | "allowCompositeApp" | "appCallbackPop" | "appCallbackPush" | "batchCall" | "callAgreement" | "callAgreementWithContext" | "callAppAction" | "callAppActionWithContext" | "callAppAfterCallback" | "callAppBeforeCallback" | "ctxUseCredit" | "decodeCtx" | "forwardBatchCall" | "getAgreementClass" | "getAppCallbackLevel" | "getAppManifest" | "getGovernance" | "getNow" | "getSuperTokenFactory" | "getSuperTokenFactoryLogic" | "isAgreementClassListed" | "isAgreementTypeListed" | "isApp" | "isAppJailed" | "isCompositeAppAllowed" | "isCtxValid" | "jailApp" | "mapAgreementClasses" | "registerAgreementClass" | "registerApp" | "registerAppByFactory" | "registerAppWithKey" | "removeFromAgreementClassesBitmap" | "replaceGovernance" | "updateAgreementClass" | "updateSuperTokenFactory" | "updateSuperTokenLogic"): FunctionFragment;
    encodeFunctionData(functionFragment: "addToAgreementClassesBitmap", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "allowCompositeApp", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "appCallbackPop", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "appCallbackPush", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "batchCall", values: [ISuperfluid.OperationStruct[]]): string;
    encodeFunctionData(functionFragment: "callAgreement", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "callAgreementWithContext", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "callAppAction", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "callAppActionWithContext", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "callAppAfterCallback", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "callAppBeforeCallback", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "ctxUseCredit", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "decodeCtx", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "forwardBatchCall", values: [ISuperfluid.OperationStruct[]]): string;
    encodeFunctionData(functionFragment: "getAgreementClass", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getAppCallbackLevel", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getAppManifest", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getGovernance", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNow", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSuperTokenFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSuperTokenFactoryLogic", values?: undefined): string;
    encodeFunctionData(functionFragment: "isAgreementClassListed", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isAgreementTypeListed", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "isApp", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isAppJailed", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isCompositeAppAllowed", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isCtxValid", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "jailApp", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "mapAgreementClasses", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "registerAgreementClass", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "registerApp", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "registerAppByFactory", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "registerAppWithKey", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "removeFromAgreementClassesBitmap", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "replaceGovernance", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateAgreementClass", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateSuperTokenFactory", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateSuperTokenLogic", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "addToAgreementClassesBitmap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowCompositeApp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "appCallbackPop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "appCallbackPush", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callAgreement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callAgreementWithContext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callAppAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callAppActionWithContext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callAppAfterCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callAppBeforeCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ctxUseCredit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decodeCtx", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forwardBatchCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAgreementClass", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAppCallbackLevel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAppManifest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGovernance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSuperTokenFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSuperTokenFactoryLogic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAgreementClassListed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAgreementTypeListed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAppJailed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCompositeAppAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCtxValid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "jailApp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mapAgreementClasses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerAgreementClass", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerApp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerAppByFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerAppWithKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeFromAgreementClassesBitmap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "replaceGovernance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAgreementClass", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSuperTokenFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSuperTokenLogic", data: BytesLike): Result;
    events: {
        "AgreementClassRegistered(bytes32,address)": EventFragment;
        "AgreementClassUpdated(bytes32,address)": EventFragment;
        "AppRegistered(address)": EventFragment;
        "GovernanceReplaced(address,address)": EventFragment;
        "Jail(address,uint256)": EventFragment;
        "SuperTokenFactoryUpdated(address)": EventFragment;
        "SuperTokenLogicUpdated(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AgreementClassRegistered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AgreementClassUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AppRegistered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GovernanceReplaced"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Jail"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SuperTokenFactoryUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SuperTokenLogicUpdated"): EventFragment;
}
export interface AgreementClassRegisteredEventObject {
    agreementType: string;
    code: string;
}
export type AgreementClassRegisteredEvent = TypedEvent<[
    string,
    string
], AgreementClassRegisteredEventObject>;
export type AgreementClassRegisteredEventFilter = TypedEventFilter<AgreementClassRegisteredEvent>;
export interface AgreementClassUpdatedEventObject {
    agreementType: string;
    code: string;
}
export type AgreementClassUpdatedEvent = TypedEvent<[
    string,
    string
], AgreementClassUpdatedEventObject>;
export type AgreementClassUpdatedEventFilter = TypedEventFilter<AgreementClassUpdatedEvent>;
export interface AppRegisteredEventObject {
    app: string;
}
export type AppRegisteredEvent = TypedEvent<[string], AppRegisteredEventObject>;
export type AppRegisteredEventFilter = TypedEventFilter<AppRegisteredEvent>;
export interface GovernanceReplacedEventObject {
    oldGov: string;
    newGov: string;
}
export type GovernanceReplacedEvent = TypedEvent<[
    string,
    string
], GovernanceReplacedEventObject>;
export type GovernanceReplacedEventFilter = TypedEventFilter<GovernanceReplacedEvent>;
export interface JailEventObject {
    app: string;
    reason: BigNumber;
}
export type JailEvent = TypedEvent<[string, BigNumber], JailEventObject>;
export type JailEventFilter = TypedEventFilter<JailEvent>;
export interface SuperTokenFactoryUpdatedEventObject {
    newFactory: string;
}
export type SuperTokenFactoryUpdatedEvent = TypedEvent<[
    string
], SuperTokenFactoryUpdatedEventObject>;
export type SuperTokenFactoryUpdatedEventFilter = TypedEventFilter<SuperTokenFactoryUpdatedEvent>;
export interface SuperTokenLogicUpdatedEventObject {
    token: string;
    code: string;
}
export type SuperTokenLogicUpdatedEvent = TypedEvent<[
    string,
    string
], SuperTokenLogicUpdatedEventObject>;
export type SuperTokenLogicUpdatedEventFilter = TypedEventFilter<SuperTokenLogicUpdatedEvent>;
export interface ISuperfluid extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISuperfluidInterface;
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
        addToAgreementClassesBitmap(bitmap: PromiseOrValue<BigNumberish>, agreementType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber] & {
            newBitmap: BigNumber;
        }>;
        allowCompositeApp(targetApp: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        appCallbackPop(ctx: PromiseOrValue<BytesLike>, appCreditUsedDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        appCallbackPush(ctx: PromiseOrValue<BytesLike>, app: PromiseOrValue<string>, appCreditGranted: PromiseOrValue<BigNumberish>, appCreditUsed: PromiseOrValue<BigNumberish>, appCreditToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        batchCall(operations: ISuperfluid.OperationStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callAgreement(agreementClass: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callAgreementWithContext(agreementClass: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, userData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callAppAction(app: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callAppActionWithContext(app: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callAppAfterCallback(app: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, isTermination: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callAppBeforeCallback(app: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, isTermination: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        ctxUseCredit(ctx: PromiseOrValue<BytesLike>, appCreditUsedMore: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decodeCtx(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ISuperfluid.ContextStructOutput
        ] & {
            context: ISuperfluid.ContextStructOutput;
        }>;
        forwardBatchCall(operations: ISuperfluid.OperationStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAgreementClass(agreementType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            agreementClass: string;
        }>;
        getAppCallbackLevel(app: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[number] & {
            appCallbackLevel: number;
        }>;
        getAppManifest(app: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            boolean,
            boolean,
            BigNumber
        ] & {
            isSuperApp: boolean;
            isJailed: boolean;
            noopMask: BigNumber;
        }>;
        getGovernance(overrides?: CallOverrides): Promise<[string] & {
            governance: string;
        }>;
        getNow(overrides?: CallOverrides): Promise<[BigNumber]>;
        getSuperTokenFactory(overrides?: CallOverrides): Promise<[string] & {
            factory: string;
        }>;
        getSuperTokenFactoryLogic(overrides?: CallOverrides): Promise<[string] & {
            logic: string;
        }>;
        isAgreementClassListed(agreementClass: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean] & {
            yes: boolean;
        }>;
        isAgreementTypeListed(agreementType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean] & {
            yes: boolean;
        }>;
        isApp(app: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isAppJailed(app: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean] & {
            isJail: boolean;
        }>;
        isCompositeAppAllowed(app: PromiseOrValue<string>, targetApp: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean] & {
            isAppAllowed: boolean;
        }>;
        isCtxValid(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        jailApp(ctx: PromiseOrValue<BytesLike>, app: PromiseOrValue<string>, reason: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mapAgreementClasses(bitmap: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            agreementClasses: string[];
        }>;
        registerAgreementClass(agreementClassLogic: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        registerApp(configWord: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        registerAppByFactory(app: PromiseOrValue<string>, configWord: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        registerAppWithKey(configWord: PromiseOrValue<BigNumberish>, registrationKey: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeFromAgreementClassesBitmap(bitmap: PromiseOrValue<BigNumberish>, agreementType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber] & {
            newBitmap: BigNumber;
        }>;
        replaceGovernance(newGov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateAgreementClass(agreementClassLogic: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateSuperTokenFactory(newFactory: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateSuperTokenLogic(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addToAgreementClassesBitmap(bitmap: PromiseOrValue<BigNumberish>, agreementType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    allowCompositeApp(targetApp: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    appCallbackPop(ctx: PromiseOrValue<BytesLike>, appCreditUsedDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    appCallbackPush(ctx: PromiseOrValue<BytesLike>, app: PromiseOrValue<string>, appCreditGranted: PromiseOrValue<BigNumberish>, appCreditUsed: PromiseOrValue<BigNumberish>, appCreditToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    batchCall(operations: ISuperfluid.OperationStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callAgreement(agreementClass: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callAgreementWithContext(agreementClass: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, userData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callAppAction(app: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callAppActionWithContext(app: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callAppAfterCallback(app: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, isTermination: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callAppBeforeCallback(app: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, isTermination: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    ctxUseCredit(ctx: PromiseOrValue<BytesLike>, appCreditUsedMore: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decodeCtx(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<ISuperfluid.ContextStructOutput>;
    forwardBatchCall(operations: ISuperfluid.OperationStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAgreementClass(agreementType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getAppCallbackLevel(app: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
    getAppManifest(app: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        boolean,
        boolean,
        BigNumber
    ] & {
        isSuperApp: boolean;
        isJailed: boolean;
        noopMask: BigNumber;
    }>;
    getGovernance(overrides?: CallOverrides): Promise<string>;
    getNow(overrides?: CallOverrides): Promise<BigNumber>;
    getSuperTokenFactory(overrides?: CallOverrides): Promise<string>;
    getSuperTokenFactoryLogic(overrides?: CallOverrides): Promise<string>;
    isAgreementClassListed(agreementClass: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isAgreementTypeListed(agreementType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    isApp(app: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isAppJailed(app: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isCompositeAppAllowed(app: PromiseOrValue<string>, targetApp: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isCtxValid(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    jailApp(ctx: PromiseOrValue<BytesLike>, app: PromiseOrValue<string>, reason: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mapAgreementClasses(bitmap: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    registerAgreementClass(agreementClassLogic: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    registerApp(configWord: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    registerAppByFactory(app: PromiseOrValue<string>, configWord: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    registerAppWithKey(configWord: PromiseOrValue<BigNumberish>, registrationKey: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeFromAgreementClassesBitmap(bitmap: PromiseOrValue<BigNumberish>, agreementType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    replaceGovernance(newGov: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateAgreementClass(agreementClassLogic: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateSuperTokenFactory(newFactory: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateSuperTokenLogic(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addToAgreementClassesBitmap(bitmap: PromiseOrValue<BigNumberish>, agreementType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        allowCompositeApp(targetApp: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        appCallbackPop(ctx: PromiseOrValue<BytesLike>, appCreditUsedDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        appCallbackPush(ctx: PromiseOrValue<BytesLike>, app: PromiseOrValue<string>, appCreditGranted: PromiseOrValue<BigNumberish>, appCreditUsed: PromiseOrValue<BigNumberish>, appCreditToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        batchCall(operations: ISuperfluid.OperationStruct[], overrides?: CallOverrides): Promise<void>;
        callAgreement(agreementClass: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        callAgreementWithContext(agreementClass: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, userData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string, string] & {
            newCtx: string;
            returnedData: string;
        }>;
        callAppAction(app: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        callAppActionWithContext(app: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        callAppAfterCallback(app: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, isTermination: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        callAppBeforeCallback(app: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, isTermination: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        ctxUseCredit(ctx: PromiseOrValue<BytesLike>, appCreditUsedMore: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        decodeCtx(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<ISuperfluid.ContextStructOutput>;
        forwardBatchCall(operations: ISuperfluid.OperationStruct[], overrides?: CallOverrides): Promise<void>;
        getAgreementClass(agreementType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getAppCallbackLevel(app: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        getAppManifest(app: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            boolean,
            boolean,
            BigNumber
        ] & {
            isSuperApp: boolean;
            isJailed: boolean;
            noopMask: BigNumber;
        }>;
        getGovernance(overrides?: CallOverrides): Promise<string>;
        getNow(overrides?: CallOverrides): Promise<BigNumber>;
        getSuperTokenFactory(overrides?: CallOverrides): Promise<string>;
        getSuperTokenFactoryLogic(overrides?: CallOverrides): Promise<string>;
        isAgreementClassListed(agreementClass: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isAgreementTypeListed(agreementType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        isApp(app: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isAppJailed(app: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isCompositeAppAllowed(app: PromiseOrValue<string>, targetApp: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isCtxValid(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        jailApp(ctx: PromiseOrValue<BytesLike>, app: PromiseOrValue<string>, reason: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        mapAgreementClasses(bitmap: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        registerAgreementClass(agreementClassLogic: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        registerApp(configWord: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        registerAppByFactory(app: PromiseOrValue<string>, configWord: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        registerAppWithKey(configWord: PromiseOrValue<BigNumberish>, registrationKey: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        removeFromAgreementClassesBitmap(bitmap: PromiseOrValue<BigNumberish>, agreementType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        replaceGovernance(newGov: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateAgreementClass(agreementClassLogic: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateSuperTokenFactory(newFactory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateSuperTokenLogic(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AgreementClassRegistered(bytes32,address)"(agreementType?: null, code?: null): AgreementClassRegisteredEventFilter;
        AgreementClassRegistered(agreementType?: null, code?: null): AgreementClassRegisteredEventFilter;
        "AgreementClassUpdated(bytes32,address)"(agreementType?: null, code?: null): AgreementClassUpdatedEventFilter;
        AgreementClassUpdated(agreementType?: null, code?: null): AgreementClassUpdatedEventFilter;
        "AppRegistered(address)"(app?: PromiseOrValue<string> | null): AppRegisteredEventFilter;
        AppRegistered(app?: PromiseOrValue<string> | null): AppRegisteredEventFilter;
        "GovernanceReplaced(address,address)"(oldGov?: null, newGov?: null): GovernanceReplacedEventFilter;
        GovernanceReplaced(oldGov?: null, newGov?: null): GovernanceReplacedEventFilter;
        "Jail(address,uint256)"(app?: PromiseOrValue<string> | null, reason?: null): JailEventFilter;
        Jail(app?: PromiseOrValue<string> | null, reason?: null): JailEventFilter;
        "SuperTokenFactoryUpdated(address)"(newFactory?: null): SuperTokenFactoryUpdatedEventFilter;
        SuperTokenFactoryUpdated(newFactory?: null): SuperTokenFactoryUpdatedEventFilter;
        "SuperTokenLogicUpdated(address,address)"(token?: PromiseOrValue<string> | null, code?: null): SuperTokenLogicUpdatedEventFilter;
        SuperTokenLogicUpdated(token?: PromiseOrValue<string> | null, code?: null): SuperTokenLogicUpdatedEventFilter;
    };
    estimateGas: {
        addToAgreementClassesBitmap(bitmap: PromiseOrValue<BigNumberish>, agreementType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        allowCompositeApp(targetApp: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        appCallbackPop(ctx: PromiseOrValue<BytesLike>, appCreditUsedDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        appCallbackPush(ctx: PromiseOrValue<BytesLike>, app: PromiseOrValue<string>, appCreditGranted: PromiseOrValue<BigNumberish>, appCreditUsed: PromiseOrValue<BigNumberish>, appCreditToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        batchCall(operations: ISuperfluid.OperationStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callAgreement(agreementClass: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callAgreementWithContext(agreementClass: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, userData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callAppAction(app: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callAppActionWithContext(app: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callAppAfterCallback(app: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, isTermination: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callAppBeforeCallback(app: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, isTermination: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        ctxUseCredit(ctx: PromiseOrValue<BytesLike>, appCreditUsedMore: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decodeCtx(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        forwardBatchCall(operations: ISuperfluid.OperationStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAgreementClass(agreementType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getAppCallbackLevel(app: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAppManifest(app: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getGovernance(overrides?: CallOverrides): Promise<BigNumber>;
        getNow(overrides?: CallOverrides): Promise<BigNumber>;
        getSuperTokenFactory(overrides?: CallOverrides): Promise<BigNumber>;
        getSuperTokenFactoryLogic(overrides?: CallOverrides): Promise<BigNumber>;
        isAgreementClassListed(agreementClass: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isAgreementTypeListed(agreementType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        isApp(app: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isAppJailed(app: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isCompositeAppAllowed(app: PromiseOrValue<string>, targetApp: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isCtxValid(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        jailApp(ctx: PromiseOrValue<BytesLike>, app: PromiseOrValue<string>, reason: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mapAgreementClasses(bitmap: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        registerAgreementClass(agreementClassLogic: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        registerApp(configWord: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        registerAppByFactory(app: PromiseOrValue<string>, configWord: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        registerAppWithKey(configWord: PromiseOrValue<BigNumberish>, registrationKey: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeFromAgreementClassesBitmap(bitmap: PromiseOrValue<BigNumberish>, agreementType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        replaceGovernance(newGov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateAgreementClass(agreementClassLogic: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateSuperTokenFactory(newFactory: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateSuperTokenLogic(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addToAgreementClassesBitmap(bitmap: PromiseOrValue<BigNumberish>, agreementType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowCompositeApp(targetApp: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        appCallbackPop(ctx: PromiseOrValue<BytesLike>, appCreditUsedDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        appCallbackPush(ctx: PromiseOrValue<BytesLike>, app: PromiseOrValue<string>, appCreditGranted: PromiseOrValue<BigNumberish>, appCreditUsed: PromiseOrValue<BigNumberish>, appCreditToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        batchCall(operations: ISuperfluid.OperationStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callAgreement(agreementClass: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callAgreementWithContext(agreementClass: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, userData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callAppAction(app: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callAppActionWithContext(app: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callAppAfterCallback(app: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, isTermination: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callAppBeforeCallback(app: PromiseOrValue<string>, callData: PromiseOrValue<BytesLike>, isTermination: PromiseOrValue<boolean>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        ctxUseCredit(ctx: PromiseOrValue<BytesLike>, appCreditUsedMore: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decodeCtx(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forwardBatchCall(operations: ISuperfluid.OperationStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAgreementClass(agreementType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAppCallbackLevel(app: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAppManifest(app: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGovernance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSuperTokenFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSuperTokenFactoryLogic(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAgreementClassListed(agreementClass: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAgreementTypeListed(agreementType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApp(app: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAppJailed(app: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isCompositeAppAllowed(app: PromiseOrValue<string>, targetApp: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isCtxValid(ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        jailApp(ctx: PromiseOrValue<BytesLike>, app: PromiseOrValue<string>, reason: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mapAgreementClasses(bitmap: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerAgreementClass(agreementClassLogic: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        registerApp(configWord: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        registerAppByFactory(app: PromiseOrValue<string>, configWord: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        registerAppWithKey(configWord: PromiseOrValue<BigNumberish>, registrationKey: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeFromAgreementClassesBitmap(bitmap: PromiseOrValue<BigNumberish>, agreementType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        replaceGovernance(newGov: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateAgreementClass(agreementClassLogic: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateSuperTokenFactory(newFactory: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateSuperTokenLogic(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ISuperfluid.d.ts.map