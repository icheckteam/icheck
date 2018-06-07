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