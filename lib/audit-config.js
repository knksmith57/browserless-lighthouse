'use strict'

module.exports = {
  extends: 'lighthouse:default',
  settings: {
    emulatedFormFactor: 'none',
    throttlingMethod: 'provided',
    onlyAudits: [
      'errors-in-console',
      'metrics',
      'server-response-time',
      'user-timings'
    ]
  }
}
