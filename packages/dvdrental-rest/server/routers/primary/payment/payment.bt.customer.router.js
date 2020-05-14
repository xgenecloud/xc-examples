const {
  BaseRouter
} = require('xc-core');

class PaymentBtCustomerRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.PaymentMiddleware = app.$middlewares.primary.PaymentMiddleware;
    this.PaymentBtCustomerService = app.$services.primary.PaymentBtCustomerService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.PaymentBtCustomerService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/payment*",this.PaymentMiddleware.default)
    router.get('/api/v1/payment/belongs/:parents', this.PaymentMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = PaymentBtCustomerRouter;