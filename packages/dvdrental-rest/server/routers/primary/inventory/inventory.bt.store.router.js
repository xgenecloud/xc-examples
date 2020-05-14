const {
  BaseRouter
} = require('xc-core');

class InventoryBtStoreRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.InventoryMiddleware = app.$middlewares.primary.InventoryMiddleware;
    this.InventoryBtStoreService = app.$services.primary.InventoryBtStoreService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.InventoryBtStoreService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/inventory*",this.InventoryMiddleware.default)
    router.get('/api/v1/inventory/belongs/:parents', this.InventoryMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = InventoryBtStoreRouter;