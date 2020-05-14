const {
  BaseRouter
} = require('xc-core');

class AddressBtCityRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.AddressMiddleware = app.$middlewares.primary.AddressMiddleware;
    this.AddressBtCityService = app.$services.primary.AddressBtCityService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.AddressBtCityService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/address*",this.AddressMiddleware.default)
    router.get('/api/v1/address/belongs/:parents', this.AddressMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = AddressBtCityRouter;