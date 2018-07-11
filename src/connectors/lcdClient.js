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
   * @param {Object} data.base_req
   * @param {String} data.base_req.name the username of the account 
   * @param {String} data.base_req.password the password of the account 
   * @param {String} data.base_req.gas the max gas of a transaction 
   * @param {String} data.base_req.chain_id eg: ichain 
   * @param {String} data.base_req.sequence  
   * @param {String} data.base_req.account_number the number of the account
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
   * @param {BaseReq} data.base_req
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
   * @param {BaseReq} data.base_req
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
   * @param {BaseReq} data.base_req
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
   * @param {BaseReq} data.base_req
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
   * @param {BaseReq} data.base_req
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
   * @param {BaseReq} data.base_req
   * @param {String} data.recipient
   * @param {Array<string>} data.properties 
   * @param {Number} data.role  1:owner, 2:reporter
   * @return {Promise<Object<check_tx<Object>, hash:string, height:number>}
   */
  createProposal(assetId, data) {
    return this.request("POST", `/assets/${assetId}/proposals`, data)
  }
  
  /**
   * createReporter
   * 
   * @param {String} assetId
   * @param {Object} data  
   * @param {BaseReq} data.base_req
   * @param {String} data.recipient
   * @param {Number} data.response  1:accepted, 2:cancel, 3:rejected
   * @return {Promise<Object<check_tx<Object>, hash:string, height:number>}
   */
  answerProposal(assetId, data) {
    return this.request("POST", `/assets/${assetId}/proposals`, data)
  }

  /**
   * revokeReporter
   * 
   * @param {String} assetId
   * @param {Object} data  
   * @param {BaseReq} data.base_req
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
   * @param {BaseReq} data.base_req
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
   * createIdentity
   * 
   * @param {Object} data  
   * @param {BaseReq} data.base_req
   */
  createIdentity(data) {
    return this.request("POST", `/claims`, data);
  }

  /**
   * revokeClaim
   * 
   * @param {Object} data  
   * @param {Number} identityId
   * @param {BaseReq} data.base_req
   * @param {Object<CertValue{property: string, type: string, data: {}, confidence: bool}>} values
   */
  addCerts(identityId, data) {
    return this.request("POST", `/identities/${identityId}/certs`, data);
  }
  
  
  /**
   * claim
   * 
   * @param {Object} data  
   * @param {Number} identityId
   * @param {Boolean} confidence 
   * @param {BaseReq} data.base_req
   */
  claim(identityId, confidence, data) {
    return this.addCerts(identityId, {
      ...data,
      values: [
        {
          property: "owner",
          confidence: confidence,
        }
      ]
    })
  }

  /**
   * answerClaim
   * 
   * @param {Object} data  
   * @param {BaseReq} data.base_req
   * @param {Boolean} data.trust 
   */
  addTrust(trusting, data) {
    return this.request("POST", `/accounts/${trusting}/trust`, data);
  }

  /**
   * getIdentitiesByAccount
   * 
   * @return {Claim}
   */
  getIdentitiesByAccount(addr) {
    return this.request("GET", `/accounts/${addr}/identities`);
  }

  /**
   * getClaimed
   * 
   * @return {Claim}
   */
  getClaimed(address) {
    return this.request("GET", `/accounts/${address}/claimed`);
  }
  
  /**
   * getCertsByIdentity
   * @param {Object} params
   * @param {String} trust 1 or nil 
   * @param {String} certifier 
   * @param {String} property
   * @return {Claim}
   */
  getCertsByIdentity(identityId, params) {
    return this.request("GET", this.buildUrlSearchParams(`/identities/${identityId}/certs`, params));
  }
  
  buildUrlSearchParams(url, params) {
    var searchParams = new URLSearchParams();
    Object.keys(params).forEach(key => {
      searchParams.set(key, params[key]);
    })
    var searchParamString = searchParams.toString()
    if (searchParamString) {
      urlStr + "?"searchParamString
    }
    return urlStr
  }


  /**
   * updateDelegations
   * 
   * @param {Object} data  
   * @param {BaseReq} data.base_req
   * @param {Array<Object<delegator_addr:string, validator_addr:string, bond: Object<denom:string,amount:number>>>} data.delegate 
   * @param {Array<Object<delegator_addr:string, validator_addr:string, shares: string>>} data.unbond 
   * @return {Promise<tx>}
   */
  updateDelegations(data) {
    return this.request("POST", `/stake/delegations`, data);
  }

  /**
   * updateDelegations
   * @return {Promise<Validator>}
   */
  getValidators() {
    return this.request("GET", `/stake/validators`);
  }
}

export default Client
