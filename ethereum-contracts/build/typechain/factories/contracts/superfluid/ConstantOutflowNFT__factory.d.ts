import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { ConstantOutflowNFT, ConstantOutflowNFTInterface } from "../../../contracts/superfluid/ConstantOutflowNFT";
type ConstantOutflowNFTConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ConstantOutflowNFT__factory extends ContractFactory {
    constructor(...args: ConstantOutflowNFTConstructorParams);
    deploy(host: PromiseOrValue<string>, constantInflowNFT: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ConstantOutflowNFT>;
    getDeployTransaction(host: PromiseOrValue<string>, constantInflowNFT: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ConstantOutflowNFT;
    connect(signer: Signer): ConstantOutflowNFT__factory;
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b506040516200244d3803806200244d8339810160408190526200003491620000fd565b6001600160a01b03821660a0819052604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd3600482015283919063b6d200de90602401602060405180830381865afa158015620000a0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000c691906200013c565b6001600160a01b039081166080529190911660c05250620001639050565b6001600160a01b0381168114620000fa57600080fd5b50565b600080604083850312156200011157600080fd5b82516200011e81620000e4565b60208401519092506200013181620000e4565b809150509250929050565b6000602082840312156200014f57600080fd5b81516200015c81620000e4565b9392505050565b60805160a05160c051612282620001cb600039600081816102e501528181610b1601528181610c100152610d270152600081816102be015261067601526000818161024b01528181610a8901528181610b8c01528181610c88015261121f01526122826000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c80636352211e116100f9578063a22cb46511610097578063e985e9c511610071578063e985e9c514610436578063eb54a7ca14610449578063ef1f02371461045c578063f7e3d9831461046f57600080fd5b8063a22cb465146103fd578063b88d4fde14610410578063c87b56dd1461042357600080fd5b806389f71d2d116100d357806389f71d2d146103815780638d47859e1461039457806395d89b41146103ed5780639903ad38146103f557600080fd5b80636352211e146103525780636c0360eb1461036557806370a082311461036d57600080fd5b806342842e0e116101665780634c5c0c85116101405780634c5c0c85146102e05780634cd88b761461030757806350d75d251461031a57806352d1902d1461032257600080fd5b806342842e0e1461029357806346951954146102a657806349f289dc146102b957600080fd5b8063095ea7b3116101a2578063095ea7b314610231578063181561011461024657806323b872dd1461026d5780632f3885601461028057600080fd5b806301ffc9a7146101c957806306fdde03146101f1578063081812fc14610206575b600080fd5b6101dc6101d7366004611982565b610482565b60405190151581526020015b60405180910390f35b6101f96104d4565b6040516101e891906119d0565b610219610214366004611a03565b610566565b6040516001600160a01b0390911681526020016101e8565b61024461023f366004611a31565b61058d565b005b6102197f000000000000000000000000000000000000000000000000000000000000000081565b61024461027b366004611a5d565b610619565b61024461028e366004611a03565b61064b565b6102446102a1366004611a5d565b610657565b6102446102b4366004611a9e565b610672565b6102197f000000000000000000000000000000000000000000000000000000000000000081565b6102197f000000000000000000000000000000000000000000000000000000000000000081565b610244610315366004611b88565b61072e565b610219610814565b7f87e44dce6a0d65a5ccf441783661f5727c2624b1f0088bbe957ce2c95406b7845b6040519081526020016101e8565b610219610360366004611a03565b610843565b6101f961087c565b61034461037b366004611a9e565b50600190565b61034461038f366004611bec565b610898565b6103a76103a2366004611a03565b6108ad565b6040805182516001600160a01b03908116825260208085015182169083015283830151169181019190915260609182015163ffffffff16918101919091526080016101e8565b6101f961092e565b61024461093d565b61024461040b366004611c37565b6109ff565b61024461041e366004611c75565b610a0a565b6101f9610431366004611a03565b610a43565b6101dc610444366004611cf5565b610a50565b610244610457366004611bec565b610a7e565b61024461046a366004611bec565b610b81565b61024461047d366004611bec565b610c7d565b60006301ffc9a760e01b6001600160e01b0319831614806104b357506380ac58cd60e01b6001600160e01b03198316145b806104ce5750635b5e139f60e01b6001600160e01b03198316145b92915050565b6060600180546104e390611d23565b80601f016020809104026020016040519081016040528092919081815260200182805461050f90611d23565b801561055c5780601f106105315761010080835404028352916020019161055c565b820191906000526020600020905b81548152906001019060200180831161053f57829003601f168201915b5050505050905090565b600061057182610d56565b506000908152600360205260409020546001600160a01b031690565b600061059882610843565b9050806001600160a01b0316836001600160a01b0316036105cc5760405163e4790b2560e01b815260040160405180910390fd5b336001600160a01b038216148015906105ec57506105ea8133610a50565b155b1561060a5760405163519a92c160e11b815260040160405180910390fd5b6106148383610d8e565b505050565b6106233382610df8565b610640576040516312a8eb0360e11b815260040160405180910390fd5b610614838383610e56565b61065481610e6f565b50565b61061483838360405180602001604052806000815250610a0a565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663731aed6e6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f69190611d5d565b9050336001600160a01b038216146107215760405163ebb7505b60e01b815260040160405180910390fd5b61072a82610e9f565b5050565b600054610100900460ff161580801561074e5750600054600160ff909116105b806107685750303b158015610768575060005460ff166001145b61078d5760405162461bcd60e51b815260040161078490611d7a565b60405180910390fd5b6000805460ff1916600117905580156107b0576000805461ff0019166101001790555b60016107bc8482611e16565b5060026107c98382611e16565b508015610614576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b600061083e7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b6000818152601660205260408120600101546001600160a01b0316806104ce5760405163eab95e3b60e01b815260040160405180910390fd5b6040518060600160405280602d8152602001612220602d913981565b60006108a58484846110d9565b949350505050565b60408051608081018252600080825260208201819052918101829052606081019190915250600090815260166020908152604091829020825160808101845281546001600160a01b039081168252600183015481169382019390935260029091015491821692810192909252600160a01b900463ffffffff16606082015290565b6060600280546104e390611d23565b600054610100900460ff161580801561095d5750600054600160ff909116105b806109775750303b158015610977575060005460ff166001145b6109935760405162461bcd60e51b815260040161078490611d7a565b6000805460ff1916600117905580156109b6576000805461ff0019166101001790555b8015610654576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020015b60405180910390a150565b61072a338383611125565b610a143383610df8565b610a31576040516312a8eb0360e11b815260040160405180910390fd5b610a3d848484846111c4565b50505050565b60606104ce8260006111cf565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610ac75760405163d367b64f60e01b815260040160405180910390fd5b6000610ad48484846110d9565b6000818152601660205260409020600101549091506001600160a01b031615610a3d57610b0081610e6f565b604051630179c42b60e51b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632f388560906024015b600060405180830381600087803b158015610b6357600080fd5b505af1158015610b77573d6000803e3d6000fd5b5050505050505050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610bca5760405163d367b64f60e01b815260040160405180910390fd5b6000610bd78484846110d9565b6000818152601660205260409020600101549091506001600160a01b031615610a3d57604051630852cd8d60e31b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906342966c6890602401600060405180830381600087803b158015610c5c57600080fd5b505af1158015610c70573d6000803e3d6000fd5b50505050610a3d8161133b565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610cc65760405163d367b64f60e01b815260040160405180910390fd5b6000610cd38484846110d9565b6000818152601660205260409020600101549091506001600160a01b0316610a3d57610d01848484846113ca565b6040516340c10f1960e01b81526001600160a01b038381166004830152602482018390527f000000000000000000000000000000000000000000000000000000000000000016906340c10f1990604401610b49565b6000818152601660205260409020600101546001600160a01b03166106545760405163eab95e3b60e01b815260040160405180910390fd5b600081815260036020908152604080832080546001600160a01b0319166001600160a01b038781169182179092556016909352818420600101549151859492909116917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a45050565b600080610e0483610843565b9050806001600160a01b0316846001600160a01b03161480610e2b5750610e2b8185610a50565b806108a55750836001600160a01b0316610e4484610566565b6001600160a01b031614949350505050565b60405163553a3f6560e11b815260040160405180910390fd5b6040518181527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7906020016109f4565b6000610ec97f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b031603610f1f5760405162461bcd60e51b815260206004820152601d60248201527f5555505350726f786961626c653a206e6f742075706772616461626c650000006044820152606401610784565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f819190611ed6565b7f87e44dce6a0d65a5ccf441783661f5727c2624b1f0088bbe957ce2c95406b78414610ffb5760405162461bcd60e51b815260206004820152602360248201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60448201526267696360e81b6064820152608401610784565b6001600160a01b03811630036110535760405162461bcd60e51b815260206004820152601960248201527f5555505350726f786961626c653a2070726f7879206c6f6f70000000000000006044820152606401610784565b61107b817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc7f87e44dce6a0d65a5ccf441783661f5727c2624b1f0088bbe957ce2c95406b784604080519182526001600160a01b0384166020830152016109f4565b60408051466020808301919091526001600160a01b03958616828401529385166060820152919093166080808301919091528351808303909101815260a0909101909252815191012090565b816001600160a01b0316836001600160a01b0316036111575760405163d3c7732960e01b815260040160405180910390fd5b6001600160a01b03838116600081815260046020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610a3d848484610e56565b606060006111dc846108ad565b805160208201516040808401519051631cd43d1160e31b81526001600160a01b0380851660048301529283166024820152908216604482015292935090916000917f0000000000000000000000000000000000000000000000000000000000000000169063e6a1e88890606401608060405180830381865afa158015611266573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061128a9190611eef565b50509150506040518060600160405280602d8152602001612220602d91396112bf826bffffffffffffffffffffffff166114f9565b866112e657604051806040016040528060048152602001637472756560e01b815250611305565b6040518060400160405280600581526020016466616c736560d81b8152505b61130e8961158c565b6040516020016113219493929190611f4f565b604051602081830303815290604052935050505092915050565b60008181526016602081815260408084206001810180546003855283872080546001600160a01b0319908116909155959094528154851682558054909416909355600290920180546001600160c01b031916905590516001600160a01b0390911691839183907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6001600160a01b0383166113e0576113e0611fd7565b816001600160a01b0316836001600160a01b03160361140157611401611fd7565b6000818152601660205260409020600101546001600160a01b03161561142957611429611fd7565b604080516080810182526001600160a01b038087168252858116602080840182815287841685870190815263ffffffff4281166060880190815260008a81526016909552888520975188549088166001600160a01b0319918216178955935160018901805491891691909516179093559051600290960180549251909116600160a01b026001600160c01b03199092169590941694909417939093179091559151839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a450505050565b6060600061150683611707565b600101905060008167ffffffffffffffff81111561152657611526611abb565b6040519080825280601f01601f191660200182016040528015611550576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461155a57509392505050565b60606000611599836108ad565b90506115b381600001516001600160a01b031660146117df565b6115bc466114f9565b82600001516001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa1580156115fe573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526116269190810190611fed565b61163e84602001516001600160a01b031660146117df565b61165685604001516001600160a01b031660146117df565b6116c786600001516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561169b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116bf9190612064565b60ff166114f9565b6116da876060015163ffffffff166114f9565b6040516020016116f09796959493929190612087565b604051602081830303815290604052915050919050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106117465772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611772576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061179057662386f26fc10000830492506010015b6305f5e10083106117a8576305f5e100830492506008015b61271083106117bc57612710830492506004015b606483106117ce576064830492506002015b600a83106104ce5760010192915050565b606060006117ee8360026121c8565b6117f99060026121df565b67ffffffffffffffff81111561181157611811611abb565b6040519080825280601f01601f19166020018201604052801561183b576020820181803683370190505b509050600360fc1b81600081518110611856576118566121f2565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611885576118856121f2565b60200101906001600160f81b031916908160001a90535060006118a98460026121c8565b6118b49060016121df565b90505b600181111561192c576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106118e8576118e86121f2565b1a60f81b8282815181106118fe576118fe6121f2565b60200101906001600160f81b031916908160001a90535060049490941c9361192581612208565b90506118b7565b50831561197b5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610784565b9392505050565b60006020828403121561199457600080fd5b81356001600160e01b03198116811461197b57600080fd5b60005b838110156119c75781810151838201526020016119af565b50506000910152565b60208152600082518060208401526119ef8160408501602087016119ac565b601f01601f19169190910160400192915050565b600060208284031215611a1557600080fd5b5035919050565b6001600160a01b038116811461065457600080fd5b60008060408385031215611a4457600080fd5b8235611a4f81611a1c565b946020939093013593505050565b600080600060608486031215611a7257600080fd5b8335611a7d81611a1c565b92506020840135611a8d81611a1c565b929592945050506040919091013590565b600060208284031215611ab057600080fd5b813561197b81611a1c565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611afa57611afa611abb565b604052919050565b600067ffffffffffffffff821115611b1c57611b1c611abb565b50601f01601f191660200190565b6000611b3d611b3884611b02565b611ad1565b9050828152838383011115611b5157600080fd5b828260208301376000602084830101529392505050565b600082601f830112611b7957600080fd5b61197b83833560208501611b2a565b60008060408385031215611b9b57600080fd5b823567ffffffffffffffff80821115611bb357600080fd5b611bbf86838701611b68565b93506020850135915080821115611bd557600080fd5b50611be285828601611b68565b9150509250929050565b600080600060608486031215611c0157600080fd5b8335611c0c81611a1c565b92506020840135611c1c81611a1c565b91506040840135611c2c81611a1c565b809150509250925092565b60008060408385031215611c4a57600080fd5b8235611c5581611a1c565b915060208301358015158114611c6a57600080fd5b809150509250929050565b60008060008060808587031215611c8b57600080fd5b8435611c9681611a1c565b93506020850135611ca681611a1c565b925060408501359150606085013567ffffffffffffffff811115611cc957600080fd5b8501601f81018713611cda57600080fd5b611ce987823560208401611b2a565b91505092959194509250565b60008060408385031215611d0857600080fd5b8235611d1381611a1c565b91506020830135611c6a81611a1c565b600181811c90821680611d3757607f821691505b602082108103611d5757634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215611d6f57600080fd5b815161197b81611a1c565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b601f82111561061457600081815260208120601f850160051c81016020861015611def5750805b601f850160051c820191505b81811015611e0e57828155600101611dfb565b505050505050565b815167ffffffffffffffff811115611e3057611e30611abb565b611e4481611e3e8454611d23565b84611dc8565b602080601f831160018114611e795760008415611e615750858301515b600019600386901b1c1916600185901b178555611e0e565b600085815260208120601f198616915b82811015611ea857888601518255948401946001909101908401611e89565b5085821015611ec65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060208284031215611ee857600080fd5b5051919050565b60008060008060808587031215611f0557600080fd5b84519350602085015180600b0b8114611f1d57600080fd5b6040860151606090960151949790965092505050565b60008151611f458185602086016119ac565b9290920192915050565b60008551611f61818460208a016119ac565b693f666c6f77526174653d60b01b9083019081528551611f8881600a840160208a016119ac565b69266f7574676f696e673d60b01b600a92909101918201528451611fb38160148401602089016119ac565b8451910190611fc98160148401602088016119ac565b016014019695505050505050565b634e487b7160e01b600052600160045260246000fd5b600060208284031215611fff57600080fd5b815167ffffffffffffffff81111561201657600080fd5b8201601f8101841361202757600080fd5b8051612035611b3882611b02565b81815285602083850101111561204a57600080fd5b61205b8260208301602086016119ac565b95945050505050565b60006020828403121561207657600080fd5b815160ff8116811461197b57600080fd5b6e26746f6b656e5f616464726573733d60881b8152600088516120b181600f850160208d016119ac565b6926636861696e5f69643d60b01b600f9184019182015288516120db816019840160208d016119ac565b6d26746f6b656e5f73796d626f6c3d60901b60199290910191820152875161210a816027840160208c016119ac565b672673656e6465723d60c01b60279290910191820152865161213381602f840160208b016119ac565b692672656365697665723d60b01b602f92909101918201526121a461219e612186612180612164603986018b611f33565b6f26746f6b656e5f646563696d616c733d60801b815260100190565b88611f33565b6b2673746172745f646174653d60a01b8152600c0190565b85611f33565b9a9950505050505050505050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176104ce576104ce6121b2565b808201808211156104ce576104ce6121b2565b634e487b7160e01b600052603260045260246000fd5b600081612217576122176121b2565b50600019019056fe68747470733a2f2f6e66742e7375706572666c7569642e66696e616e63652f6366612f76322f6765746d657461a2646970667358221220bf467f7b057510c563f4fad1b03d316eb3cc55dc8cee941c1709fb676ae135f064736f6c63430008130033";
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
    static createInterface(): ConstantOutflowNFTInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ConstantOutflowNFT;
}
export {};
//# sourceMappingURL=ConstantOutflowNFT__factory.d.ts.map