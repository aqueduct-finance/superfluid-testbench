import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { SuperfluidFrameworkDeploymentSteps, SuperfluidFrameworkDeploymentStepsInterface } from "../../../contracts/utils/SuperfluidFrameworkDeploymentSteps";
type SuperfluidFrameworkDeploymentStepsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperfluidFrameworkDeploymentSteps__factory extends ContractFactory {
    constructor(...args: SuperfluidFrameworkDeploymentStepsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperfluidFrameworkDeploymentSteps>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperfluidFrameworkDeploymentSteps;
    connect(signer: Signer): SuperfluidFrameworkDeploymentSteps__factory;
    static readonly bytecode = "0x6000608081905260a0604081905261001891908161002b565b5034801561002557600080fd5b506100a5565b828054828255906000526020600020908101928215610080579160200282015b8281111561008057825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061004b565b5061008c929150610090565b5090565b5b8082111561008c5760008155600101610091565b610560806100b46000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806362a32e1e1161007157806362a32e1e14610153578063888a37b11461017e57806393786bf014610188578063b3083cf81461013b578063dfa98ad514610190578063f2fde38b146102c257600080fd5b806305bfa3e0146100ae5780631903410d146100ca5780633df285fe146100f55780634d59c13614610132578063520994701461013b575b600080fd5b6100b761070881565b6040519081526020015b60405180910390f35b6100dd6100d8366004610369565b6102d7565b6040516001600160a01b0390911681526020016100c1565b6101256040518060400160405280601181526020017039bab832b93a37b5b2b739973a32b9ba1760791b81525081565b6040516100c19190610382565b6100b761384081565b610143600081565b60405190151581526020016100c1565b6101256040518060400160405280600c81526020016b3a37b5b2b739973a32b9ba1760a11b81525081565b6100b762093a8081565b6100dd604581565b6102b5604080516101608101825260008082526020808301829052828401829052835180850185528281528082018390526060840152608083018290528351808501909452818452830181905260a082019290925260c0810182905260e08101829052610100810182905261012081018290526101408101919091525060408051610160810182526001546001600160a01b03610100918290048116835260025481166020808501829052600354831685870181905286518088018852838152808301919091526060860152600554831660808601819052865180880190975291865285015260a0830193909352600c54831660c0830152600e54831660e0830152600f54831690820152601054821661012082015260115490911661014082015290565b6040516100c191906103d0565b6102d56102d03660046104fa565b610301565b005b600081815481106102e757600080fd5b6000918252602090912001546001600160a01b0316905081565b60015460405163f2fde38b60e01b81526001600160a01b0383811660048301526101009092049091169063f2fde38b90602401600060405180830381600087803b15801561034e57600080fd5b505af1158015610362573d6000803e3d6000fd5b5050505050565b60006020828403121561037b57600080fd5b5035919050565b600060208083528351808285015260005b818110156103af57858101830151858201604001528201610393565b506000604082860101526040601f19601f8301168501019250505092915050565b81516001600160a01b031681526101a0810160208301516103fc60208401826001600160a01b03169052565b50604083015161041760408401826001600160a01b03169052565b506060830151610440606084018280516001600160a01b03908116835260209182015116910152565b5060808301516001600160a01b03811660a08401525060a083015180516001600160a01b0390811660c085015260208201511660e08401525060c0830151610100610495818501836001600160a01b03169052565b60e085015191506101206104b3818601846001600160a01b03169052565b908501519150610140906104d1858301846001600160a01b03169052565b8501516001600160a01b0390811661016086015294015190931661018090920191909152919050565b60006020828403121561050c57600080fd5b81356001600160a01b038116811461052357600080fd5b939250505056fea264697066735822122017a074b3a1ce2279e970e256b27c895f3099d5242698901e38e90f300d438a6c64736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "DEFAULT_APP_WHITELISTING_ENABLED";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DEFAULT_LIQUIDATION_PERIOD";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DEFAULT_NON_UPGRADEABLE";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DEFAULT_PATRICIAN_PERIOD";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DEFAULT_REWARD_ADDRESS";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DEFAULT_TOGA_MIN_BOND_DURATION";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "DEFAULT_TRUSTED_FORWARDERS";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "RESOLVER_BASE_SUPER_TOKEN_KEY";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "RESOLVER_BASE_TOKEN_KEY";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getFramework";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "contract TestGovernance";
                readonly name: "governance";
                readonly type: "address";
            }, {
                readonly internalType: "contract Superfluid";
                readonly name: "host";
                readonly type: "address";
            }, {
                readonly internalType: "contract ConstantFlowAgreementV1";
                readonly name: "cfa";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "contract ISuperfluid";
                    readonly name: "host";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract IConstantFlowAgreementV1";
                    readonly name: "cfa";
                    readonly type: "address";
                }];
                readonly internalType: "struct CFAv1Library.InitData";
                readonly name: "cfaLib";
                readonly type: "tuple";
            }, {
                readonly internalType: "contract InstantDistributionAgreementV1";
                readonly name: "ida";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "contract ISuperfluid";
                    readonly name: "host";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract IInstantDistributionAgreementV1";
                    readonly name: "ida";
                    readonly type: "address";
                }];
                readonly internalType: "struct IDAv1Library.InitData";
                readonly name: "idaLib";
                readonly type: "tuple";
            }, {
                readonly internalType: "contract SuperTokenFactory";
                readonly name: "superTokenFactory";
                readonly type: "address";
            }, {
                readonly internalType: "contract TestResolver";
                readonly name: "resolver";
                readonly type: "address";
            }, {
                readonly internalType: "contract SuperfluidLoader";
                readonly name: "superfluidLoader";
                readonly type: "address";
            }, {
                readonly internalType: "contract CFAv1Forwarder";
                readonly name: "cfaV1Forwarder";
                readonly type: "address";
            }, {
                readonly internalType: "contract IDAv1Forwarder";
                readonly name: "idaV1Forwarder";
                readonly type: "address";
            }];
            readonly internalType: "struct SuperfluidFrameworkDeploymentSteps.Framework";
            readonly name: "sf";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SuperfluidFrameworkDeploymentStepsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperfluidFrameworkDeploymentSteps;
}
export {};
//# sourceMappingURL=SuperfluidFrameworkDeploymentSteps__factory.d.ts.map