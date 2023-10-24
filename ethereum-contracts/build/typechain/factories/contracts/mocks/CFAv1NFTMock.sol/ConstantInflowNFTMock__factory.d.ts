import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { ConstantInflowNFTMock, ConstantInflowNFTMockInterface } from "../../../../contracts/mocks/CFAv1NFTMock.sol/ConstantInflowNFTMock";
type ConstantInflowNFTMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ConstantInflowNFTMock__factory extends ContractFactory {
    constructor(...args: ConstantInflowNFTMockConstructorParams);
    deploy(host: PromiseOrValue<string>, constantOutflowNFT: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ConstantInflowNFTMock>;
    getDeployTransaction(host: PromiseOrValue<string>, constantOutflowNFT: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ConstantInflowNFTMock;
    connect(signer: Signer): ConstantInflowNFTMock__factory;
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b506040516200227a3803806200227a833981016040819052620000349162000103565b6001600160a01b03821660a0819052604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201528391839183919063b6d200de90602401602060405180830381865afa158015620000a4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000ca919062000142565b6001600160a01b039081166080529190911660c052506200016992505050565b6001600160a01b03811681146200010057600080fd5b50565b600080604083850312156200011757600080fd5b82516200012481620000ea565b60208401519092506200013781620000ea565b809150509250929050565b6000602082840312156200015557600080fd5b81516200016281620000ea565b9392505050565b60805160a05160c0516120be620001bc600039600081816104ee015281816106fe015281816107620152610a5f01526000818161035f01526107ad015260008181610277015261118401526120be6000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c806350d75d251161010f57806395d89b41116100a2578063bcba52b011610071578063bcba52b0146104b0578063c87b56dd146104c3578063e985e9c5146104d6578063ef43d2c6146104e957600080fd5b806395d89b411461047a5780639903ad3814610482578063a22cb4651461048a578063b88d4fde1461049d57600080fd5b80636c0360eb116100de5780636c0360eb146103f257806370a08231146103fa57806389f71d2d1461040e5780638d47859e1461042157600080fd5b806350d75d251461039457806352d1902d1461039c5780635dff7d90146103cc5780636352211e146103df57600080fd5b806340c10f191161018757806346951954116101565780634695195414610334578063480954c31461034757806349f289dc1461035a5780634cd88b761461038157600080fd5b806340c10f19146102d257806340d3597d146102e557806342842e0e1461030e57806342966c681461032157600080fd5b806318156101116101c3578063181561011461027257806323b872dd146102995780632f388560146102ac578063378934b4146102bf57600080fd5b806301ffc9a7146101f557806306fdde031461021d578063081812fc14610232578063095ea7b31461025d575b600080fd5b610208610203366004611746565b610510565b60405190151581526020015b60405180910390f35b610225610562565b6040516102149190611794565b6102456102403660046117c7565b6105f4565b6040516001600160a01b039091168152602001610214565b61027061026b3660046117f5565b61061b565b005b6102457f000000000000000000000000000000000000000000000000000000000000000081565b6102706102a7366004611821565b6106a7565b6102706102ba3660046117c7565b6106d9565b6102706102cd3660046117f5565b6106e5565b6102706102e03660046117f5565b6106f3565b6102456102f33660046117c7565b6000908152600360205260409020546001600160a01b031690565b61027061031c366004611821565b61073c565b61027061032f3660046117c7565b610757565b610270610342366004611862565b6107a9565b6102706103553660046117c7565b6107a0565b6102457f000000000000000000000000000000000000000000000000000000000000000081565b61027061038f36600461194c565b610861565b610245610947565b7f9a61ea3469d742a522f41a67608e442d2c27902bed81123f00ba6d3e12e9871e5b604051908152602001610214565b6102456103da3660046117c7565b610976565b6102456103ed3660046117c7565b610981565b6102256109b6565b6103be610408366004611862565b50600190565b6103be61041c3660046119b0565b6109d2565b61043461042f3660046117c7565b610a25565b6040805182516001600160a01b03908116825260208085015182169083015283830151169181019190915260609182015163ffffffff1691810191909152608001610214565b610225610ad2565b610270610ae1565b6102706104983660046119fb565b610ba3565b6102706104ab366004611a39565b610bae565b6104346104be3660046117c7565b610be7565b6102256104d13660046117c7565b610c14565b6102086104e4366004611ab9565b610c21565b6102457f000000000000000000000000000000000000000000000000000000000000000081565b60006301ffc9a760e01b6001600160e01b03198316148061054157506380ac58cd60e01b6001600160e01b03198316145b8061055c5750635b5e139f60e01b6001600160e01b03198316145b92915050565b60606001805461057190611ae7565b80601f016020809104026020016040519081016040528092919081815260200182805461059d90611ae7565b80156105ea5780601f106105bf576101008083540402835291602001916105ea565b820191906000526020600020905b8154815290600101906020018083116105cd57829003601f168201915b5050505050905090565b60006105ff82610c4f565b506000908152600360205260409020546001600160a01b031690565b600061062682610981565b9050806001600160a01b0316836001600160a01b03160361065a5760405163e4790b2560e01b815260040160405180910390fd5b336001600160a01b0382161480159061067a57506106788133610c21565b155b156106985760405163519a92c160e11b815260040160405180910390fd5b6106a28383610c75565b505050565b6106b13382610ce3565b6106ce576040516312a8eb0360e11b815260040160405180910390fd5b6106a2838383610d41565b6106e281610d5a565b50565b6106ef8282610d8a565b5050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106e55760405163740f7abd60e11b815260040160405180910390fd5b6106a283838360405180602001604052806000815250610bae565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107a05760405163740f7abd60e11b815260040160405180910390fd5b6106e281610dc6565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663731aed6e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610809573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061082d9190611b21565b9050336001600160a01b038216146108585760405163ebb7505b60e01b815260040160405180910390fd5b6106ef82610e39565b600054610100900460ff16158080156108815750600054600160ff909116105b8061089b5750303b15801561089b575060005460ff166001145b6108c05760405162461bcd60e51b81526004016108b790611b3e565b60405180910390fd5b6000805460ff1916600117905580156108e3576000805461ff0019166101001790555b60016108ef8482611bda565b5060026108fc8382611bda565b5080156106a2576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b60006109717f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b600061055c82611073565b60008061098d83611073565b90506001600160a01b03811661055c5760405163eab95e3b60e01b815260040160405180910390fd5b6040518060600160405280602d815260200161205c602d913981565b60408051466020808301919091526001600160a01b0380871683850152808616606084015284166080808401919091528351808403909101815260a090920190925280519101206000905b949350505050565b6040805160808101825260008082526020820181905291810182905260608101919091526040516346a3c2cf60e11b8152600481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638d47859e90602401608060405180830381865afa158015610aae573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055c9190611c9a565b60606002805461057190611ae7565b600054610100900460ff1615808015610b015750600054600160ff909116105b80610b1b5750303b158015610b1b575060005460ff166001145b610b375760405162461bcd60e51b81526004016108b790611b3e565b6000805460ff191660011790558015610b5a576000805461ff0019166101001790555b80156106e2576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020015b60405180910390a150565b6106ef33838361108a565b610bb83383610ce3565b610bd5576040516312a8eb0360e11b815260040160405180910390fd5b610be184848484611129565b50505050565b60408051608081018252600080825260208201819052918101829052606081019190915261055c82610a25565b606061055c826001611134565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b610c58816112a0565b6106e25760405163eab95e3b60e01b815260040160405180910390fd5b600081815260036020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610caa82611073565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610cef83610981565b9050806001600160a01b0316846001600160a01b03161480610d165750610d168185610c21565b80610a1d5750836001600160a01b0316610d2f846105f4565b6001600160a01b031614949350505050565b60405163553a3f6560e11b815260040160405180910390fd5b6040518181527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce790602001610b98565b60405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000610dd182610a25565b600083815260036020526040902080546001600160a01b031916905590508160006001600160a01b031682604001516001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6000610e637f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b031603610eb95760405162461bcd60e51b815260206004820152601d60248201527f5555505350726f786961626c653a206e6f742075706772616461626c6500000060448201526064016108b7565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ef7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f1b9190611d28565b7f9a61ea3469d742a522f41a67608e442d2c27902bed81123f00ba6d3e12e9871e14610f955760405162461bcd60e51b815260206004820152602360248201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60448201526267696360e81b60648201526084016108b7565b6001600160a01b0381163003610fed5760405162461bcd60e51b815260206004820152601960248201527f5555505350726f786961626c653a2070726f7879206c6f6f700000000000000060448201526064016108b7565b611015817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc7f9a61ea3469d742a522f41a67608e442d2c27902bed81123f00ba6d3e12e9871e604080519182526001600160a01b038416602083015201610b98565b60008061107f83610a25565b604001519392505050565b816001600160a01b0316836001600160a01b0316036110bc5760405163d3c7732960e01b815260040160405180910390fd5b6001600160a01b03838116600081815260046020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610be1848484610d41565b6060600061114184610a25565b805160208201516040808401519051631cd43d1160e31b81526001600160a01b0380851660048301529283166024820152908216604482015292935090916000917f0000000000000000000000000000000000000000000000000000000000000000169063e6a1e88890606401608060405180830381865afa1580156111cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ef9190611d41565b50509150506040518060600160405280602d815260200161205c602d9139611224826bffffffffffffffffffffffff166112bd565b8661124b57604051806040016040528060048152602001637472756560e01b81525061126a565b6040518060400160405280600581526020016466616c736560d81b8152505b61127389611350565b6040516020016112869493929190611da1565b604051602081830303815290604052935050505092915050565b6000806112ac83611073565b6001600160a01b0316141592915050565b606060006112ca836114cb565b600101905060008167ffffffffffffffff8111156112ea576112ea61187f565b6040519080825280601f01601f191660200182016040528015611314576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461131e57509392505050565b6060600061135d83610a25565b905061137781600001516001600160a01b031660146115a3565b611380466112bd565b82600001516001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa1580156113c2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526113ea9190810190611e29565b61140284602001516001600160a01b031660146115a3565b61141a85604001516001600160a01b031660146115a3565b61148b86600001516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561145f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114839190611ea0565b60ff166112bd565b61149e876060015163ffffffff166112bd565b6040516020016114b49796959493929190611ec3565b604051602081830303815290604052915050919050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b831061150a5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611536576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061155457662386f26fc10000830492506010015b6305f5e100831061156c576305f5e100830492506008015b612710831061158057612710830492506004015b60648310611592576064830492506002015b600a831061055c5760010192915050565b606060006115b2836002612004565b6115bd90600261201b565b67ffffffffffffffff8111156115d5576115d561187f565b6040519080825280601f01601f1916602001820160405280156115ff576020820181803683370190505b509050600360fc1b8160008151811061161a5761161a61202e565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106116495761164961202e565b60200101906001600160f81b031916908160001a905350600061166d846002612004565b61167890600161201b565b90505b60018111156116f0576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106116ac576116ac61202e565b1a60f81b8282815181106116c2576116c261202e565b60200101906001600160f81b031916908160001a90535060049490941c936116e981612044565b905061167b565b50831561173f5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016108b7565b9392505050565b60006020828403121561175857600080fd5b81356001600160e01b03198116811461173f57600080fd5b60005b8381101561178b578181015183820152602001611773565b50506000910152565b60208152600082518060208401526117b3816040850160208701611770565b601f01601f19169190910160400192915050565b6000602082840312156117d957600080fd5b5035919050565b6001600160a01b03811681146106e257600080fd5b6000806040838503121561180857600080fd5b8235611813816117e0565b946020939093013593505050565b60008060006060848603121561183657600080fd5b8335611841816117e0565b92506020840135611851816117e0565b929592945050506040919091013590565b60006020828403121561187457600080fd5b813561173f816117e0565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156118be576118be61187f565b604052919050565b600067ffffffffffffffff8211156118e0576118e061187f565b50601f01601f191660200190565b60006119016118fc846118c6565b611895565b905082815283838301111561191557600080fd5b828260208301376000602084830101529392505050565b600082601f83011261193d57600080fd5b61173f838335602085016118ee565b6000806040838503121561195f57600080fd5b823567ffffffffffffffff8082111561197757600080fd5b6119838683870161192c565b9350602085013591508082111561199957600080fd5b506119a68582860161192c565b9150509250929050565b6000806000606084860312156119c557600080fd5b83356119d0816117e0565b925060208401356119e0816117e0565b915060408401356119f0816117e0565b809150509250925092565b60008060408385031215611a0e57600080fd5b8235611a19816117e0565b915060208301358015158114611a2e57600080fd5b809150509250929050565b60008060008060808587031215611a4f57600080fd5b8435611a5a816117e0565b93506020850135611a6a816117e0565b925060408501359150606085013567ffffffffffffffff811115611a8d57600080fd5b8501601f81018713611a9e57600080fd5b611aad878235602084016118ee565b91505092959194509250565b60008060408385031215611acc57600080fd5b8235611ad7816117e0565b91506020830135611a2e816117e0565b600181811c90821680611afb57607f821691505b602082108103611b1b57634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215611b3357600080fd5b815161173f816117e0565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b601f8211156106a257600081815260208120601f850160051c81016020861015611bb35750805b601f850160051c820191505b81811015611bd257828155600101611bbf565b505050505050565b815167ffffffffffffffff811115611bf457611bf461187f565b611c0881611c028454611ae7565b84611b8c565b602080601f831160018114611c3d5760008415611c255750858301515b600019600386901b1c1916600185901b178555611bd2565b600085815260208120601f198616915b82811015611c6c57888601518255948401946001909101908401611c4d565b5085821015611c8a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060808284031215611cac57600080fd5b6040516080810181811067ffffffffffffffff82111715611ccf57611ccf61187f565b6040528251611cdd816117e0565b81526020830151611ced816117e0565b60208201526040830151611d00816117e0565b6040820152606083015163ffffffff81168114611d1c57600080fd5b60608201529392505050565b600060208284031215611d3a57600080fd5b5051919050565b60008060008060808587031215611d5757600080fd5b84519350602085015180600b0b8114611d6f57600080fd5b6040860151606090960151949790965092505050565b60008151611d97818560208601611770565b9290920192915050565b60008551611db3818460208a01611770565b693f666c6f77526174653d60b01b9083019081528551611dda81600a840160208a01611770565b69266f7574676f696e673d60b01b600a92909101918201528451611e05816014840160208901611770565b8451910190611e1b816014840160208801611770565b016014019695505050505050565b600060208284031215611e3b57600080fd5b815167ffffffffffffffff811115611e5257600080fd5b8201601f81018413611e6357600080fd5b8051611e716118fc826118c6565b818152856020838501011115611e8657600080fd5b611e97826020830160208601611770565b95945050505050565b600060208284031215611eb257600080fd5b815160ff8116811461173f57600080fd5b6e26746f6b656e5f616464726573733d60881b815260008851611eed81600f850160208d01611770565b6926636861696e5f69643d60b01b600f918401918201528851611f17816019840160208d01611770565b6d26746f6b656e5f73796d626f6c3d60901b601992909101918201528751611f46816027840160208c01611770565b672673656e6465723d60c01b602792909101918201528651611f6f81602f840160208b01611770565b692672656365697665723d60b01b602f9290910191820152611fe0611fda611fc2611fbc611fa0603986018b611d85565b6f26746f6b656e5f646563696d616c733d60801b815260100190565b88611d85565b6b2673746172745f646174653d60a01b8152600c0190565b85611d85565b9a9950505050505050505050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761055c5761055c611fee565b8082018082111561055c5761055c611fee565b634e487b7160e01b600052603260045260246000fd5b60008161205357612053611fee565b50600019019056fe68747470733a2f2f6e66742e7375706572666c7569642e66696e616e63652f6366612f76322f6765746d657461a264697066735822122086e919d2909bd6122b0dc0e555c18aec42d77a1898ab9411a9e7f26e9d08d5a964736f6c63430008130033";
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
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_tokenId";
            readonly type: "uint256";
        }];
        readonly name: "mockBurn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_tokenId";
            readonly type: "uint256";
        }];
        readonly name: "mockFlowNFTDataByTokenId";
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
            readonly name: "_tokenId";
            readonly type: "uint256";
        }];
        readonly name: "mockGetApproved";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_newTokenId";
            readonly type: "uint256";
        }];
        readonly name: "mockMint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_tokenId";
            readonly type: "uint256";
        }];
        readonly name: "mockOwnerOf";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
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
    }];
    static createInterface(): ConstantInflowNFTMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ConstantInflowNFTMock;
}
export {};
//# sourceMappingURL=ConstantInflowNFTMock__factory.d.ts.map