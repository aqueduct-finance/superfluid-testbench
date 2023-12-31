import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { MockSmartWallet, MockSmartWalletInterface } from "../../../contracts/mocks/MockSmartWallet";
type MockSmartWalletConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockSmartWallet__factory extends ContractFactory {
    constructor(...args: MockSmartWalletConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MockSmartWallet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MockSmartWallet;
    connect(signer: Signer): MockSmartWallet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506102e6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632ed8c4b91461003b578063eefa3cde14610050575b600080fd5b61004e61004936600461015f565b610063565b005b61004e61005e3660046101fe565b6100ce565b6040516316e7427360e21b81526001600160a01b03861690635b9d09cc9061009590879087908790879060040161023f565b600060405180830381600087803b1580156100af57600080fd5b505af11580156100c3573d6000803e3d6000fd5b505050505050505050565b60405163095ea7b360e01b81526001600160a01b0383811660048301526024820183905284169063095ea7b3906044016020604051808303816000875af115801561011d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101419190610287565b50505050565b6001600160a01b038116811461015c57600080fd5b50565b60008060008060006080868803121561017757600080fd5b853561018281610147565b9450602086013561019281610147565b935060408601359250606086013567ffffffffffffffff808211156101b657600080fd5b818801915088601f8301126101ca57600080fd5b8135818111156101d957600080fd5b8960208285010111156101eb57600080fd5b9699959850939650602001949392505050565b60008060006060848603121561021357600080fd5b833561021e81610147565b9250602084013561022e81610147565b929592945050506040919091013590565b6001600160a01b0385168152602081018490526060604082018190528101829052818360808301376000818301608090810191909152601f909201601f191601019392505050565b60006020828403121561029957600080fd5b815180151581146102a957600080fd5b939250505056fea264697066735822122092ae2dfc38cf2db22313ab6daf9e3c583f5bdec0154d453df2fa2eeaab85721864736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approveTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): MockSmartWalletInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockSmartWallet;
}
export {};
//# sourceMappingURL=MockSmartWallet__factory.d.ts.map