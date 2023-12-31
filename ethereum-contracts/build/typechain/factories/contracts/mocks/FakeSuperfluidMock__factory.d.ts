import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { FakeSuperfluidMock, FakeSuperfluidMockInterface } from "../../../contracts/mocks/FakeSuperfluidMock";
type FakeSuperfluidMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FakeSuperfluidMock__factory extends ContractFactory {
    constructor(...args: FakeSuperfluidMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<FakeSuperfluidMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): FakeSuperfluidMock;
    connect(signer: Signer): FakeSuperfluidMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610314806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806361d164d314610030575b600080fd5b61004361003e3660046101d9565b610045565b005b60006060846001600160a01b0316848460405161006392919061026a565b6000604051808303816000865af19150503d80600081146100a0576040519150601f19603f3d011682016040523d82523d6000602084013e6100a5565b606091505b50909250905081156100b9576100b961027a565b6100c2816100c9565b5050505050565b6004815110156101205760405162461bcd60e51b815260206004820152601a60248201527f43616c6c5574696c733a2074617267657420726576657274282900000000000060448201526064015b60405180910390fd5b602081015163b1b7848f60e01b6001600160e01b03198216016101d05760408051808201825260208082527f43616c6c5574696c733a207461726765742070616e69636b65643a2030785f5f90820190815260248501517f43616c6c5574696c733a207461726765742070616e69636b65643a2030780000600482811c600f908116603090810160081b918516011791909117909252925162461bcd60e51b815291929161011791849101610290565b81518060208401fd5b6000806000604084860312156101ee57600080fd5b83356001600160a01b038116811461020557600080fd5b9250602084013567ffffffffffffffff8082111561022257600080fd5b818601915086601f83011261023657600080fd5b81358181111561024557600080fd5b87602082850101111561025757600080fd5b6020830194508093505050509250925092565b8183823760009101908152919050565b634e487b7160e01b600052600160045260246000fd5b600060208083528351808285015260005b818110156102bd578581018301518582016040015282016102a1565b506000604082860101526040601f19601f830116850101925050509291505056fea26469706673582212201fbde9f723c078721586e105bae20375631d2e47e06109aa2966e2b31468d1ca64736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "agreement";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "callData";
            readonly type: "bytes";
        }];
        readonly name: "callAgreement";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): FakeSuperfluidMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FakeSuperfluidMock;
}
export {};
//# sourceMappingURL=FakeSuperfluidMock__factory.d.ts.map