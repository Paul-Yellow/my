var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://192.168.1.100:7300/mock/5a34e1a57778fa25b09c375f/drs"' // 本地服务支持
  // BASE_API: '"https://www.easy-mock.com/mock/5a35309bb3739f4feec70b5f/drs"' // 外网服务支持
})
