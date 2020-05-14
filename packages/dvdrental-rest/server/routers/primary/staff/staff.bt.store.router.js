const {
  BaseRouter
} = require('xc-core');

class StaffBtStoreRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.StaffMiddleware = app.$middlewares.primary.StaffMiddleware;
    this.StaffBtStoreService = app.$services.primary.StaffBtStoreService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.StaffBtStoreService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/staff*",this.StaffMiddleware.default)
    router.get('/api/v1/staff/belongs/:parents', this.StaffMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = StaffBtStoreRouter;