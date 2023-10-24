import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { MultiFlowTesterApp, MultiFlowTesterAppInterface } from "../../../contracts/mocks/MultiFlowTesterApp";
type MultiFlowTesterAppConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MultiFlowTesterApp__factory extends ContractFactory {
    constructor(...args: MultiFlowTesterAppConstructorParams);
    deploy(cfa: PromiseOrValue<string>, superfluid: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MultiFlowTesterApp>;
    getDeployTransaction(cfa: PromiseOrValue<string>, superfluid: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MultiFlowTesterApp;
    connect(signer: Signer): MultiFlowTesterApp__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162001fc738038062001fc7833981016040819052620000349162000127565b6001600160a01b0382166200004d576200004d62000166565b6001600160a01b03811662000066576200006662000166565b600080546001600160a01b038085166001600160a01b03199283161790925560018054928416929091168217905560405163bd1c448b60e01b8152641100000001919063bd1c448b90620000d190849060040190815260406020820181905260009082015260600190565b600060405180830381600087803b158015620000ec57600080fd5b505af115801562000101573d6000803e3d6000fd5b505050505050506200017c565b6001600160a01b03811681146200012457600080fd5b50565b600080604083850312156200013b57600080fd5b825162000148816200010e565b60208401519092506200015b816200010e565b809150509250929050565b634e487b7160e01b600052600160045260246000fd5b611e3b806200018c6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80635f9e7d771161005b5780635f9e7d77146100d157806362fc305e146100e4578063884d1f40146100f7578063d86ed3e51461010a57600080fd5b8063230dbd291461008257806330d9c915146100ab57806353c11f99146100be575b600080fd5b610095610090366004611445565b61011d565b6040516100a2919061155f565b60405180910390f35b6100956100b9366004611579565b610312565b6100956100cc366004611445565b61037a565b6100956100df366004611579565b6108f5565b6100956100f2366004611626565b61095c565b610095610105366004611579565b610a5c565b610095610118366004611445565b610b44565b6001546060906001600160a01b0316331461013a5761013a6116a1565b6000546001600160a01b038a8116911614610157576101576116a1565b61015f611350565b600154604051631fb6491d60e11b81526001600160a01b0390911690633f6c923a9061019190879087906004016116e0565b600060405180830381865afa1580156101ae573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526101d69190810190611807565b80825260a001516101e690610d29565b60408301526001600160a01b031660208201526102058789018961190d565b6001600160a01b03908116608084015290811660608084018290528351015190911614610234576102346116a1565b60808101516001600160a01b03163014610250576102506116a1565b805160c00151610262576102626116a1565b60008054604051631557a4cd60e31b81526001600160a01b038e81166004830152602482018d90529091169063aabd266890604401608060405180830381865afa1580156102b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d89190611946565b50506040840151845160c001519193506103029250908e906328104d3160e11b9085908a8a610e9f565b9c9b505050505050505050505050565b60405162461bcd60e51b815260206004820152602f60248201527f556e737570706f727465642063616c6c6261636b202d204265666f726520416760448201526e1c99595b595b9d0810dc99585d1959608a1b60648201526060906084015b60405180910390fd5b6001546060906001600160a01b03163314610397576103976116a1565b6000546001600160a01b038a81169116146103b4576103b46116a1565b6103bc611350565b600154604051631fb6491d60e11b81526001600160a01b0390911690633f6c923a906103ee90879087906004016116e0565b600060405180830381865afa15801561040b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104339190810190611807565b80825260a0015161044390610d29565b60408301526001600160a01b031660208201526104628789018961190d565b6001600160a01b0390811660808401521660608201819052301480610493575060808101516001600160a01b031630145b61049f5761049f6116a1565b606084848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050506080830151909350306001600160a01b039091160361063e5760005b826040015160200151518110156106385760008054906101000a90046001600160a01b03166001600160a01b031663b4b333c68e30866040015160200151858151811061054257610542611984565b602090810291909101810151516040805160008152928301905261056b9392916044810161199a565b60408051601f19818403018152918152602080830180516001600160e01b031660e09590951b9490941790935260015460008054835191825294810192839052634329d29360e01b9092529195506001600160a01b039182169350634329d293926105de921690869089602482016119d8565b6000604051808303816000875af11580156105fd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106259190810190611a2d565b50935061063181611aa6565b90506104f3565b506108e6565b60005b826040015160200151518110156107ca5782608001516001600160a01b0316836040015160200151828151811061067a5761067a611984565b6020026020010151600001516001600160a01b031603156107ba5760008054906101000a90046001600160a01b03166001600160a01b031663b4b333c68e3086604001516020015185815181106106d3576106d3611984565b60209081029190910181015151604080516000815292830190526106fc9392916044810161199a565b60408051601f19818403018152918152602080830180516001600160e01b031660e09590951b9490941790935260015460008054835191825294810192839052634329d29360e01b9092529195506001600160a01b039182169350634329d2939261076f921690869089602482016119d8565b6000604051808303816000875af115801561078e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107b69190810190611a2d565b5093505b6107c381611aa6565b9050610641565b506000805460208401516001600160a01b039091169163b4b333c6918f9130906040519080825280601f01601f191660200182016040528015610814576020820181803683370190505b50604051602401610828949392919061199a565b60408051601f19818403018152918152602080830180516001600160e01b031660e09590951b9490941790935260015460008054835191825294810192839052634329d29360e01b9092529194506001600160a01b039182169350634329d2939261089b921690859088602482016119d8565b6000604051808303816000875af11580156108ba573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108e29190810190611a2d565b5092505b50509998505050505050505050565b60405162461bcd60e51b815260206004820152603360248201527f556e737570706f727465642063616c6c6261636b202d20204265666f7265204160448201527219dc99595b595b9d0815195c9b5a5b985d1959606a1b6064820152606090608401610371565b600080546040805183815260208101909152606092916001600160a01b0316906362fc305e90610995908a908a908a9060448101611abf565b60408051601f19818403018152918152602080830180516001600160e01b031660e09590951b9490941790935260015460008054835191825294810192839052634329d29360e01b9092529194506001600160a01b039182169350634329d29392610a099216908590898960248301611af5565b6000604051808303816000875af1158015610a28573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a509190810190611a2d565b50979650505050505050565b6001546060906001600160a01b03163314610a7957610a796116a1565b6000546001600160a01b03888116911614610a9657610a966116a1565b60008054604051631557a4cd60e31b81526001600160a01b038b81166004830152602482018a90529091169063aabd266890604401608060405180830381865afa158015610ae8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0c9190611946565b5050600b0b91505080604051602001610b2791815260200190565b604051602081830303815290604052915050979650505050505050565b6001546060906001600160a01b03163314610b6157610b616116a1565b6000546001600160a01b038a8116911614610b7e57610b7e6116a1565b610b86611350565b600154604051631fb6491d60e11b81526001600160a01b0390911690633f6c923a90610bb890879087906004016116e0565b600060405180830381865afa158015610bd5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610bfd9190810190611807565b80825260a00151610c0d90610d29565b60408301526001600160a01b03166020820152610c2c8789018961190d565b6001600160a01b03908116608084015290811660608084018290528351015190911614610c5b57610c5b6116a1565b60808101516001600160a01b03163014610c7757610c776116a1565b805160c00151610c8957610c896116a1565b60008054604051631557a4cd60e31b81526001600160a01b038e81166004830152602482018d90529091169063aabd266890604401608060405180830381865afa158015610cdb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cff9190611946565b50506040840151845160c001519193506103029250908e9063317e182f60e11b9085908a8a610e9f565b6040805180820190915260008082526060602083015290600060608085806020019051810190610d599190611bda565b80518251949950929650909450925014610d7557610d756116a1565b60ff8316845281516001600160401b03811115610d9457610d946116fc565b604051908082528060200260200182016040528015610dd957816020015b6040805180820190915260008082526020820152815260200190600190039081610db25790505b50602085015260005b8251811015610e9657818181518110610dfd57610dfd611984565b6020026020010151600003610e1457610e146116a1565b6040518060400160405280848381518110610e3157610e31611984565b60200260200101516001600160a01b03168152602001838381518110610e5957610e59611984565b602002602001015181525085602001518281518110610e7a57610e7a611984565b602002602001018190525080610e8f90611aa6565b9050610de2565b50505050915091565b60606000610eb08960200151611302565b905083838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525080546040516346ccbfb760e11b81526001600160a01b038f81166004830152600b8e900b60248301529698509195169350638d997f6e92506044019050602060405180830381865afa158015610f3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f629190611cc1565b60008054919250906001600160a01b0316630602f7db8b610f84600186611cda565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381865afa158015610fcd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff19190611cf3565b6000546040516346ccbfb760e11b81526001600160a01b038d81166004830152600b84900b6024830152929350911690638d997f6e90604401602060405180830381865afa158015611047573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061106b9190611cc1565b8b519097506064906110809060ff1689611d10565b61108a9190611d3d565b8b5190975060649061109f9060ff168a611d51565b6110a99190611d78565b975060005b8b60200151518110156112df5760008c6020015182815181106110d3576110d3611984565b6020026020010151905060008582602001518b6110f09190611d10565b6110fa9190611d3d565b905060008060009054906101000a90046001600160a01b03166001600160a01b0316630602f7db8f846040518363ffffffff1660e01b81526004016111549291906001600160a01b03929092168252602082015260400190565b602060405180830381865afa158015611171573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111959190611cf3565b90506111a1818d611dbb565b9b5060008d8f85600001518460006001600160401b038111156111c6576111c66116fc565b6040519080825280601f01601f1916602001820160405280156111f0576020820181803683370190505b506040516024016112049493929190611abf565b60408051601f19818403018152918152602080830180516001600160e01b03166001600160e01b0319959095169490941790935260015460008054835191825294810192839052634329d29360e01b9092529193506001600160a01b0391821692634329d2939261127e9291169085908e602482016119d8565b6000604051808303816000875af115801561129d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526112c59190810190611a2d565b508099505050505050806112d890611aa6565b90506110ae565b50600088600b0b12156112f4576112f46116a1565b505050979650505050505050565b6000805b825181101561134a5782818151811061132157611321611984565b602002602001015160200151826113389190611df2565b915061134381611aa6565b9050611306565b50919050565b6040805161020081018252600060a0820181815260c0830182905260e083018290526101008301829052610120830182905260606101408401819052610160840183905261018084018390526101a084018390526101c084018390526101e084018390529083526020808401839052845180860186529283528201529091820190815260006020820181905260409091015290565b6001600160a01b03811681146113fa57600080fd5b50565b60008083601f84011261140f57600080fd5b5081356001600160401b0381111561142657600080fd5b60208301915083602082850101111561143e57600080fd5b9250929050565b600080600080600080600080600060c08a8c03121561146357600080fd5b893561146e816113e5565b985060208a013561147e816113e5565b975060408a0135965060608a01356001600160401b03808211156114a157600080fd5b6114ad8d838e016113fd565b909850965060808c01359150808211156114c657600080fd5b6114d28d838e016113fd565b909650945060a08c01359150808211156114eb57600080fd5b506114f88c828d016113fd565b915080935050809150509295985092959850929598565b60005b8381101561152a578181015183820152602001611512565b50506000910152565b6000815180845261154b81602086016020860161150f565b601f01601f19169290920160200192915050565b6020815260006115726020830184611533565b9392505050565b600080600080600080600060a0888a03121561159457600080fd5b873561159f816113e5565b965060208801356115af816113e5565b95506040880135945060608801356001600160401b03808211156115d257600080fd5b6115de8b838c016113fd565b909650945060808a01359150808211156115f757600080fd5b506116048a828b016113fd565b989b979a50959850939692959293505050565b80600b0b81146113fa57600080fd5b60008060008060006080868803121561163e57600080fd5b8535611649816113e5565b94506020860135611659816113e5565b9350604086013561166981611617565b925060608601356001600160401b0381111561168457600080fd5b611690888289016113fd565b969995985093965092949392505050565b634e487b7160e01b600052600160045260246000fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6020815260006116f46020830184866116b7565b949350505050565b634e487b7160e01b600052604160045260246000fd5b60405161016081016001600160401b0381118282101715611735576117356116fc565b60405290565b604051601f8201601f191681016001600160401b0381118282101715611763576117636116fc565b604052919050565b805160ff8116811461177c57600080fd5b919050565b805161177c816113e5565b80516001600160e01b03198116811461177c57600080fd5b600082601f8301126117b557600080fd5b81516001600160401b038111156117ce576117ce6116fc565b6117e1601f8201601f191660200161173b565b8181528460208386010111156117f657600080fd5b6116f482602083016020870161150f565b60006020828403121561181957600080fd5b81516001600160401b038082111561183057600080fd5b90830190610160828603121561184557600080fd5b61184d611712565b6118568361176b565b81526118646020840161176b565b60208201526040830151604082015261187f60608401611781565b60608201526118906080840161178c565b608082015260a0830151828111156118a757600080fd5b6118b3878286016117a4565b60a08301525060c083015160c082015260e083015160e08201526101009150818301518282015261012091506118ea828401611781565b8282015261014091506118fe828401611781565b91810191909152949350505050565b6000806040838503121561192057600080fd5b823561192b816113e5565b9150602083013561193b816113e5565b809150509250929050565b6000806000806080858703121561195c57600080fd5b84519350602085015161196e81611617565b6040860151606090960151949790965092505050565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0385811682528481166020830152831660408201526080606082018190526000906119ce90830184611533565b9695505050505050565b6001600160a01b03851681526080602082018190526000906119fc90830186611533565b8281036040840152611a0e8186611533565b90508281036060840152611a228185611533565b979650505050505050565b60008060408385031215611a4057600080fd5b82516001600160401b0380821115611a5757600080fd5b611a63868387016117a4565b93506020850151915080821115611a7957600080fd5b50611a86858286016117a4565b9150509250929050565b634e487b7160e01b600052601160045260246000fd5b600060018201611ab857611ab8611a90565b5060010190565b6001600160a01b03858116825284166020820152600b83900b60408201526080606082018190526000906119ce90830184611533565b6001600160a01b0386168152608060208201819052600090611b1990830187611533565b8281036040840152611b2b8187611533565b90508281036060840152611b408185876116b7565b98975050505050505050565b60006001600160401b03821115611b6557611b656116fc565b5060051b60200190565b600082601f830112611b8057600080fd5b81516020611b95611b9083611b4c565b61173b565b82815260059290921b84018101918181019086841115611bb457600080fd5b8286015b84811015611bcf5780518352918301918301611bb8565b509695505050505050565b60008060008060808587031215611bf057600080fd5b8451611bfb816113e5565b93506020611c0a86820161176b565b935060408601516001600160401b0380821115611c2657600080fd5b818801915088601f830112611c3a57600080fd5b8151611c48611b9082611b4c565b81815260059190911b8301840190848101908b831115611c6757600080fd5b938501935b82851015611c8e578451611c7f816113e5565b82529385019390850190611c6c565b60608b01519097509450505080831115611ca757600080fd5b5050611cb587828801611b6f565b91505092959194509250565b600060208284031215611cd357600080fd5b5051919050565b81810381811115611ced57611ced611a90565b92915050565b600060208284031215611d0557600080fd5b815161157281611617565b8082028115828204841417611ced57611ced611a90565b634e487b7160e01b600052601260045260246000fd5b600082611d4c57611d4c611d27565b500490565b600082600b0b82600b0b0280600b0b9150808214611d7157611d71611a90565b5092915050565b600081600b0b83600b0b80611d8f57611d8f611d27565b6b7fffffffffffffffffffffff19821460001982141615611db257611db2611a90565b90059392505050565b600b82810b9082900b036b7fffffffffffffffffffffff1981126b7fffffffffffffffffffffff82131715611ced57611ced611a90565b80820180821115611ced57611ced611a9056fea26469706673582212207b42deb290ef8a195a7da9624eab227dc6a6515885665a8a4a267557ccdd7bdc64736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IConstantFlowAgreementV1";
            readonly name: "cfa";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluid";
            readonly name: "superfluid";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "agreementId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "agreementData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "afterAgreementCreated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "agreementData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "afterAgreementTerminated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "agreementId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "agreementData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "afterAgreementUpdated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "beforeAgreementCreated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "beforeAgreementTerminated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "agreementId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "beforeAgreementUpdated";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "cbdata";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "superToken";
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
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "createFlow";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): MultiFlowTesterAppInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MultiFlowTesterApp;
}
export {};
//# sourceMappingURL=MultiFlowTesterApp__factory.d.ts.map