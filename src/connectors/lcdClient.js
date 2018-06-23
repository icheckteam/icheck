import axios from 'axios'




class Client {
  constructor(server = "http://localhost:1317") {
    this.server = server
  }

   // meta
  lcdConnected() {
    return this.listKeys().then(() => true, () => false)
  }

  request(method, path, data) {
    return axios[method.toLowerCase()](this.server + path, data).then(res => res.data);
  }

  send(recipient, data) {
    return this.request("GET", `/accounts/${recipient}/send`, data)
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
}

export default Client