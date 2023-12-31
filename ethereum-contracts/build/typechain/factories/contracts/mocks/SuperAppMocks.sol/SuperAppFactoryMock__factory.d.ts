import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SuperAppFactoryMock, SuperAppFactoryMockInterface } from "../../../../contracts/mocks/SuperAppMocks.sol/SuperAppFactoryMock";
type SuperAppFactoryMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperAppFactoryMock__factory extends ContractFactory {
    constructor(...args: SuperAppFactoryMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperAppFactoryMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperAppFactoryMock;
    connect(signer: Signer): SuperAppFactoryMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061012c806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063ad88671d14602d575b600080fd5b603c603836600460ba565b603e565b005b6040516379b9982960e11b81526001600160a01b0383811660048301526024820183905284169063f373305290604401600060405180830381600087803b158015608757600080fd5b505af1158015609a573d6000803e3d6000fd5b50505050505050565b6001600160a01b038116811460b757600080fd5b50565b60008060006060848603121560ce57600080fd5b833560d78160a3565b9250602084013560e58160a3565b92959294505050604091909101359056fea2646970667358221220ef568c4e3b179ea9d68f02ae83e10826553161fab86f83abac465d985aa84a2264736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperApp";
            readonly name: "app";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "configWord";
            readonly type: "uint256";
        }];
        readonly name: "registerAppWithHost";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SuperAppFactoryMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperAppFactoryMock;
}
export {};
//# sourceMappingURL=SuperAppFactoryMock__factory.d.ts.map