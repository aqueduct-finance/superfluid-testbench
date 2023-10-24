import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface CustomSuperTokenMockInterface extends utils.Interface {
    functions: {
        "CONSTANT_INFLOW_NFT()": FunctionFragment;
        "CONSTANT_OUTFLOW_NFT()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "authorizeOperator(address)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256,bytes)": FunctionFragment;
        "callSelfApproveFor(address,address,uint256)": FunctionFragment;
        "callSelfBurn(address,uint256,bytes)": FunctionFragment;
        "callSelfTransferFrom(address,address,address,uint256)": FunctionFragment;
        "createAgreement(bytes32,bytes32[])": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "defaultOperators()": FunctionFragment;
        "downgrade(uint256)": FunctionFragment;
        "downgradeTo(address,uint256)": FunctionFragment;
        "getAccountActiveAgreements(address)": FunctionFragment;
        "getAgreementData(address,bytes32,uint256)": FunctionFragment;
        "getAgreementStateSlot(address,address,uint256,uint256)": FunctionFragment;
        "getFirstCustomTokenStorageSlot()": FunctionFragment;
        "getHost()": FunctionFragment;
        "getUnderlyingToken()": FunctionFragment;
        "granularity()": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "initialize(address,uint8,string,string)": FunctionFragment;
        "initializeProxy(address)": FunctionFragment;
        "isAccountCritical(address,uint256)": FunctionFragment;
        "isAccountCriticalNow(address)": FunctionFragment;
        "isAccountSolvent(address,uint256)": FunctionFragment;
        "isAccountSolventNow(address)": FunctionFragment;
        "isOperatorFor(address,address)": FunctionFragment;
        "makeLiquidationPayoutsV2(bytes32,bytes,address,bool,address,uint256,int256)": FunctionFragment;
        "name()": FunctionFragment;
        "operationApprove(address,address,uint256)": FunctionFragment;
        "operationDecreaseAllowance(address,address,uint256)": FunctionFragment;
        "operationDowngrade(address,uint256)": FunctionFragment;
        "operationIncreaseAllowance(address,address,uint256)": FunctionFragment;
        "operationSend(address,address,uint256,bytes)": FunctionFragment;
        "operationTransferFrom(address,address,address,uint256)": FunctionFragment;
        "operationUpgrade(address,uint256)": FunctionFragment;
        "operatorBurn(address,uint256,bytes,bytes)": FunctionFragment;
        "operatorSend(address,address,uint256,bytes,bytes)": FunctionFragment;
        "realtimeBalanceOf(address,uint256)": FunctionFragment;
        "realtimeBalanceOfNow(address)": FunctionFragment;
        "revokeOperator(address)": FunctionFragment;
        "selfApproveFor(address,address,uint256)": FunctionFragment;
        "selfBurn(address,uint256,bytes)": FunctionFragment;
        "selfMint(address,uint256,bytes)": FunctionFragment;
        "selfTransferFrom(address,address,address,uint256)": FunctionFragment;
        "send(address,uint256,bytes)": FunctionFragment;
        "settleBalance(address,int256)": FunctionFragment;
        "symbol()": FunctionFragment;
        "terminateAgreement(bytes32,uint256)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferAll(address)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "updateAgreementData(bytes32,bytes32[])": FunctionFragment;
        "updateAgreementStateSlot(address,uint256,bytes32[])": FunctionFragment;
        "upgrade(uint256)": FunctionFragment;
        "upgradeTo(address,uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "CONSTANT_INFLOW_NFT" | "CONSTANT_OUTFLOW_NFT" | "allowance" | "approve" | "authorizeOperator" | "balanceOf" | "burn" | "callSelfApproveFor" | "callSelfBurn" | "callSelfTransferFrom" | "createAgreement" | "decimals" | "decreaseAllowance" | "defaultOperators" | "downgrade" | "downgradeTo" | "getAccountActiveAgreements" | "getAgreementData" | "getAgreementStateSlot" | "getFirstCustomTokenStorageSlot" | "getHost" | "getUnderlyingToken" | "granularity" | "increaseAllowance" | "initialize" | "initializeProxy" | "isAccountCritical" | "isAccountCriticalNow" | "isAccountSolvent" | "isAccountSolventNow" | "isOperatorFor" | "makeLiquidationPayoutsV2" | "name" | "operationApprove" | "operationDecreaseAllowance" | "operationDowngrade" | "operationIncreaseAllowance" | "operationSend" | "operationTransferFrom" | "operationUpgrade" | "operatorBurn" | "operatorSend" | "realtimeBalanceOf" | "realtimeBalanceOfNow" | "revokeOperator" | "selfApproveFor" | "selfBurn" | "selfMint" | "selfTransferFrom" | "send" | "settleBalance" | "symbol" | "terminateAgreement" | "totalSupply" | "transfer" | "transferAll" | "transferFrom" | "updateAgreementData" | "updateAgreementStateSlot" | "upgrade" | "upgradeTo"): FunctionFragment;
    encodeFunctionData(functionFragment: "CONSTANT_INFLOW_NFT", values?: undefined): string;
    encodeFunctionData(functionFragment: "CONSTANT_OUTFLOW_NFT", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "authorizeOperator", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "burn", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "callSelfApproveFor", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "callSelfBurn", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "callSelfTransferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "createAgreement", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "defaultOperators", values?: undefined): string;
    encodeFunctionData(functionFragment: "downgrade", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "downgradeTo", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
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
    encodeFunctionData(functionFragment: "getFirstCustomTokenStorageSlot", values?: undefined): string;
    encodeFunctionData(functionFragment: "getHost", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUnderlyingToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "granularity", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "initializeProxy", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isAccountCritical", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isAccountCriticalNow", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isAccountSolvent", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isAccountSolventNow", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isOperatorFor", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "makeLiquidationPayoutsV2", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "operationApprove", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "operationDecreaseAllowance", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "operationDowngrade", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "operationIncreaseAllowance", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "operationSend", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "operationTransferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "operationUpgrade", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "operatorBurn", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "operatorSend", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "realtimeBalanceOf", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "realtimeBalanceOfNow", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revokeOperator", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "selfApproveFor", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "selfBurn", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "selfMint", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "selfTransferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "send", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "settleBalance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "terminateAgreement", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferAll", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "updateAgreementData", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "updateAgreementStateSlot", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>[]
    ]): string;
    encodeFunctionData(functionFragment: "upgrade", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "CONSTANT_INFLOW_NFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CONSTANT_OUTFLOW_NFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizeOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callSelfApproveFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callSelfBurn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callSelfTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAgreement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultOperators", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "downgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "downgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountActiveAgreements", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAgreementData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAgreementStateSlot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFirstCustomTokenStorageSlot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getHost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUnderlyingToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "granularity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAccountCritical", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAccountCriticalNow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAccountSolvent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAccountSolventNow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOperatorFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makeLiquidationPayoutsV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operationApprove", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operationDecreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operationDowngrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operationIncreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operationSend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operationTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operationUpgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operatorBurn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operatorSend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "realtimeBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "realtimeBalanceOfNow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfApproveFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfBurn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settleBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "terminateAgreement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAgreementData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAgreementStateSlot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    events: {
        "AgreementCreated(address,bytes32,bytes32[])": EventFragment;
        "AgreementLiquidated(address,bytes32,address,address,uint256)": EventFragment;
        "AgreementLiquidatedBy(address,address,bytes32,address,address,uint256,uint256)": EventFragment;
        "AgreementLiquidatedV2(address,bytes32,address,address,address,uint256,int256,bytes)": EventFragment;
        "AgreementStateUpdated(address,address,uint256)": EventFragment;
        "AgreementTerminated(address,bytes32)": EventFragment;
        "AgreementUpdated(address,bytes32,bytes32[])": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "AuthorizedOperator(address,address)": EventFragment;
        "Bailout(address,uint256)": EventFragment;
        "Burned(address,address,uint256,bytes,bytes)": EventFragment;
        "ConstantInflowNFTCreated(address)": EventFragment;
        "ConstantOutflowNFTCreated(address)": EventFragment;
        "Minted(address,address,uint256,bytes,bytes)": EventFragment;
        "RevokedOperator(address,address)": EventFragment;
        "Sent(address,address,address,uint256,bytes,bytes)": EventFragment;
        "TokenDowngraded(address,uint256)": EventFragment;
        "TokenUpgraded(address,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AgreementCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AgreementLiquidated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AgreementLiquidatedBy"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AgreementLiquidatedV2"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AgreementStateUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AgreementTerminated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AgreementUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AuthorizedOperator"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Bailout"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Burned"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ConstantInflowNFTCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ConstantOutflowNFTCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Minted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RevokedOperator"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Sent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenDowngraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
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
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface AuthorizedOperatorEventObject {
    operator: string;
    tokenHolder: string;
}
export type AuthorizedOperatorEvent = TypedEvent<[
    string,
    string
], AuthorizedOperatorEventObject>;
export type AuthorizedOperatorEventFilter = TypedEventFilter<AuthorizedOperatorEvent>;
export interface BailoutEventObject {
    bailoutAccount: string;
    bailoutAmount: BigNumber;
}
export type BailoutEvent = TypedEvent<[string, BigNumber], BailoutEventObject>;
export type BailoutEventFilter = TypedEventFilter<BailoutEvent>;
export interface BurnedEventObject {
    operator: string;
    from: string;
    amount: BigNumber;
    data: string;
    operatorData: string;
}
export type BurnedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    string
], BurnedEventObject>;
export type BurnedEventFilter = TypedEventFilter<BurnedEvent>;
export interface ConstantInflowNFTCreatedEventObject {
    constantInflowNFT: string;
}
export type ConstantInflowNFTCreatedEvent = TypedEvent<[
    string
], ConstantInflowNFTCreatedEventObject>;
export type ConstantInflowNFTCreatedEventFilter = TypedEventFilter<ConstantInflowNFTCreatedEvent>;
export interface ConstantOutflowNFTCreatedEventObject {
    constantOutflowNFT: string;
}
export type ConstantOutflowNFTCreatedEvent = TypedEvent<[
    string
], ConstantOutflowNFTCreatedEventObject>;
export type ConstantOutflowNFTCreatedEventFilter = TypedEventFilter<ConstantOutflowNFTCreatedEvent>;
export interface MintedEventObject {
    operator: string;
    to: string;
    amount: BigNumber;
    data: string;
    operatorData: string;
}
export type MintedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    string
], MintedEventObject>;
export type MintedEventFilter = TypedEventFilter<MintedEvent>;
export interface RevokedOperatorEventObject {
    operator: string;
    tokenHolder: string;
}
export type RevokedOperatorEvent = TypedEvent<[
    string,
    string
], RevokedOperatorEventObject>;
export type RevokedOperatorEventFilter = TypedEventFilter<RevokedOperatorEvent>;
export interface SentEventObject {
    operator: string;
    from: string;
    to: string;
    amount: BigNumber;
    data: string;
    operatorData: string;
}
export type SentEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    string,
    string
], SentEventObject>;
export type SentEventFilter = TypedEventFilter<SentEvent>;
export interface TokenDowngradedEventObject {
    account: string;
    amount: BigNumber;
}
export type TokenDowngradedEvent = TypedEvent<[
    string,
    BigNumber
], TokenDowngradedEventObject>;
export type TokenDowngradedEventFilter = TypedEventFilter<TokenDowngradedEvent>;
export interface TokenUpgradedEventObject {
    account: string;
    amount: BigNumber;
}
export type TokenUpgradedEvent = TypedEvent<[
    string,
    BigNumber
], TokenUpgradedEventObject>;
export type TokenUpgradedEventFilter = TypedEventFilter<TokenUpgradedEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface CustomSuperTokenMock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CustomSuperTokenMockInterface;
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
        CONSTANT_INFLOW_NFT(overrides?: CallOverrides): Promise<[string]>;
        CONSTANT_OUTFLOW_NFT(overrides?: CallOverrides): Promise<[string]>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        authorizeOperator(operator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            balance: BigNumber;
        }>;
        burn(amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callSelfApproveFor(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callSelfBurn(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callSelfTransferFrom(holder: PromiseOrValue<string>, spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createAgreement(id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        defaultOperators(overrides?: CallOverrides): Promise<[string[]]>;
        downgrade(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        downgradeTo(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAccountActiveAgreements(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]] & {
            activeAgreements: string[];
        }>;
        getAgreementData(agreementClass: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            data: string[];
        }>;
        getAgreementStateSlot(agreementClass: PromiseOrValue<string>, account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            slotData: string[];
        }>;
        getFirstCustomTokenStorageSlot(overrides?: CallOverrides): Promise<[BigNumber] & {
            slot: BigNumber;
        }>;
        getHost(overrides?: CallOverrides): Promise<[string] & {
            host: string;
        }>;
        getUnderlyingToken(overrides?: CallOverrides): Promise<[string] & {
            tokenAddr: string;
        }>;
        granularity(overrides?: CallOverrides): Promise<[BigNumber]>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialize(underlyingToken: PromiseOrValue<string>, underlyingDecimals: PromiseOrValue<BigNumberish>, n: PromiseOrValue<string>, s: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initializeProxy(initialAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
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
        isOperatorFor(operator: PromiseOrValue<string>, tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        makeLiquidationPayoutsV2(id: PromiseOrValue<BytesLike>, liquidationTypeData: PromiseOrValue<BytesLike>, liquidatorAccount: PromiseOrValue<string>, useDefaultRewardAccount: PromiseOrValue<boolean>, targetAccount: PromiseOrValue<string>, rewardAmount: PromiseOrValue<BigNumberish>, targetAccountBalanceDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        operationApprove(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        operationDecreaseAllowance(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        operationDowngrade(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        operationIncreaseAllowance(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        operationSend(spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        operationTransferFrom(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        operationUpgrade(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        operatorBurn(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        operatorSend(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
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
        revokeOperator(operator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        selfApproveFor(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        selfBurn(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        selfMint(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        selfTransferFrom(sender: PromiseOrValue<string>, spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        send(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        settleBalance(account: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        terminateAgreement(id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferAll(recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateAgreementData(id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateAgreementStateSlot(account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, slotData: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgrade(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    CONSTANT_INFLOW_NFT(overrides?: CallOverrides): Promise<string>;
    CONSTANT_OUTFLOW_NFT(overrides?: CallOverrides): Promise<string>;
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    authorizeOperator(operator: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    burn(amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callSelfApproveFor(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callSelfBurn(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callSelfTransferFrom(holder: PromiseOrValue<string>, spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createAgreement(id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    defaultOperators(overrides?: CallOverrides): Promise<string[]>;
    downgrade(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    downgradeTo(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAccountActiveAgreements(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
    getAgreementData(agreementClass: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getAgreementStateSlot(agreementClass: PromiseOrValue<string>, account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getFirstCustomTokenStorageSlot(overrides?: CallOverrides): Promise<BigNumber>;
    getHost(overrides?: CallOverrides): Promise<string>;
    getUnderlyingToken(overrides?: CallOverrides): Promise<string>;
    granularity(overrides?: CallOverrides): Promise<BigNumber>;
    increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialize(underlyingToken: PromiseOrValue<string>, underlyingDecimals: PromiseOrValue<BigNumberish>, n: PromiseOrValue<string>, s: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initializeProxy(initialAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isAccountCritical(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    isAccountCriticalNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isAccountSolvent(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    isAccountSolventNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isOperatorFor(operator: PromiseOrValue<string>, tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    makeLiquidationPayoutsV2(id: PromiseOrValue<BytesLike>, liquidationTypeData: PromiseOrValue<BytesLike>, liquidatorAccount: PromiseOrValue<string>, useDefaultRewardAccount: PromiseOrValue<boolean>, targetAccount: PromiseOrValue<string>, rewardAmount: PromiseOrValue<BigNumberish>, targetAccountBalanceDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    operationApprove(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    operationDecreaseAllowance(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    operationDowngrade(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    operationIncreaseAllowance(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    operationSend(spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    operationTransferFrom(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    operationUpgrade(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    operatorBurn(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    operatorSend(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
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
    revokeOperator(operator: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    selfApproveFor(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    selfBurn(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    selfMint(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    selfTransferFrom(sender: PromiseOrValue<string>, spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    send(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    settleBalance(account: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    terminateAgreement(id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferAll(recipient: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateAgreementData(id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateAgreementStateSlot(account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, slotData: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgrade(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        CONSTANT_INFLOW_NFT(overrides?: CallOverrides): Promise<string>;
        CONSTANT_OUTFLOW_NFT(overrides?: CallOverrides): Promise<string>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        authorizeOperator(operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        callSelfApproveFor(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        callSelfBurn(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        callSelfTransferFrom(holder: PromiseOrValue<string>, spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        createAgreement(id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        defaultOperators(overrides?: CallOverrides): Promise<string[]>;
        downgrade(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        downgradeTo(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getAccountActiveAgreements(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        getAgreementData(agreementClass: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getAgreementStateSlot(agreementClass: PromiseOrValue<string>, account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getFirstCustomTokenStorageSlot(overrides?: CallOverrides): Promise<BigNumber>;
        getHost(overrides?: CallOverrides): Promise<string>;
        getUnderlyingToken(overrides?: CallOverrides): Promise<string>;
        granularity(overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        initialize(underlyingToken: PromiseOrValue<string>, underlyingDecimals: PromiseOrValue<BigNumberish>, n: PromiseOrValue<string>, s: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        initializeProxy(initialAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        isAccountCritical(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        isAccountCriticalNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isAccountSolvent(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        isAccountSolventNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isOperatorFor(operator: PromiseOrValue<string>, tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        makeLiquidationPayoutsV2(id: PromiseOrValue<BytesLike>, liquidationTypeData: PromiseOrValue<BytesLike>, liquidatorAccount: PromiseOrValue<string>, useDefaultRewardAccount: PromiseOrValue<boolean>, targetAccount: PromiseOrValue<string>, rewardAmount: PromiseOrValue<BigNumberish>, targetAccountBalanceDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        operationApprove(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        operationDecreaseAllowance(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        operationDowngrade(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        operationIncreaseAllowance(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        operationSend(spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        operationTransferFrom(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        operationUpgrade(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        operatorBurn(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operatorData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        operatorSend(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operatorData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
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
        revokeOperator(operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        selfApproveFor(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        selfBurn(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        selfMint(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        selfTransferFrom(sender: PromiseOrValue<string>, spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        send(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        settleBalance(account: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        terminateAgreement(id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferAll(recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        updateAgreementData(id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        updateAgreementStateSlot(account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, slotData: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        upgrade(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        upgradeTo(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
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
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        "AuthorizedOperator(address,address)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null): AuthorizedOperatorEventFilter;
        AuthorizedOperator(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null): AuthorizedOperatorEventFilter;
        "Bailout(address,uint256)"(bailoutAccount?: PromiseOrValue<string> | null, bailoutAmount?: null): BailoutEventFilter;
        Bailout(bailoutAccount?: PromiseOrValue<string> | null, bailoutAmount?: null): BailoutEventFilter;
        "Burned(address,address,uint256,bytes,bytes)"(operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, amount?: null, data?: null, operatorData?: null): BurnedEventFilter;
        Burned(operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, amount?: null, data?: null, operatorData?: null): BurnedEventFilter;
        "ConstantInflowNFTCreated(address)"(constantInflowNFT?: PromiseOrValue<string> | null): ConstantInflowNFTCreatedEventFilter;
        ConstantInflowNFTCreated(constantInflowNFT?: PromiseOrValue<string> | null): ConstantInflowNFTCreatedEventFilter;
        "ConstantOutflowNFTCreated(address)"(constantOutflowNFT?: PromiseOrValue<string> | null): ConstantOutflowNFTCreatedEventFilter;
        ConstantOutflowNFTCreated(constantOutflowNFT?: PromiseOrValue<string> | null): ConstantOutflowNFTCreatedEventFilter;
        "Minted(address,address,uint256,bytes,bytes)"(operator?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null, data?: null, operatorData?: null): MintedEventFilter;
        Minted(operator?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null, data?: null, operatorData?: null): MintedEventFilter;
        "RevokedOperator(address,address)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null): RevokedOperatorEventFilter;
        RevokedOperator(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null): RevokedOperatorEventFilter;
        "Sent(address,address,address,uint256,bytes,bytes)"(operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null, data?: null, operatorData?: null): SentEventFilter;
        Sent(operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null, data?: null, operatorData?: null): SentEventFilter;
        "TokenDowngraded(address,uint256)"(account?: PromiseOrValue<string> | null, amount?: null): TokenDowngradedEventFilter;
        TokenDowngraded(account?: PromiseOrValue<string> | null, amount?: null): TokenDowngradedEventFilter;
        "TokenUpgraded(address,uint256)"(account?: PromiseOrValue<string> | null, amount?: null): TokenUpgradedEventFilter;
        TokenUpgraded(account?: PromiseOrValue<string> | null, amount?: null): TokenUpgradedEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        CONSTANT_INFLOW_NFT(overrides?: CallOverrides): Promise<BigNumber>;
        CONSTANT_OUTFLOW_NFT(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        authorizeOperator(operator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callSelfApproveFor(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callSelfBurn(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callSelfTransferFrom(holder: PromiseOrValue<string>, spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createAgreement(id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        defaultOperators(overrides?: CallOverrides): Promise<BigNumber>;
        downgrade(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        downgradeTo(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAccountActiveAgreements(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAgreementData(agreementClass: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getAgreementStateSlot(agreementClass: PromiseOrValue<string>, account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getFirstCustomTokenStorageSlot(overrides?: CallOverrides): Promise<BigNumber>;
        getHost(overrides?: CallOverrides): Promise<BigNumber>;
        getUnderlyingToken(overrides?: CallOverrides): Promise<BigNumber>;
        granularity(overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialize(underlyingToken: PromiseOrValue<string>, underlyingDecimals: PromiseOrValue<BigNumberish>, n: PromiseOrValue<string>, s: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initializeProxy(initialAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isAccountCritical(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isAccountCriticalNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isAccountSolvent(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isAccountSolventNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isOperatorFor(operator: PromiseOrValue<string>, tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        makeLiquidationPayoutsV2(id: PromiseOrValue<BytesLike>, liquidationTypeData: PromiseOrValue<BytesLike>, liquidatorAccount: PromiseOrValue<string>, useDefaultRewardAccount: PromiseOrValue<boolean>, targetAccount: PromiseOrValue<string>, rewardAmount: PromiseOrValue<BigNumberish>, targetAccountBalanceDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        operationApprove(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        operationDecreaseAllowance(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        operationDowngrade(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        operationIncreaseAllowance(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        operationSend(spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        operationTransferFrom(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        operationUpgrade(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        operatorBurn(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        operatorSend(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        realtimeBalanceOf(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        realtimeBalanceOfNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        revokeOperator(operator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        selfApproveFor(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        selfBurn(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        selfMint(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        selfTransferFrom(sender: PromiseOrValue<string>, spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        send(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        settleBalance(account: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        terminateAgreement(id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferAll(recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateAgreementData(id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateAgreementStateSlot(account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, slotData: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgrade(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeTo(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        CONSTANT_INFLOW_NFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        CONSTANT_OUTFLOW_NFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        authorizeOperator(operator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callSelfApproveFor(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callSelfBurn(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callSelfTransferFrom(holder: PromiseOrValue<string>, spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createAgreement(id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        defaultOperators(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        downgrade(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        downgradeTo(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAccountActiveAgreements(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAgreementData(agreementClass: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAgreementStateSlot(agreementClass: PromiseOrValue<string>, account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, dataLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFirstCustomTokenStorageSlot(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getHost(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUnderlyingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        granularity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialize(underlyingToken: PromiseOrValue<string>, underlyingDecimals: PromiseOrValue<BigNumberish>, n: PromiseOrValue<string>, s: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initializeProxy(initialAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isAccountCritical(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAccountCriticalNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAccountSolvent(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAccountSolventNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOperatorFor(operator: PromiseOrValue<string>, tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        makeLiquidationPayoutsV2(id: PromiseOrValue<BytesLike>, liquidationTypeData: PromiseOrValue<BytesLike>, liquidatorAccount: PromiseOrValue<string>, useDefaultRewardAccount: PromiseOrValue<boolean>, targetAccount: PromiseOrValue<string>, rewardAmount: PromiseOrValue<BigNumberish>, targetAccountBalanceDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        operationApprove(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        operationDecreaseAllowance(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        operationDowngrade(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        operationIncreaseAllowance(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        operationSend(spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        operationTransferFrom(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        operationUpgrade(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        operatorBurn(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        operatorSend(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        realtimeBalanceOf(account: PromiseOrValue<string>, timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        realtimeBalanceOfNow(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revokeOperator(operator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        selfApproveFor(account: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        selfBurn(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        selfMint(account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        selfTransferFrom(sender: PromiseOrValue<string>, spender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        send(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        settleBalance(account: PromiseOrValue<string>, delta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        terminateAgreement(id: PromiseOrValue<BytesLike>, dataLength: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferAll(recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(sender: PromiseOrValue<string>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateAgreementData(id: PromiseOrValue<BytesLike>, data: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateAgreementStateSlot(account: PromiseOrValue<string>, slotId: PromiseOrValue<BigNumberish>, slotData: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgrade(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=CustomSuperTokenMock.d.ts.map