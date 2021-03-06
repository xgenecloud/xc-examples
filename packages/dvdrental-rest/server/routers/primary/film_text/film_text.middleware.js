const {
  BaseMiddleware
} = require('xc-core');

class FilmTextMiddleware extends BaseMiddleware {

  constructor(app) {
    super({
      app
    });
    this.permissions = require('./film_text.policy').permissions;
    // this.$acl = app.acl;
    // this.$acl.addPolicy(require('./film_text.policy').acl);
  }


  async default (req, res, next) {

    console.log('FilmText middleware;')

    let roles = req.user ? req.user.roles : {
      guest: true
    };
    const params = {
      method: req.method.toLowerCase(),
      url: req.route.path,
      roles,
      permissions: this.permissions
    }

    const allowed = await this.isAllowed(params);

    if (allowed) {
      //any additional rules can be made here
      return next();
    } else {
      const msg = roles.guest ? `Access Denied : Please Login or Signup for a new account` : `Access Denied for this account`;
      return res.status(403).json({
        msg
      });
    }


  }

}

module.exports = FilmTextMiddleware;