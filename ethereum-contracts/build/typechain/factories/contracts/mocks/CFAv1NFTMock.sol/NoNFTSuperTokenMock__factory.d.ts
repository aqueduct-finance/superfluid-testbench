import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { NoNFTSuperTokenMock, NoNFTSuperTokenMockInterface } from "../../../../contracts/mocks/CFAv1NFTMock.sol/NoNFTSuperTokenMock";
type NoNFTSuperTokenMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NoNFTSuperTokenMock__factory extends ContractFactory {
    constructor(...args: NoNFTSuperTokenMockConstructorParams);
    deploy(host: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<NoNFTSuperTokenMock>;
    getDeployTransaction(host: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): NoNFTSuperTokenMock;
    connect(signer: Signer): NoNFTSuperTokenMock__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200269838038062002698833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516125cc620000cc600039600081816101840152818161052a015281816108590152818161092801528181610ba501528181610de901528181610e7e0152818161112d01526111c401526125cc6000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806350d75d25116100b8578063a1b2bf8b1161007c578063a1b2bf8b146102f2578063b84cdd4a14610305578063bb0d196e14610318578063cf97256d1461032b578063d9d078d61461033e578063eb3537cc1461035157600080fd5b806350d75d251461027e57806352d1902d146102865780636c2d9f2f146102b457806379359f6f146102c75780639903ad38146102ea57600080fd5b80632ec8eec71161010a5780632ec8eec7146101d4578063386fa2211461020757806342fe09801461022757806345977d031461023a578063469519541461024d5780634b61cc331461025e57600080fd5b8063090c415e1461014757806312a6a3f81461015c5780631863e8091461016f57806320bc44251461018257806327048397146101c1575b600080fd5b61015a610155366004611ade565b61037f565b005b61015a61016a366004611b3a565b610432565b61015a61017d366004611be6565b610515565b7f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b0390911681526020015b60405180910390f35b61015a6101cf366004611cca565b6107b5565b6101e76101e2366004611cec565b610851565b6040805194855260208501939093529183015260608201526080016101b8565b61021a610215366004611cec565b6108f4565b6040516101b89190611d10565b61015a610235366004611d9f565b61099d565b61015a610248366004611e3a565b610abb565b61015a61025b366004611cec565b50565b61027161026c366004611e53565b610ae7565b6040516101b89190611e99565b6101a4610b2c565b6040517f6bfbb132610e56cb96575dba244667b9d6dbfeffe22b68a79fa16f2d18eb001981526020016101b8565b6102716102c2366004611ed1565b610b5b565b6102da6102d5366004611cec565b610b9d565b60405190151581526020016101b8565b61015a610c25565b61015a610300366004611b3a565b610ce6565b6102da610313366004611f06565b610d90565b6102da610326366004611cec565b610de1565b61015a610339366004611f06565b610e69565b6102da61034c366004611f06565b610f52565b61036461035f366004611f06565b610f6c565b604080519384526020840192909252908201526060016101b8565b600033858560405160200161039693929190611f32565b6040516020818303038152906040528051906020012090506103eb818484808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506110a692505050565b6040518481526001600160a01b0386169033907f30f416fa68fca014a0f334464c64b000ba53e99b6d2afdea9d5ca756372d59859060200160405180910390a35050505050565b604051339060009061044a9083908790602001611f7b565b60408051601f198184030181529190528051602090910120905061046e81846110ec565b1561048c5760405163782a90fb60e11b815260040160405180910390fd5b6104c9818585808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506110a692505050565b816001600160a01b03167f770ea40a13a4644573ed785e5c7116890709947918747febc5add46feb531e2d86868660405161050693929190611fb8565b60405180910390a25050505050565b604051632329212160e21b81523360048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638ca4848490602401602060405180830381865afa158015610579573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059d9190611ff9565b6105ba5760405163327fd99160e21b815260040160405180910390fd5b60006105c4611128565b90506001600160a01b0381166105d75750845b6000856105e457866105e6565b815b905060008313610683576105f98361202c565b6106028561126d565b1461060f5761060f612048565b6106188461126d565b6001600160a01b0382166000908152600260205260408120805490919061064090849061205e565b90915550506001600160a01b0385166000908152600260205260408120805485929061066d90849061205e565b9091555061067e90508582866112db565b61074d565b851561069157610691612048565b8261069b8561126d565b6106a5919061205e565b6001600160a01b038316600090815260026020526040812080549091906106cd908490612086565b909155506106dc90508461126d565b6001600160a01b0388166000908152600260205260408120805490919061070490849061205e565b90915550506001600160a01b0385166000908152600260205260408120805485929061073190849061205e565b9091555061074290508288866112db565b61074d8286856112db565b846001600160a01b0316876001600160a01b0316336001600160a01b03167fb8381a3ce157650e06186e3e8f4dd4dc29236f2688b6eed1893d0a60d7c6386f8c8589898f6040516107a29594939291906120f6565b60405180910390a4505050505050505050565b60405133906000906107cd9083908690602001611f7b565b6040516020818303038152906040528051906020012090506107ef81846110ec565b61080c5760405163dae1880960e01b815260040160405180910390fd5b610816818461132d565b60405184815233907f71a63dc095de07aa5512ad57a7596a39516317e316981a1cd71000057be1537b9060200160405180910390a250505050565b6000806000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663bbe4fd506040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d99190612129565b90506108e58582610f6c565b91979096509094509092509050565b6001600160a01b038181166000908152600160205260409081902054905163c56a069d60e01b8152901960048201526060917f0000000000000000000000000000000000000000000000000000000000000000169063c56a069d90602401600060405180830381865afa15801561096f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109979190810190612142565b92915050565b600054610100900460ff16158080156109bd5750600054600160ff909116105b806109d75750303b1580156109d7575060005460ff166001145b6109fc5760405162461bcd60e51b81526004016109f3906121f4565b60405180910390fd5b6000805460ff191660011790558015610a1f576000805461ff0019166101001790555b600e805460ff8816600160a01b026001600160a81b03199091166001600160a01b038a1617179055600f610a548587836122c2565b506010610a628385836122c2565b50610a6c3061134e565b8015610ab2576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050505050565b61025b333333846040518060200160405280600081525060405180602001604052806000815250611483565b60606000858585604051602001610b0093929190611f32565b604051602081830303815290604052805190602001209050610b2281846115dd565b9695505050505050565b6000610b567f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b606060008484604051602001610b72929190611f7b565b604051602081830303815290604052805190602001209050610b9481846115dd565b95945050505050565b6000610997827f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663bbe4fd506040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c01573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034c9190612129565b600054610100900460ff1615808015610c455750600054600160ff909116105b80610c5f5750303b158015610c5f575060005460ff166001145b610c7b5760405162461bcd60e51b81526004016109f3906121f4565b6000805460ff191660011790558015610c9e576000805461ff0019166101001790555b801561025b576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b6040513390600090610cfe9083908790602001611f7b565b604051602081830303815290604052805190602001209050610d53818585808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506110a692505050565b336001600160a01b03167f0c4c547b3a4fcaa5be8353b3111472b124155bccc86de811d4a481c9e6e9faca86868660405161050693929190611fb8565b600080600080610da08686610f6c565b9250925092506000610dc8828411610db957600061126d565b610dc38385612382565b61126d565b610dd2908561205e565b60001315979650505050505050565b6000610997827f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663bbe4fd506040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e45573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103139190612129565b604051632329212160e21b81523360048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638ca4848490602401602060405180830381865afa158015610ecd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef19190611ff9565b610f0e5760405163327fd99160e21b815260040160405180910390fd5b6001600160a01b038216600090815260026020526040902054610f3290829061205e565b6001600160a01b0390921660009081526002602052604090209190915550565b600080610f5f8484610f6c565b5050600013949350505050565b6001600160a01b038216600090815260026020526040812054908080610f91866108f4565b905060005b815181101561109d576000806000848481518110610fb657610fb6612395565b60209081029190910101516040516326cb922f60e21b81523060048201526001600160a01b038c81166024830152604482018c905290911690639b2e48bc90606401606060405180830381865afa158015611015573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061103991906123ab565b9194509250905061104a82886123d9565b965061105681876123d9565b955061107381831161106957600061126d565b610dc38284612382565b61107d848a61205e565b6110879190612086565b975050505080611096906123ec565b9050610f96565b50509250925092565b60005b81518110156110e75760008282815181106110c6576110c6612395565b60200260200101519050808285015550806110e0906123ec565b90506110a9565b505050565b6000805b8281101561111e5783810154801561110d57600192505050610997565b50611117816123ec565b90506110f0565b5060009392505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663289b3c0d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611189573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ad9190612405565b604051638369a0f160e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301523060248301527f9f60ae461adf056670e03ae602566409933242392cb06744f5747c9f38b05d09604483015291925090821690638369a0f190606401602060405180830381865afa158015611243573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112679190612405565b91505090565b60006001600160ff1b038211156112d75760405162461bcd60e51b815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2061604482015267371034b73a191a9b60c11b60648201526084016109f3565b5090565b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161132091815260200190565b60405180910390a3505050565b60005b818110156110e757600083820155611347816123ec565b9050611330565b6040516329965a1d60e01b81526001600160a01b03821660048201527fac7fbab5f54a3ca8194167523c6753bfeb96a445279294b6125b68cce21770546024820152306044820152731820a4b7618bde71dce8cdc73aab6c95905fad24906329965a1d90606401600060405180830381600087803b1580156113cf57600080fd5b505af11580156113e3573d6000803e3d6000fd5b50506040516329965a1d60e01b81526001600160a01b03841660048201527faea199e31a596269b42cdafd93407f14436db6e4cad65417994c2eb37381e05a6024820152306044820152731820a4b7618bde71dce8cdc73aab6c95905fad2492506329965a1d9150606401600060405180830381600087803b15801561146857600080fd5b505af115801561147c573d6000803e3d6000fd5b5050505050565b600e546001600160a01b031661149857600080fd5b6000806114a48561166d565b600e546040516370a0823160e01b81523060048201529294509092506000916001600160a01b03909116906370a0823190602401602060405180830381865afa1580156114f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115199190612129565b600e54909150611534906001600160a01b031689308661172c565b600e546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa15801561157d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115a19190612129565b905060006115af8383612382565b90508085146115bd57600080fd5b6115d08b8a868a51600014158b8b61178c565b5050505050505050505050565b60608167ffffffffffffffff8111156115f8576115f8611b86565b604051908082528060200260200182016040528015611621578160200160208202803683370190505b50905060005b828110156116665760008185015490508083838151811061164a5761164a612395565b60209081029190910101525061165f816123ec565b9050611627565b5092915050565b60008060006012600e60149054906101000a900460ff1660ff1610156116cf57600e546116a590600160a01b900460ff166012612422565b6116b090600a61251f565b90506116bc818561252e565b92506116c88184612550565b9150611726565b600e546012600160a01b90910460ff16111561171f57600e546116fe90601290600160a01b900460ff16612422565b61170990600a61251f565b90506117158185612550565b9250839150611726565b8391508192505b50915091565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526117869085906117b1565b50505050565b6001600160a01b03851661179f57600080fd5b6117a98585611883565b505050505050565b6000611806826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166118dd9092919063ffffffff16565b8051909150156110e757808060200190518101906118249190611ff9565b6110e75760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016109f3565b61188c8161126d565b6001600160a01b0383166000908152600260205260409020546118af919061205e565b6001600160a01b0383166000908152600260205260409020556003546118d69082906123d9565b6003555050565b60606118ec84846000856118f4565b949350505050565b6060824710156119555760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016109f3565b600080866001600160a01b031685876040516119719190612567565b60006040518083038185875af1925050503d80600081146119ae576040519150601f19603f3d011682016040523d82523d6000602084013e6119b3565b606091505b50915091506119c4878383876119cf565b979650505050505050565b60608315611a3e578251600003611a37576001600160a01b0385163b611a375760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016109f3565b50816118ec565b6118ec8383815115611a535781518083602001fd5b8060405162461bcd60e51b81526004016109f39190612583565b6001600160a01b038116811461025b57600080fd5b8035611a8d81611a6d565b919050565b60008083601f840112611aa457600080fd5b50813567ffffffffffffffff811115611abc57600080fd5b6020830191508360208260051b8501011115611ad757600080fd5b9250929050565b60008060008060608587031215611af457600080fd5b8435611aff81611a6d565b935060208501359250604085013567ffffffffffffffff811115611b2257600080fd5b611b2e87828801611a92565b95989497509550505050565b600080600060408486031215611b4f57600080fd5b83359250602084013567ffffffffffffffff811115611b6d57600080fd5b611b7986828701611a92565b9497909650939450505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611bc557611bc5611b86565b604052919050565b801515811461025b57600080fd5b8035611a8d81611bcd565b600080600080600080600060e0888a031215611c0157600080fd5b8735965060208089013567ffffffffffffffff80821115611c2157600080fd5b818b0191508b601f830112611c3557600080fd5b813581811115611c4757611c47611b86565b611c59601f8201601f19168501611b9c565b91508082528c84828501011115611c6f57600080fd5b8084840185840137600084828401015250809850505050611c9260408901611a82565b9450611ca060608901611bdb565b9350611cae60808901611a82565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611cdd57600080fd5b50508035926020909101359150565b600060208284031215611cfe57600080fd5b8135611d0981611a6d565b9392505050565b6020808252825182820181905260009190848201906040850190845b81811015611d515783516001600160a01b031683529284019291840191600101611d2c565b50909695505050505050565b60008083601f840112611d6f57600080fd5b50813567ffffffffffffffff811115611d8757600080fd5b602083019150836020828501011115611ad757600080fd5b60008060008060008060808789031215611db857600080fd5b8635611dc381611a6d565b9550602087013560ff81168114611dd957600080fd5b9450604087013567ffffffffffffffff80821115611df657600080fd5b611e028a838b01611d5d565b90965094506060890135915080821115611e1b57600080fd5b50611e2889828a01611d5d565b979a9699509497509295939492505050565b600060208284031215611e4c57600080fd5b5035919050565b60008060008060808587031215611e6957600080fd5b8435611e7481611a6d565b93506020850135611e8481611a6d565b93969395505050506040820135916060013590565b6020808252825182820181905260009190848201906040850190845b81811015611d5157835183529284019291840191600101611eb5565b600080600060608486031215611ee657600080fd5b8335611ef181611a6d565b95602085013595506040909401359392505050565b60008060408385031215611f1957600080fd5b8235611f2481611a6d565b946020939093013593505050565b6080808252600e908201526d41677265656d656e74537461746560901b60a08201526001600160a01b039384166020820152919092166040820152606081019190915260c00190565b6060808252600d908201526c41677265656d656e744461746160981b60808201526001600160a01b03929092166020830152604082015260a00190565b838152604060208201819052810182905260006001600160fb1b03831115611fdf57600080fd5b8260051b8085606085013791909101606001949350505050565b60006020828403121561200b57600080fd5b8151611d0981611bcd565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b820161204157612041612016565b5060000390565b634e487b7160e01b600052600160045260246000fd5b808201828112600083128015821682158216171561207e5761207e612016565b505092915050565b818103600083128015838313168383128216171561166657611666612016565b60005b838110156120c15781810151838201526020016120a9565b50506000910152565b600081518084526120e28160208601602086016120a6565b601f01601f19169290920160200192915050565b85815260018060a01b038516602082015283604082015282606082015260a0608082015260006119c460a08301846120ca565b60006020828403121561213b57600080fd5b5051919050565b6000602080838503121561215557600080fd5b825167ffffffffffffffff8082111561216d57600080fd5b818501915085601f83011261218157600080fd5b81518181111561219357612193611b86565b8060051b91506121a4848301611b9c565b81815291830184019184810190888411156121be57600080fd5b938501935b838510156121e857845192506121d883611a6d565b82825293850193908501906121c3565b98975050505050505050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b600181811c9082168061225657607f821691505b60208210810361227657634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156110e757600081815260208120601f850160051c810160208610156122a35750805b601f850160051c820191505b818110156117a9578281556001016122af565b67ffffffffffffffff8311156122da576122da611b86565b6122ee836122e88354612242565b8361227c565b6000601f841160018114612322576000851561230a5750838201355b600019600387901b1c1916600186901b17835561147c565b600083815260209020601f19861690835b828110156123535786850135825560209485019460019092019101612333565b50868210156123705760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b8181038181111561099757610997612016565b634e487b7160e01b600052603260045260246000fd5b6000806000606084860312156123c057600080fd5b8351925060208401519150604084015190509250925092565b8082018082111561099757610997612016565b6000600182016123fe576123fe612016565b5060010190565b60006020828403121561241757600080fd5b8151611d0981611a6d565b60ff828116828216039081111561099757610997612016565b600181815b8085111561247657816000190482111561245c5761245c612016565b8085161561246957918102915b93841c9390800290612440565b509250929050565b60008261248d57506001610997565b8161249a57506000610997565b81600181146124b057600281146124ba576124d6565b6001915050610997565b60ff8411156124cb576124cb612016565b50506001821b610997565b5060208310610133831016604e8410600b84101617156124f9575081810a610997565b612503838361243b565b806000190482111561251757612517612016565b029392505050565b6000611d0960ff84168361247e565b60008261254b57634e487b7160e01b600052601260045260246000fd5b500490565b808202811582820484141761099757610997612016565b600082516125798184602087016120a6565b9190910192915050565b602081526000611d0960208301846120ca56fea2646970667358221220f1809f2092394b1ec58f2a77f8fa685c8518ca47e41135e5eed3177eb07b2af964736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "SF_TOKEN_AGREEMENT_ALREADY_EXISTS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SF_TOKEN_AGREEMENT_DOES_NOT_EXIST";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SF_TOKEN_BURN_INSUFFICIENT_BALANCE";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SF_TOKEN_MOVE_INSUFFICIENT_BALANCE";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SF_TOKEN_ONLY_HOST";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SF_TOKEN_ONLY_LISTED_AGREEMENT";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32[]";
            readonly name: "data";
            readonly type: "bytes32[]";
        }];
        readonly name: "AgreementCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "penaltyAccount";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "rewardAccount";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "rewardAmount";
            readonly type: "uint256";
        }];
        readonly name: "AgreementLiquidated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "liquidatorAccount";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "penaltyAccount";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "bondAccount";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "rewardAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "bailoutAmount";
            readonly type: "uint256";
        }];
        readonly name: "AgreementLiquidatedBy";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "liquidatorAccount";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "targetAccount";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "rewardAmountReceiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "rewardAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "targetAccountBalanceDelta";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "liquidationTypeData";
            readonly type: "bytes";
        }];
        readonly name: "AgreementLiquidatedV2";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "slotId";
            readonly type: "uint256";
        }];
        readonly name: "AgreementStateUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }];
        readonly name: "AgreementTerminated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32[]";
            readonly name: "data";
            readonly type: "bytes32[]";
        }];
        readonly name: "AgreementUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "bailoutAccount";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "bailoutAmount";
            readonly type: "uint256";
        }];
        readonly name: "Bailout";
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
        readonly inputs: readonly [];
        readonly name: "castrate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "data";
            readonly type: "bytes32[]";
        }];
        readonly name: "createAgreement";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getAccountActiveAgreements";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperAgreement[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "dataLength";
            readonly type: "uint256";
        }];
        readonly name: "getAgreementData";
        readonly outputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "data";
            readonly type: "bytes32[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "slotId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "dataLength";
            readonly type: "uint256";
        }];
        readonly name: "getAgreementStateSlot";
        readonly outputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "slotData";
            readonly type: "bytes32[]";
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
        readonly inputs: readonly [];
        readonly name: "getHost";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "host";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "underlyingToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint8";
            readonly name: "underlyingDecimals";
            readonly type: "uint8";
        }, {
            readonly internalType: "string";
            readonly name: "n";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "s";
            readonly type: "string";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "isAccountCritical";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "isCritical";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "isAccountCriticalNow";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "isCritical";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "isAccountSolvent";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "isSolvent";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "isAccountSolventNow";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "isSolvent";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "liquidationTypeData";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "liquidatorAccount";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "useDefaultRewardAccount";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "targetAccount";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "rewardAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "int256";
            readonly name: "targetAccountBalanceDelta";
            readonly type: "int256";
        }];
        readonly name: "makeLiquidationPayoutsV2";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "realtimeBalanceOf";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "availableBalance";
            readonly type: "int256";
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
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "realtimeBalanceOfNow";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "availableBalance";
            readonly type: "int256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "owedDeposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "int256";
            readonly name: "delta";
            readonly type: "int256";
        }];
        readonly name: "settleBalance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "dataLength";
            readonly type: "uint256";
        }];
        readonly name: "terminateAgreement";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "data";
            readonly type: "bytes32[]";
        }];
        readonly name: "updateAgreementData";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "slotId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "slotData";
            readonly type: "bytes32[]";
        }];
        readonly name: "updateAgreementStateSlot";
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
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "upgrade";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): NoNFTSuperTokenMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NoNFTSuperTokenMock;
}
export {};
//# sourceMappingURL=NoNFTSuperTokenMock__factory.d.ts.map