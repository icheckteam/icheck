import axios from 'axios'




class Client {
  constructor(server = "http://localhost:1317") {
    this.api = axios.create({
      baseURL: server,
      timeout: 5000
    })
  }

   // meta
  lcdConnected() {
    return this.listKeys().then(() => true, () => false)
  }

  request(method, path, data) {
    return this.api[method.toLowerCase()](path, data).then(res => res.data);
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
  getAsset(assetId) {
    return this.request("GET", `/assets/${assetId}`)
  }

  addMaterials(assetId, data) {
    return this.request("POST", `/assets/${assetId}/materials`, data)
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