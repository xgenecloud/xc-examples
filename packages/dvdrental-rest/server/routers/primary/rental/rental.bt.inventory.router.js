const {
  BaseRouter
} = require('xc-core');

class RentalBtInventoryRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.RentalMiddleware = app.$middlewares.primary.RentalMiddleware;
    this.RentalBtInventoryService = app.$services.primary.RentalBtInventoryService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.RentalBtInventoryService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/rental*",this.RentalMiddleware.default)
    router.get('/api/v1/rental/belongs/:parents', this.RentalMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = RentalBtInventoryRouter;