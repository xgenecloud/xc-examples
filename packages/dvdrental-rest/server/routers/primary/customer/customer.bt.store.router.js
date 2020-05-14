const {
  BaseRouter
} = require('xc-core');

class CustomerBtStoreRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.CustomerMiddleware = app.$middlewares.primary.CustomerMiddleware;
    this.CustomerBtStoreService = app.$services.primary.CustomerBtStoreService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.CustomerBtStoreService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/customer*",this.CustomerMiddleware.default)
    router.get('/api/v1/customer/belongs/:parents', this.CustomerMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = CustomerBtStoreRouter;