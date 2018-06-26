import axios from 'axios'




class Client {
  constructor(server = "http://sandbox.icheck.com.vn:4396") {
    this.api = axios.create({
      baseURL: server,
      timeout: 10000
    })
  }

   // meta
  lcdConnected() {
    return this.listKeys().then(() => true, () => false)
  }

  request(method, path, data) {
    return this.api[method.toLowerCase()](path, data).then(res => res.data)
  }

  send(recipient, data) {
    return this.request("POST", `/accounts/${recipient}/send`, data)
  }

  queryAccount(address) {
    return this.request("GET", `/accounts/${address}`)
  }

    // asset
  createAsset(data) {
    return this.request("POST", `/assets`, data)
  }
  getAccountAssets(account) {
    return this.request("GET", `/accounts/${account}/assets`)
  }

  getAssetChildrens(assetId) {
    return this.request("GET", `/assets/${assetId}/children`)
  }

  getAsset(assetId) {
    return this.request("GET", `/assets/${assetId}`)
  }

  addMaterials(assetId, data) {
    return this.request("POST", `/assets/${assetId}/materials`, data)
  }

  addQuantity(assetId, data) {
    return this.request("POST", `/assets/${assetId}/add`, data)
  }

  subtractQuantity(assetId, data) {
    return this.request("POST", `/assets/${assetId}/subtract`, data)
  }


  createReporter(assetId, data) {
    return this.request("POST", `/assets/${assetId}/reporters`, data)
  }

  revokeReporter(assetId, reporter, data) {
    return this.request("POST", `/assets/${assetId}/reporters/${reporter}/revoke`, data)
  }

  updateProperties(assetId, data) {
    return this.request("POST", `/assets/${assetId}/properties`, data)
  }

  generateSeed() {
    return this.request("GET", `/keys/seed`)
  }

  storeKey(data) {
    return this.request("POST", `/keys`, data)
  }

  getKey(name) {
    return this.request("GET", `/keys/` + name )
  }
  
  updateKey(data) {
    return this.request("PUT", `/keys/` + data.name,  {
      new_password: data.new_password,
      old_password: data.old_password,
    })
  }

  deleteKey(data) {
    return this.request("DELETE", `/keys/` + data.name,  {
      password: data.password,
    })
  }


  transferAsset(recipient, data) {
    return this.request("POST", `/accounts/${recipient}/transfer-asset`, data)
  }

  txs(addr) {
    return Promise.all([
      this.request("GET", `/txs?tag=sender_bech32='${addr}'`),
      this.request("GET", `/txs?tag=recipient_bech32='${addr}'`),
    ]).then(([senderTxs, recipientTxs]) => [].concat(senderTxs, recipientTxs));
  }


  queryHistoryUpdate(assetId) {
    return this.request("GET", `/txs?tag=asset_id='${assetId}'`)
  }
}

export default Client