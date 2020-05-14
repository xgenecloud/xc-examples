module.exports.permissions = {
  "/api/v1/customer": {
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
  "/api/v1/customer/:id": {
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
  "/api/v1/customer/count": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/customer/:id/exists": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/customer/findOne": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/customer/groupby/:columnName": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/customer/distribution/:columnName": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/customer/distinct/:columnName": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/customer/aggregate/:columnName": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/customer/bulk": {
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
  "/api/v1/customer/has/payment": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/customer/:parentId/payment": {
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
  "/api/v1/customer/:parentId/payment/findOne": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/customer/:parentId/payment/count": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/customer/:parentId/payment/:id": {
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
  "/api/v1/customer/:parentId/payment/:id/exists": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/customer/has/rental": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/customer/:parentId/rental": {
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
  "/api/v1/customer/:parentId/rental/findOne": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/customer/:parentId/rental/count": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/customer/:parentId/rental/:id": {
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
  "/api/v1/customer/:parentId/rental/:id/exists": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/customer/belongs/:parents": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  }
};
