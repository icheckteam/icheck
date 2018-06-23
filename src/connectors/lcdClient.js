import axios from 'axios'


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

   // meta
  lcdConnected() {
    return this.listKeys().then(() => true, () => false)
  }

  request(method, path, data) {
    return axios[method.toLowerCase()](this.server + path, data).then(res => res.data);
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