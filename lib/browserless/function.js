'use strict'

const lighthouse = require('lighthouse')
const { URL } = require('url')

const DEFAULT_AUDIT_CONFIG = {
  extends: 'lighthouse:default'
}

module.exports = async ({ browser, context }) => {
  const { url, config = DEFAULT_AUDIT_CONFIG } = context
  const { port } = new URL(browser.wsEndpoint())

  const { lhr } = await lighthouse(
    url,
    {
      port,
      output: 'json'
    },
    config
  )

  return {
    data: lhr,
    type: 'json'
  }
}
