import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface ISuperAppInterface extends utils.Interface {
    functions: {
        "afterAgreementCreated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
        "afterAgreementTerminated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
        "afterAgreementUpdated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
        "beforeAgreementCreated(address,address,bytes32,bytes,bytes)": FunctionFragment;
        "beforeAgreementTerminated(address,address,bytes32,bytes,bytes)": FunctionFragment;
        "beforeAgreementUpdated(address,address,bytes32,bytes,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "afterAgreementCreated" | "afterAgreementTerminated" | "afterAgreementUpdated" | "beforeAgreementCreated" | "beforeAgreementTerminated" | "beforeAgreementUpdated"): FunctionFragment;
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
    decodeFunctionResult(functionFragment: "afterAgreementCreated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "afterAgreementTerminated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "afterAgreementUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beforeAgreementCreated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beforeAgreementTerminated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beforeAgreementUpdated", data: BytesLike): Result;
    events: {};
}
export interface ISuperApp extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISuperAppInterface;
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
        afterAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        afterAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        afterAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        beforeAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            cbdata: string;
        }>;
        beforeAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            cbdata: string;
        }>;
        beforeAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            cbdata: string;
        }>;
    };
    afterAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    afterAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    afterAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    beforeAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    beforeAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    beforeAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        afterAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        afterAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        afterAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        beforeAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        beforeAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        beforeAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        afterAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        afterAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        afterAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        beforeAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        beforeAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        beforeAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        afterAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        afterAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        afterAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, cbdata: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        beforeAgreementCreated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beforeAgreementTerminated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beforeAgreementUpdated(superToken: PromiseOrValue<string>, agreementClass: PromiseOrValue<string>, agreementId: PromiseOrValue<BytesLike>, agreementData: PromiseOrValue<BytesLike>, ctx: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ISuperApp.d.ts.map