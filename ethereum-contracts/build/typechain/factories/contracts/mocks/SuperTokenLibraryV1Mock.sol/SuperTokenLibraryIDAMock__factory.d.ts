import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SuperTokenLibraryIDAMock, SuperTokenLibraryIDAMockInterface } from "../../../../contracts/mocks/SuperTokenLibraryV1Mock.sol/SuperTokenLibraryIDAMock";
type SuperTokenLibraryIDAMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperTokenLibraryIDAMock__factory extends ContractFactory {
    constructor(...args: SuperTokenLibraryIDAMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperTokenLibraryIDAMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperTokenLibraryIDAMock;
    connect(signer: Signer): SuperTokenLibraryIDAMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50611f6c806100206000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80635158472c116100b85780639cdf4d671161007c5780639cdf4d6714610302578063c9869ed014610315578063c9b8a2f614610328578063d39363c01461036c578063eadc45511461037f578063fe134e9f1461039257600080fd5b80635158472c146102a35780636436e3d3146102b65780636ddb6798146102c95780637489c503146102dc57806378bb14ea146102ef57600080fd5b80633939709e116100ff5780633939709e146102045780634018cb64146102175780634277b78f146102395780635002bb091461024c57806350c8da8f1461025f57600080fd5b8063068f3d191461013c57806306f75d2e1461015157806316dfe9271461016457806325a108af146101775780632a722c06146101d4575b600080fd5b61014f61014a3660046113f1565b6103a5565b005b61014f61015f366004611478565b6103c3565b61014f6101723660046114ec565b6103df565b61018a61018536600461154d565b6103f9565b604080516001600160a01b03909616865263ffffffff9094166020860152911515928401929092526001600160801b039091166060830152608082015260a0015b60405180910390f35b6101e76101e2366004611579565b610425565b604080519283526001600160801b039091166020830152016101cb565b61014f6102123660046115df565b61044a565b61022a610225366004611620565b61045f565b6040516101cb9392919061169d565b61014f61024736600461173a565b610483565b61014f61025a36600461178d565b610499565b61027261026d3660046117e9565b6104ae565b6040805194151585526001600160801b039384166020860152918316918401919091521660608201526080016101cb565b61014f6102b13660046113f1565b6104d8565b61014f6102c4366004611478565b6104ee565b61014f6102d73660046117e9565b610503565b61014f6102ea366004611834565b610517565b61014f6102fd366004611875565b61052b565b61014f6103103660046118b5565b61053f565b61014f61032336600461178d565b610554565b61033b61033636600461178d565b610569565b6040516101cb9493929190931515845291151560208401526001600160801b03166040830152606082015260800190565b61014f61037a3660046117e9565b610595565b61014f61038d366004611906565b6105a9565b61014f6103a0366004611934565b6105c1565b6103bb6001600160a01b038616858585856105d6565b505050505050565b6103d86001600160a01b038516848484610704565b5050505050565b6103f36001600160a01b038416838361082f565b50505050565b6000808080806104126001600160a01b03881687610957565b939b929a50909850965090945092505050565b60008061043d6001600160a01b0387168686866109f3565b9150915094509492505050565b6103d86001600160a01b038516848484610a98565b606080806104766001600160a01b03861685610b23565b9250925092509250925092565b6103bb6001600160a01b03861685858585610bbc565b6103d86001600160a01b038516848484610c49565b60008080806104c76001600160a01b0388168787610c73565b935093509350935093509350935093565b6103bb6001600160a01b03861685858585610d19565b6103d86001600160a01b038516848484610d67565b6103f36001600160a01b0384168383610db4565b6103f36001600160a01b0384168383610ddb565b6103f36001600160a01b0384168383610dfa565b6103d86001600160a01b038516848484610e19565b6103d86001600160a01b038516848484610e3a565b60008080806105836001600160a01b038916888888610e5b565b929b919a509850909650945050505050565b6103f36001600160a01b0384168383610f0a565b6105bc6001600160a01b03831682610f29565b505050565b6103d86001600160a01b038516848484610f4d565b60008060006105e488610fd8565b91509150816001600160a01b03166339255d5b82836001600160a01b031663acafa1b88c8c8c8c60006001600160401b038111156106245761062461132e565b6040519080825280601f01601f19166020018201604052801561064e576020820181803683370190505b506040516024016106639594939291906119d7565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b03191682526106ae939250908990600401611a22565b6000604051808303816000875af11580156106cd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106f59190810190611a62565b50600198975050505050505050565b600080600061071287610fd8565b91509150816001600160a01b03166339255d5b82836001600160a01b0316636041ae968b8b8b60006001600160401b038111156107515761075161132e565b6040519080825280601f01601f19166020018201604052801561077b576020820181803683370190505b5060405160240161078f9493929190611acf565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b03191682526107da939250908990600401611a22565b6000604051808303816000875af11580156107f9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108219190810190611a62565b506001979650505050505050565b600080600061083d86610fd8565b91509150816001600160a01b03166339255d5b82836001600160a01b031663d787840a8a8a60006001600160401b0381111561087b5761087b61132e565b6040519080825280601f01601f1916602001820160405280156108a5576020820181803683370190505b506040516024016108b893929190611b07565b60408051808303601f1901815291815260208201805160e094851b6001600160e01b03909116179052519185901b6001600160e01b0319168252610903939250908990600401611a22565b6000604051808303816000875af1158015610922573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261094a9190810190611a62565b5060019695505050505050565b6000806000806000806109698861119f565b60405163cd7245c560e01b81526001600160a01b038b81166004830152602482018b9052919350908316915063cd7245c59060440160a060405180830381865afa1580156109bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109df9190611b4c565b939c929b5090995097509095509350505050565b6000806000610a018761119f565b604051632266eabb60e21b81526001600160a01b038a81166004830152898116602483015263ffffffff8916604483015260648201889052919350908316915063899baaec906084016040805180830381865afa158015610a66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8a9190611bb3565b925092505094509492505050565b6000806000610aa687610fd8565b91509150816001600160a01b03166339255d5b82836001600160a01b0316637fbc76398b8b8b60006001600160401b03811115610ae557610ae561132e565b6040519080825280601f01601f191660200182016040528015610b0f576020820181803683370190505b5060405160240161078f9493929190611bd8565b60608060606000610b338661119f565b6040516316db59b760e31b81526001600160a01b0389811660048301528881166024830152919350908316915063b6dacdb890604401600060405180830381865afa158015610b86573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610bae9190810190611d0d565b935093509350509250925092565b6000806000610bca88610fd8565b91509150816001600160a01b03166339255d5b82836001600160a01b031663232d2b588c8c8c8c60006001600160401b03811115610c0a57610c0a61132e565b6040519080825280601f01601f191660200182016040528015610c34576020820181803683370190505b50604051602401610663959493929190611deb565b60408051600080825260208201909252610c6a908690869086908690610d19565b95945050505050565b6000806000806000610c848861119f565b6040516323fc23f360e01b81526001600160a01b038b811660048301528a8116602483015263ffffffff8a16604483015291935090831691506323fc23f390606401608060405180830381865afa158015610ce3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d079190611e32565b94509450945094505093509350935093565b6000806000610d2788610fd8565b91509150816001600160a01b03166339255d5b82836001600160a01b0316632e5e74c68c8c8c8c60006001600160401b038111156106245761062461132e565b6000806000610d7587610fd8565b91509150816001600160a01b03166339255d5b82836001600160a01b031663acf4a6c28b8b8b60006001600160401b038111156107515761075161132e565b60408051600080825260208201909252610dd390859085908590610d67565b949350505050565b60408051600080825260208201909252610dd390859085908590610f4d565b60408051600080825260208201909252610dd390859085908590610a98565b60408051600080825260208201909252610c6a908690869086908690610bbc565b60408051600080825260208201909252610c6a9086908690869086906105d6565b6000806000806000610e6c8961119f565b604051635b53405160e01b81526001600160a01b038c811660048301528b8116602483015263ffffffff8b16604483015289811660648301529193509083169150635b53405190608401608060405180830381865afa158015610ed3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef79190611e83565b929c919b50995090975095505050505050565b60408051600080825260208201909252610dd390859085908590610704565b60408051600080825260208201909252610f46908490849061082f565b9392505050565b6000806000610f5b87610fd8565b91509150816001600160a01b03166339255d5b82836001600160a01b031663b96731c28b8b8b60006001600160401b03811115610f9a57610f9a61132e565b6040519080825280601f01601f191660200182016040528015610fc4576020820181803683370190505b5060405160240161078f9493929190611ed0565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fa832ee1924ea960211af2df07d65d166232018f613ac6708043cd8f8773eddeb546001600160a01b03811661116e576001600160a01b03821661109d57826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa158015611076573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061109a9190611f03565b91505b604051635b69006f60e11b81527f8aedc3b5d4bf031e11a7e2940f7251c005698405d58e02e1c247fed3b1b3a67460048201526001600160a01b0383169063b6d200de90602401602060405180830381865afa158015611101573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111259190611f03565b9050817f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea83755807fa832ee1924ea960211af2df07d65d166232018f613ac6708043cd8f8773eddeb555b6001600160a01b03821661118457611184611f20565b6001600160a01b03811661119a5761119a611f20565b915091565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fa832ee1924ea960211af2df07d65d166232018f613ac6708043cd8f8773eddeb546001600160a01b03811661116e576001600160a01b03821661126457826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa15801561123d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112619190611f03565b91505b604051635b69006f60e11b81527f8aedc3b5d4bf031e11a7e2940f7251c005698405d58e02e1c247fed3b1b3a67460048201526001600160a01b0383169063b6d200de90602401602060405180830381865afa1580156112c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ec9190611f03565b90506001600160a01b03821661118457611184611f20565b6001600160a01b038116811461131957600080fd5b50565b63ffffffff8116811461131957600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561136c5761136c61132e565b604052919050565b60006001600160401b0382111561138d5761138d61132e565b50601f01601f191660200190565b600082601f8301126113ac57600080fd5b81356113bf6113ba82611374565b611344565b8181528460208386010111156113d457600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a0868803121561140957600080fd5b853561141481611304565b9450602086013561142481611304565b935060408601356114348161131c565b9250606086013561144481611304565b915060808601356001600160401b0381111561145f57600080fd5b61146b8882890161139b565b9150509295509295909350565b6000806000806080858703121561148e57600080fd5b843561149981611304565b935060208501356114a981611304565b925060408501356114b98161131c565b915060608501356001600160401b038111156114d457600080fd5b6114e08782880161139b565b91505092959194509250565b60008060006060848603121561150157600080fd5b833561150c81611304565b9250602084013561151c8161131c565b915060408401356001600160401b0381111561153757600080fd5b6115438682870161139b565b9150509250925092565b6000806040838503121561156057600080fd5b823561156b81611304565b946020939093013593505050565b6000806000806080858703121561158f57600080fd5b843561159a81611304565b935060208501356115aa81611304565b925060408501356115ba8161131c565b9396929550929360600135925050565b6001600160801b038116811461131957600080fd5b600080600080608085870312156115f557600080fd5b843561160081611304565b935060208501356116108161131c565b925060408501356114b9816115ca565b6000806040838503121561163357600080fd5b823561163e81611304565b9150602083013561164e81611304565b809150509250929050565b600081518084526020808501945080840160005b838110156116925781516001600160801b03168752958201959082019060010161166d565b509495945050505050565b606080825284519082018190526000906020906080840190828801845b828110156116df5781516001600160a01b0316845292840192908401906001016116ba565b5050508381038285015285518082528683019183019060005b8181101561171a57835163ffffffff16835292840192918401916001016116f8565b5050848103604086015261172e8187611659565b98975050505050505050565b600080600080600060a0868803121561175257600080fd5b853561175d81611304565b9450602086013561176d8161131c565b9350604086013561177d81611304565b92506060860135611444816115ca565b600080600080608085870312156117a357600080fd5b84356117ae81611304565b935060208501356117be81611304565b925060408501356117ce8161131c565b915060608501356117de81611304565b939692955090935050565b6000806000606084860312156117fe57600080fd5b833561180981611304565b9250602084013561181981611304565b915060408401356118298161131c565b809150509250925092565b60008060006060848603121561184957600080fd5b833561185481611304565b925060208401356118648161131c565b929592945050506040919091013590565b60008060006060848603121561188a57600080fd5b833561189581611304565b925060208401356118a58161131c565b91506040840135611829816115ca565b600080600080608085870312156118cb57600080fd5b84356118d681611304565b935060208501356118e68161131c565b925060408501356118f681611304565b915060608501356117de816115ca565b6000806040838503121561191957600080fd5b823561192481611304565b9150602083013561164e8161131c565b6000806000806080858703121561194a57600080fd5b843561195581611304565b935060208501356119658161131c565b92506040850135915060608501356001600160401b038111156114d457600080fd5b60005b838110156119a257818101518382015260200161198a565b50506000910152565b600081518084526119c3816020860160208601611987565b601f01601f19169290920160200192915050565b6001600160a01b038681168252858116602083015263ffffffff851660408301528316606082015260a060808201819052600090611a17908301846119ab565b979650505050505050565b6001600160a01b0384168152606060208201819052600090611a46908301856119ab565b8281036040840152611a5881856119ab565b9695505050505050565b600060208284031215611a7457600080fd5b81516001600160401b03811115611a8a57600080fd5b8201601f81018413611a9b57600080fd5b8051611aa96113ba82611374565b818152856020838501011115611abe57600080fd5b610c6a826020830160208601611987565b6001600160a01b0385811682528416602082015263ffffffff83166040820152608060608201819052600090611a58908301846119ab565b6001600160a01b038416815263ffffffff83166020820152606060408201819052600090610c6a908301846119ab565b80518015158114611b4757600080fd5b919050565b600080600080600060a08688031215611b6457600080fd5b8551611b6f81611304565b6020870151909550611b808161131c565b9350611b8e60408701611b37565b92506060860151611b9e816115ca565b80925050608086015190509295509295909350565b60008060408385031215611bc657600080fd5b82519150602083015161164e816115ca565b6001600160a01b038516815263ffffffff841660208201526001600160801b0383166040820152608060608201819052600090611a58908301846119ab565b60006001600160401b03821115611c3057611c3061132e565b5060051b60200190565b600082601f830112611c4b57600080fd5b81516020611c5b6113ba83611c17565b82815260059290921b84018101918181019086841115611c7a57600080fd5b8286015b84811015611c9e578051611c918161131c565b8352918301918301611c7e565b509695505050505050565b600082601f830112611cba57600080fd5b81516020611cca6113ba83611c17565b82815260059290921b84018101918181019086841115611ce957600080fd5b8286015b84811015611c9e578051611d00816115ca565b8352918301918301611ced565b600080600060608486031215611d2257600080fd5b83516001600160401b0380821115611d3957600080fd5b818601915086601f830112611d4d57600080fd5b81516020611d5d6113ba83611c17565b82815260059290921b8401810191818101908a841115611d7c57600080fd5b948201945b83861015611da3578551611d9481611304565b82529482019490820190611d81565b91890151919750909350505080821115611dbc57600080fd5b611dc887838801611c3a565b93506040860151915080821115611dde57600080fd5b5061154386828701611ca9565b6001600160a01b03868116825263ffffffff86166020830152841660408201526001600160801b038316606082015260a060808201819052600090611a17908301846119ab565b60008060008060808587031215611e4857600080fd5b611e5185611b37565b93506020850151611e61816115ca565b6040860151909350611e72816115ca565b60608601519092506117de816115ca565b60008060008060808587031215611e9957600080fd5b611ea285611b37565b9350611eb060208601611b37565b92506040850151611ec0816115ca565b6060959095015193969295505050565b60018060a01b038516815263ffffffff84166020820152826040820152608060608201526000611a5860808301846119ab565b600060208284031215611f1557600080fd5b8151610f4681611304565b634e487b7160e01b600052600160045260246000fdfea26469706673582212208c1339def638517362a43ca23f5cf389883c3a97797acfb124c80f3d8fa5f1d464736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }];
        readonly name: "approveSubscriptionTest";
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
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "approveSubscriptionWithUserDataTest";
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
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "calculateDistributionTest";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "actualAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint128";
            readonly name: "newIndexValue";
            readonly type: "uint128";
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
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }];
        readonly name: "claimTest";
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
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "claimWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }];
        readonly name: "createIndexTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "createIndexWithUserDataTest";
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
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }];
        readonly name: "deleteSubscriptionTest";
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
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "deleteSubscriptionWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "distributeTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "distributeWithUserDataTest";
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
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }];
        readonly name: "getIndexTest";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "exist";
            readonly type: "bool";
        }, {
            readonly internalType: "uint128";
            readonly name: "indexValue";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "totalUnitsApproved";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "totalUnitsPending";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "agreementId";
            readonly type: "bytes32";
        }];
        readonly name: "getSubscriptionByIDTest";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }, {
            readonly internalType: "uint128";
            readonly name: "units";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint256";
            readonly name: "pendingDistribution";
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
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }];
        readonly name: "getSubscriptionTest";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "exist";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }, {
            readonly internalType: "uint128";
            readonly name: "units";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint256";
            readonly name: "pendingDistribution";
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
            readonly name: "subscriber";
            readonly type: "address";
        }];
        readonly name: "listSubscriptionsTest";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "publishers";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint32[]";
            readonly name: "indexIds";
            readonly type: "uint32[]";
        }, {
            readonly internalType: "uint128[]";
            readonly name: "unitsList";
            readonly type: "uint128[]";
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
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }];
        readonly name: "revokeSubscriptionTest";
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
            readonly name: "publisher";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "revokeSubscriptionWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint128";
            readonly name: "indexValue";
            readonly type: "uint128";
        }];
        readonly name: "updateIndexValueTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint128";
            readonly name: "indexValue";
            readonly type: "uint128";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "updateIndexValueWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly internalType: "uint128";
            readonly name: "units";
            readonly type: "uint128";
        }];
        readonly name: "updateSubscriptionUnitsTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "indexId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "subscriber";
            readonly type: "address";
        }, {
            readonly internalType: "uint128";
            readonly name: "units";
            readonly type: "uint128";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "updateSubscriptionUnitsWithUserDataTest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SuperTokenLibraryIDAMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperTokenLibraryIDAMock;
}
export {};
//# sourceMappingURL=SuperTokenLibraryIDAMock__factory.d.ts.map