import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { ConstantInflowNFT, ConstantInflowNFTInterface } from "../../../contracts/superfluid/ConstantInflowNFT";
type ConstantInflowNFTConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ConstantInflowNFT__factory extends ContractFactory {
    constructor(...args: ConstantInflowNFTConstructorParams);
    deploy(host: PromiseOrValue<string>, constantOutflowNFT: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ConstantInflowNFT>;
    getDeployTransaction(host: PromiseOrValue<string>, constantOutflowNFT: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ConstantInflowNFT;
    connect(signer: Signer): ConstantInflowNFT__factory;
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b506040516200217c3803806200217c8339810160408190526200003491620000fd565b6001600160a01b03821660a0819052604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd3600482015283919063b6d200de90602401602060405180830381865afa158015620000a0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000c691906200013c565b6001600160a01b039081166080529190911660c05250620001639050565b6001600160a01b0381168114620000fa57600080fd5b50565b600080604083850312156200011157600080fd5b82516200011e81620000e4565b60208401519092506200013181620000e4565b809150509250929050565b6000602082840312156200014f57600080fd5b81516200015c81620000e4565b9392505050565b60805160a05160c051611fc6620001b66000396000818161043201528181610634015281816106a6015261099c0152600081816102c901526106f1015260008181610230015261108c0152611fc66000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c806350d75d25116100f957806395d89b4111610097578063b88d4fde11610071578063b88d4fde146103f4578063c87b56dd14610407578063e985e9c51461041a578063ef43d2c61461042d57600080fd5b806395d89b41146103d15780639903ad38146103d9578063a22cb465146103e157600080fd5b80636c0360eb116100d35780636c0360eb1461034957806370a082311461035157806389f71d2d146103655780638d47859e1461037857600080fd5b806350d75d25146102fe57806352d1902d146103065780636352211e1461033657600080fd5b80632f3885601161016657806342966c681161014057806342966c681461029e57806346951954146102b157806349f289dc146102c45780634cd88b76146102eb57600080fd5b80632f3885601461026557806340c10f191461027857806342842e0e1461028b57600080fd5b806301ffc9a7146101ae57806306fdde03146101d6578063081812fc146101eb578063095ea7b314610216578063181561011461022b57806323b872dd14610252575b600080fd5b6101c16101bc36600461164e565b610454565b60405190151581526020015b60405180910390f35b6101de6104a6565b6040516101cd919061169c565b6101fe6101f93660046116cf565b610538565b6040516001600160a01b0390911681526020016101cd565b6102296102243660046116fd565b61055f565b005b6101fe7f000000000000000000000000000000000000000000000000000000000000000081565b610229610260366004611729565b6105eb565b6102296102733660046116cf565b61061d565b6102296102863660046116fd565b610629565b610229610299366004611729565b610680565b6102296102ac3660046116cf565b61069b565b6102296102bf36600461176a565b6106ed565b6101fe7f000000000000000000000000000000000000000000000000000000000000000081565b6102296102f9366004611854565b6107a5565b6101fe61088b565b7f9a61ea3469d742a522f41a67608e442d2c27902bed81123f00ba6d3e12e9871e5b6040519081526020016101cd565b6101fe6103443660046116cf565b6108ba565b6101de6108ef565b61032861035f36600461176a565b50600190565b6103286103733660046118b8565b61090b565b61038b6103863660046116cf565b61095e565b6040805182516001600160a01b03908116825260208085015182169083015283830151169181019190915260609182015163ffffffff16918101919091526080016101cd565b6101de610a07565b610229610a16565b6102296103ef366004611903565b610ad8565b610229610402366004611941565b610ae3565b6101de6104153660046116cf565b610b1c565b6101c16104283660046119c1565b610b29565b6101fe7f000000000000000000000000000000000000000000000000000000000000000081565b60006301ffc9a760e01b6001600160e01b03198316148061048557506380ac58cd60e01b6001600160e01b03198316145b806104a05750635b5e139f60e01b6001600160e01b03198316145b92915050565b6060600180546104b5906119ef565b80601f01602080910402602001604051908101604052809291908181526020018280546104e1906119ef565b801561052e5780601f106105035761010080835404028352916020019161052e565b820191906000526020600020905b81548152906001019060200180831161051157829003601f168201915b5050505050905090565b600061054382610b57565b506000908152600360205260409020546001600160a01b031690565b600061056a826108ba565b9050806001600160a01b0316836001600160a01b03160361059e5760405163e4790b2560e01b815260040160405180910390fd5b336001600160a01b038216148015906105be57506105bc8133610b29565b155b156105dc5760405163519a92c160e11b815260040160405180910390fd5b6105e68383610b7d565b505050565b6105f53382610beb565b610612576040516312a8eb0360e11b815260040160405180910390fd5b6105e6838383610c49565b61062681610c62565b50565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106725760405163740f7abd60e11b815260040160405180910390fd5b61067c8282610c92565b5050565b6105e683838360405180602001604052806000815250610ae3565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106e45760405163740f7abd60e11b815260040160405180910390fd5b61062681610cce565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663731aed6e6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561074d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107719190611a29565b9050336001600160a01b0382161461079c5760405163ebb7505b60e01b815260040160405180910390fd5b61067c82610d41565b600054610100900460ff16158080156107c55750600054600160ff909116105b806107df5750303b1580156107df575060005460ff166001145b6108045760405162461bcd60e51b81526004016107fb90611a46565b60405180910390fd5b6000805460ff191660011790558015610827576000805461ff0019166101001790555b60016108338482611ae2565b5060026108408382611ae2565b5080156105e6576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b60006108b57f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b6000806108c683610f7b565b90506001600160a01b0381166104a05760405163eab95e3b60e01b815260040160405180910390fd5b6040518060600160405280602d8152602001611f64602d913981565b60408051466020808301919091526001600160a01b0380871683850152808616606084015284166080808401919091528351808403909101815260a090920190925280519101206000905b949350505050565b60408051608081018252600080825260208201819052818301819052606082015290516346a3c2cf60e11b8152600481018390526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690638d47859e90602401608060405180830381865afa1580156109e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a09190611ba2565b6060600280546104b5906119ef565b600054610100900460ff1615808015610a365750600054600160ff909116105b80610a505750303b158015610a50575060005460ff166001145b610a6c5760405162461bcd60e51b81526004016107fb90611a46565b6000805460ff191660011790558015610a8f576000805461ff0019166101001790555b8015610626576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020015b60405180910390a150565b61067c338383610f92565b610aed3383610beb565b610b0a576040516312a8eb0360e11b815260040160405180910390fd5b610b1684848484611031565b50505050565b60606104a082600161103c565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b610b60816111a8565b6106265760405163eab95e3b60e01b815260040160405180910390fd5b600081815260036020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610bb282610f7b565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610bf7836108ba565b9050806001600160a01b0316846001600160a01b03161480610c1e5750610c1e8185610b29565b806109565750836001600160a01b0316610c3784610538565b6001600160a01b031614949350505050565b60405163553a3f6560e11b815260040160405180910390fd5b6040518181527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce790602001610acd565b60405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000610cd98261095e565b600083815260036020526040902080546001600160a01b031916905590508160006001600160a01b031682604001516001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6000610d6b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b031603610dc15760405162461bcd60e51b815260206004820152601d60248201527f5555505350726f786961626c653a206e6f742075706772616461626c6500000060448201526064016107fb565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610dff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e239190611c30565b7f9a61ea3469d742a522f41a67608e442d2c27902bed81123f00ba6d3e12e9871e14610e9d5760405162461bcd60e51b815260206004820152602360248201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60448201526267696360e81b60648201526084016107fb565b6001600160a01b0381163003610ef55760405162461bcd60e51b815260206004820152601960248201527f5555505350726f786961626c653a2070726f7879206c6f6f700000000000000060448201526064016107fb565b610f1d817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc7f9a61ea3469d742a522f41a67608e442d2c27902bed81123f00ba6d3e12e9871e604080519182526001600160a01b038416602083015201610acd565b600080610f878361095e565b604001519392505050565b816001600160a01b0316836001600160a01b031603610fc45760405163d3c7732960e01b815260040160405180910390fd5b6001600160a01b03838116600081815260046020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610b16848484610c49565b606060006110498461095e565b805160208201516040808401519051631cd43d1160e31b81526001600160a01b0380851660048301529283166024820152908216604482015292935090916000917f0000000000000000000000000000000000000000000000000000000000000000169063e6a1e88890606401608060405180830381865afa1580156110d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f79190611c49565b50509150506040518060600160405280602d8152602001611f64602d913961112c826bffffffffffffffffffffffff166111c5565b8661115357604051806040016040528060048152602001637472756560e01b815250611172565b6040518060400160405280600581526020016466616c736560d81b8152505b61117b89611258565b60405160200161118e9493929190611ca9565b604051602081830303815290604052935050505092915050565b6000806111b483610f7b565b6001600160a01b0316141592915050565b606060006111d2836113d3565b600101905060008167ffffffffffffffff8111156111f2576111f2611787565b6040519080825280601f01601f19166020018201604052801561121c576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461122657509392505050565b606060006112658361095e565b905061127f81600001516001600160a01b031660146114ab565b611288466111c5565b82600001516001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa1580156112ca573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526112f29190810190611d31565b61130a84602001516001600160a01b031660146114ab565b61132285604001516001600160a01b031660146114ab565b61139386600001516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611367573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061138b9190611da8565b60ff166111c5565b6113a6876060015163ffffffff166111c5565b6040516020016113bc9796959493929190611dcb565b604051602081830303815290604052915050919050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106114125772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef8100000000831061143e576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061145c57662386f26fc10000830492506010015b6305f5e1008310611474576305f5e100830492506008015b612710831061148857612710830492506004015b6064831061149a576064830492506002015b600a83106104a05760010192915050565b606060006114ba836002611f0c565b6114c5906002611f23565b67ffffffffffffffff8111156114dd576114dd611787565b6040519080825280601f01601f191660200182016040528015611507576020820181803683370190505b509050600360fc1b8160008151811061152257611522611f36565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061155157611551611f36565b60200101906001600160f81b031916908160001a9053506000611575846002611f0c565b611580906001611f23565b90505b60018111156115f8576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106115b4576115b4611f36565b1a60f81b8282815181106115ca576115ca611f36565b60200101906001600160f81b031916908160001a90535060049490941c936115f181611f4c565b9050611583565b5083156116475760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016107fb565b9392505050565b60006020828403121561166057600080fd5b81356001600160e01b03198116811461164757600080fd5b60005b8381101561169357818101518382015260200161167b565b50506000910152565b60208152600082518060208401526116bb816040850160208701611678565b601f01601f19169190910160400192915050565b6000602082840312156116e157600080fd5b5035919050565b6001600160a01b038116811461062657600080fd5b6000806040838503121561171057600080fd5b823561171b816116e8565b946020939093013593505050565b60008060006060848603121561173e57600080fd5b8335611749816116e8565b92506020840135611759816116e8565b929592945050506040919091013590565b60006020828403121561177c57600080fd5b8135611647816116e8565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156117c6576117c6611787565b604052919050565b600067ffffffffffffffff8211156117e8576117e8611787565b50601f01601f191660200190565b6000611809611804846117ce565b61179d565b905082815283838301111561181d57600080fd5b828260208301376000602084830101529392505050565b600082601f83011261184557600080fd5b611647838335602085016117f6565b6000806040838503121561186757600080fd5b823567ffffffffffffffff8082111561187f57600080fd5b61188b86838701611834565b935060208501359150808211156118a157600080fd5b506118ae85828601611834565b9150509250929050565b6000806000606084860312156118cd57600080fd5b83356118d8816116e8565b925060208401356118e8816116e8565b915060408401356118f8816116e8565b809150509250925092565b6000806040838503121561191657600080fd5b8235611921816116e8565b91506020830135801515811461193657600080fd5b809150509250929050565b6000806000806080858703121561195757600080fd5b8435611962816116e8565b93506020850135611972816116e8565b925060408501359150606085013567ffffffffffffffff81111561199557600080fd5b8501601f810187136119a657600080fd5b6119b5878235602084016117f6565b91505092959194509250565b600080604083850312156119d457600080fd5b82356119df816116e8565b91506020830135611936816116e8565b600181811c90821680611a0357607f821691505b602082108103611a2357634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215611a3b57600080fd5b8151611647816116e8565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b601f8211156105e657600081815260208120601f850160051c81016020861015611abb5750805b601f850160051c820191505b81811015611ada57828155600101611ac7565b505050505050565b815167ffffffffffffffff811115611afc57611afc611787565b611b1081611b0a84546119ef565b84611a94565b602080601f831160018114611b455760008415611b2d5750858301515b600019600386901b1c1916600185901b178555611ada565b600085815260208120601f198616915b82811015611b7457888601518255948401946001909101908401611b55565b5085821015611b925787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060808284031215611bb457600080fd5b6040516080810181811067ffffffffffffffff82111715611bd757611bd7611787565b6040528251611be5816116e8565b81526020830151611bf5816116e8565b60208201526040830151611c08816116e8565b6040820152606083015163ffffffff81168114611c2457600080fd5b60608201529392505050565b600060208284031215611c4257600080fd5b5051919050565b60008060008060808587031215611c5f57600080fd5b84519350602085015180600b0b8114611c7757600080fd5b6040860151606090960151949790965092505050565b60008151611c9f818560208601611678565b9290920192915050565b60008551611cbb818460208a01611678565b693f666c6f77526174653d60b01b9083019081528551611ce281600a840160208a01611678565b69266f7574676f696e673d60b01b600a92909101918201528451611d0d816014840160208901611678565b8451910190611d23816014840160208801611678565b016014019695505050505050565b600060208284031215611d4357600080fd5b815167ffffffffffffffff811115611d5a57600080fd5b8201601f81018413611d6b57600080fd5b8051611d79611804826117ce565b818152856020838501011115611d8e57600080fd5b611d9f826020830160208601611678565b95945050505050565b600060208284031215611dba57600080fd5b815160ff8116811461164757600080fd5b6e26746f6b656e5f616464726573733d60881b815260008851611df581600f850160208d01611678565b6926636861696e5f69643d60b01b600f918401918201528851611e1f816019840160208d01611678565b6d26746f6b656e5f73796d626f6c3d60901b601992909101918201528751611e4e816027840160208c01611678565b672673656e6465723d60c01b602792909101918201528651611e7781602f840160208b01611678565b692672656365697665723d60b01b602f9290910191820152611ee8611ee2611eca611ec4611ea8603986018b611c8d565b6f26746f6b656e5f646563696d616c733d60801b815260100190565b88611c8d565b6b2673746172745f646174653d60a01b8152600c0190565b85611c8d565b9a9950505050505050505050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176104a0576104a0611ef6565b808201808211156104a0576104a0611ef6565b634e487b7160e01b600052603260045260246000fd5b600081611f5b57611f5b611ef6565b50600019019056fe68747470733a2f2f6e66742e7375706572666c7569642e66696e616e63652f6366612f76322f6765746d657461a2646970667358221220eaff2f4c1919bfdff76447cfc7f7da824403f5318593d8e3a691b00f916c2cc564736f6c63430008130033";
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
    static createInterface(): ConstantInflowNFTInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ConstantInflowNFT;
}
export {};
//# sourceMappingURL=ConstantInflowNFT__factory.d.ts.map