import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SuperAppMockWithRegistrationKey, SuperAppMockWithRegistrationKeyInterface } from "../../../../contracts/mocks/SuperAppMocks.sol/SuperAppMockWithRegistrationKey";
type SuperAppMockWithRegistrationKeyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperAppMockWithRegistrationKey__factory extends ContractFactory {
    constructor(...args: SuperAppMockWithRegistrationKeyConstructorParams);
    deploy(host: PromiseOrValue<string>, configWord: PromiseOrValue<BigNumberish>, registrationKey: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperAppMockWithRegistrationKey>;
    getDeployTransaction(host: PromiseOrValue<string>, configWord: PromiseOrValue<BigNumberish>, registrationKey: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperAppMockWithRegistrationKey;
    connect(signer: Signer): SuperAppMockWithRegistrationKey__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161022f38038061022f83398101604081905261002f916100d1565b60405163bd1c448b60e01b81526001600160a01b0384169063bd1c448b9061005d90859085906004016101a8565b600060405180830381600087803b15801561007757600080fd5b505af115801561008b573d6000803e3d6000fd5b505050505050506101e2565b634e487b7160e01b600052604160045260246000fd5b60005b838110156100c85781810151838201526020016100b0565b50506000910152565b6000806000606084860312156100e657600080fd5b83516001600160a01b03811681146100fd57600080fd5b6020850151604086015191945092506001600160401b038082111561012157600080fd5b818601915086601f83011261013557600080fd5b81518181111561014757610147610097565b604051601f8201601f19908116603f0116810190838211818310171561016f5761016f610097565b8160405282815289602084870101111561018857600080fd5b6101998360208301602088016100ad565b80955050505050509250925092565b82815260406020820152600082518060408401526101cd8160608501602087016100ad565b601f01601f1916919091016060019392505050565b603f806101f06000396000f3fe6080604052600080fdfea26469706673582212201cf962a0fb8acc8f84b03139312bda1ff6eacad2ab1b1df66e0f40528d9411eb64736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "configWord";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "registrationKey";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }];
    static createInterface(): SuperAppMockWithRegistrationKeyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperAppMockWithRegistrationKey;
}
export {};
//# sourceMappingURL=SuperAppMockWithRegistrationKey__factory.d.ts.map