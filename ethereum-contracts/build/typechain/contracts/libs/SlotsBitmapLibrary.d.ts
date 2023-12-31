import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface SlotsBitmapLibraryInterface extends utils.Interface {
    functions: {
        "listData(ISuperfluidToken,address,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "listData"): FunctionFragment;
    encodeFunctionData(functionFragment: "listData", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "listData", data: BytesLike): Result;
    events: {};
}
export interface SlotsBitmapLibrary extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SlotsBitmapLibraryInterface;
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
        listData(token: PromiseOrValue<string>, account: PromiseOrValue<string>, bitmapStateSlotId: PromiseOrValue<BigNumberish>, dataStateSlotIDStart: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            number[],
            string[]
        ] & {
            slotIds: number[];
            dataList: string[];
        }>;
    };
    listData(token: PromiseOrValue<string>, account: PromiseOrValue<string>, bitmapStateSlotId: PromiseOrValue<BigNumberish>, dataStateSlotIDStart: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number[], string[]] & {
        slotIds: number[];
        dataList: string[];
    }>;
    callStatic: {
        listData(token: PromiseOrValue<string>, account: PromiseOrValue<string>, bitmapStateSlotId: PromiseOrValue<BigNumberish>, dataStateSlotIDStart: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            number[],
            string[]
        ] & {
            slotIds: number[];
            dataList: string[];
        }>;
    };
    filters: {};
    estimateGas: {
        listData(token: PromiseOrValue<string>, account: PromiseOrValue<string>, bitmapStateSlotId: PromiseOrValue<BigNumberish>, dataStateSlotIDStart: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        listData(token: PromiseOrValue<string>, account: PromiseOrValue<string>, bitmapStateSlotId: PromiseOrValue<BigNumberish>, dataStateSlotIDStart: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=SlotsBitmapLibrary.d.ts.map