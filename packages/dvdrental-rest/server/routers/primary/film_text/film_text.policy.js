module.exports.permissions = {
  "/api/v1/film_text": {
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
  "/api/v1/film_text/:id": {
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
  "/api/v1/film_text/count": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/film_text/:id/exists": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/film_text/findOne": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/film_text/groupby/:columnName": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/film_text/distribution/:columnName": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/film_text/distinct/:columnName": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/film_text/aggregate/:columnName": {
    "get": {
      "admin": true,
      "user": true,
      "guest": true
    }
  },
  "/api/v1/film_text/bulk": {
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
  }
};
