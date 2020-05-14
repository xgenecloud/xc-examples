const {
  BaseRouter
} = require('xc-core');

class CityBtCountryRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.CityMiddleware = app.$middlewares.primary.CityMiddleware;
    this.CityBtCountryService = app.$services.primary.CityBtCountryService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.CityBtCountryService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/city*",this.CityMiddleware.default)
    router.get('/api/v1/city/belongs/:parents', this.CityMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = CityBtCountryRouter;