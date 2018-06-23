import axios from 'axios';


// returns an async function which makes a request for the given
// HTTP method (GET/POST/DELETE/etc) and path (/foo/bar)
const req = (method, path) => {
  return (data) => {
    return this.request(method, path, data)
  }
}

// returns an async function which makes a request for the given
// HTTP method and path, which accepts arguments to be appended
// to the path (/foo/{arg}/...)
const argReq = (method, prefix, suffix = "") => {
  return (args, data) => {
    // `args` can either be a single value or an array
    if (Array.isArray(args)) {
      args = args.join("/")
    }
    if (method === "DELETE") {
      data = { data }
    }
    return this.request(method, `${prefix}/${args}${suffix}`, data)
  }
}


class Client {
  constructor(server = "http://localhost:1317") {
    this.server = server
  }

  request(method, path, data) {
    return axios[method.toLowerCase()](this.server + path, data)
  }
  
  lcdConnected() {
    return this.listKeys().then(() => true, () => false)
  }
}

let fetchAccount = argReq("GET", "/accounts")
let fetchAccount = argReq("GET", "/accounts")

Object.assign(Client.prototype, {
  // meta
  lcdConnected: function() {
    return this.listKeys().then(() => true, () => false)
  },

  // tx
  postTx: req("POST", "/tx"),

  // keys
  generateSeed: req("GET", "/keys/seed"),
  listKeys: req("GET", "/keys"),
  storeKey: req("POST", "/keys"),
  getKey: argReq("GET", "/keys"),
  updateKey: argReq("PUT", "/keys"),
  // axios handles DELETE requests different then other requests, we have to but the body in a config object with the prop data
  deleteKey: argReq("DELETE", "/keys"),

  // coins
  send: argReq("POST", "/accounts", "/send"),
  ibcSend: argReq("POST", "/ibc", "/send"),
  queryAccount(address) {
    return fetchAccount
      .call(this, address)
      .then(res => {
        return res.value
      })
      .catch(err => {
        // if account not found, return null instead of throwing
        if (err.message.includes("account bytes are empty")) {
          return null
        }
        throw err
      })
  },
  txs: function(addr) {
    return Promise.all([
      req("GET", `/txs?tag=sender_bech32='${addr}'`).call(this),
      req("GET", `/txs?tag=recipient_bech32='${addr}'`).call(this)
    ]).then(([senderTxs, recipientTxs]) => [].concat(senderTxs, recipientTxs))
  },
  tx: argReq("GET", "/txs"),

  // staking
  updateDelegations: req("POST", "/stake/delegations"),
  candidates: req("GET", "/stake/validators"),
  queryDelegation: function(delegator, validator) {
    return req("GET", `/stake/${delegator}/bonding_status/${validator}`).call(
      this
    )
  },

  // asset
  createAsset: req("POST", "/assets"),
  getAccountAssets: function(account) {
    return req("GET", `/accounts/${account}/assets`).call(
      this
    )
  },
  updateProperties: function(assetId) {
    return req("POST", `/assets/${assetId}/properties`).call(
      this
    )
  },

  addMaterials: function(assetId) {
    return req("POST", `/assets/${assetId}/materials`).call(
      this
    )
  },

  transferAsset: function(account) {
    return req("POST", `/accounts/${account}/transfer-asset`).call(
      this
    )
  },

  addQuantity: function(assetId) {
    return req("POST", `/assets/${assetId}/add`).call(
      this
    )
  },

  subtractQuantity: function(assetId) {
    return req("POST", `/assets/${assetId}/subtract`).call(
      this
    )
  },

  createReporter: function(assetId) {
    return req("POST", `/assets/${assetId}/reporters`).call(
      this
    )
  },

  revokeReporter: function(assetId, account) {
    return req("POST", `/assets/${assetId}/reporters/${account}/revoke`).call(
      this
    )
  },

  assetHistoryUpdate: function(assetId) {
    return req("POST", `/txs?tag=asset_id='${assetId}'`).call(
      this
    )
  },
})

export default Client