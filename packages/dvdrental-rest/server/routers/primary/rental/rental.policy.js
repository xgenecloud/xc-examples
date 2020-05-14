module.exports.permissions = {
  "/api/v1/rental": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    },
    "post": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/rental/:id": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    },
    "put": {
      "admin": true,
      "user": true,
      "guest": true
    },
    "delete": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/rental/count": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/rental/:id/exists": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/rental/findOne": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/rental/groupby/:columnName": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/rental/distribution/:columnName": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/rental/distinct/:columnName": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/rental/aggregate/:columnName": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/rental/bulk": {
    "post": {
      "admin": true,
      "user": true,
      "guest": true
    },
    "put": {
      "admin": true,
      "user": true,
      "guest": true
    },
    "delete": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/rental/has/payment": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/rental/:parentId/payment": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    },
    "post": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/rental/:parentId/payment/findOne": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/rental/:parentId/payment/count": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/rental/:parentId/payment/:id": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    },
    "put": {
      "admin": true,
      "user": true,
      "guest": true
    },
    "delete": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/rental/:parentId/payment/:id/exists": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/rental/belongs/:parents": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  }
};
