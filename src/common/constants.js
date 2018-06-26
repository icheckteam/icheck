export const ROUTES = {
  HOME: '/',
  ASSETS: '/assets',
  CREATE_ASSET: '/create-asset',
  WARRANTY: "/warranty",
  SHIPPING: "/shipping",
  MARKET: "/market",
  INVOICES: "/invoinces",
  WALLET: '/wallet',
  IDENTITY: '/identity',
  OPEN_WALLET: "/open-wallet",
  NEW_WALLET: "/new-wallet",
  DOWLOAD_WALLET_ACCOUNT: '/download-wallet-account',
  TRANSACTIONS: "/transactions"
}


export const WALLET = {
  MIN_PASSPHRASE_LEN: 4,
  
}

export const TIME = {
  ONE_SECOND_MS: 1000,
  FIVE_MINUTES_MS: 300000,
}


export const ACTION_TYPES  = {
  NEW_WALLET_ACCOUNT: 'NEW_WALLET_ACCOUNT',
  RESET_WALLET_ACCOUNT: 'RESET_WALLET_ACCOUNT',

  SHOW_NOTIFICATION: "SHOW_NOTIFICATION",
  HIDE_NOTIFICATION: "HIDE_NOTIFICATION",
  LOAD_WALLET: 'LOAD_WALLET',
  SAVE_WALLET_ACCOUNT: "SAVE_WALLET_ACCOUNT",
  SET_DEFAULT_ACCOUNT : "SET_DEFAULT_ACCOUNT",
  DECRYPT: "DECRYPT",


  // Asset 
  LOAD_ASSETS: "LOAD_ASSETS",
  LOAD_ASSETS_SUCCESS: "LOAD_ASSETS_SUCCESS",
  LOAD_ASSETS_ERROR: "LOAD_ASSETS_ERROR",

  CREATE_ASSET: "CREATE_ASSET",
  CREATE_ASSET_SUCCESS: "CREATE_ASSET_SUCCESS",
  CREATE_ASSET_ERROR: "CREATE_ASSET_ERROR",

  CREATE_REPORTER: "CREATE_REPORTER",
  CREATE_REPORTER_SUCCESS: "CREATE_REPORTER_SUCCESS",
  CREATE_REPORTER_ERROR: "CREATE_REPORTER_ERROR",

  REVOKE_REPORTER: "REVOKE_REPORTER",
  REVOKE_REPORTER_SUCCESS: "REVOKE_REPORTER_SUCCESS",
  REVOKE_REPORTER_ERROR: "REVOKE_REPORTER_ERROR",

  ADD_QUANTITY: "ADD_QUANTITY",
  ADD_QUANTITY_SUCCESS: "ADD_QUANTITY_SUCCESS",
  ADD_QUANTITY_ERROR: "ADD_QUANTITY_ERROR",

  SUBTRACT_QUANTITY: "SUBTRACT_QUANTITY",
  SUBTRACT_QUANTITY_SUCCESS: "SUBTRACT_QUANTITY_SUCCESS",
  SUBTRACT_QUANTITY_ERROR: "SUBTRACT_QUANTITY_ERROR",

  UPDATE_PROPERTIES: "UPDATE_PROPERTIES",
  UPDATE_PROPERTIES_SUCCESS: "UPDATE_PROPERTIES_SUCCESS",
  UPDATE_PROPERTIES_ERROR: "UPDATE_PROPERTIES_ERROR",

  LOAD_HISTORY_UPDATE: "LOAD_HISTORY_UPDATE",
  LOAD_HISTORY_UPDATE_SUCCESS: "LOAD_HISTORY_UPDATE_SUCCESS",
  LOAD_HISTORY_UPDATE_ERROR: "LOAD_HISTORY_UPDATE_ERROR",

  TRANSFER_ASSET: "TRANSFER_ASSET",
  TRANSFER_ASSET_SUCCESS: "TRANSFER_ASSET",
  TRANSFER_ASSET_ERROR: "TRANSFER_ASSET_ERROR",

  ADD_MATERIALS: "ADD_MATERIALS",
  ADD_MATERIALS_SUCCESS: "ADD_MATERIALS_SUCCESS",
  ADD_MATERIALS_ERROR: "ADD_MATERIALS_ERROR",


  LOAD_ACCOUNT: "LOAD_ACCOUNT",
  LOAD_ACCOUNT_SUCCESS: "LOAD_ACCOUNT_SUCCESS",
  LOAD_ACCOUNT_ERROR: "LOAD_ACCOUNT_ERROR",


  SEND: "SEND",
  SEND_SUCCESS: "SEND_SUCCESS",
  SEND_ERROR: "SEND_ERROR",

  LOAD_TXS: "LOAD_TXS",
  LOAD_TXS_SUCCESS: "LOAD_TXS_SUCCESS",
  LOAD_TXS_ERROR: "LOAD_TXS_ERROR",

  LOAD_ASSET: "LOAD_ASSET",
  LOAD_ASSET_SUCCESS: "LOAD_ASSET_SUCCESS",
  LOAD_ASSET_ERROR: "LOAD_ASSET_ERROR",


  LOAD_KEY: "LOAD_KEY",
  LOAD_KEY_SUCCESS: "LOAD_KEY_SUCCESS",
  LOAD_KEY_ERROR:"LOAD_KEY_ERROR",


  CREATE_KEY: "CREATE_KEY",
  CREATE_KEY_SUCCESS: "CREATE_KEY_SUCCESS",
  CREATE_KEY_ERROR:"CREATE_KEY_ERROR",

  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR:"LOGIN_ERROR",

  UNLOCK: "UNLOCK",
  UNLOCK_SUCCESS: "UNLOCK_SUCCESS",
  UNLOCK_ERROR:"UNLOCK_ERROR",

  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",

  LOAD_SEED: "LOAD_SEED",
  LOAD_SEED_SUCCESS: "LOAD_SEED_SUCCESS",
  LOAD_SEED_ERROR: "LOAD_SEED_ERROR",

  SHOW_UNLOCK_DIALOG: "SHOW_UNLOCK_DIALOG",
  CLOSE_UNLOCK_DIALOG: "CLOSE_UNLOCK_DIALOG",

  LOAD_CLAIMS: "LOAD_CLAIMS",
  LOAD_CLAIMS_SUCCESS: "LOAD_CLAIMS_SUCCESS",
  LOAD_CLAIMS_ERROR: "LOAD_CLAIMS_ERROR",

  CREATE_CLAIM: "CREATE_CLAIM",
  CREATE_CLAIM_SUCCESS: "CREATE_CLAIM_SUCCESS",
  CREATE_CLAIM_ERROR: "CREATE_CLAIM_ERROR",

  REVOKE_IDENTITY: "REVOKE_IDENTITY",
  REVOKE_IDENTITY_SUCCESS: "REVOKE_IDENTITY_SUCCESS",
  REVOKE_IDENTITY_ERROR: "REVOKE_IDENTITY_ERROR",

  ANSWER_CLAIM: "ANSWER_CLAIM",
  ANSWER_CLAIM_SUCCESS: "ANSWER_CLAIM_ERROR",
  ANSWER_CLAIM_ERROR: "ANSWER_CLAIM_ERROR"
}


export const DEFAULT_WALLET = {
  name: 'userWallet',
  version: '1.0',
  scrypt: {
    cost: 16384,
    blockSize: 8,
    parallel: 8,
    size: 64
  },
  accounts: [],
}