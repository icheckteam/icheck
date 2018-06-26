import axios from 'axios'




class Client {
  constructor(server = "http://sandbox.icheck.com.vn:4396") {
    this.api = axios.create({
      baseURL: server,
      timeout: 10000
    })
  }
  
  /**
   * setBaseUrl 
   * 
   * @param {string} url 
   */
  setBaseURL(url) {
    this.api.setBaseURL(url)
  }

  /**
   * 
   * @param {String} method POST/PUT/GET/DELETE
   * @param {String} path the api endpoint eg: /assets
   * @param {Object} data  
   * @param {String} data.name the username of the account 
   * @param {String} data.password the password of the account 
   * @param {String} data.gas the max gas of a transaction 
   * @param {String} data.chain_id eg: ichain 
   * @param {String} data.account_number the number of the account
   * @return {Promise<Object<check_tx<Object>, hash:string, height:number>}
   */
  request(method, path, data) {
    return this.api[method.toLowerCase()](path, data).then(res => res.data)
  }

  /**
   * send send token
   * 
   * @param {String} recipient the recipient address
   * @param {Object} data  
   * @param {String} data.name the username of the account 
   * @param {String} data.password the password of the account 
   * @param {String} data.gas the max gas of a transaction 
   * @param {String} data.chain_id eg: ichain 
   * @param {String} data.account_number the number of the account
   * @param {Array} data.amount
   * @param {String} data.amount[0].denom 
   * @param {Number } data.amount[0].amount 
   * @return {Promise<Object<check_tx<Object>, hash:string, height:number>}
   */
  send(recipient, data) {
    return this.request("POST", `/accounts/${recipient}/send`, data)
  }

  /**
   * queryAccount
   * 
   * @param {String} address
   */
  queryAccount(address) {
    return this.request("GET", `/accounts/${address}`)
  }

  /**
   * createAsset create an asset
   * 
   * @param {Object} data  
   * @param {String} data.name the username of the account 
   * @param {String} data.password the password of the account 
   * @param {String} data.gas the max gas of a transaction 
   * @param {String} data.chain_id eg: ichain 
   * @param {String} data.account_number the number of the account
   * @param {Object} data.asset
   * @param {String} data.asset.asset_id the id of the asset 
   * @param {String} data.asset.name the name of the asset
   * @param {Number} data.asset.quantity 
   * @param {Array<Object<name, type, value_?>>} data.asset.properties
   * @param {Array<Object<asset_id, quantity>>} data.materials 
   * @return {Promise<Object<check_tx<Object>, hash:string, height:number>}
   */
  createAsset(data) {
    return this.request("POST", `/assets`, data)
  }

  /**
   * getAccountAssets
   * 
   * @param {String} account
   */
  getAccountAssets(account) {
    return this.request("GET", `/accounts/${account}/assets`)
  }

  /**
   * getAssetChildrens
   * 
   * @param {String} assetId
   */
  getAssetChildrens(assetId) {
    return this.request("GET", `/assets/${assetId}/children`)
  }

  /**
   * getAsset
   * 
   * @param {String} assetId
   */
  getAsset(assetId) {
    return this.request("GET", `/assets/${assetId}`)
  }

  /**
   * addMaterials add materials
   * 
   * @param {String} assetId
   * @param {Object} data  
   * @param {String} data.name the username of the account 
   * @param {String} data.password the password of the account 
   * @param {String} data.gas the max gas of a transaction 
   * @param {String} data.chain_id eg: ichain 
   * @param {String} data.account_number the number of the account
   * @param {Array<Object<asset_id, quantity>>} data.materials 
   * @return {Promise<Object<check_tx<Object>, hash:string, height:number>}
   */
  addMaterials(assetId, data) {
    return this.request("POST", `/assets/${assetId}/materials`, data)
  }

  /**
   * addQuantity add quantity
   * 
   * @param {String} assetId
   * @param {Object} data  
   * @param {String} data.name the username of the account 
   * @param {String} data.password the password of the account 
   * @param {String} data.gas the max gas of a transaction 
   * @param {String} data.chain_id eg: ichain 
   * @param {String} data.account_number the number of the account
   * @param {Number} quantity
   * @return {Promise<Object<check_tx<Object>, hash:string, height:number>}
   */
  addQuantity(assetId, data) {
    return this.request("POST", `/assets/${assetId}/add`, data)
  }

  /**
   * subtractQuantity subtract quantity
   * 
   * @param {String} assetId
   * @param {Object} data  
   * @param {String} data.name the username of the account 
   * @param {String} data.password the password of the account 
   * @param {String} data.gas the max gas of a transaction 
   * @param {String} data.chain_id eg: ichain 
   * @param {String} data.account_number the number of the account
   * @param {Number} quantity
   * @return {Promise<Object<check_tx<Object>, hash:string, height:number>}
   */
  subtractQuantity(assetId, data) {
    return this.request("POST", `/assets/${assetId}/subtract`, data)
  }


  /**
   * createReporter
   * 
   * @param {String} assetId
   * @param {Object} data  
   * @param {String} data.name the username of the account 
   * @param {String} data.password the password of the account 
   * @param {String} data.gas the max gas of a transaction 
   * @param {String} data.chain_id eg: ichain 
   * @param {String} data.account_number the number of the account
   * @param {String} data.reporter the address of the reporter
   * @param {Array<string>} data.properties 
   * @return {Promise<Object<check_tx<Object>, hash:string, height:number>}
   */
  createReporter(assetId, data) {
    return this.request("POST", `/assets/${assetId}/reporters`, data)
  }

  /**
   * revokeReporter
   * 
   * @param {String} assetId
   * @param {Object} data  
   * @param {String} data.name the username of the account 
   * @param {String} data.password the password of the account 
   * @param {String} data.gas the max gas of a transaction 
   * @param {String} data.chain_id eg: ichain 
   * @param {String} data.account_number the number of the account
   * @param {String} data.reporter the address of the reporter
   * @return {Promise<Object<check_tx<Object>, hash:string, height:number>}
   */
  revokeReporter(assetId, reporter, data) {
    return this.request("POST", `/assets/${assetId}/reporters/${reporter}/revoke`, data)
  }

  /**
   * updateProperties
   * 
   * @param {String} assetId
   * @param {Object} data  
   * @param {String} data.name the username of the account 
   * @param {String} data.password the password of the account 
   * @param {String} data.gas the max gas of a transaction 
   * @param {String} data.chain_id eg: ichain 
   * @param {String} data.account_number the number of the account
   * @param {String} data.reporter the address of the reporter
   * @param {Array<Object<name, type, value_?>>} data.properties
   * @return {Promise<Object<check_tx<Object>, hash:string, height:number>}
   */
  updateProperties(assetId, data) {
    return this.request("POST", `/assets/${assetId}/properties`, data)
  }

  /**
   * generateSeed
   * 
   * @return {Promise<String>}
   */
  generateSeed() {
    return this.request("GET", `/keys/seed`)
  }

  /**
   * generateSeed
   * 
   * @param {String} name 
   * @param {String} password 
   * @param {String} seed 
   * 
   * @return {Promise<String>}
   */
  storeKey(data) {
    return this.request("POST", `/keys`, data)
  }

  /**
   * getKey
   * 
   * @param {String} name 
   * 
   * @return {Promise<Object<addr, pub_key>>}
   */
  getKey(name) {
    return this.request("GET", `/keys/` + name )
  }
  
  /**
   * updateKey
   * 
   * @param {String} name 
   * @param {String} new_password 
   * @param {String} old_password 
   * 
   * @return {Promise<Object<addr, pub_key>>}
   */
  updateKey(data) {
    return this.request("PUT", `/keys/` + data.name,  {
      new_password: data.new_password,
      old_password: data.old_password,
    })
  }

  /**
   * deleteKey
   * 
   * @param {String} name 
   * @param {String} password 
   * 
   * @return {Promise<Object<addr, pub_key>>}
   */
  deleteKey(data) {
    return this.request("DELETE", `/keys/` + data.name,  {
      password: data.password,
    })
  }

  /**
   * transferAsset
   * 
   * @param {String} recipient the address of the recipient
   * @param {String} password 
   * @param {Array<string>} assets
   * @return {Promise<Object<check_tx<Object>, hash:string, height:number>}
   */
  transferAsset(recipient, data) {
    return this.request("POST", `/accounts/${recipient}/transfer-asset`, data)
  }

  /**
   * txs
   * 
   * @param {String} addr 
   * 
   * @return {Promise<>}
   */
  txs(addr) {
    return Promise.all([
      this.request("GET", `/txs?tag=sender_bech32='${addr}'`),
      this.request("GET", `/txs?tag=recipient_bech32='${addr}'`),
    ]).then(([senderTxs, recipientTxs]) => [].concat(senderTxs, recipientTxs));
  }

  /**
   * queryHistoryUpdate
   * 
   * @param {String} assetId 
   * 
   * @return {Promise<>}
   */
  queryHistoryUpdate(assetId) {
    return this.request("GET", `/txs?tag=asset_id='${assetId}'`)
  }



  /**
   * createClaim
   * 
   * @param {Object} data  
   * @param {String} data.name the username of the account 
   * @param {String} data.password the password of the account 
   * @param {String} data.gas the max gas of a transaction 
   * @param {String} data.chain_id eg: ichain 
   * @param {String} data.account_number the number of the account
   * @param {String} data.claim_id 
   * @param {String} data.context 
   * @param {String} data.content 
   * @param {Object} data.metadata
   * @param {String} data.metadata.create_time 
   * @param {String} data.metadata.expires
   * @param {String} data.metadata.recipient 
   * @param {Array<Object<denom,amount>>} data.fee
   * @param {Bool} data.paid
   */
  createClaim(data) {
    return this.request("POST", `/claims`, data);
  },

  /**
   * revokeClaim
   * 
   * @param {Object} data  
   * @param {String} data.name the username of the account 
   * @param {String} data.password the password of the account 
   * @param {String} data.gas the max gas of a transaction 
   * @param {String} data.chain_id eg: ichain 
   * @param {String} data.account_number the number of the account
   * @param {String} data.revocation 
   */
  revokeClaim(claimId, data) {
    return this.request("POST", `/claims/${claimId}/revoke`, data);
  }

  /**
   * answerClaim
   * 
   * @param {Object} data  
   * @param {String} data.name the username of the account 
   * @param {String} data.password the password of the account 
   * @param {String} data.gas the max gas of a transaction 
   * @param {String} data.chain_id eg: ichain 
   * @param {String} data.account_number the number of the account
   * @param {String} data.response 0: unpaid, 1: paid 
   */
  answerClaim(claimId, data) {
    return this.request("POST", `/claims/${claimId}/answer`, data);
  }

  /**
   * answerClaim
   * 
   * @return {Claim}
   */
  getClaim(claimId) {
    return this.request("GET", `/claims/${claimId}`);
  }

  /**
   * answerClaim
   * 
   * @return {Claim}
   */
  getAccountClaims(address) {
    return this.request("GET", `/accounts/${address}/claims`);
  }
}

export default Client