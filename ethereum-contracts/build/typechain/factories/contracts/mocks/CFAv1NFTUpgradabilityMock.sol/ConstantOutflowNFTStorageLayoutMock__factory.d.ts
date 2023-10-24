import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { ConstantOutflowNFTStorageLayoutMock, ConstantOutflowNFTStorageLayoutMockInterface } from "../../../../contracts/mocks/CFAv1NFTUpgradabilityMock.sol/ConstantOutflowNFTStorageLayoutMock";
type ConstantOutflowNFTStorageLayoutMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ConstantOutflowNFTStorageLayoutMock__factory extends ContractFactory {
    constructor(...args: ConstantOutflowNFTStorageLayoutMockConstructorParams);
    deploy(host: PromiseOrValue<string>, constantInflowNFT: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ConstantOutflowNFTStorageLayoutMock>;
    getDeployTransaction(host: PromiseOrValue<string>, constantInflowNFT: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ConstantOutflowNFTStorageLayoutMock;
    connect(signer: Signer): ConstantOutflowNFTStorageLayoutMock__factory;
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b50604051620023af380380620023af833981016040819052620000349162000103565b6001600160a01b03821660a0819052604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201528391839183919063b6d200de90602401602060405180830381865afa158015620000a4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000ca919062000142565b6001600160a01b039081166080529190911660c052506200016992505050565b6001600160a01b03811681146200010057600080fd5b50565b600080604083850312156200011757600080fd5b82516200012481620000ea565b60208401519092506200013781620000ea565b809150509250929050565b6000602082840312156200015557600080fd5b81516200016281620000ea565b9392505050565b60805160a05160c0516121de620001d1600039600081816102f001528181610af901528181610bf30152610d0a0152600081816102c9015261067601526000818161025601528181610a6c01528181610b6f01528181610c6b01526111b301526121de6000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80636352211e11610104578063a22cb465116100a2578063eb54a7ca11610071578063eb54a7ca14610454578063ef1f023714610467578063f7e3d9831461047a578063f99a38c41461024f57600080fd5b8063a22cb46514610408578063b88d4fde1461041b578063c87b56dd1461042e578063e985e9c51461044157600080fd5b806389f71d2d116100de57806389f71d2d1461038c5780638d47859e1461039f57806395d89b41146103f85780639903ad381461040057600080fd5b80636352211e1461035d5780636c0360eb1461037057806370a082311461037857600080fd5b806342842e0e116101715780634c5c0c851161014b5780634c5c0c85146102eb5780634cd88b761461031257806350d75d251461032557806352d1902d1461032d57600080fd5b806342842e0e1461029e57806346951954146102b157806349f289dc146102c457600080fd5b8063095ea7b3116101ad578063095ea7b31461023c578063181561011461025157806323b872dd146102785780632f3885601461028b57600080fd5b806301ffc9a7146101d457806306fdde03146101fc578063081812fc14610211575b600080fd5b6101e76101e23660046118de565b61048d565b60405190151581526020015b60405180910390f35b6102046104df565b6040516101f3919061192c565b61022461021f36600461195f565b610571565b6040516001600160a01b0390911681526020016101f3565b61024f61024a36600461198d565b610598565b005b6102247f000000000000000000000000000000000000000000000000000000000000000081565b61024f6102863660046119b9565b610624565b61024f61029936600461195f565b61064b565b61024f6102ac3660046119b9565b610657565b61024f6102bf3660046119fa565b610672565b6102247f000000000000000000000000000000000000000000000000000000000000000081565b6102247f000000000000000000000000000000000000000000000000000000000000000081565b61024f610320366004611ae4565b61072e565b610224610814565b7f87e44dce6a0d65a5ccf441783661f5727c2624b1f0088bbe957ce2c95406b7845b6040519081526020016101f3565b61022461036b36600461195f565b610843565b61020461085f565b61034f6103863660046119fa565b50600190565b61034f61039a366004611b48565b61087b565b6103b26103ad36600461195f565b610890565b6040805182516001600160a01b03908116825260208085015182169083015283830151169181019190915260609182015163ffffffff16918101919091526080016101f3565b610204610911565b61024f610920565b61024f610416366004611b93565b6109e2565b61024f610429366004611bd1565b6109ed565b61020461043c36600461195f565b610a26565b6101e761044f366004611c51565b610a33565b61024f610462366004611b48565b610a61565b61024f610475366004611b48565b610b64565b61024f610488366004611b48565b610c60565b60006301ffc9a760e01b6001600160e01b0319831614806104be57506380ac58cd60e01b6001600160e01b03198316145b806104d95750635b5e139f60e01b6001600160e01b03198316145b92915050565b6060600180546104ee90611c7f565b80601f016020809104026020016040519081016040528092919081815260200182805461051a90611c7f565b80156105675780601f1061053c57610100808354040283529160200191610567565b820191906000526020600020905b81548152906001019060200180831161054a57829003601f168201915b5050505050905090565b600061057c82610d39565b506000908152600360205260409020546001600160a01b031690565b60006105a382610843565b9050806001600160a01b0316836001600160a01b0316036105d75760405163e4790b2560e01b815260040160405180910390fd5b336001600160a01b038216148015906105f757506105f58133610a33565b155b156106155760405163519a92c160e11b815260040160405180910390fd5b61061f8383610d52565b505050565b61062e3382610dab565b61061f576040516312a8eb0360e11b815260040160405180910390fd5b61065481610e09565b50565b61061f838383604051806020016040528060008152506109ed565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663731aed6e6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f69190611cb9565b9050336001600160a01b038216146107215760405163ebb7505b60e01b815260040160405180910390fd5b61072a82610e39565b5050565b600054610100900460ff161580801561074e5750600054600160ff909116105b806107685750303b158015610768575060005460ff166001145b61078d5760405162461bcd60e51b815260040161078490611cd6565b60405180910390fd5b6000805460ff1916600117905580156107b0576000805461ff0019166101001790555b60016107bc8482611d72565b5060026107c98382611d72565b50801561061f576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b600061083e7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b60008060405163eab95e3b60e01b815260040160405180910390fd5b6040518060600160405280602d815260200161217c602d913981565b6000610888848484611073565b949350505050565b60408051608081018252600080825260208201819052918101829052606081019190915250600090815260166020908152604091829020825160808101845281546001600160a01b039081168252600183015481169382019390935260029091015491821692810192909252600160a01b900463ffffffff16606082015290565b6060600280546104ee90611c7f565b600054610100900460ff16158080156109405750600054600160ff909116105b8061095a5750303b15801561095a575060005460ff166001145b6109765760405162461bcd60e51b815260040161078490611cd6565b6000805460ff191660011790558015610999576000805461ff0019166101001790555b8015610654576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020015b60405180910390a150565b61072a3383836110bf565b6109f73383610dab565b610a14576040516312a8eb0360e11b815260040160405180910390fd5b610a208484848461115e565b50505050565b60606104d9826000611163565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610aaa5760405163d367b64f60e01b815260040160405180910390fd5b6000610ab7848484611073565b6000818152601660205260409020600101549091506001600160a01b031615610a2057610ae381610e09565b604051630179c42b60e51b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632f388560906024015b600060405180830381600087803b158015610b4657600080fd5b505af1158015610b5a573d6000803e3d6000fd5b5050505050505050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610bad5760405163d367b64f60e01b815260040160405180910390fd5b6000610bba848484611073565b6000818152601660205260409020600101549091506001600160a01b031615610a2057604051630852cd8d60e31b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906342966c6890602401600060405180830381600087803b158015610c3f57600080fd5b505af1158015610c53573d6000803e3d6000fd5b50505050610a20816112cf565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610ca95760405163d367b64f60e01b815260040160405180910390fd5b6000610cb6848484611073565b6000818152601660205260409020600101549091506001600160a01b0316610a2057610ce48484848461134e565b6040516340c10f1960e01b81526001600160a01b038381166004830152602482018390527f000000000000000000000000000000000000000000000000000000000000000016906340c10f1990604401610b2c565b60405163eab95e3b60e01b815260040160405180910390fd5b60008181526003602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925908290a45050565b600080610db783610843565b9050806001600160a01b0316846001600160a01b03161480610dde5750610dde8185610a33565b806108885750836001600160a01b0316610df784610571565b6001600160a01b031614949350505050565b6040518181527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7906020016109d7565b6000610e637f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b031603610eb95760405162461bcd60e51b815260206004820152601d60248201527f5555505350726f786961626c653a206e6f742075706772616461626c650000006044820152606401610784565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ef7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f1b9190611e32565b7f87e44dce6a0d65a5ccf441783661f5727c2624b1f0088bbe957ce2c95406b78414610f955760405162461bcd60e51b815260206004820152602360248201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60448201526267696360e81b6064820152608401610784565b6001600160a01b0381163003610fed5760405162461bcd60e51b815260206004820152601960248201527f5555505350726f786961626c653a2070726f7879206c6f6f70000000000000006044820152606401610784565b611015817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc7f87e44dce6a0d65a5ccf441783661f5727c2624b1f0088bbe957ce2c95406b784604080519182526001600160a01b0384166020830152016109d7565b60408051466020808301919091526001600160a01b03958616828401529385166060820152919093166080808301919091528351808303909101815260a0909101909252815191012090565b816001600160a01b0316836001600160a01b0316036110f15760405163d3c7732960e01b815260040160405180910390fd5b6001600160a01b03838116600081815260046020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610a20565b6060600061117084610890565b805160208201516040808401519051631cd43d1160e31b81526001600160a01b0380851660048301529283166024820152908216604482015292935090916000917f0000000000000000000000000000000000000000000000000000000000000000169063e6a1e88890606401608060405180830381865afa1580156111fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061121e9190611e4b565b50509150506040518060600160405280602d815260200161217c602d9139611253826bffffffffffffffffffffffff16611455565b8661127a57604051806040016040528060048152602001637472756560e01b815250611299565b6040518060400160405280600581526020016466616c736560d81b8152505b6112a2896114e8565b6040516020016112b59493929190611eab565b604051602081830303815290604052935050505092915050565b600081815260036020908152604080832080546001600160a01b03199081169091556016909252808320805483168155600181018054909316909255600290910180546001600160c01b0319169055518290829081907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160a01b03831661136457611364611f33565b816001600160a01b0316836001600160a01b03160361138557611385611f33565b604080516080810182526001600160a01b038087168252858116602080840182815287841685870190815263ffffffff4281166060880190815260008a81526016909552888520975188549088166001600160a01b0319918216178955935160018901805491891691909516179093559051600290960180549251909116600160a01b026001600160c01b03199092169590941694909417939093179091559151839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a450505050565b6060600061146283611663565b600101905060008167ffffffffffffffff81111561148257611482611a17565b6040519080825280601f01601f1916602001820160405280156114ac576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846114b657509392505050565b606060006114f583610890565b905061150f81600001516001600160a01b0316601461173b565b61151846611455565b82600001516001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa15801561155a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526115829190810190611f49565b61159a84602001516001600160a01b0316601461173b565b6115b285604001516001600160a01b0316601461173b565b61162386600001516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156115f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061161b9190611fc0565b60ff16611455565b611636876060015163ffffffff16611455565b60405160200161164c9796959493929190611fe3565b604051602081830303815290604052915050919050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106116a25772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106116ce576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106116ec57662386f26fc10000830492506010015b6305f5e1008310611704576305f5e100830492506008015b612710831061171857612710830492506004015b6064831061172a576064830492506002015b600a83106104d95760010192915050565b6060600061174a836002612124565b61175590600261213b565b67ffffffffffffffff81111561176d5761176d611a17565b6040519080825280601f01601f191660200182016040528015611797576020820181803683370190505b509050600360fc1b816000815181106117b2576117b261214e565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106117e1576117e161214e565b60200101906001600160f81b031916908160001a9053506000611805846002612124565b61181090600161213b565b90505b6001811115611888576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106118445761184461214e565b1a60f81b82828151811061185a5761185a61214e565b60200101906001600160f81b031916908160001a90535060049490941c9361188181612164565b9050611813565b5083156118d75760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610784565b9392505050565b6000602082840312156118f057600080fd5b81356001600160e01b0319811681146118d757600080fd5b60005b8381101561192357818101518382015260200161190b565b50506000910152565b602081526000825180602084015261194b816040850160208701611908565b601f01601f19169190910160400192915050565b60006020828403121561197157600080fd5b5035919050565b6001600160a01b038116811461065457600080fd5b600080604083850312156119a057600080fd5b82356119ab81611978565b946020939093013593505050565b6000806000606084860312156119ce57600080fd5b83356119d981611978565b925060208401356119e981611978565b929592945050506040919091013590565b600060208284031215611a0c57600080fd5b81356118d781611978565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611a5657611a56611a17565b604052919050565b600067ffffffffffffffff821115611a7857611a78611a17565b50601f01601f191660200190565b6000611a99611a9484611a5e565b611a2d565b9050828152838383011115611aad57600080fd5b828260208301376000602084830101529392505050565b600082601f830112611ad557600080fd5b6118d783833560208501611a86565b60008060408385031215611af757600080fd5b823567ffffffffffffffff80821115611b0f57600080fd5b611b1b86838701611ac4565b93506020850135915080821115611b3157600080fd5b50611b3e85828601611ac4565b9150509250929050565b600080600060608486031215611b5d57600080fd5b8335611b6881611978565b92506020840135611b7881611978565b91506040840135611b8881611978565b809150509250925092565b60008060408385031215611ba657600080fd5b8235611bb181611978565b915060208301358015158114611bc657600080fd5b809150509250929050565b60008060008060808587031215611be757600080fd5b8435611bf281611978565b93506020850135611c0281611978565b925060408501359150606085013567ffffffffffffffff811115611c2557600080fd5b8501601f81018713611c3657600080fd5b611c4587823560208401611a86565b91505092959194509250565b60008060408385031215611c6457600080fd5b8235611c6f81611978565b91506020830135611bc681611978565b600181811c90821680611c9357607f821691505b602082108103611cb357634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215611ccb57600080fd5b81516118d781611978565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b601f82111561061f57600081815260208120601f850160051c81016020861015611d4b5750805b601f850160051c820191505b81811015611d6a57828155600101611d57565b505050505050565b815167ffffffffffffffff811115611d8c57611d8c611a17565b611da081611d9a8454611c7f565b84611d24565b602080601f831160018114611dd55760008415611dbd5750858301515b600019600386901b1c1916600185901b178555611d6a565b600085815260208120601f198616915b82811015611e0457888601518255948401946001909101908401611de5565b5085821015611e225787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060208284031215611e4457600080fd5b5051919050565b60008060008060808587031215611e6157600080fd5b84519350602085015180600b0b8114611e7957600080fd5b6040860151606090960151949790965092505050565b60008151611ea1818560208601611908565b9290920192915050565b60008551611ebd818460208a01611908565b693f666c6f77526174653d60b01b9083019081528551611ee481600a840160208a01611908565b69266f7574676f696e673d60b01b600a92909101918201528451611f0f816014840160208901611908565b8451910190611f25816014840160208801611908565b016014019695505050505050565b634e487b7160e01b600052600160045260246000fd5b600060208284031215611f5b57600080fd5b815167ffffffffffffffff811115611f7257600080fd5b8201601f81018413611f8357600080fd5b8051611f91611a9482611a5e565b818152856020838501011115611fa657600080fd5b611fb7826020830160208601611908565b95945050505050565b600060208284031215611fd257600080fd5b815160ff811681146118d757600080fd5b6e26746f6b656e5f616464726573733d60881b81526000885161200d81600f850160208d01611908565b6926636861696e5f69643d60b01b600f918401918201528851612037816019840160208d01611908565b6d26746f6b656e5f73796d626f6c3d60901b601992909101918201528751612066816027840160208c01611908565b672673656e6465723d60c01b60279290910191820152865161208f81602f840160208b01611908565b692672656365697665723d60b01b602f92909101918201526121006120fa6120e26120dc6120c0603986018b611e8f565b6f26746f6b656e5f646563696d616c733d60801b815260100190565b88611e8f565b6b2673746172745f646174653d60a01b8152600c0190565b85611e8f565b9a9950505050505050505050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176104d9576104d961210e565b808201808211156104d9576104d961210e565b634e487b7160e01b600052603260045260246000fd5b6000816121735761217361210e565b50600019019056fe68747470733a2f2f6e66742e7375706572666c7569642e66696e616e63652f6366612f76322f6765746d657461a26469706673582212202ea66f6a146d54da6c99a0ea0caae0b11a05a18da15d83c769e38ddb855bfb7364736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract IConstantInflowNFT";
            readonly name: "constantInflowNFT";
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
        readonly name: "COF_NFT_INVALID_SUPER_TOKEN";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "COF_NFT_MINT_TO_AND_FLOW_RECEIVER_SAME";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "COF_NFT_MINT_TO_ZERO_ADDRESS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "COF_NFT_ONLY_CONSTANT_INFLOW";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "COF_NFT_ONLY_FLOW_AGREEMENTS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "COF_NFT_TOKEN_ALREADY_EXISTS";
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
        readonly name: "CONSTANT_INFLOW_NFT";
        readonly outputs: readonly [{
            readonly internalType: "contract IConstantInflowNFT";
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
            readonly internalType: "contract ISuperfluidToken";
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
        }];
        readonly name: "onCreate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
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
        }];
        readonly name: "onDelete";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
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
        }];
        readonly name: "onUpdate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
    static createInterface(): ConstantOutflowNFTStorageLayoutMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ConstantOutflowNFTStorageLayoutMock;
}
export {};
//# sourceMappingURL=ConstantOutflowNFTStorageLayoutMock__factory.d.ts.map