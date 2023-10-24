import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SuperTokenLibraryCFAMock, SuperTokenLibraryCFAMockInterface } from "../../../../contracts/mocks/SuperTokenLibraryV1Mock.sol/SuperTokenLibraryCFAMock";
type SuperTokenLibraryCFAMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperTokenLibraryCFAMock__factory extends ContractFactory {
    constructor(...args: SuperTokenLibraryCFAMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperTokenLibraryCFAMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperTokenLibraryCFAMock;
    connect(signer: Signer): SuperTokenLibraryCFAMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50611c72806100206000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80638e33f761116100de578063cf86457a11610097578063e7295e5511610071578063e7295e551461037d578063ebd3eac114610390578063ed860366146103a3578063f5691f73146103b657600080fd5b8063cf86457a14610336578063d22d20aa14610357578063dc1978681461036a57600080fd5b80638e33f761146102a1578063ab0c1e5f146102b4578063b076afff146102c7578063b85f67bf146102fd578063c3c4f07a14610310578063c9929fc41461032357600080fd5b806350b027fc1161013057806350b027fc1461022f57806350bb295c146102425780636b26d42d14610255578063780808cd1461026857806384213a281461027b5780638713495c1461028e57600080fd5b80631aa2e8dc146101785780631abea2401461018d5780631dd85401146101d0578063245bc59a146101e35780633b556516146101f65780635034dd411461021c575b600080fd5b61018b61018636600461154f565b6103c9565b005b6101a061019b36600461154f565b6103e3565b604080519415158552921515602085015290151591830191909152600b0b60608201526080015b60405180910390f35b61018b6101de36600461166c565b61040d565b61018b6101f13660046116e0565b610429565b61020961020436600461154f565b610441565b604051600b9190910b81526020016101c7565b61018b61022a366004611719565b61045f565b61018b61023d3660046117a0565b61047d565b61018b6102503660046117fc565b610492565b61018b61026336600461166c565b6104a6565b6102096102763660046116e0565b6104bb565b61018b61028936600461183c565b6104d7565b61018b61029c36600461166c565b6104ec565b61018b6102af3660046117fc565b610501565b61018b6102c23660046117fc565b610515565b6102da6102d536600461154f565b610529565b60408051948552600b9390930b60208501529183015260608201526080016101c7565b6102da61030b3660046116e0565b610542565b61018b61031e36600461154f565b61056a565b61018b6103313660046116e0565b61057e565b61034961034436600461187d565b610591565b6040519081526020016101c7565b61018b61036536600461166c565b6105a6565b61018b6103783660046118c0565b6105bb565b61018b61038b36600461183c565b6105db565b61018b61039e3660046117fc565b6105f0565b61018b6103b1366004611719565b610604565b61018b6103c43660046117a0565b61061a565b6103dd6001600160a01b038416838361062f565b50505050565b60008080806103fc6001600160a01b038816878761064e565b935093509350935093509350935093565b6104226001600160a01b038516848484610707565b5050505050565b61043c6001600160a01b03821683610832565b505050565b60006104576001600160a01b0385168484610963565b949350505050565b6104756001600160a01b038616858585856109fb565b505050505050565b6104226001600160a01b038516848484610b29565b6103dd6001600160a01b0384168383610b53565b6104226001600160a01b038516848484610b72565b60006104d06001600160a01b03841683610bbf565b9392505050565b6104226001600160a01b038516848484610c42565b6104226001600160a01b038516848484610ccd565b6103dd6001600160a01b0384168383610d1a565b6103dd6001600160a01b0384168383610d39565b60008080806103fc6001600160a01b0388168787610d58565b600080808061055a6001600160a01b03871686610dfa565b9299919850965090945092505050565b6103dd6001600160a01b0384168383610e93565b61043c6001600160a01b03821683610eb2565b60006104d06001600160a01b03841683610efe565b6104226001600160a01b038516848484610f83565b6105d26001600160a01b0387168686868686610fd0565b50505050505050565b6104226001600160a01b038516848484611130565b6103dd6001600160a01b038416838361117d565b6104756001600160a01b0386168585858561119c565b6104226001600160a01b0385168484846111ea565b6040805160008082526020820190925261045790859085908590610c42565b600080600080600061065f8861120b565b604051622115df60e11b81526001600160a01b038b811660048301528a811660248301528981166044830152919350600092509083169062422bbe90606401606060405180830381865afa1580156106bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106df919061193c565b600180831681149d83821c821682149d5060029390931c8116149a5098509650505050505050565b60008060006107158761138c565b91509150816001600160a01b03166339255d5b82836001600160a01b0316635f51fb238b8b8b60006001600160401b03811115610754576107546115a9565b6040519080825280601f01601f19166020018201604052801561077e576020820181803683370190505b5060405160240161079294939291906119ca565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b03191682526107dd939250908990600401611a0a565b6000604051808303816000875af11580156107fc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108249190810190611a40565b506001979650505050505050565b60008060006108408561138c565b91509150816001600160a01b03166339255d5b82836001600160a01b031663062e56ec898960006001600160401b0381111561087e5761087e6115a9565b6040519080825280601f01601f1916602001820160405280156108a8576020820181803683370190505b506040516024016108bb93929190611aad565b60408051601f19818403018152918152602080830180516001600160e01b031660e095861b179052815160008152908101918290529286901b6001600160e01b03191690526109109392509060248101611a0a565b6000604051808303816000875af115801561092f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109579190810190611a40565b50600195945050505050565b60008061096f8561120b565b604051631cd43d1160e31b81526001600160a01b03888116600483015287811660248301528681166044830152919350908316915063e6a1e88890606401608060405180830381865afa1580156109ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ee9190611ad9565b5090979650505050505050565b6000806000610a098861138c565b91509150816001600160a01b03166339255d5b82836001600160a01b031663354b95908c8c8c8c60006001600160401b03811115610a4957610a496115a9565b6040519080825280601f01601f191660200182016040528015610a73576020820181803683370190505b50604051602401610a88959493929190611b17565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b0319168252610ad3939250908990600401611a0a565b6000604051808303816000875af1158015610af2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b1a9190810190611a40565b50600198975050505050505050565b60408051600080825260208201909252610b4a90869086908690869061119c565b95945050505050565b6040805160008082526020820190925261045790859085908590610707565b6000806000610b808761138c565b91509150816001600160a01b03166339255d5b82836001600160a01b03166362fc305e8b8b8b60006001600160401b03811115610754576107546115a9565b600080610bcb8461120b565b60405163e8e7e2d160e01b81526001600160a01b0387811660048301528681166024830152919350908316915063e8e7e2d190604401602060405180830381865afa158015610c1e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104579190611b60565b6000806000610c508761138c565b91509150816001600160a01b03166339255d5b82836001600160a01b0316634c8b181f8b8b8b60006001600160401b03811115610c8f57610c8f6115a9565b6040519080825280601f01601f191660200182016040528015610cb9576020820181803683370190505b506040516024016107929493929190611b7d565b6000806000610cdb8761138c565b91509150816001600160a01b03166339255d5b82836001600160a01b031663ac5f5d008b8b8b60006001600160401b03811115610754576107546115a9565b6040805160008082526020820190925261045790859085908590610f83565b6040805160008082526020820190925261045790859085908590610b72565b6000806000806000610d698861120b565b604051631cd43d1160e31b81526001600160a01b038b811660048301528a811660248301528981166044830152919350908316915063e6a1e88890606401608060405180830381865afa158015610dc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de89190611ad9565b929b919a509850909650945050505050565b6000806000806000610e0b8761120b565b604051630f1ac49560e01b81526001600160a01b038a8116600483015289811660248301529193509083169150630f1ac49590604401608060405180830381865afa158015610e5e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e829190611ad9565b929a91995097509095509350505050565b6040805160008082526020820190925261045790859085908590611130565b6000806000610ec08561138c565b91509150816001600160a01b03166339255d5b82836001600160a01b03166354b770e3898960006001600160401b0381111561087e5761087e6115a9565b600080610f0a8461120b565b6040516346ccbfb760e11b81526001600160a01b038781166004830152600b87900b60248301529193509083169150638d997f6e90604401602060405180830381865afa158015610f5f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104579190611bb1565b6000806000610f918761138c565b91509150816001600160a01b03166339255d5b82836001600160a01b03166350209a628b8b8b60006001600160401b03811115610754576107546115a9565b6000806000610fde8961138c565b915091506000600286610ff2576000610ff5565b60015b60ff16901b60018861100857600061100b565b60015b60ff16901b8961101c57600061101f565b60015b171790506001600160a01b03808416906339255d5b908490811663811b3d408e8e878c60006040519080825280601f01601f19166020018201604052801561106e576020820181803683370190505b50604051602401611083959493929190611bca565b60408051601f19818403018152918152602080830180516001600160e01b031660e095861b179052815160008152908101918290529286901b6001600160e01b03191690526110d89392509060248101611a0a565b6000604051808303816000875af11580156110f7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261111f9190810190611a40565b5060019a9950505050505050505050565b600080600061113e8761138c565b91509150816001600160a01b03166339255d5b82836001600160a01b031663b4b333c68b8b8b60006001600160401b03811115610c8f57610c8f6115a9565b6040805160008082526020820190925261045790859085908590610ccd565b60008060006111aa8861138c565b91509150816001600160a01b03166339255d5b82836001600160a01b03166394229ecb8c8c8c8c60006001600160401b03811115610a4957610a496115a9565b60408051600080825260208201909252610b4a9086908690869086906109fb565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a546001600160a01b03811661135b576001600160a01b0382166112d057826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112cd9190611c09565b91505b604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201526001600160a01b0383169063b6d200de90602401602060405180830381865afa158015611334573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113589190611c09565b90505b6001600160a01b03821661137157611371611c26565b6001600160a01b03811661138757611387611c26565b915091565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a546001600160a01b03811661135b576001600160a01b03821661145157826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa15801561142a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061144e9190611c09565b91505b604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201526001600160a01b0383169063b6d200de90602401602060405180830381865afa1580156114b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d99190611c09565b9050817f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea83755807fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a556001600160a01b03821661137157611371611c26565b6001600160a01b038116811461154c57600080fd5b50565b60008060006060848603121561156457600080fd5b833561156f81611537565b9250602084013561157f81611537565b9150604084013561158f81611537565b809150509250925092565b80600b0b811461154c57600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156115e7576115e76115a9565b604052919050565b60006001600160401b03821115611608576116086115a9565b50601f01601f191660200190565b600082601f83011261162757600080fd5b813561163a611635826115ef565b6115bf565b81815284602083860101111561164f57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000806080858703121561168257600080fd5b843561168d81611537565b9350602085013561169d81611537565b925060408501356116ad8161159a565b915060608501356001600160401b038111156116c857600080fd5b6116d487828801611616565b91505092959194509250565b600080604083850312156116f357600080fd5b82356116fe81611537565b9150602083013561170e81611537565b809150509250929050565b600080600080600060a0868803121561173157600080fd5b853561173c81611537565b9450602086013561174c81611537565b9350604086013561175c81611537565b9250606086013561176c8161159a565b915060808601356001600160401b0381111561178757600080fd5b61179388828901611616565b9150509295509295909350565b600080600080608085870312156117b657600080fd5b84356117c181611537565b935060208501356117d181611537565b925060408501356117e181611537565b915060608501356117f18161159a565b939692955090935050565b60008060006060848603121561181157600080fd5b833561181c81611537565b9250602084013561182c81611537565b9150604084013561158f8161159a565b6000806000806080858703121561185257600080fd5b843561185d81611537565b9350602085013561186d81611537565b925060408501356116ad81611537565b6000806040838503121561189057600080fd5b823561189b81611537565b9150602083013561170e8161159a565b803580151581146118bb57600080fd5b919050565b60008060008060008060c087890312156118d957600080fd5b86356118e481611537565b955060208701356118f481611537565b9450611902604088016118ab565b9350611910606088016118ab565b925061191e608088016118ab565b915060a087013561192e8161159a565b809150509295509295509295565b60008060006060848603121561195157600080fd5b83519250602084015160ff8116811461196957600080fd5b604085015190925061158f8161159a565b60005b8381101561199557818101518382015260200161197d565b50506000910152565b600081518084526119b681602086016020860161197a565b601f01601f19169290920160200192915050565b6001600160a01b03858116825284166020820152600b83900b6040820152608060608201819052600090611a009083018461199e565b9695505050505050565b6001600160a01b0384168152606060208201819052600090611a2e9083018561199e565b8281036040840152611a00818561199e565b600060208284031215611a5257600080fd5b81516001600160401b03811115611a6857600080fd5b8201601f81018413611a7957600080fd5b8051611a87611635826115ef565b818152856020838501011115611a9c57600080fd5b610b4a82602083016020860161197a565b6001600160a01b03848116825283166020820152606060408201819052600090610b4a9083018461199e565b60008060008060808587031215611aef57600080fd5b845193506020850151611b018161159a565b6040860151606090960151949790965092505050565b6001600160a01b038681168252858116602083015284166040820152600b83900b606082015260a060808201819052600090611b559083018461199e565b979650505050505050565b600060208284031215611b7257600080fd5b81516104d08161159a565b6001600160a01b038581168252848116602083015283166040820152608060608201819052600090611a009083018461199e565b600060208284031215611bc357600080fd5b5051919050565b6001600160a01b0386811682528516602082015260ff84166040820152600b83900b606082015260a060808201819052600090611b559083018461199e565b600060208284031215611c1b57600080fd5b81516104d081611537565b634e487b7160e01b600052600160045260246000fdfea2646970667358221220ee5bb1df6ce734c26f234ae66a401cf80d97fa8ad370935460f0f481d194438764736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }];
        readonly name: "createFlowFromTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "createFlowFromWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }];
        readonly name: "createFlowTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "createFlowWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "subtractedFlowRateAllowance";
            readonly type: "int96";
        }];
        readonly name: "decreaseFlowRateAllowanceTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "subtractedFlowRateAllowance";
            readonly type: "int96";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "decreaseFlowRateAllowanceWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
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
        readonly name: "deleteFlowFromTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "deleteFlowFromWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
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
        readonly name: "deleteFlowTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "deleteFlowWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }];
        readonly name: "getBufferAmountByFlowRateTest";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "bufferAmount";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
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
        readonly name: "getFlowInfoTest";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "lastUpdated";
            readonly type: "uint256";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }, {
            readonly internalType: "uint256";
            readonly name: "deposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "owedDeposit";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }];
        readonly name: "getFlowPermissionsTest";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "allowCreate";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "allowUpdate";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "allowDelete";
            readonly type: "bool";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRateAllowance";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
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
        readonly name: "getFlowRateTest";
        readonly outputs: readonly [{
            readonly internalType: "int96";
            readonly name: "rate";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getNetFlowInfoTest";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "lastUpdated";
            readonly type: "uint256";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }, {
            readonly internalType: "uint256";
            readonly name: "deposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "owedDeposit";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getNetFlowRateTest";
        readonly outputs: readonly [{
            readonly internalType: "int96";
            readonly name: "netFlowRate";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "addedFlowRateAllowance";
            readonly type: "int96";
        }];
        readonly name: "increaseFlowRateAllowanceTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "addedFlowRateAllowance";
            readonly type: "int96";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "increaseFlowRateAllowanceWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "revokeFlowPermissionsTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "allowCreate";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "allowUpdate";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "allowDelete";
            readonly type: "bool";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRateAllowance";
            readonly type: "int96";
        }];
        readonly name: "setFlowPermissionsTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "setMaxFlowPermissionsTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }];
        readonly name: "updateFlowFromTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "updateFlowFromWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }];
        readonly name: "updateFlowTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "updateFlowWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SuperTokenLibraryCFAMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperTokenLibraryCFAMock;
}
export {};
//# sourceMappingURL=SuperTokenLibraryCFAMock__factory.d.ts.map