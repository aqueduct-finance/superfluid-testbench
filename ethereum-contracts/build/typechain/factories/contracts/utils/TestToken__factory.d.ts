import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { TestToken, TestTokenInterface } from "../../../contracts/utils/TestToken";
type TestTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestToken__factory extends ContractFactory {
    constructor(...args: TestTokenConstructorParams);
    deploy(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, initDecimals: PromiseOrValue<BigNumberish>, mintLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TestToken>;
    getDeployTransaction(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, initDecimals: PromiseOrValue<BigNumberish>, mintLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TestToken;
    connect(signer: Signer): TestToken__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162000cce38038062000cce83398101604081905262000034916200013c565b8383600362000044838262000256565b50600462000053828262000256565b50506005805460ff191660ff94909416939093179092556080525062000322915050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200009f57600080fd5b81516001600160401b0380821115620000bc57620000bc62000077565b604051601f8301601f19908116603f01168101908282118183101715620000e757620000e762000077565b816040528381526020925086838588010111156200010457600080fd5b600091505b8382101562000128578582018301518183018401529082019062000109565b600093810190920192909252949350505050565b600080600080608085870312156200015357600080fd5b84516001600160401b03808211156200016b57600080fd5b62000179888389016200008d565b955060208701519150808211156200019057600080fd5b506200019f878288016200008d565b935050604085015160ff81168114620001b757600080fd5b6060959095015193969295505050565b600181811c90821680620001dc57607f821691505b602082108103620001fd57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200025157600081815260208120601f850160051c810160208610156200022c5750805b601f850160051c820191505b818110156200024d5782815560010162000238565b5050505b505050565b81516001600160401b0381111562000272576200027262000077565b6200028a81620002838454620001c7565b8462000203565b602080601f831160018114620002c25760008415620002a95750858301515b600019600386901b1c1916600185901b1785556200024d565b600085815260208120601f198616915b82811015620002f357888601518255948401946001909101908401620002d2565b5085821015620003125787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6080516109906200033e60003960006102ba01526109906000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806340c10f191161007157806340c10f191461014757806370a082311461015a57806395d89b4114610183578063a457c2d71461018b578063a9059cbb1461019e578063dd62ed3e146101b157600080fd5b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100fa57806323b872dd1461010c578063313ce5671461011f5780633950935114610134575b600080fd5b6100c16101c4565b6040516100ce91906107c4565b60405180910390f35b6100ea6100e536600461082e565b610256565b60405190151581526020016100ce565b6002545b6040519081526020016100ce565b6100ea61011a366004610858565b610270565b60055460405160ff90911681526020016100ce565b6100ea61014236600461082e565b610294565b6100ea61015536600461082e565b6102b6565b6100fe610168366004610894565b6001600160a01b031660009081526020819052604090205490565b6100c16102fb565b6100ea61019936600461082e565b61030a565b6100ea6101ac36600461082e565b61038a565b6100fe6101bf3660046108b6565b610398565b6060600380546101d3906108e9565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff906108e9565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b5050505050905090565b6000336102648185856103c3565b60019150505b92915050565b60003361027e8582856104e7565b610289858585610561565b506001949350505050565b6000336102648185856102a78383610398565b6102b19190610923565b6103c3565b60007f00000000000000000000000000000000000000000000000000000000000000008211156102e8576102e8610944565b6102f28383610705565b50600192915050565b6060600480546101d3906108e9565b600033816103188286610398565b90508381101561037d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61028982868684036103c3565b600033610264818585610561565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166104255760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610374565b6001600160a01b0382166104865760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610374565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006104f38484610398565b9050600019811461055b578181101561054e5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610374565b61055b84848484036103c3565b50505050565b6001600160a01b0383166105c55760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610374565b6001600160a01b0382166106275760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610374565b6001600160a01b0383166000908152602081905260409020548181101561069f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610374565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a361055b565b6001600160a01b03821661075b5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610374565b806002600082825461076d9190610923565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600060208083528351808285015260005b818110156107f1578581018301518582016040015282016107d5565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461082957600080fd5b919050565b6000806040838503121561084157600080fd5b61084a83610812565b946020939093013593505050565b60008060006060848603121561086d57600080fd5b61087684610812565b925061088460208501610812565b9150604084013590509250925092565b6000602082840312156108a657600080fd5b6108af82610812565b9392505050565b600080604083850312156108c957600080fd5b6108d283610812565b91506108e060208401610812565b90509250929050565b600181811c908216806108fd57607f821691505b60208210810361091d57634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561026a57634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052600160045260246000fdfea26469706673582212205658b6013df97f49d439b32e1119c432a1c915ede9534951c6bc6ff876e2454b64736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly internalType: "uint8";
            readonly name: "initDecimals";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "mintLimit";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): TestTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestToken;
}
export {};
//# sourceMappingURL=TestToken__factory.d.ts.map