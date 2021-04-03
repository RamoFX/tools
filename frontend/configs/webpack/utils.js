const { join } = require('path')

module.exports = {
  path: (...paths) => join(__dirname, '../../', ...(paths || []))
}
