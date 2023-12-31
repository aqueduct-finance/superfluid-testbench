import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface ERC777SenderRecipientMockInterface extends utils.Interface {
    functions: {
        "burn(address,uint256,bytes)": FunctionFragment;
        "canImplementInterfaceForAddress(bytes32,address)": FunctionFragment;
        "recipientFor(address)": FunctionFragment;
        "registerRecipient(address)": FunctionFragment;
        "registerSender(address)": FunctionFragment;
        "send(address,address,uint256,bytes)": FunctionFragment;
        "senderFor(address)": FunctionFragment;
        "setShouldRevertReceive(bool)": FunctionFragment;
        "setShouldRevertSend(bool)": FunctionFragment;
        "tokensReceived(address,address,address,uint256,bytes,bytes)": FunctionFragment;
        "tokensToSend(address,address,address,uint256,bytes,bytes)": FunctionFragment;
        "upgradeAll(address)": FunctionFragment;
        "upgradeAllToSelf(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "burn" | "canImplementInterfaceForAddress" | "recipientFor" | "registerRecipient" | "registerSender" | "send" | "senderFor" | "setShouldRevertReceive" | "setShouldRevertSend" | "tokensReceived" | "tokensToSend" | "upgradeAll" | "upgradeAllToSelf"): FunctionFragment;
    encodeFunctionData(functionFragment: "burn", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "canImplementInterfaceForAddress", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "recipientFor", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "registerRecipient", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "registerSender", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "send", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "senderFor", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setShouldRevertReceive", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setShouldRevertSend", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "tokensReceived", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "tokensToSend", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "upgradeAll", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeAllToSelf", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canImplementInterfaceForAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recipientFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerSender", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "senderFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setShouldRevertReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setShouldRevertSend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokensReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokensToSend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeAllToSelf", data: BytesLike): Result;
    events: {
        "TokensReceivedCalled(address,address,address,uint256,bytes,bytes,address,uint256,uint256)": EventFragment;
        "TokensToSendCalled(address,address,address,uint256,bytes,bytes,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TokensReceivedCalled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensToSendCalled"): EventFragment;
}
export interface TokensReceivedCalledEventObject {
    operator: string;
    from: string;
    to: string;
    amount: BigNumber;
    data: string;
    operatorData: string;
    token: string;
    fromBalance: BigNumber;
    toBalance: BigNumber;
}
export type TokensReceivedCalledEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], TokensReceivedCalledEventObject>;
export type TokensReceivedCalledEventFilter = TypedEventFilter<TokensReceivedCalledEvent>;
export interface TokensToSendCalledEventObject {
    operator: string;
    from: string;
    to: string;
    amount: BigNumber;
    data: string;
    operatorData: string;
    token: string;
    fromBalance: BigNumber;
    toBalance: BigNumber;
}
export type TokensToSendCalledEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], TokensToSendCalledEventObject>;
export type TokensToSendCalledEventFilter = TypedEventFilter<TokensToSendCalledEvent>;
export interface ERC777SenderRecipientMock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC777SenderRecipientMockInterface;
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
        burn(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        canImplementInterfaceForAddress(interfaceHash: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        recipientFor(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        registerRecipient(recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        registerSender(sender: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        send(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        senderFor(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setShouldRevertReceive(shouldRevert: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setShouldRevertSend(shouldRevert: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tokensReceived(operator: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tokensToSend(operator: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeAll(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeAllToSelf(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    burn(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    canImplementInterfaceForAddress(interfaceHash: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    recipientFor(account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    registerRecipient(recipient: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    registerSender(sender: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    send(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    senderFor(account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setShouldRevertReceive(shouldRevert: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setShouldRevertSend(shouldRevert: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tokensReceived(operator: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tokensToSend(operator: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeAll(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeAllToSelf(token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        burn(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        canImplementInterfaceForAddress(interfaceHash: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        recipientFor(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        registerRecipient(recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        registerSender(sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        send(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        senderFor(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setShouldRevertReceive(shouldRevert: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setShouldRevertSend(shouldRevert: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        tokensReceived(operator: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, operatorData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        tokensToSend(operator: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, operatorData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        upgradeAll(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeAllToSelf(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "TokensReceivedCalled(address,address,address,uint256,bytes,bytes,address,uint256,uint256)"(operator?: null, from?: null, to?: null, amount?: null, data?: null, operatorData?: null, token?: null, fromBalance?: null, toBalance?: null): TokensReceivedCalledEventFilter;
        TokensReceivedCalled(operator?: null, from?: null, to?: null, amount?: null, data?: null, operatorData?: null, token?: null, fromBalance?: null, toBalance?: null): TokensReceivedCalledEventFilter;
        "TokensToSendCalled(address,address,address,uint256,bytes,bytes,address,uint256,uint256)"(operator?: null, from?: null, to?: null, amount?: null, data?: null, operatorData?: null, token?: null, fromBalance?: null, toBalance?: null): TokensToSendCalledEventFilter;
        TokensToSendCalled(operator?: null, from?: null, to?: null, amount?: null, data?: null, operatorData?: null, token?: null, fromBalance?: null, toBalance?: null): TokensToSendCalledEventFilter;
    };
    estimateGas: {
        burn(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        canImplementInterfaceForAddress(interfaceHash: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        recipientFor(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        registerRecipient(recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        registerSender(sender: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        send(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        senderFor(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setShouldRevertReceive(shouldRevert: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setShouldRevertSend(shouldRevert: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tokensReceived(operator: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tokensToSend(operator: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeAll(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeAllToSelf(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        burn(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        canImplementInterfaceForAddress(interfaceHash: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recipientFor(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        registerRecipient(recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        registerSender(sender: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        send(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        senderFor(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setShouldRevertReceive(shouldRevert: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setShouldRevertSend(shouldRevert: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tokensReceived(operator: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tokensToSend(operator: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, userData: PromiseOrValue<BytesLike>, operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeAll(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeAllToSelf(token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ERC777SenderRecipientMock.d.ts.map