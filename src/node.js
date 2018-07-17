import Client from './connectors/lcdClient';


export const getQueryParameter = (name) =>{
  let queryString = window.location.search.substring(1)
  let pairs = queryString
    .split("&")
    .map(pair => pair.split("="))
    .filter(pair => pair[0] === name)
  if (pairs.length > 0) {
    return pairs[0][1]
  }
  return null
}
//let lcdPort = getQueryParameter("lcd_port")
//export default new Client("http://localhost:" + lcdPort);

export default new Client("http://sandbox.icheck.com.vn:4396");