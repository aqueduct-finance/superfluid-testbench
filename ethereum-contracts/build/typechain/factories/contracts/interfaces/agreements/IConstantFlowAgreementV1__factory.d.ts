import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IConstantFlowAgreementV1, IConstantFlowAgreementV1Interface } from "../../../../contracts/interfaces/agreements/IConstantFlowAgreementV1";
export declare class IConstantFlowAgreementV1__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "CFA_ACL_FLOW_RATE_ALLOWANCE_EXCEEDED";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_ACL_NO_NEGATIVE_ALLOWANCE";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_ACL_NO_SENDER_CREATE";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_ACL_NO_SENDER_FLOW_OPERATOR";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_ACL_NO_SENDER_UPDATE";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_ACL_OPERATOR_NO_CREATE_PERMISSIONS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_ACL_OPERATOR_NO_DELETE_PERMISSIONS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_ACL_OPERATOR_NO_UPDATE_PERMISSIONS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_ACL_UNCLEAN_PERMISSIONS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_DEPOSIT_TOO_BIG";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_FLOW_ALREADY_EXISTS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_FLOW_DOES_NOT_EXIST";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_FLOW_RATE_TOO_BIG";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_HOOK_OUT_OF_GAS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_INSUFFICIENT_BALANCE";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_INVALID_FLOW_RATE";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_NON_CRITICAL_SENDER";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_NO_SELF_FLOW";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_ZERO_ADDRESS_RECEIVER";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CFA_ZERO_ADDRESS_SENDER";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "permissions";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "int96";
            readonly name: "flowRateAllowance";
            readonly type: "int96";
        }];
        readonly name: "FlowOperatorUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "totalSenderFlowRate";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "totalReceiverFlowRate";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "FlowUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "deposit";
            readonly type: "uint256";
        }];
        readonly name: "FlowUpdatedExtension";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "agreementType";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "authorizeFlowOperatorWithFullControl";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
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
        readonly name: "createFlowByOperator";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "subtractedFlowRateAllowance";
            readonly type: "int96";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "decreaseFlowRateAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "deleteFlow";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "deleteFlowByOperator";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getAccountFlowInfo";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
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
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }];
        readonly name: "getDepositRequiredForFlowRate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "deposit";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
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
        readonly name: "getFlow";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
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
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "agreementId";
            readonly type: "bytes32";
        }];
        readonly name: "getFlowByID";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
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
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }];
        readonly name: "getFlowOperatorData";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "flowOperatorId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint8";
            readonly name: "permissions";
            readonly type: "uint8";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRateAllowance";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "flowOperatorId";
            readonly type: "bytes32";
        }];
        readonly name: "getFlowOperatorDataByID";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "permissions";
            readonly type: "uint8";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRateAllowance";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "deposit";
            readonly type: "uint256";
        }];
        readonly name: "getMaximumFlowRateFromDeposit";
        readonly outputs: readonly [{
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getNetFlow";
        readonly outputs: readonly [{
            readonly internalType: "int96";
            readonly name: "flowRate";
            readonly type: "int96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }, {
            readonly internalType: "int96";
            readonly name: "addedFlowRateAllowance";
            readonly type: "int96";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "increaseFlowRateAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "isPatricianPeriod";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "isPatricianPeriodNow";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "isCurrentlyPatricianPeriod";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "time";
            readonly type: "uint256";
        }];
        readonly name: "realtimeBalanceOf";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "dynamicBalance";
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
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "revokeFlowOperatorWithFullControl";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
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
        readonly name: "updateFlow";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
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
        readonly name: "updateFlowByOperator";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "flowOperator";
            readonly type: "address";
        }, {
            readonly internalType: "uint8";
            readonly name: "permissions";
            readonly type: "uint8";
        }, {
            readonly internalType: "int96";
            readonly name: "flowRateAllowance";
            readonly type: "int96";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "updateFlowOperatorPermissions";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IConstantFlowAgreementV1Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IConstantFlowAgreementV1;
}
//# sourceMappingURL=IConstantFlowAgreementV1__factory.d.ts.map