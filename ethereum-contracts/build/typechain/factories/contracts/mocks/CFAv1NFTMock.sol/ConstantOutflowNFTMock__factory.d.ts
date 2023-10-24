import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { ConstantOutflowNFTMock, ConstantOutflowNFTMockInterface } from "../../../../contracts/mocks/CFAv1NFTMock.sol/ConstantOutflowNFTMock";
type ConstantOutflowNFTMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ConstantOutflowNFTMock__factory extends ContractFactory {
    constructor(...args: ConstantOutflowNFTMockConstructorParams);
    deploy(host: PromiseOrValue<string>, constantInflowNFT: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ConstantOutflowNFTMock>;
    getDeployTransaction(host: PromiseOrValue<string>, constantInflowNFT: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ConstantOutflowNFTMock;
    connect(signer: Signer): ConstantOutflowNFTMock__factory;
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b506040516200257638038062002576833981016040819052620000349162000103565b6001600160a01b03821660a0819052604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201528391839183919063b6d200de90602401602060405180830381865afa158015620000a4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000ca919062000142565b6001600160a01b039081166080529190911660c052506200016992505050565b6001600160a01b03811681146200010057600080fd5b50565b600080604083850312156200011757600080fd5b82516200012481620000ea565b60208401519092506200013781620000ea565b809150509250929050565b6000602082840312156200015557600080fd5b81516200016281620000ea565b9392505050565b60805160a05160c0516123a5620001d16000396000818161034d01528181610bc001528181610cba0152610dd1015260008181610326015261070401526000818161027701528181610b3301528181610c3601528181610d32015261149201526123a56000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c80635dff7d901161010f578063a22cb465116100a2578063e985e9c511610071578063e985e9c5146104c4578063eb54a7ca146104d7578063ef1f0237146104ea578063f7e3d983146104fd57600080fd5b8063a22cb46514610478578063b7e21b121461048b578063b88d4fde1461049e578063c87b56dd146104b157600080fd5b806389f71d2d116100de57806389f71d2d146103fc5780638d47859e1461040f57806395d89b41146104685780639903ad381461047057600080fd5b80635dff7d90146103ba5780636352211e146103cd5780636c0360eb146103e057806370a08231146103e857600080fd5b806342842e0e116101875780634c5c0c85116101565780634c5c0c85146103485780634cd88b761461036f57806350d75d251461038257806352d1902d1461038a57600080fd5b806342842e0e146102e857806346951954146102fb578063480954c31461030e57806349f289dc1461032157600080fd5b806318156101116101c3578063181561011461027257806323b872dd146102995780632f388560146102ac57806340d3597d146102bf57600080fd5b806301ffc9a7146101f557806306fdde031461021d578063081812fc14610232578063095ea7b31461025d575b600080fd5b610208610203366004611a54565b610510565b60405190151581526020015b60405180910390f35b610225610562565b6040516102149190611aa2565b610245610240366004611ad5565b6105f4565b6040516001600160a01b039091168152602001610214565b61027061026b366004611b03565b61061b565b005b6102457f000000000000000000000000000000000000000000000000000000000000000081565b6102706102a7366004611b2f565b6106a7565b6102706102ba366004611ad5565b6106d9565b6102456102cd366004611ad5565b6000908152600360205260409020546001600160a01b031690565b6102706102f6366004611b2f565b6106e5565b610270610309366004611b70565b610700565b61027061031c366004611ad5565b6107bc565b6102457f000000000000000000000000000000000000000000000000000000000000000081565b6102457f000000000000000000000000000000000000000000000000000000000000000081565b61027061037d366004611c5a565b6107c5565b6102456108ab565b7f87e44dce6a0d65a5ccf441783661f5727c2624b1f0088bbe957ce2c95406b7845b604051908152602001610214565b6102456103c8366004611ad5565b6108da565b6102456103db366004611ad5565b6108e5565b61022561091a565b6103ac6103f6366004611b70565b50600190565b6103ac61040a366004611cbe565b610936565b61042261041d366004611ad5565b61094b565b6040805182516001600160a01b03908116825260208085015182169083015283830151169181019190915260609182015163ffffffff1691810191909152608001610214565b6102256109cc565b6102706109db565b610270610486366004611d09565b610a9d565b610270610499366004611d47565b610aa8565b6102706104ac366004611d98565b610aba565b6102256104bf366004611ad5565b610aed565b6102086104d2366004611e18565b610afa565b6102706104e5366004611cbe565b610b28565b6102706104f8366004611cbe565b610c2b565b61027061050b366004611cbe565b610d27565b60006301ffc9a760e01b6001600160e01b03198316148061054157506380ac58cd60e01b6001600160e01b03198316145b8061055c5750635b5e139f60e01b6001600160e01b03198316145b92915050565b60606001805461057190611e46565b80601f016020809104026020016040519081016040528092919081815260200182805461059d90611e46565b80156105ea5780601f106105bf576101008083540402835291602001916105ea565b820191906000526020600020905b8154815290600101906020018083116105cd57829003601f168201915b5050505050905090565b60006105ff82610e00565b506000908152600360205260409020546001600160a01b031690565b6000610626826108e5565b9050806001600160a01b0316836001600160a01b03160361065a5760405163e4790b2560e01b815260040160405180910390fd5b336001600160a01b0382161480159061067a57506106788133610afa565b155b156106985760405163519a92c160e11b815260040160405180910390fd5b6106a28383610e26565b505050565b6106b13382610e94565b6106ce576040516312a8eb0360e11b815260040160405180910390fd5b6106a2838383610ef2565b6106e281610f0b565b50565b6106a283838360405180602001604052806000815250610aba565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663731aed6e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610760573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107849190611e80565b9050336001600160a01b038216146107af5760405163ebb7505b60e01b815260040160405180910390fd5b6107b882610f3b565b5050565b6106e281611175565b600054610100900460ff16158080156107e55750600054600160ff909116105b806107ff5750303b1580156107ff575060005460ff166001145b6108245760405162461bcd60e51b815260040161081b90611e9d565b60405180910390fd5b6000805460ff191660011790558015610847576000805461ff0019166101001790555b60016108538482611f39565b5060026108608382611f39565b5080156106a2576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b60006108d57f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b600061055c82611211565b6000806108f183611211565b90506001600160a01b03811661055c5760405163eab95e3b60e01b815260040160405180910390fd5b6040518060600160405280602d8152602001612343602d913981565b600061094384848461122f565b949350505050565b60408051608081018252600080825260208201819052918101829052606081019190915250600090815260166020908152604091829020825160808101845281546001600160a01b039081168252600183015481169382019390935260029091015491821692810192909252600160a01b900463ffffffff16606082015290565b60606002805461057190611e46565b600054610100900460ff16158080156109fb5750600054600160ff909116105b80610a155750303b158015610a15575060005460ff166001145b610a315760405162461bcd60e51b815260040161081b90611e9d565b6000805460ff191660011790558015610a54576000805461ff0019166101001790555b80156106e2576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020015b60405180910390a150565b6107b833838361127b565b610ab48484848461131a565b50505050565b610ac43383610e94565b610ae1576040516312a8eb0360e11b815260040160405180910390fd5b610ab484848484611437565b606061055c826000611442565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610b715760405163d367b64f60e01b815260040160405180910390fd5b6000610b7e84848461122f565b6000818152601660205260409020600101549091506001600160a01b031615610ab457610baa81610f0b565b604051630179c42b60e51b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632f388560906024015b600060405180830381600087803b158015610c0d57600080fd5b505af1158015610c21573d6000803e3d6000fd5b5050505050505050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610c745760405163d367b64f60e01b815260040160405180910390fd5b6000610c8184848461122f565b6000818152601660205260409020600101549091506001600160a01b031615610ab457604051630852cd8d60e31b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906342966c6890602401600060405180830381600087803b158015610d0657600080fd5b505af1158015610d1a573d6000803e3d6000fd5b50505050610ab481611175565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610d705760405163d367b64f60e01b815260040160405180910390fd5b6000610d7d84848461122f565b6000818152601660205260409020600101549091506001600160a01b0316610ab457610dab8484848461131a565b6040516340c10f1960e01b81526001600160a01b038381166004830152602482018390527f000000000000000000000000000000000000000000000000000000000000000016906340c10f1990604401610bf3565b610e09816115ae565b6106e25760405163eab95e3b60e01b815260040160405180910390fd5b600081815260036020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610e5b82611211565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610ea0836108e5565b9050806001600160a01b0316846001600160a01b03161480610ec75750610ec78185610afa565b806109435750836001600160a01b0316610ee0846105f4565b6001600160a01b031614949350505050565b60405163553a3f6560e11b815260040160405180910390fd5b6040518181527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce790602001610a92565b6000610f657f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b031603610fbb5760405162461bcd60e51b815260206004820152601d60248201527f5555505350726f786961626c653a206e6f742075706772616461626c65000000604482015260640161081b565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ff9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101d9190611ff9565b7f87e44dce6a0d65a5ccf441783661f5727c2624b1f0088bbe957ce2c95406b784146110975760405162461bcd60e51b815260206004820152602360248201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60448201526267696360e81b606482015260840161081b565b6001600160a01b03811630036110ef5760405162461bcd60e51b815260206004820152601960248201527f5555505350726f786961626c653a2070726f7879206c6f6f7000000000000000604482015260640161081b565b611117817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc7f87e44dce6a0d65a5ccf441783661f5727c2624b1f0088bbe957ce2c95406b784604080519182526001600160a01b038416602083015201610a92565b600061118082611211565b600083815260036020526040902080546001600160a01b0319169055905060008281526016602052604080822080546001600160a01b03199081168255600182018054909116905560020180546001600160c01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6000908152601660205260409020600101546001600160a01b031690565b60408051466020808301919091526001600160a01b03958616828401529385166060820152919093166080808301919091528351808303909101815260a0909101909252815191012090565b816001600160a01b0316836001600160a01b0316036112ad5760405163d3c7732960e01b815260040160405180910390fd5b6001600160a01b03838116600081815260046020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b03831661133057611330612012565b816001600160a01b0316836001600160a01b03160361135157611351612012565b61135a816115ae565b1561136757611367612012565b604080516080810182526001600160a01b038087168252858116602080840182815287841685870190815263ffffffff4281166060880190815260008a81526016909552888520975188549088166001600160a01b0319918216178955935160018901805491891691909516179093559051600290960180549251909116600160a01b026001600160c01b03199092169590941694909417939093179091559151839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a450505050565b610ab4848484610ef2565b6060600061144f8461094b565b805160208201516040808401519051631cd43d1160e31b81526001600160a01b0380851660048301529283166024820152908216604482015292935090916000917f0000000000000000000000000000000000000000000000000000000000000000169063e6a1e88890606401608060405180830381865afa1580156114d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114fd9190612028565b50509150506040518060600160405280602d8152602001612343602d9139611532826bffffffffffffffffffffffff166115cb565b8661155957604051806040016040528060048152602001637472756560e01b815250611578565b6040518060400160405280600581526020016466616c736560d81b8152505b6115818961165e565b6040516020016115949493929190612088565b604051602081830303815290604052935050505092915050565b6000806115ba83611211565b6001600160a01b0316141592915050565b606060006115d8836117d9565b600101905060008167ffffffffffffffff8111156115f8576115f8611b8d565b6040519080825280601f01601f191660200182016040528015611622576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461162c57509392505050565b6060600061166b8361094b565b905061168581600001516001600160a01b031660146118b1565b61168e466115cb565b82600001516001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa1580156116d0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526116f89190810190612110565b61171084602001516001600160a01b031660146118b1565b61172885604001516001600160a01b031660146118b1565b61179986600001516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561176d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117919190612187565b60ff166115cb565b6117ac876060015163ffffffff166115cb565b6040516020016117c297969594939291906121aa565b604051602081830303815290604052915050919050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106118185772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611844576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061186257662386f26fc10000830492506010015b6305f5e100831061187a576305f5e100830492506008015b612710831061188e57612710830492506004015b606483106118a0576064830492506002015b600a831061055c5760010192915050565b606060006118c08360026122eb565b6118cb906002612302565b67ffffffffffffffff8111156118e3576118e3611b8d565b6040519080825280601f01601f19166020018201604052801561190d576020820181803683370190505b509050600360fc1b8160008151811061192857611928612315565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061195757611957612315565b60200101906001600160f81b031916908160001a905350600061197b8460026122eb565b611986906001612302565b90505b60018111156119fe576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106119ba576119ba612315565b1a60f81b8282815181106119d0576119d0612315565b60200101906001600160f81b031916908160001a90535060049490941c936119f78161232b565b9050611989565b508315611a4d5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161081b565b9392505050565b600060208284031215611a6657600080fd5b81356001600160e01b031981168114611a4d57600080fd5b60005b83811015611a99578181015183820152602001611a81565b50506000910152565b6020815260008251806020840152611ac1816040850160208701611a7e565b601f01601f19169190910160400192915050565b600060208284031215611ae757600080fd5b5035919050565b6001600160a01b03811681146106e257600080fd5b60008060408385031215611b1657600080fd5b8235611b2181611aee565b946020939093013593505050565b600080600060608486031215611b4457600080fd5b8335611b4f81611aee565b92506020840135611b5f81611aee565b929592945050506040919091013590565b600060208284031215611b8257600080fd5b8135611a4d81611aee565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611bcc57611bcc611b8d565b604052919050565b600067ffffffffffffffff821115611bee57611bee611b8d565b50601f01601f191660200190565b6000611c0f611c0a84611bd4565b611ba3565b9050828152838383011115611c2357600080fd5b828260208301376000602084830101529392505050565b600082601f830112611c4b57600080fd5b611a4d83833560208501611bfc565b60008060408385031215611c6d57600080fd5b823567ffffffffffffffff80821115611c8557600080fd5b611c9186838701611c3a565b93506020850135915080821115611ca757600080fd5b50611cb485828601611c3a565b9150509250929050565b600080600060608486031215611cd357600080fd5b8335611cde81611aee565b92506020840135611cee81611aee565b91506040840135611cfe81611aee565b809150509250925092565b60008060408385031215611d1c57600080fd5b8235611d2781611aee565b915060208301358015158114611d3c57600080fd5b809150509250929050565b60008060008060808587031215611d5d57600080fd5b8435611d6881611aee565b93506020850135611d7881611aee565b92506040850135611d8881611aee565b9396929550929360600135925050565b60008060008060808587031215611dae57600080fd5b8435611db981611aee565b93506020850135611dc981611aee565b925060408501359150606085013567ffffffffffffffff811115611dec57600080fd5b8501601f81018713611dfd57600080fd5b611e0c87823560208401611bfc565b91505092959194509250565b60008060408385031215611e2b57600080fd5b8235611e3681611aee565b91506020830135611d3c81611aee565b600181811c90821680611e5a57607f821691505b602082108103611e7a57634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215611e9257600080fd5b8151611a4d81611aee565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b601f8211156106a257600081815260208120601f850160051c81016020861015611f125750805b601f850160051c820191505b81811015611f3157828155600101611f1e565b505050505050565b815167ffffffffffffffff811115611f5357611f53611b8d565b611f6781611f618454611e46565b84611eeb565b602080601f831160018114611f9c5760008415611f845750858301515b600019600386901b1c1916600185901b178555611f31565b600085815260208120601f198616915b82811015611fcb57888601518255948401946001909101908401611fac565b5085821015611fe95787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006020828403121561200b57600080fd5b5051919050565b634e487b7160e01b600052600160045260246000fd5b6000806000806080858703121561203e57600080fd5b84519350602085015180600b0b811461205657600080fd5b6040860151606090960151949790965092505050565b6000815161207e818560208601611a7e565b9290920192915050565b6000855161209a818460208a01611a7e565b693f666c6f77526174653d60b01b90830190815285516120c181600a840160208a01611a7e565b69266f7574676f696e673d60b01b600a929091019182015284516120ec816014840160208901611a7e565b8451910190612102816014840160208801611a7e565b016014019695505050505050565b60006020828403121561212257600080fd5b815167ffffffffffffffff81111561213957600080fd5b8201601f8101841361214a57600080fd5b8051612158611c0a82611bd4565b81815285602083850101111561216d57600080fd5b61217e826020830160208601611a7e565b95945050505050565b60006020828403121561219957600080fd5b815160ff81168114611a4d57600080fd5b6e26746f6b656e5f616464726573733d60881b8152600088516121d481600f850160208d01611a7e565b6926636861696e5f69643d60b01b600f9184019182015288516121fe816019840160208d01611a7e565b6d26746f6b656e5f73796d626f6c3d60901b60199290910191820152875161222d816027840160208c01611a7e565b672673656e6465723d60c01b60279290910191820152865161225681602f840160208b01611a7e565b692672656365697665723d60b01b602f92909101918201526122c76122c16122a96122a3612287603986018b61206c565b6f26746f6b656e5f646563696d616c733d60801b815260100190565b8861206c565b6b2673746172745f646174653d60a01b8152600c0190565b8561206c565b9a9950505050505050505050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761055c5761055c6122d5565b8082018082111561055c5761055c6122d5565b634e487b7160e01b600052603260045260246000fd5b60008161233a5761233a6122d5565b50600019019056fe68747470733a2f2f6e66742e7375706572666c7569642e66696e616e63652f6366612f76322f6765746d657461a264697066735822122030cc857089c8d46c9d51d9e7460f8201fbcc2d75a511ea334d46cd4b0d4eeb9e64736f6c63430008130033";
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
            readonly name: "_superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_flowReceiver";
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
    }];
    static createInterface(): ConstantOutflowNFTMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ConstantOutflowNFTMock;
}
export {};
//# sourceMappingURL=ConstantOutflowNFTMock__factory.d.ts.map