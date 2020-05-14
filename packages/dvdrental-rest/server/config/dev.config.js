module.exports = {
  "port" :8081,
  "auth": {
    "google": {
      "clientID": "",
      "clientSecret": "",
      "callbackUrl": "https://example.com/api/v1/auth/google/callback"
    },
    "facebook": {
      "clientID": "",
      "clientSecret": "",
      "callbackUrl": "https://example.com/api/v1/auth/facebook/callback"
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
