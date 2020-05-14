const {
  BaseRouter
} = require('xc-core');

class StaffBtAddressRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.StaffMiddleware = app.$middlewares.primary.StaffMiddleware;
    this.StaffBtAddressService = app.$services.primary.StaffBtAddressService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.StaffBtAddressService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/staff*",this.StaffMiddleware.default)
    router.get('/api/v1/staff/belongs/:parents', this.StaffMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = StaffBtAddressRouter;