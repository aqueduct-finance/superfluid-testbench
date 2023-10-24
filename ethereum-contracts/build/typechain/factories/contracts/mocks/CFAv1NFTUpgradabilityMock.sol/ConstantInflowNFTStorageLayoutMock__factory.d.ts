import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { ConstantInflowNFTStorageLayoutMock, ConstantInflowNFTStorageLayoutMockInterface } from "../../../../contracts/mocks/CFAv1NFTUpgradabilityMock.sol/ConstantInflowNFTStorageLayoutMock";
type ConstantInflowNFTStorageLayoutMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ConstantInflowNFTStorageLayoutMock__factory extends ContractFactory {
    constructor(...args: ConstantInflowNFTStorageLayoutMockConstructorParams);
    deploy(host: PromiseOrValue<string>, constantOutflowNFT: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ConstantInflowNFTStorageLayoutMock>;
    getDeployTransaction(host: PromiseOrValue<string>, constantOutflowNFT: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ConstantInflowNFTStorageLayoutMock;
    connect(signer: Signer): ConstantInflowNFTStorageLayoutMock__factory;
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b506040516200210438038062002104833981016040819052620000349162000103565b6001600160a01b03821660a0819052604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201528391839183919063b6d200de90602401602060405180830381865afa158015620000a4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000ca919062000142565b6001600160a01b039081166080529190911660c052506200016992505050565b6001600160a01b03811681146200010057600080fd5b50565b600080604083850312156200011757600080fd5b82516200012481620000ea565b60208401519092506200013781620000ea565b809150509250929050565b6000602082840312156200015557600080fd5b81516200016281620000ea565b9392505050565b60805160a05160c051611f48620001bc6000396000818161044d01528181610644015281816106b601526109930152600081816102e4015261070101526000818161024b015261102b0152611f486000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806352d1902d116100f95780639903ad3811610097578063c87b56dd11610071578063c87b56dd14610422578063e985e9c514610435578063ef43d2c614610448578063f99a38c41461024457600080fd5b80639903ad38146103f4578063a22cb465146103fc578063b88d4fde1461040f57600080fd5b806370a08231116100d357806370a082311461036c57806389f71d2d146103805780638d47859e1461039357806395d89b41146103ec57600080fd5b806352d1902d146103215780636352211e146103515780636c0360eb1461036457600080fd5b806340c10f1911610166578063469519541161014057806346951954146102cc57806349f289dc146102df5780634cd88b761461030657806350d75d251461031957600080fd5b806340c10f191461029357806342842e0e146102a657806342966c68146102b957600080fd5b8063095ea7b3116101a2578063095ea7b314610231578063181561011461024657806323b872dd1461026d5780632f3885601461028057600080fd5b806301ffc9a7146101c957806306fdde03146101f1578063081812fc14610206575b600080fd5b6101dc6101d73660046115d0565b61046f565b60405190151581526020015b60405180910390f35b6101f96104c1565b6040516101e8919061161e565b610219610214366004611651565b610553565b6040516001600160a01b0390911681526020016101e8565b61024461023f36600461167f565b61057a565b005b6102197f000000000000000000000000000000000000000000000000000000000000000081565b61024461027b3660046116ab565b610606565b61024461028e366004611651565b61062d565b6102446102a136600461167f565b610639565b6102446102b43660046116ab565b610690565b6102446102c7366004611651565b6106ab565b6102446102da3660046116ec565b6106fd565b6102197f000000000000000000000000000000000000000000000000000000000000000081565b6102446103143660046117d6565b6107b5565b61021961089b565b7f9a61ea3469d742a522f41a67608e442d2c27902bed81123f00ba6d3e12e9871e5b6040519081526020016101e8565b61021961035f366004611651565b6108ca565b6101f96108e6565b61034361037a3660046116ec565b50600190565b61034361038e36600461183a565b610902565b6103a66103a1366004611651565b610955565b6040805182516001600160a01b03908116825260208085015182169083015283830151169181019190915260609182015163ffffffff16918101919091526080016101e8565b6101f96109fe565b610244610a0d565b61024461040a366004611885565b610acf565b61024461041d3660046118c3565b610ada565b6101f9610430366004611651565b610b13565b6101dc610443366004611943565b610b20565b6102197f000000000000000000000000000000000000000000000000000000000000000081565b60006301ffc9a760e01b6001600160e01b0319831614806104a057506380ac58cd60e01b6001600160e01b03198316145b806104bb5750635b5e139f60e01b6001600160e01b03198316145b92915050565b6060600180546104d090611971565b80601f01602080910402602001604051908101604052809291908181526020018280546104fc90611971565b80156105495780601f1061051e57610100808354040283529160200191610549565b820191906000526020600020905b81548152906001019060200180831161052c57829003601f168201915b5050505050905090565b600061055e82610b4e565b506000908152600360205260409020546001600160a01b031690565b6000610585826108ca565b9050806001600160a01b0316836001600160a01b0316036105b95760405163e4790b2560e01b815260040160405180910390fd5b336001600160a01b038216148015906105d957506105d78133610b20565b155b156105f75760405163519a92c160e11b815260040160405180910390fd5b6106018383610b67565b505050565b6106103382610bc0565b610601576040516312a8eb0360e11b815260040160405180910390fd5b61063681610c1e565b50565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106825760405163740f7abd60e11b815260040160405180910390fd5b61068c8282610c4e565b5050565b61060183838360405180602001604052806000815250610ada565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106f45760405163740f7abd60e11b815260040160405180910390fd5b61063681610c8a565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663731aed6e6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561075d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078191906119ab565b9050336001600160a01b038216146107ac5760405163ebb7505b60e01b815260040160405180910390fd5b61068c82610cfd565b600054610100900460ff16158080156107d55750600054600160ff909116105b806107ef5750303b1580156107ef575060005460ff166001145b6108145760405162461bcd60e51b815260040161080b906119c8565b60405180910390fd5b6000805460ff191660011790558015610837576000805461ff0019166101001790555b60016108438482611a64565b5060026108508382611a64565b508015610601576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b60006108c57f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b60008060405163eab95e3b60e01b815260040160405180910390fd5b6040518060600160405280602d8152602001611ee6602d913981565b60408051466020808301919091526001600160a01b0380871683850152808616606084015284166080808401919091528351808403909101815260a090920190925280519101206000905b949350505050565b60408051608081018252600080825260208201819052818301819052606082015290516346a3c2cf60e11b8152600481018390526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690638d47859e90602401608060405180830381865afa1580156109da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104bb9190611b24565b6060600280546104d090611971565b600054610100900460ff1615808015610a2d5750600054600160ff909116105b80610a475750303b158015610a47575060005460ff166001145b610a635760405162461bcd60e51b815260040161080b906119c8565b6000805460ff191660011790558015610a86576000805461ff0019166101001790555b8015610636576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020015b60405180910390a150565b61068c338383610f37565b610ae43383610bc0565b610b01576040516312a8eb0360e11b815260040160405180910390fd5b610b0d84848484610fd6565b50505050565b60606104bb826001610fdb565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b60405163eab95e3b60e01b815260040160405180910390fd5b60008181526003602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925908290a45050565b600080610bcc836108ca565b9050806001600160a01b0316846001600160a01b03161480610bf35750610bf38185610b20565b8061094d5750836001600160a01b0316610c0c84610553565b6001600160a01b031614949350505050565b6040518181527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce790602001610ac4565b60405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000610c9582610955565b600083815260036020526040902080546001600160a01b031916905590508160006001600160a01b031682604001516001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6000610d277f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b031603610d7d5760405162461bcd60e51b815260206004820152601d60248201527f5555505350726f786961626c653a206e6f742075706772616461626c65000000604482015260640161080b565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610dbb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ddf9190611bb2565b7f9a61ea3469d742a522f41a67608e442d2c27902bed81123f00ba6d3e12e9871e14610e595760405162461bcd60e51b815260206004820152602360248201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60448201526267696360e81b606482015260840161080b565b6001600160a01b0381163003610eb15760405162461bcd60e51b815260206004820152601960248201527f5555505350726f786961626c653a2070726f7879206c6f6f7000000000000000604482015260640161080b565b610ed9817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc7f9a61ea3469d742a522f41a67608e442d2c27902bed81123f00ba6d3e12e9871e604080519182526001600160a01b038416602083015201610ac4565b816001600160a01b0316836001600160a01b031603610f695760405163d3c7732960e01b815260040160405180910390fd5b6001600160a01b03838116600081815260046020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610b0d565b60606000610fe884610955565b805160208201516040808401519051631cd43d1160e31b81526001600160a01b0380851660048301529283166024820152908216604482015292935090916000917f0000000000000000000000000000000000000000000000000000000000000000169063e6a1e88890606401608060405180830381865afa158015611072573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110969190611bcb565b50509150506040518060600160405280602d8152602001611ee6602d91396110cb826bffffffffffffffffffffffff16611147565b866110f257604051806040016040528060048152602001637472756560e01b815250611111565b6040518060400160405280600581526020016466616c736560d81b8152505b61111a896111da565b60405160200161112d9493929190611c2b565b604051602081830303815290604052935050505092915050565b6060600061115483611355565b600101905060008167ffffffffffffffff81111561117457611174611709565b6040519080825280601f01601f19166020018201604052801561119e576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846111a857509392505050565b606060006111e783610955565b905061120181600001516001600160a01b0316601461142d565b61120a46611147565b82600001516001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa15801561124c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526112749190810190611cb3565b61128c84602001516001600160a01b0316601461142d565b6112a485604001516001600160a01b0316601461142d565b61131586600001516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061130d9190611d2a565b60ff16611147565b611328876060015163ffffffff16611147565b60405160200161133e9796959493929190611d4d565b604051602081830303815290604052915050919050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106113945772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106113c0576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106113de57662386f26fc10000830492506010015b6305f5e10083106113f6576305f5e100830492506008015b612710831061140a57612710830492506004015b6064831061141c576064830492506002015b600a83106104bb5760010192915050565b6060600061143c836002611e8e565b611447906002611ea5565b67ffffffffffffffff81111561145f5761145f611709565b6040519080825280601f01601f191660200182016040528015611489576020820181803683370190505b509050600360fc1b816000815181106114a4576114a4611eb8565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106114d3576114d3611eb8565b60200101906001600160f81b031916908160001a90535060006114f7846002611e8e565b611502906001611ea5565b90505b600181111561157a576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061153657611536611eb8565b1a60f81b82828151811061154c5761154c611eb8565b60200101906001600160f81b031916908160001a90535060049490941c9361157381611ece565b9050611505565b5083156115c95760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161080b565b9392505050565b6000602082840312156115e257600080fd5b81356001600160e01b0319811681146115c957600080fd5b60005b838110156116155781810151838201526020016115fd565b50506000910152565b602081526000825180602084015261163d8160408501602087016115fa565b601f01601f19169190910160400192915050565b60006020828403121561166357600080fd5b5035919050565b6001600160a01b038116811461063657600080fd5b6000806040838503121561169257600080fd5b823561169d8161166a565b946020939093013593505050565b6000806000606084860312156116c057600080fd5b83356116cb8161166a565b925060208401356116db8161166a565b929592945050506040919091013590565b6000602082840312156116fe57600080fd5b81356115c98161166a565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561174857611748611709565b604052919050565b600067ffffffffffffffff82111561176a5761176a611709565b50601f01601f191660200190565b600061178b61178684611750565b61171f565b905082815283838301111561179f57600080fd5b828260208301376000602084830101529392505050565b600082601f8301126117c757600080fd5b6115c983833560208501611778565b600080604083850312156117e957600080fd5b823567ffffffffffffffff8082111561180157600080fd5b61180d868387016117b6565b9350602085013591508082111561182357600080fd5b50611830858286016117b6565b9150509250929050565b60008060006060848603121561184f57600080fd5b833561185a8161166a565b9250602084013561186a8161166a565b9150604084013561187a8161166a565b809150509250925092565b6000806040838503121561189857600080fd5b82356118a38161166a565b9150602083013580151581146118b857600080fd5b809150509250929050565b600080600080608085870312156118d957600080fd5b84356118e48161166a565b935060208501356118f48161166a565b925060408501359150606085013567ffffffffffffffff81111561191757600080fd5b8501601f8101871361192857600080fd5b61193787823560208401611778565b91505092959194509250565b6000806040838503121561195657600080fd5b82356119618161166a565b915060208301356118b88161166a565b600181811c9082168061198557607f821691505b6020821081036119a557634e487b7160e01b600052602260045260246000fd5b50919050565b6000602082840312156119bd57600080fd5b81516115c98161166a565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b601f82111561060157600081815260208120601f850160051c81016020861015611a3d5750805b601f850160051c820191505b81811015611a5c57828155600101611a49565b505050505050565b815167ffffffffffffffff811115611a7e57611a7e611709565b611a9281611a8c8454611971565b84611a16565b602080601f831160018114611ac75760008415611aaf5750858301515b600019600386901b1c1916600185901b178555611a5c565b600085815260208120601f198616915b82811015611af657888601518255948401946001909101908401611ad7565b5085821015611b145787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060808284031215611b3657600080fd5b6040516080810181811067ffffffffffffffff82111715611b5957611b59611709565b6040528251611b678161166a565b81526020830151611b778161166a565b60208201526040830151611b8a8161166a565b6040820152606083015163ffffffff81168114611ba657600080fd5b60608201529392505050565b600060208284031215611bc457600080fd5b5051919050565b60008060008060808587031215611be157600080fd5b84519350602085015180600b0b8114611bf957600080fd5b6040860151606090960151949790965092505050565b60008151611c218185602086016115fa565b9290920192915050565b60008551611c3d818460208a016115fa565b693f666c6f77526174653d60b01b9083019081528551611c6481600a840160208a016115fa565b69266f7574676f696e673d60b01b600a92909101918201528451611c8f8160148401602089016115fa565b8451910190611ca58160148401602088016115fa565b016014019695505050505050565b600060208284031215611cc557600080fd5b815167ffffffffffffffff811115611cdc57600080fd5b8201601f81018413611ced57600080fd5b8051611cfb61178682611750565b818152856020838501011115611d1057600080fd5b611d218260208301602086016115fa565b95945050505050565b600060208284031215611d3c57600080fd5b815160ff811681146115c957600080fd5b6e26746f6b656e5f616464726573733d60881b815260008851611d7781600f850160208d016115fa565b6926636861696e5f69643d60b01b600f918401918201528851611da1816019840160208d016115fa565b6d26746f6b656e5f73796d626f6c3d60901b601992909101918201528751611dd0816027840160208c016115fa565b672673656e6465723d60c01b602792909101918201528651611df981602f840160208b016115fa565b692672656365697665723d60b01b602f9290910191820152611e6a611e64611e4c611e46611e2a603986018b611c0f565b6f26746f6b656e5f646563696d616c733d60801b815260100190565b88611c0f565b6b2673746172745f646174653d60a01b8152600c0190565b85611c0f565b9a9950505050505050505050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176104bb576104bb611e78565b808201808211156104bb576104bb611e78565b634e487b7160e01b600052603260045260246000fd5b600081611edd57611edd611e78565b50600019019056fe68747470733a2f2f6e66742e7375706572666c7569642e66696e616e63652f6366612f76322f6765746d657461a26469706673582212202912f4ba8afcf318fdb82805e864e17357bc91341723012fe00ad8dff2314c4f64736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract IConstantOutflowNFT";
            readonly name: "constantOutflowNFT";
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
        readonly inputs: readonly [];
        readonly name: "CIF_NFT_ONLY_CONSTANT_OUTFLOW";
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
        readonly name: "CONSTANT_OUTFLOW_NFT";
        readonly outputs: readonly [{
            readonly internalType: "contract IConstantOutflowNFT";
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
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
            readonly name: "tokenId";
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
        readonly stateMutability: "view";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "newTokenId";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
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
    static createInterface(): ConstantInflowNFTStorageLayoutMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ConstantInflowNFTStorageLayoutMock;
}
export {};
//# sourceMappingURL=ConstantInflowNFTStorageLayoutMock__factory.d.ts.map