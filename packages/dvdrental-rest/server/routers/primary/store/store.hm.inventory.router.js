const {
  BaseRouter
} = require('xc-core');

class StoreHmInventoryRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.StoreMiddleware = app.$middlewares.primary.StoreMiddleware;
    this.StoreHmInventoryService = app.$services.primary.StoreHmInventoryService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('StoreHmInventoryRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.StoreHmInventoryService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.StoreHmInventoryService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.StoreHmInventoryService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.StoreHmInventoryService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.StoreHmInventoryService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.StoreHmInventoryService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.StoreHmInventoryService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.StoreHmInventoryService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.StoreHmInventoryService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/store*",this.StoreMiddleware.default)

    router.get('/api/v1/store/has/inventory', this.StoreMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/store/:parentId/inventory', this.StoreMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/store/:parentId/inventory', this.StoreMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/store/:parentId/inventory/findOne', this.StoreMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/store/:parentId/inventory/groupby/:columnName',this.StoreMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/store/:parentId/inventory/distribution/:columnName',this.StoreMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/store/:parentId/inventory/distinct/:columnName',this.StoreMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/store/:parentId/inventory/aggregate/:columnName',this.StoreMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/store/:parentId/inventory/count', this.StoreMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/store/:parentId/inventory/bulk',this.StoreMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/store/:parentId/inventory/bulk',this.StoreMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/store/:parentId/inventory/bulk',this.StoreMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/store/:parentId/inventory/:id', this.StoreMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/store/:parentId/inventory/:id', this.StoreMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/store/:parentId/inventory/:id', this.StoreMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/store/:parentId/inventory/:id/exists', this.StoreMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = StoreHmInventoryRouter;