import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISuperfluidGovernance, ISuperfluidGovernanceInterface } from "../../../../contracts/interfaces/superfluid/ISuperfluidGovernance";
export declare class ISuperfluidGovernance__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "SF_GOV_ARRAYS_NOT_SAME_LENGTH";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SF_GOV_INVALID_LIQUIDATION_OR_PATRICIAN_PERIOD";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SF_GOV_MUST_BE_CONTRACT";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperToken[]";
            readonly name: "tokens";
            readonly type: "address[]";
        }];
        readonly name: "batchUpdateSuperTokenLogic";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "key";
            readonly type: "bytes32";
        }];
        readonly name: "clearConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "key";
            readonly type: "bytes32";
        }];
        readonly name: "getConfigAsAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "value";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "key";
            readonly type: "bytes32";
        }];
        readonly name: "getConfigAsUint256";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "agreementClass";
            readonly type: "address";
        }];
        readonly name: "registerAgreementClass";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "newGov";
            readonly type: "address";
        }];
        readonly name: "replaceGovernance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "key";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "value";
            readonly type: "address";
        }];
        readonly name: "setConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "superToken";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "key";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "setConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluid";
            readonly name: "host";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "hostNewLogic";
            readonly type: "address";
        }, {
            readonly internalType: "address[]";
            readonly name: "agreementClassNewLogics";
            readonly type: "address[]";
        }, {
            readonly internalType: "address";
            readonly name: "superTokenFactoryNewLogic";
            readonly type: "address";
        }];
        readonly name: "updateContracts";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ISuperfluidGovernanceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISuperfluidGovernance;
}
//# sourceMappingURL=ISuperfluidGovernance__factory.d.ts.map