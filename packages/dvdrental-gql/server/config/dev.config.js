module.exports = {
  "port" : 8080,
  "auth": {
    "google": {
      "clientID": "",
      "clientSecret": "",
      "callbackUrl": "http://localhost:8080/api/v1/auth/google/callback",
      "toolCallbackUrl": "http://localhost:8080/api/v1/auth/google/callback/tool"
    },
    "facebook": {
      "clientID": "",
      "clientSecret": "",
      "callbackUrl": "http://localhost:8080/api/v1/auth/facebook/callback"
    }
  },
  "siteUrl": "http://localhost:8080/",
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
