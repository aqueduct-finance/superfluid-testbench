import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { SuperfluidLoader, SuperfluidLoaderInterface } from "../../../contracts/utils/SuperfluidLoader";
type SuperfluidLoaderConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperfluidLoader__factory extends ContractFactory {
    constructor(...args: SuperfluidLoaderConstructorParams);
    deploy(resolver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperfluidLoader>;
    getDeployTransaction(resolver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperfluidLoader;
    connect(signer: Signer): SuperfluidLoader__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b506040516104ea3803806104ea83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b60805161046061008a600039600060b501526104606000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f490e2f014610030575b600080fd5b61004361003e366004610307565b61008f565b604051610086919081516001600160a01b039081168252602080840151821690830152604080840151821690830152606092830151169181019190915260800190565b60405180910390f35b6040805160808101825260008082526020820181905291810182905260608101919091527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663693ec85e84846040516020016100f5929190610379565b6040516020818303038152906040526040518263ffffffff1660e01b815260040161012091906103a0565b602060405180830381865afa15801561013d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101619190610406565b6001600160a01b03168082526040805163398d76b760e11b8152905163731aed6e916004808201926020929091908290030181865afa1580156101a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101cc9190610406565b6001600160a01b0390811660208301528151604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd3600482015291169063b6d200de90602401602060405180830381865afa15801561023a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025e9190610406565b6001600160a01b0390811660408381019190915282519051635b69006f60e11b81527f8aedc3b5d4bf031e11a7e2940f7251c005698405d58e02e1c247fed3b1b3a674600482015291169063b6d200de90602401602060405180830381865afa1580156102cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f39190610406565b6001600160a01b0316606082015292915050565b6000806020838503121561031a57600080fd5b823567ffffffffffffffff8082111561033257600080fd5b818501915085601f83011261034657600080fd5b81358181111561035557600080fd5b86602082850101111561036757600080fd5b60209290920196919550909350505050565b6a29bab832b933363ab4b21760a91b81528183600b83013760009101600b01908152919050565b600060208083528351808285015260005b818110156103cd578581018301518582016040015282016103b1565b506000604082860101526040601f19601f8301168501019250505092915050565b6001600160a01b038116811461040357600080fd5b50565b60006020828403121561041857600080fd5b8151610423816103ee565b939250505056fea2646970667358221220b5ab32d992d6fda7c0ac2067f68555e40b6409843bed5107bfc2b62274a7bb8064736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IResolver";
            readonly name: "resolver";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "releaseVersion";
            readonly type: "string";
        }];
        readonly name: "loadFramework";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "contract ISuperfluid";
                readonly name: "superfluid";
                readonly type: "address";
            }, {
                readonly internalType: "contract ISuperTokenFactory";
                readonly name: "superTokenFactory";
                readonly type: "address";
            }, {
                readonly internalType: "contract ISuperAgreement";
                readonly name: "agreementCFAv1";
                readonly type: "address";
            }, {
                readonly internalType: "contract ISuperAgreement";
                readonly name: "agreementIDAv1";
                readonly type: "address";
            }];
            readonly internalType: "struct SuperfluidLoader.Framework";
            readonly name: "result";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): SuperfluidLoaderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperfluidLoader;
}
export {};
//# sourceMappingURL=SuperfluidLoader__factory.d.ts.map