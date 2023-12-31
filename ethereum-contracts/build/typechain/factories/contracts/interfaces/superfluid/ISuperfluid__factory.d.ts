import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISuperfluid, ISuperfluidInterface } from "../../../../contracts/interfaces/superfluid/ISuperfluid";
export declare class ISuperfluid__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_code";
            readonly type: "uint256";
        }];
        readonly name: "APP_RULE";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_AGREEMENT_ALREADY_REGISTERED";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_AGREEMENT_CALLBACK_IS_NOT_ACTION";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_AGREEMENT_IS_NOT_REGISTERED";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_CALL_AGREEMENT_WITH_CTX_FROM_WRONG_ADDRESS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_CALL_APP_ACTION_WITH_CTX_FROM_WRONG_ADDRESS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_CANNOT_DOWNGRADE_TO_NON_UPGRADEABLE";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_INVALID_CONFIG_WORD";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_INVALID_OR_EXPIRED_SUPER_APP_REGISTRATION_KEY";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_MAX_256_AGREEMENTS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_MUST_BE_CONTRACT";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_NEED_MORE_GAS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_NON_UPGRADEABLE";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_NON_ZERO_LENGTH_PLACEHOLDER_CTX";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_NOT_A_SUPER_APP";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_NO_APP_REGISTRATION_PERMISSIONS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_ONLY_GOVERNANCE";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_ONLY_LISTED_AGREEMENT";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_RECEIVER_IS_NOT_SUPER_APP";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_SENDER_IS_NOT_SUPER_APP";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_SOURCE_APP_NEEDS_HIGHER_APP_LEVEL";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_SUPER_APP_ALREADY_REGISTERED";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_SUPER_APP_IS_JAILED";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_UNAUTHORIZED_SUPER_APP_FACTORY";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HOST_UNKNOWN_BATCH_CALL_OPERATION_TYPE";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "agreementType";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "code";
            readonly type: "address";
        }];
        readonly name: "AgreementClassRegistered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "agreementType";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "code";
            readonly type: "address";
        }];
        readonly name: "AgreementClassUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperApp";
            readonly name: "app";
            readonly type: "address";
        }];
        readonly name: "AppRegistered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "contract ISuperfluidGovernance";
            readonly name: "oldGov";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "contract ISuperfluidGovernance";
            readonly name: "newGov";
            readonly type: "address";
        }];
        readonly name: "GovernanceReplaced";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperApp";
            readonly name: "app";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "reason";
            readonly type: "uint256";
        }];
        readonly name: "Jail";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "contract ISuperTokenFactory";
            readonly name: "newFactory";
            readonly type: "address";
        }];
        readonly name: "SuperTokenFactoryUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "code";
            readonly type: "address";
        }];
        readonly name: "SuperTokenLogicUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "bitmap";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "agreementType";
            readonly type: "bytes32";
        }];
        readonly name: "addToAgreementClassesBitmap";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "newBitmap";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperApp";
            readonly name: "targetApp";
            readonly type: "address";
        }];
        readonly name: "allowCompositeApp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }, {
            readonly internalType: "int256";
            readonly name: "appCreditUsedDelta";
            readonly type: "int256";
        }];
        readonly name: "appCallbackPop";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }, {
            readonly internalType: "contract ISuperApp";
            readonly name: "app";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "appCreditGranted";
            readonly type: "uint256";
        }, {
            readonly internalType: "int256";
            readonly name: "appCreditUsed";
            readonly type: "int256";
        }, {
            readonly internalType: "contract ISuperfluidToken";
            readonly name: "appCreditToken";
            readonly type: "address";
        }];
        readonly name: "appCallbackPush";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "operationType";
                readonly type: "uint32";
            }, {
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly internalType: "struct ISuperfluid.Operation[]";
            readonly name: "operations";
            readonly type: "tuple[]";
        }];
        readonly name: "batchCall";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperAgreement";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "callData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly name: "callAgreement";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "returnedData";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperAgreement";
            readonly name: "agreementClass";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "callData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "callAgreementWithContext";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "returnedData";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperApp";
            readonly name: "app";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "callData";
            readonly type: "bytes";
        }];
        readonly name: "callAppAction";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "returnedData";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperApp";
            readonly name: "app";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "callData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "callAppActionWithContext";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperApp";
            readonly name: "app";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "callData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bool";
            readonly name: "isTermination";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "callAppAfterCallback";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperApp";
            readonly name: "app";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "callData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bool";
            readonly name: "isTermination";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "callAppBeforeCallback";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "cbdata";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }, {
            readonly internalType: "int256";
            readonly name: "appCreditUsedMore";
            readonly type: "int256";
        }];
        readonly name: "ctxUseCredit";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "decodeCtx";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint8";
                readonly name: "appCallbackLevel";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint8";
                readonly name: "callType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint256";
                readonly name: "timestamp";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "msgSender";
                readonly type: "address";
            }, {
                readonly internalType: "bytes4";
                readonly name: "agreementSelector";
                readonly type: "bytes4";
            }, {
                readonly internalType: "bytes";
                readonly name: "userData";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "appCreditGranted";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "appCreditWantedDeprecated";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "appCreditUsed";
                readonly type: "int256";
            }, {
                readonly internalType: "address";
                readonly name: "appAddress";
                readonly type: "address";
            }, {
                readonly internalType: "contract ISuperfluidToken";
                readonly name: "appCreditToken";
                readonly type: "address";
            }];
            readonly internalType: "struct ISuperfluid.Context";
            readonly name: "context";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "operationType";
                readonly type: "uint32";
            }, {
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly internalType: "struct ISuperfluid.Operation[]";
            readonly name: "operations";
            readonly type: "tuple[]";
        }];
        readonly name: "forwardBatchCall";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "agreementType";
            readonly type: "bytes32";
        }];
        readonly name: "getAgreementClass";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperAgreement";
            readonly name: "agreementClass";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperApp";
            readonly name: "app";
            readonly type: "address";
        }];
        readonly name: "getAppCallbackLevel";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "appCallbackLevel";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperApp";
            readonly name: "app";
            readonly type: "address";
        }];
        readonly name: "getAppManifest";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "isSuperApp";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "isJailed";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "noopMask";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getGovernance";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperfluidGovernance";
            readonly name: "governance";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getNow";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getSuperTokenFactory";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperTokenFactory";
            readonly name: "factory";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getSuperTokenFactoryLogic";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "logic";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperAgreement";
            readonly name: "agreementClass";
            readonly type: "address";
        }];
        readonly name: "isAgreementClassListed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "yes";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "agreementType";
            readonly type: "bytes32";
        }];
        readonly name: "isAgreementTypeListed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "yes";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperApp";
            readonly name: "app";
            readonly type: "address";
        }];
        readonly name: "isApp";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperApp";
            readonly name: "app";
            readonly type: "address";
        }];
        readonly name: "isAppJailed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "isJail";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperApp";
            readonly name: "app";
            readonly type: "address";
        }, {
            readonly internalType: "contract ISuperApp";
            readonly name: "targetApp";
            readonly type: "address";
        }];
        readonly name: "isCompositeAppAllowed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "isAppAllowed";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }];
        readonly name: "isCtxValid";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "ctx";
            readonly type: "bytes";
        }, {
            readonly internalType: "contract ISuperApp";
            readonly name: "app";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "reason";
            readonly type: "uint256";
        }];
        readonly name: "jailApp";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "newCtx";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "bitmap";
            readonly type: "uint256";
        }];
        readonly name: "mapAgreementClasses";
        readonly outputs: readonly [{
            readonly internalType: "contract ISuperAgreement[]";
            readonly name: "agreementClasses";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperAgreement";
            readonly name: "agreementClassLogic";
            readonly type: "address";
        }];
        readonly name: "registerAgreementClass";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "configWord";
            readonly type: "uint256";
        }];
        readonly name: "registerApp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperApp";
            readonly name: "app";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "configWord";
            readonly type: "uint256";
        }];
        readonly name: "registerAppByFactory";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "configWord";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "registrationKey";
            readonly type: "string";
        }];
        readonly name: "registerAppWithKey";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "bitmap";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "agreementType";
            readonly type: "bytes32";
        }];
        readonly name: "removeFromAgreementClassesBitmap";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "newBitmap";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperfluidGovernance";
            readonly name: "newGov";
            readonly type: "address";
        }];
        readonly name: "replaceGovernance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperAgreement";
            readonly name: "agreementClassLogic";
            readonly type: "address";
        }];
        readonly name: "updateAgreementClass";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperTokenFactory";
            readonly name: "newFactory";
            readonly type: "address";
        }];
        readonly name: "updateSuperTokenFactory";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISuperToken";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "updateSuperTokenLogic";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ISuperfluidInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISuperfluid;
}
//# sourceMappingURL=ISuperfluid__factory.d.ts.map