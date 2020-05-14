const {BaseResolver} = require('xc-core');

class AuthResolver extends BaseResolver {

  constructor(app = {}) {
    super(app);
    this.AuthService = app.$services.AuthService;
    this.AuthMiddleware = app.$middlewares.authMiddleware
  }
// eslint-disable-next-line no-unused-vars
  mw1(root, args, context, info) {
  }


  // isAuthenticated(cb) {
  //   return (args, context, info) => {
  //     return context.req.isAuthenticated() ?
  //       cb(args, context, info) :
  //       context.res.status(401).json('not authenticated');
  //   }
  // }

  async isAuthenticated(args, context) {
    if (!context.req.isAuthenticated())
      throw new Error('not authenticated');
  }

  async SignUp(args,ctx){
  return   this.AuthService.SignUp(args,ctx);
  }


  typedefs() {

  }

  resolvers() {


    let fn = this.AuthService.EmailValidate;

    console.log(fn)


    let _resolvers = {
      Me: this.mw([this.isAuthenticated], this.AuthService.Me),
      SignIn:  this.AuthService.SignIn,
      SignUp: this.SignUp,
      SignOut: this.AuthService.SignOut,
      PasswordForgot: this.AuthService.PasswordForgot,
      PasswordReset: this.AuthService.PasswordReset,
      EmailValidate: this.AuthService.EmailValidate,
    };

    return this.applyMiddlewares([this.AuthMiddleware.default], _resolvers);
  }


}

module.exports = AuthResolver;