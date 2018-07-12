import Client from './connectors/lcdClient'
let lcdPort = getQueryParameter("lcd_port")
function getQueryParameter(name) {
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
export default new Client("http://localhost:" + lcdPort);