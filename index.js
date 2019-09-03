#!/usr/bin/env node
'use strict'

const auditConfig = require('./lib/audit-config')
const { AuditClient } = require('./lib/browserless')

const { AUDIT_URL, BROWSERLESS_ENDPOINT } = process.env

const main = (exports.main = async url => {
  const client = new AuditClient({ baseUrl: BROWSERLESS_ENDPOINT })
  const lhr = await client.audit(url, { configJson: auditConfig })
  console.log(JSON.stringify(lhr))
})

if (require.main === module) {
  const [, , auditUrl = AUDIT_URL] = process.argv

  require('hard-rejection')()
  main(auditUrl)
}
