'use strict'

const { BrowserlessClient } = require('./client')
const fs = require('fs')
const path = require('path')

const AUDIT_FUNCTION = fs.readFileSync(
  path.resolve(__dirname, 'function.js'),
  'utf8'
)

exports.AuditClient = class AuditClient extends BrowserlessClient {
  async audit(url, { config } = {}) {
    const context = {
      url
    }
    if (config) {
      context.config = config
    }

    const response = await this.function(AUDIT_FUNCTION, context)
    const lhr = JSON.parse(response)
    return lhr
  }
}
