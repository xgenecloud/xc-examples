const {
  BaseRouter
} = require('xc-core');

class StoreBtAddressRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.StoreMiddleware = app.$middlewares.primary.StoreMiddleware;
    this.StoreBtAddressService = app.$services.primary.StoreBtAddressService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.StoreBtAddressService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/store*",this.StoreMiddleware.default)
    router.get('/api/v1/store/belongs/:parents', this.StoreMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = StoreBtAddressRouter;