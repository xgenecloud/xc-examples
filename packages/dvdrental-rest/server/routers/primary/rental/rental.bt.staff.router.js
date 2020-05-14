const {
  BaseRouter
} = require('xc-core');

class RentalBtStaffRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.RentalMiddleware = app.$middlewares.primary.RentalMiddleware;
    this.RentalBtStaffService = app.$services.primary.RentalBtStaffService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.RentalBtStaffService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/rental*",this.RentalMiddleware.default)
    router.get('/api/v1/rental/belongs/:parents', this.RentalMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = RentalBtStaffRouter;