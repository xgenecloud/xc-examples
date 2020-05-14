module.exports.permissions = {
  "/api/v1/category": {
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
  "/api/v1/category/:id": {
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
  "/api/v1/category/count": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/category/:id/exists": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/category/findOne": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/category/groupby/:columnName": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/category/distribution/:columnName": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/category/distinct/:columnName": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/category/aggregate/:columnName": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/category/bulk": {
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
  "/api/v1/category/has/film_category": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/category/:parentId/film_category": {
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
  "/api/v1/category/:parentId/film_category/findOne": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/category/:parentId/film_category/count": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/category/:parentId/film_category/:id": {
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
  "/api/v1/category/:parentId/film_category/:id/exists": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  }
};
