'use strict'

const got = require('got')

exports.BrowserlessClient = class BrowserlessClient {
  constructor(opts) {
    this._client = got.extend(this.constructor._getClientOptions(opts))
  }

  static _getClientOptions({ baseUrl, token, ...opts } = {}) {
    const clientConfig = {
      baseUrl,
      headers: {
        'cache-control': 'no-cache'
      }
    }

    if (token) {
      clientConfig.query = {
        token
      }
    }

    return got.mergeOptions(clientConfig, opts)
  }

  async content(url, opts = {}) {
    const { body } = await this._client.post('content', {
      headers: {
        accept: 'text/html',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        url,
        ...opts
      })
    })

    return body
  }

  async function(code, context = {}) {
    const { body } = await this._client.post('function', {
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        code,
        context
      })
    })

    return body
  }
}
