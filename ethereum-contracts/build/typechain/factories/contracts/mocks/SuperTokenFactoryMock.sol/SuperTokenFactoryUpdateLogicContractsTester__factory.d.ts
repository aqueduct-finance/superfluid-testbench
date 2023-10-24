import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { SuperTokenFactoryUpdateLogicContractsTester, SuperTokenFactoryUpdateLogicContractsTesterInterface } from "../../../../contracts/mocks/SuperTokenFactoryMock.sol/SuperTokenFactoryUpdateLogicContractsTester";
type SuperTokenFactoryUpdateLogicContractsTesterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SuperTokenFactoryUpdateLogicContractsTester__factory extends ContractFactory {
    constructor(...args: SuperTokenFactoryUpdateLogicContractsTesterConstructorParams);
    deploy(host: PromiseOrValue<string>, superTokenLogic: PromiseOrValue<string>, constantOutflowNFT: PromiseOrValue<string>, constantInflowNFT: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SuperTokenFactoryUpdateLogicContractsTester>;
    getDeployTransaction(host: PromiseOrValue<string>, superTokenLogic: PromiseOrValue<string>, constantOutflowNFT: PromiseOrValue<string>, constantInflowNFT: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SuperTokenFactoryUpdateLogicContractsTester;
    connect(signer: Signer): SuperTokenFactoryUpdateLogicContractsTester__factory;
    static readonly bytecode = "0x6101006040523480156200001257600080fd5b5060405162001ffc38038062001ffc83398101604081905262000035916200010d565b6001600160a01b0380851660a052831660808190526040805163132075a760e31b81529051869286928692869291639903ad3891600480830192600092919082900301818387803b1580156200008a57600080fd5b505af11580156200009f573d6000803e3d6000fd5b5050506001600160a01b0380841660c05282811660e052608051604051911691507fc13fb19d60857980e565bf5dae406b8802d3c1cec50c6156b30b12b87402978390600090a2505050505050505062000175565b6001600160a01b03811681146200010a57600080fd5b50565b600080600080608085870312156200012457600080fd5b84516200013181620000f4565b60208601519094506200014481620000f4565b60408601519093506200015781620000f4565b60608601519092506200016a81620000f4565b939692955090935050565b60805160a05160c05160e051611e07620001f5600039600081816101fd015261098c0152600081816101d6015261087301526000818161014d0152818161074f0152610be1015260008181610232015281816102b30152818161043f015281816108a2015281816109bb01528181610ea201526111570152611e076000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80638d7a72f3116100a2578063a6d0c53411610071578063a6d0c53414610269578063bab74c891461027c578063cbf927b3146102ae578063d412d344146102d5578063eff0a89d146102e857600080fd5b80638d7a72f3146102275780639470a5b21461023057806397e011ed146102565780639903ad381461021f57600080fd5b806350d75d25116100e957806350d75d251461019957806352d1902d146101a15780635365d19f146101d15780635a7792df146101f85780638129fc1c1461021f57600080fd5b8063151188dc1461011b57806320bc44251461014b578063431f1481146101715780634695195414610184575b600080fd5b61012e61012936600461145f565b610314565b6040516001600160a01b0390911681526020015b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000061012e565b61012e61017f3660046114e0565b6106c7565b61019761019236600461145f565b610744565b005b61012e610a9f565b7fb146a22bc9644a3313a7e28592f37d32718a2b618d3d136aa524b0d86b87b6205b604051908152602001610142565b61012e7f000000000000000000000000000000000000000000000000000000000000000081565b61012e7f000000000000000000000000000000000000000000000000000000000000000081565b610197610ace565b6101c360025481565b7f000000000000000000000000000000000000000000000000000000000000000061012e565b610197610264366004611573565b610bdd565b61012e6102773660046115f7565b610dec565b61028f61028a36600461145f565b61103d565b604080516001600160a01b039093168352901515602083015201610142565b61012e7f000000000000000000000000000000000000000000000000000000000000000081565b6101976102e336600461145f565b611140565b61012e6102f636600461145f565b6001600160a01b039081166000908152600160205260409020541690565b600080805260016020527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49546001600160a01b0316610366576040516306ce6e6d60e21b815260040160405180910390fd5b6001600160a01b0380831660009081526001602052604090205483911680156103a2576040516348eb3cb960e11b815260040160405180910390fd5b604080516001600160a01b0384166020820152600091016040516020818303038152906040528051906020012090506000816040516103e090611430565b8190604051809103906000f5905080158015610400573d6000803e3d6000fd5b506001600160a01b038581166000908152600160205260409081902080546001600160a01b0319168484169081179091559051634a0687ef60e01b81527f00000000000000000000000000000000000000000000000000000000000000009092166004830152919250634a0687ef90602401600060405180830381600087803b15801561048c57600080fd5b505af11580156104a0573d6000803e3d6000fd5b5050505060008190506000876001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050d919061169d565b90506000886001600160a01b03166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa15801561054f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261057791908101906116f4565b90506000896001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa1580156105b9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105e191908101906116f4565b9050836001600160a01b03166342fe09808b85856040516020016106059190611796565b6040516020818303038152906040528560405160200161062591906117c4565b6040516020818303038152906040526040518563ffffffff1660e01b81526004016106539493929190611815565b600060405180830381600087803b15801561066d57600080fd5b505af1158015610681573d6000803e3d6000fd5b50506040516001600160a01b03871692507fb52c6d9d122e8c07769b96d7bb14e66db58ee03fdebaaa2f92547e9c7ef0e65f9150600090a2509198975050505050505050565b600061073987886001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561070b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072f919061169d565b8888888888610dec565b979650505050505050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461078d5760405163478b8e8360e01b815260040160405180910390fd5b610796816111f6565b60008190506000816001600160a01b0316635365d19f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ff9190611854565b90506000826001600160a01b0316635a7792df6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610841573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108659190611854565b9050816001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614610980577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ef43d2c66040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109229190611854565b6040516311a5465560e21b81526001600160a01b0384811660048301529190911690634695195490602401600060405180830381600087803b15801561096757600080fd5b505af115801561097b573d6000803e3d6000fd5b505050505b806001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614610a99577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634c5c0c856040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3b9190611854565b6040516311a5465560e21b81526001600160a01b0383811660048301529190911690634695195490602401600060405180830381600087803b158015610a8057600080fd5b505af1158015610a94573d6000803e3d6000fd5b505050505b50505050565b6000610ac97f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b600054610100900460ff1615808015610aee5750600054600160ff909116105b80610b085750303b158015610b08575060005460ff166001145b610b705760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff191660011790558015610b93576000805461ff0019166101001790555b8015610bda576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906020015b60405180910390a15b50565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663289b3c0d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c619190611854565b9050806001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ca1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc59190611854565b6001600160a01b0316336001600160a01b031614610cf657604051632bf2a63360e21b815260040160405180910390fd5b6000805260016020527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49546001600160a01b031615610d48576040516348eb3cb960e11b815260040160405180910390fd5b60005b82811015610a9957838382818110610d6557610d65611871565b9050604002016020016020810190610d7d919061145f565b60016000868685818110610d9357610d93611871565b610da9926020604090920201908101915061145f565b6001600160a01b039081168252602082019290925260400160002080546001600160a01b0319169290911691909117905580610de481611887565b915050610d4b565b60006001600160a01b038816610e155760405163182e4f4160e11b815260040160405180910390fd5b6000866002811115610e2957610e296118ae565b03610e475760405163c4901a4360e01b815260040160405180910390fd5b6001866002811115610e5b57610e5b6118ae565b03610f13576000604051610e6e90611430565b604051809103906000f080158015610e8a573d6000803e3d6000fd5b50604051634a0687ef60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116600483015291925090821690634a0687ef90602401600060405180830381600087803b158015610ef257600080fd5b505af1158015610f06573d6000803e3d6000fd5b5050505080915050610f97565b6000604051610f219061143d565b604051809103906000f080158015610f3d573d6000803e3d6000fd5b509050806001600160a01b0316638129fc1c6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610f7b57600080fd5b505af1158015610f8f573d6000803e3d6000fd5b509293505050505b6040516285fc1360e71b81526001600160a01b038216906342fe098090610fcc908b908b908a908a908a908a906004016118ed565b600060405180830381600087803b158015610fe657600080fd5b505af1158015610ffa573d6000803e3d6000fd5b50506040516001600160a01b03841692507fb52c6d9d122e8c07769b96d7bb14e66db58ee03fdebaaa2f92547e9c7ef0e65f9150600090a2979650505050505050565b6001600160a01b038082166000908152600160205260408120549091829116801561106e578092506001915061113a565b60006040518060200161108090611430565b601f1982820381018352601f9091011660408181526001600160a01b03881660208301529192506001600160f81b03199130910160405160208183030381529060405280519060200120838051906020012060405160200161111994939291906001600160f81b031994909416845260609290921b6bffffffffffffffffffffffff191660018401526015830152603582015260550190565b6040516020818303038152906040528051906020012060001c935060009250505b50915091565b604051634a0687ef60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152829190821690634a0687ef90602401600060405180830381600087803b1580156111a657600080fd5b505af11580156111ba573d6000803e3d6000fd5b50506040516001600160a01b03851692507f437790724a6e97b75d23117f28cdd4b1beeafc34f7a0911ef256e9334f4369a59150600090a25050565b60006112207f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b0316036112765760405162461bcd60e51b815260206004820152601d60248201527f5555505350726f786961626c653a206e6f742075706772616461626c650000006044820152606401610b67565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d8919061193b565b7fb146a22bc9644a3313a7e28592f37d32718a2b618d3d136aa524b0d86b87b620146113525760405162461bcd60e51b815260206004820152602360248201527f5555505350726f786961626c653a206e6f7420636f6d70617469626c65206c6f60448201526267696360e81b6064820152608401610b67565b6001600160a01b03811630036113aa5760405162461bcd60e51b815260206004820152601960248201527f5555505350726f786961626c653a2070726f7879206c6f6f70000000000000006044820152606401610b67565b6113d2817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b7fe011bc04c286c344a8fcbb8de77f953da762c3e25d8cdea984147fc4168a5dcc7fb146a22bc9644a3313a7e28592f37d32718a2b618d3d136aa524b0d86b87b620604080519182526001600160a01b038416602083015201610bd1565b61024a8061195583390190565b61023380611b9f83390190565b6001600160a01b0381168114610bda57600080fd5b60006020828403121561147157600080fd5b813561147c8161144a565b9392505050565b80356003811061149257600080fd5b919050565b60008083601f8401126114a957600080fd5b50813567ffffffffffffffff8111156114c157600080fd5b6020830191508360208285010111156114d957600080fd5b9250929050565b600080600080600080608087890312156114f957600080fd5b86356115048161144a565b955061151260208801611483565b9450604087013567ffffffffffffffff8082111561152f57600080fd5b61153b8a838b01611497565b9096509450606089013591508082111561155457600080fd5b5061156189828a01611497565b979a9699509497509295939492505050565b6000806020838503121561158657600080fd5b823567ffffffffffffffff8082111561159e57600080fd5b818501915085601f8301126115b257600080fd5b8135818111156115c157600080fd5b8660208260061b85010111156115d657600080fd5b60209290920196919550909350505050565b60ff81168114610bda57600080fd5b600080600080600080600060a0888a03121561161257600080fd5b873561161d8161144a565b9650602088013561162d816115e8565b955061163b60408901611483565b9450606088013567ffffffffffffffff8082111561165857600080fd5b6116648b838c01611497565b909650945060808a013591508082111561167d57600080fd5b5061168a8a828b01611497565b989b979a50959850939692959293505050565b6000602082840312156116af57600080fd5b815161147c816115e8565b634e487b7160e01b600052604160045260246000fd5b60005b838110156116eb5781810151838201526020016116d3565b50506000910152565b60006020828403121561170657600080fd5b815167ffffffffffffffff8082111561171e57600080fd5b818401915084601f83011261173257600080fd5b815181811115611744576117446116ba565b604051601f8201601f19908116603f0116810190838211818310171561176c5761176c6116ba565b8160405282815287602084870101111561178557600080fd5b6107398360208301602088016116d0565b65029bab832b9160d51b8152600082516117b78160068501602087016116d0565b9190910160060192915050565b600082516117d68184602087016116d0565b600f60fb1b920191825250600101919050565b600081518084526118018160208601602086016116d0565b601f01601f19169290920160200192915050565b6001600160a01b038516815260ff84166020820152608060408201819052600090611842908301856117e9565b828103606084015261073981856117e9565b60006020828403121561186657600080fd5b815161147c8161144a565b634e487b7160e01b600052603260045260246000fd5b6000600182016118a757634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052602160045260246000fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b038716815260ff8616602082015260806040820181905260009061191b90830186886118c4565b828103606084015261192e8185876118c4565b9998505050505050505050565b60006020828403121561194d57600080fd5b505191905056fe608060405234801561001057600080fd5b5061022a806100206000396000f3fe6080604052600436106100225760003560e01c80634a0687ef1461003957610031565b366100315761002f610059565b005b61002f610059565b34801561004557600080fd5b5061002f6100543660046101c4565b61006b565b610069610064610171565b6101a0565b565b6001600160a01b0381166100c65760405162461bcd60e51b815260206004820152601760248201527f5555505350726f78793a207a65726f206164647265737300000000000000000060448201526064015b60405180910390fd5b60006100f07f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b0316146101465760405162461bcd60e51b815260206004820152601e60248201527f5555505350726f78793a20616c726561647920696e697469616c697a6564000060448201526064016100bd565b61016e817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b50565b600061019b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b905090565b3660008037600080366000845af43d6000803e8080156101bf573d6000f35b3d6000fd5b6000602082840312156101d657600080fd5b81356001600160a01b03811681146101ed57600080fd5b939250505056fea264697066735822122093a2bbcf49dd2895177212eeb11e9921080374fd8cd93d5be93a80935603195a64736f6c63430008130033608060405234801561001057600080fd5b50610213806100206000396000f3fe6080604052600436106100225760003560e01c80638129fc1c1461003957610031565b366100315761002f61004e565b005b61002f61004e565b34801561004557600080fd5b5061002f610060565b61005e6100596100d0565b610173565b565b7fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a0546001600160a01b038116156100aa576040516305c5d81960e01b815260040160405180910390fd5b50337fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a055565b7fb8fcd5719b3ddf8626f3664705a89b7fc476129a58c1aa5eda57c600cc1821a0546000906001600160a01b03811661010b5761010b610197565b806001600160a01b0316639470a5b26040518163ffffffff1660e01b8152600401602060405180830381865afa158015610149573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061016d91906101ad565b91505090565b3660008037600080366000845af43d6000803e808015610192573d6000f35b3d6000fd5b634e487b7160e01b600052600160045260246000fd5b6000602082840312156101bf57600080fd5b81516001600160a01b03811681146101d657600080fd5b939250505056fea2646970667358221220d5944624d7ac37060e3921acfef50739d5c89189a003fea4b35a8970f675364264736f6c63430008130033a2646970667358221220550774bd8e1fb95ddc8a1bc5de83fd26ef5180668b1920525c8267860737d6e464736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperToken";
            readonly name: "superTokenLogic";
            readonly type: "address";
        }, {
            readonly internalType: "contract IConstantOutflowNFT";
            readonly name: "constantOutflowNFT";
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
        readonly name: "SUPER_TOKEN_FACTORY_ALREADY_EXISTS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_FACTORY_DOES_NOT_EXIST";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_FACTORY_NON_UPGRADEABLE_IS_DEPRECATED";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_FACTORY_ONLY_GOVERNANCE_OWNER";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_FACTORY_ONLY_HOST";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_FACTORY_UNINITIALIZED";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPER_TOKEN_FACTORY_ZERO_ADDRESS";
        readonly type: "error";
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
            readonly indexed: true;
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "CustomSuperTokenCreated";
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
            readonly indexed: true;
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "SuperTokenCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperToken";
            readonly name: "tokenLogic";
            readonly type: "address";
        }];
        readonly name: "SuperTokenLogicCreated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "CONSTANT_INFLOW_NFT_LOGIC";
        readonly outputs: readonly [{
            readonly internalType: "contract IConstantInflowNFT";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "CONSTANT_OUTFLOW_NFT_LOGIC";
        readonly outputs: readonly [{
            readonly internalType: "contract IConstantOutflowNFT";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "_SUPER_TOKEN_LOGIC";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
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
            readonly internalType: "address";
            readonly name: "_underlyingToken";
            readonly type: "address";
        }];
        readonly name: "computeCanonicalERC20WrapperAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "superTokenAddress";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "isDeployed";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ERC20WithTokenInfo";
            readonly name: "_underlyingToken";
            readonly type: "address";
        }];
        readonly name: "createCanonicalERC20Wrapper";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ERC20WithTokenInfo";
            readonly name: "underlyingToken";
            readonly type: "address";
        }, {
            readonly internalType: "enum ISuperTokenFactory.Upgradability";
            readonly name: "upgradability";
            readonly type: "uint8";
        }, {
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }];
        readonly name: "createERC20Wrapper";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
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
            readonly internalType: "enum ISuperTokenFactory.Upgradability";
            readonly name: "upgradability";
            readonly type: "uint8";
        }, {
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }];
        readonly name: "createERC20Wrapper";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_underlyingTokenAddress";
            readonly type: "address";
        }];
        readonly name: "getCanonicalERC20Wrapper";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "superTokenAddress";
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
        readonly inputs: readonly [];
        readonly name: "getSuperTokenLogic";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "underlyingToken";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "superToken";
                readonly type: "address";
            }];
            readonly internalType: "struct SuperTokenFactoryBase.InitializeData[]";
            readonly name: "_data";
            readonly type: "tuple[]";
        }];
        readonly name: "initializeCanonicalWrapperSuperTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "customSuperTokenProxy";
            readonly type: "address";
        }];
        readonly name: "initializeCustomSuperToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "newVariable";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
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
            readonly name: "newAddress";
            readonly type: "address";
        }];
        readonly name: "updateCode";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): SuperTokenFactoryUpdateLogicContractsTesterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SuperTokenFactoryUpdateLogicContractsTester;
}
export {};
//# sourceMappingURL=SuperTokenFactoryUpdateLogicContractsTester__factory.d.ts.map