const {BaseMiddlewareGql} = require('xc-core')

class authMiddleware extends BaseMiddlewareGql {

  constructor(app) {
    super({app});
  }

  // eslint-disable-next-line no-unused-vars
  async default(req) {
    console.log('Auth middleware')
  }

}

module.exports = authMiddleware;