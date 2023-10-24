import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { FlowNFTBaseStorageLayoutMock, FlowNFTBaseStorageLayoutMockInterface } from "../../../../contracts/mocks/CFAv1NFTUpgradabilityMock.sol/FlowNFTBaseStorageLayoutMock";
type FlowNFTBaseStorageLayoutMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FlowNFTBaseStorageLayoutMock__factory extends ContractFactory {
    constructor(...args: FlowNFTBaseStorageLayoutMockConstructorParams);
    deploy(host: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<FlowNFTBaseStorageLayoutMock>;
    getDeployTransaction(host: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): FlowNFTBaseStorageLayoutMock;
    connect(signer: Signer): FlowNFTBaseStorageLayoutMock__factory;
    static readonly bytecode = "0x60c060405234801561001057600080fd5b5060405161144b38038061144b83398101604081905261002f916100ea565b6001600160a01b03811660a0819052604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd3600482015282919063b6d200de90602401602060405180830381865afa15801561009a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100be91906100ea565b6001600160a01b03166080525061010e9050565b6001600160a01b03811681146100e757600080fd5b50565b6000602082840312156100fc57600080fd5b8151610107816100d2565b9392505050565b60805160a05161131161013a6000396000818161026d01526105eb015260006101fa01526113116000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c806352d1902d116100de57806395d89b4111610097578063b88d4fde11610071578063b88d4fde146103bb578063c87b56dd146103ce578063e985e9c5146103ef578063f99a38c4146101f357600080fd5b806395d89b41146103985780639903ad38146103a0578063a22cb465146103a857600080fd5b806352d1902d146102aa5780636352211e146102da5780636c0360eb146102ed57806370a08231146102f557806389f71d2d146103095780638d47859e1461031c57600080fd5b80632f388560116101305780632f3885601461022f57806342842e0e14610242578063469519541461025557806349f289dc146102685780634cd88b761461028f57806350d75d25146102a257600080fd5b806301ffc9a71461017857806306fdde03146101a0578063081812fc146101b5578063095ea7b3146101e057806318156101146101f557806323b872dd1461021c575b600080fd5b61018b610186366004610d64565b610402565b60405190151581526020015b60405180910390f35b6101a8610454565b6040516101979190610d95565b6101c86101c3366004610de3565b6104e6565b6040516001600160a01b039091168152602001610197565b6101f36101ee366004610e11565b61050d565b005b6101c87f000000000000000000000000000000000000000000000000000000000000000081565b6101f361022a366004610e3d565b610599565b6101f361023d366004610de3565b6105c0565b6101f3610250366004610e3d565b6105cc565b6101f3610263366004610e7e565b6105e7565b6101c87f000000000000000000000000000000000000000000000000000000000000000081565b6101f361029d366004610f47565b6106a3565b6101c8610789565b7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4705b604051908152602001610197565b6101c86102e8366004610de3565b6107b8565b6101a86107d4565b6102cc610303366004610e7e565b50600190565b6102cc610317366004610fab565b6107f0565b61035261032a366004610de3565b5060408051608081018252600080825260208201819052918101829052606081019190915290565b6040805182516001600160a01b03908116825260208085015182169083015283830151169181019190915260609182015163ffffffff1691810191909152608001610197565b6101a8610843565b6101f3610852565b6101f36103b6366004610ff6565b610914565b6101f36103c9366004611034565b61091f565b6101a86103dc366004610de3565b5060408051602081019091526000815290565b61018b6103fd3660046110b4565b610958565b60006301ffc9a760e01b6001600160e01b03198316148061043357506380ac58cd60e01b6001600160e01b03198316145b8061044e5750635b5e139f60e01b6001600160e01b03198316145b92915050565b606060018054610463906110e2565b80601f016020809104026020016040519081016040528092919081815260200182805461048f906110e2565b80156104dc5780601f106104b1576101008083540402835291602001916104dc565b820191906000526020600020905b8154815290600101906020018083116104bf57829003601f168201915b5050505050905090565b60006104f182610986565b506000908152600360205260409020546001600160a01b031690565b6000610518826107b8565b9050806001600160a01b0316836001600160a01b03160361054c5760405163e4790b2560e01b815260040160405180910390fd5b336001600160a01b0382161480159061056c575061056a8133610958565b155b1561058a5760405163519a92c160e11b815260040160405180910390fd5b610594838361099f565b505050565b6105a333826109f8565b610594576040516312a8eb0360e11b815260040160405180910390fd5b6105c981610a56565b50565b6105948383836040518060200160405280600081525061091f565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663731aed6e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610647573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066b919061111c565b9050336001600160a01b038216146106965760405163ebb7505b60e01b815260040160405180910390fd5b61069f82610a86565b5050565b600054610100900460ff16158080156106c35750600054600160ff909116105b806106dd5750303b1580156106dd575060005460ff166001145b6107025760405162461bcd60e51b81526004016106f990611139565b60405180910390fd5b6000805460ff191660011790558015610725576000805461ff0019166101001790555b600161073184826111d5565b50600261073e83826111d5565b508015610594576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b60006107b37f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b60008060405163eab95e3b60e01b815260040160405180910390fd5b6040518060600160405280602d81526020016112af602d913981565b60408051466020808301919091526001600160a01b0380871683850152808616606084015284166080808401919091528351808403909101815260a090920190925280519101206000905b949350505050565b606060028054610463906110e2565b600054610100900460ff16158080156108725750600054600160ff909116105b8061088c5750303b15801561088c575060005460ff166001145b6108a85760405162461bcd60e51b81526004016106f990611139565b6000805460ff1916600117905580156108cb576000805461ff0019166101001790555b80156105c9576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020015b60405180910390a150565b61069f338383610cc0565b61092933836109f8565b610946576040516312a8eb0360e11b815260040160405180910390fd5b61095284848484610d5f565b50505050565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b60405163eab95e3b60e01b815260040160405180910390fd5b60008181526003602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925908290a45050565b600080610a04836107b8565b9050806001600160a01b0316846001600160a01b03161480610a2b5750610a2b8185610958565b8061083b5750836001600160a01b0316610a44846104e6565b6001600160a01b031614949350505050565b6040518181527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce790602001610909565b6000610ab07f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b031603610b065760405162461bcd60e51b815260206004820152601d60248201527f5555505350726f786961626c653a206e6f742075706772616461626c6500000060448201526064016106f9565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b44573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b689190611295565b7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47014610be25760405162461bcd60e51b815260206004820152602360248201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60448201526267696360e81b60648201526084016106f9565b6001600160a01b0381163003610c3a5760405162461bcd60e51b815260206004820152601960248201527f5555505350726f786961626c653a2070726f7879206c6f6f700000000000000060448201526064016106f9565b610c62817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470604080519182526001600160a01b038416602083015201610909565b816001600160a01b0316836001600160a01b031603610cf25760405163d3c7732960e01b815260040160405180910390fd5b6001600160a01b03838116600081815260046020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610952565b600060208284031215610d7657600080fd5b81356001600160e01b031981168114610d8e57600080fd5b9392505050565b600060208083528351808285015260005b81811015610dc257858101830151858201604001528201610da6565b506000604082860101526040601f19601f8301168501019250505092915050565b600060208284031215610df557600080fd5b5035919050565b6001600160a01b03811681146105c957600080fd5b60008060408385031215610e2457600080fd5b8235610e2f81610dfc565b946020939093013593505050565b600080600060608486031215610e5257600080fd5b8335610e5d81610dfc565b92506020840135610e6d81610dfc565b929592945050506040919091013590565b600060208284031215610e9057600080fd5b8135610d8e81610dfc565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115610ecc57610ecc610e9b565b604051601f8501601f19908116603f01168101908282118183101715610ef457610ef4610e9b565b81604052809350858152868686011115610f0d57600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112610f3857600080fd5b610d8e83833560208501610eb1565b60008060408385031215610f5a57600080fd5b823567ffffffffffffffff80821115610f7257600080fd5b610f7e86838701610f27565b93506020850135915080821115610f9457600080fd5b50610fa185828601610f27565b9150509250929050565b600080600060608486031215610fc057600080fd5b8335610fcb81610dfc565b92506020840135610fdb81610dfc565b91506040840135610feb81610dfc565b809150509250925092565b6000806040838503121561100957600080fd5b823561101481610dfc565b91506020830135801515811461102957600080fd5b809150509250929050565b6000806000806080858703121561104a57600080fd5b843561105581610dfc565b9350602085013561106581610dfc565b925060408501359150606085013567ffffffffffffffff81111561108857600080fd5b8501601f8101871361109957600080fd5b6110a887823560208401610eb1565b91505092959194509250565b600080604083850312156110c757600080fd5b82356110d281610dfc565b9150602083013561102981610dfc565b600181811c908216806110f657607f821691505b60208210810361111657634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561112e57600080fd5b8151610d8e81610dfc565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b601f82111561059457600081815260208120601f850160051c810160208610156111ae5750805b601f850160051c820191505b818110156111cd578281556001016111ba565b505050505050565b815167ffffffffffffffff8111156111ef576111ef610e9b565b611203816111fd84546110e2565b84611187565b602080601f83116001811461123857600084156112205750858301515b600019600386901b1c1916600185901b1785556111cd565b600085815260208120601f198616915b8281101561126757888601518255948401946001909101908401611248565b50858210156112855787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000602082840312156112a757600080fd5b505191905056fe68747470733a2f2f6e66742e7375706572666c7569642e66696e616e63652f6366612f76322f6765746d657461a26469706673582212203018ead2047a6622228dd33f39a73e57354d64e9eaa90dccbb7d62670a2d206064736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_NFT_APPROVE_CALLER_NOT_OWNER_OR_APPROVED_FOR_ALL";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_NFT_APPROVE_TO_CALLER";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_NFT_APPROVE_TO_CURRENT_OWNER";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_NFT_INVALID_TOKEN_ID";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_NFT_ONLY_SUPER_TOKEN_FACTORY";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_NFT_TRANSFER_CALLER_NOT_OWNER_OR_APPROVED_FOR_ALL";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_NFT_TRANSFER_FROM_INCORRECT_OWNER";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_NFT_TRANSFER_IS_NOT_ALLOWED";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_NFT_TRANSFER_TO_ZERO_ADDRESS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_name";
            readonly type: "string";
        }];
        readonly name: "STORAGE_LOCATION_CHANGED";
        readonly type: "error";
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
            readonly name: "approved";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
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
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "ApprovalForAll";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "uuid";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "codeAddress";
            readonly type: "address";
        }];
        readonly name: "CodeUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "MetadataUpdate";
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
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "CONSTANT_FLOW_AGREEMENT_V1";
        readonly outputs: readonly [{
            readonly internalType: "contract IConstantFlowAgreementV1";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "";
            readonly type: "address";
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
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "baseURI";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "castrate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "flowDataByTokenId";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "superToken";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "flowSender";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "flowReceiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "flowStartDate";
                readonly type: "uint32";
            }];
            readonly internalType: "struct IFlowNFTBase.FlowNFTData";
            readonly name: "flowData";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "getApproved";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCodeAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "codeAddress";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "getTokenId";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "nftName";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "nftSymbol";
            readonly type: "string";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }];
        readonly name: "isApprovedForAll";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
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
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "ownerOf";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
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
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
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
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "setApprovalForAll";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
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
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "tokenURI";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
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
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "triggerMetadataUpdate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newAddress";
            readonly type: "address";
        }];
        readonly name: "updateCode";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "validateStorageLayout";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): FlowNFTBaseStorageLayoutMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FlowNFTBaseStorageLayoutMock;
}
export {};
//# sourceMappingURL=FlowNFTBaseStorageLayoutMock__factory.d.ts.map