import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { CallUtilsMock, CallUtilsMockInterface } from "../../../contracts/mocks/CallUtilsMock";
type CallUtilsMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CallUtilsMock__factory extends ContractFactory {
    constructor(...args: CallUtilsMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CallUtilsMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CallUtilsMock;
    connect(signer: Signer): CallUtilsMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061075b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80639bd610371161008c578063d7700b1211610066578063d7700b121461016c578063e7f7145b14610174578063e9f0a1471461017c578063f0fdf8341461018457600080fd5b80639bd6103714610149578063b505890314610151578063c89d62881461016457600080fd5b80637114b8eb116100c85780637114b8eb1461011c578063784cbc4e146101245780638211b89d1461012c57806382b246641461013457600080fd5b80631ed106b8146100ef578063335b221e146100f95780634926c4c614610114575b600080fd5b6100f7610197565b005b6101016101b0565b6040519081526020015b60405180910390f35b6100f7600080fd5b6100f76101c6565b6100f76101d9565b6100f76101fa565b61013c610223565b60405161010b91906104b8565b6100f7610262565b6100f761015f366004610515565b61028f565b610101610342565b6100f761035d565b6100f7610367565b6100f7610377565b6101016101923660046105c6565b610384565b6040516366fd620d60e01b815260040160405180910390fd5b6000806101c060001960016105f5565b92915050565b60006000196101d3610608565b50600052565b604051630b84f91760e31b8152601a60048201526024015b60405180910390fd5b600080548061020b5761020b61061e565b60019003818190600052602060002001600090559055565b606060006000196102326104ff565b60405190808252806020026020018201604052801561025b578160200160208202803683370190505b5092915050565b60405162461bcd60e51b8152602060048201526002602482015261676d60f01b60448201526064016101f1565b60408051600481526024810191829052600091829130916102b1908690610658565b60408051918290039091206020830180516001600160e01b03166001600160e01b0319909216919091179052516102e89190610658565b6000604051808303816000865af19150503d8060008114610325576040519150601f19603f3d011682016040523d82523d6000602084013e61032a565b606091505b50915091508161033d5761033d816103a5565b505050565b60006104b0610357600460058363ffffffff16565b91505090565b610365610674565b565b6000198061037361068a565b5050565b60008061033d81806106a0565b6000818154811061039457600080fd5b600091825260209091200154905081565b6004815110156103f75760405162461bcd60e51b815260206004820152601a60248201527f43616c6c5574696c733a2074617267657420726576657274282900000000000060448201526064016101f1565b602081015163b1b7848f60e01b6001600160e01b03198216016104a75760408051808201825260208082527f43616c6c5574696c733a207461726765742070616e69636b65643a2030785f5f90820190815260248501517f43616c6c5574696c733a207461726765742070616e69636b65643a2030780000600482811c600f908116603090810160081b918516011791909117909252925162461bcd60e51b81529192916101f1918491016106dc565b81518060208401fd5b61036561070f565b6020808252825182820181905260009190848201906040850190845b818110156104f357835160ff16835292840192918401916001016104d4565b50909695505050505050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561052757600080fd5b813567ffffffffffffffff8082111561053f57600080fd5b818401915084601f83011261055357600080fd5b813581811115610565576105656104ff565b604051601f8201601f19908116603f0116810190838211818310171561058d5761058d6104ff565b816040528281528760208487010111156105a657600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000602082840312156105d857600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156101c0576101c06105df565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b60005b8381101561064f578181015183820152602001610637565b50506000910152565b6000825161066a818460208701610634565b9190910192915050565b634e487b7160e01b600052600160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b6000826106bd57634e487b7160e01b600052601260045260246000fd5b600160ff1b8214600019841416156106d7576106d76105df565b500590565b60208152600082518060208401526106fb816040850160208701610634565b601f01601f19169190910160400192915050565b634e487b7160e01b600052605160045260246000fdfea2646970667358221220a309ad392a3209ce5544a82c362f43004ca1b4cde342c2f64d2b28d11f1bd02764736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "Custom";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "CustomVal";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "a";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "revertArrayAccess";
        readonly outputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "revertAssert";
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "revertBigArray";
        readonly outputs: readonly [{
            readonly internalType: "uint8[]";
            readonly name: "";
            readonly type: "uint8[]";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "revertCustom";
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "revertCustomVal";
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "revertDivByZero";
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "revertEmpty";
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "revertEnum";
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "revertOverflow";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "revertPop";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "revertString";
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "funcSig";
            readonly type: "string";
        }];
        readonly name: "revertTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "revertZeroInitializedFunctionPointer";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): CallUtilsMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CallUtilsMock;
}
export {};
//# sourceMappingURL=CallUtilsMock__factory.d.ts.map