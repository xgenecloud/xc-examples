module.exports.permissions = {
  "/api/v1/staff": {
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
  "/api/v1/staff/:id": {
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
  "/api/v1/staff/count": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/staff/:id/exists": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/staff/findOne": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/staff/groupby/:columnName": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/staff/distribution/:columnName": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/staff/distinct/:columnName": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/staff/aggregate/:columnName": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/staff/bulk": {
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
  "/api/v1/staff/has/payment": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/staff/:parentId/payment": {
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
  "/api/v1/staff/:parentId/payment/findOne": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/staff/:parentId/payment/count": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/staff/:parentId/payment/:id": {
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
  "/api/v1/staff/:parentId/payment/:id/exists": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/staff/has/rental": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/staff/:parentId/rental": {
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
  "/api/v1/staff/:parentId/rental/findOne": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/staff/:parentId/rental/count": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/staff/:parentId/rental/:id": {
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
  "/api/v1/staff/:parentId/rental/:id/exists": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/staff/belongs/:parents": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  }
};
