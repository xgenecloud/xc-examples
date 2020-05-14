module.exports = {
  "port": 8080,
  "siteUrl": "https://example.com/",
  "auth": {
    "google": {
      "clientID": "",
      "clientSecret": "",
      "callbackUrl": "https://example.com/api/v1/auth/google/callback",
      "toolCallbackUrl": "https://example.com/api/v1/auth/google/callback/tool"
    },
    "facebook": {
      "clientID": "",
      "clientSecret": "",
      "callbackUrl": "https://example.com/api/v1/auth/facebook/callback"
    }
  },
  "mailer": {
    "from": "xc<xc@xgene.cloud>",
    "options": {
      "host": "smtp.zoho.eu",
      "port": 465,
      "secure": true,
      "auth": {
        "user": "xc@xgene.cloud",
        "pass": ""
      }
    }
  }
}
