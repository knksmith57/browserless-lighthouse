#!/usr/bin/env node
'use strict'

const auditConfig = require('./audit-config')
const lighthouse = require('lighthouse')
const { URL } = require('url')

const { AUDIT_URL, BROWSERLESS_ENDPOINT } = process.env
const { hostname, port } = new URL(BROWSERLESS_ENDPOINT)

const main = (exports.main = async url => {
  const { lhr } = await lighthouse(
    url,
    {
      hostname,
      port
    },
    auditConfig
  )
  console.log(JSON.stringify(lhr))
})

if (require.main === module) {
  const [, , auditUrl = AUDIT_URL] = process.argv
  console.log({ auditUrl, BROWSERLESS_ENDPOINT, hostname, port })

  require('hard-rejection')()
  main(auditUrl)
}
