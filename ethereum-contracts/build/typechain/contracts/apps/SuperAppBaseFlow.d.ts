import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface SuperAppBaseFlowInterface extends utils.Interface {
    functions: {
        "CFAV1_TYPE()": FunctionFragment;
        "afterAgreementCreated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
        "afterAgreementTerminated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
        "afterAgreementUpdated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
        "beforeAgreementCreated(address,address,bytes32,bytes,bytes)": FunctionFragment;
        "beforeAgreementTerminated(address,address,bytes32,bytes,bytes)": FunctionFragment;
        "beforeAgreementUpdated(address,address,bytes32,bytes,bytes)": FunctionFragment;
        "host()": FunctionFragment;
        "isAcceptedSuperToken(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "CFAV1_TYPE" | "afterAgreementCreated" | "afterAgreementTerminated" | "afterAgreementUpdated" | "beforeAgreementCreated" | "beforeAgreementTerminated" | "beforeAgreementUpdated" | "host" | "isAcceptedSuperToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "CFAV1_TYPE", values?: undefined): string;
    encodeFunctionData(functionFragment: "afterAgreementCreated", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "afterAgreementTerminated", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "afterAgreementUpdated", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "beforeAgreementCreated", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "beforeAgreementTerminated", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "beforeAgreementUpdated", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "host", values?: undefined): string;
    encodeFunctionData(functionFragment: "isAcceptedSuperToken", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "CFAV1_TYPE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "afterAgreementCreated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "afterAgreementTerminated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "afterAgreementUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beforeAgreementCreated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beforeAgreementTerminated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beforeAgreementUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "host", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAcceptedSuperToken", data: BytesLike): Result;
    events: {};
}
export interface SuperAppBaseFlow extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SuperAppBaseFlowInterface;
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
        CFAV1_TYPE(overrides?: CallOverrides): Promise<[string]>;
        afterAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        afterAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        afterAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        beforeAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        beforeAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        beforeAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        host(overrides?: CallOverrides): Promise<[string]>;
        isAcceptedSuperToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    CFAV1_TYPE(overrides?: CallOverrides): Promise<string>;
    afterAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    afterAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    afterAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    beforeAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    beforeAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    beforeAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    host(overrides?: CallOverrides): Promise<string>;
    isAcceptedSuperToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        CFAV1_TYPE(overrides?: CallOverrides): Promise<string>;
        afterAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        afterAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        afterAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        beforeAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        beforeAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        beforeAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        host(overrides?: CallOverrides): Promise<string>;
        isAcceptedSuperToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        CFAV1_TYPE(overrides?: CallOverrides): Promise<BigNumber>;
        afterAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        afterAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        afterAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        beforeAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        beforeAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        beforeAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        host(overrides?: CallOverrides): Promise<BigNumber>;
        isAcceptedSuperToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        CFAV1_TYPE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        afterAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        afterAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        afterAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        beforeAgreementCreated(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beforeAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beforeAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, arg2: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        host(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAcceptedSuperToken(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=SuperAppBaseFlow.d.ts.map