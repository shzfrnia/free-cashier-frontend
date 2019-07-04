const path = require('path')

module.exports = {
  chainWebpack: config => {
    const apiClient = "server"
    config.resolve.alias.set(
        'api-client',
        path.resolve(__dirname, `src/api/${apiClient}`)
    )
  }
}
