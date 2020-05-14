const {
  BaseRouter
} = require('xc-core');

class InventoryHmRentalRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.InventoryMiddleware = app.$middlewares.primary.InventoryMiddleware;
    this.InventoryHmRentalService = app.$services.primary.InventoryHmRentalService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('InventoryHmRentalRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.InventoryHmRentalService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.InventoryHmRentalService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.InventoryHmRentalService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.InventoryHmRentalService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.InventoryHmRentalService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.InventoryHmRentalService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.InventoryHmRentalService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.InventoryHmRentalService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.InventoryHmRentalService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/inventory*",this.InventoryMiddleware.default)

    router.get('/api/v1/inventory/has/rental', this.InventoryMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/inventory/:parentId/rental', this.InventoryMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/inventory/:parentId/rental', this.InventoryMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/inventory/:parentId/rental/findOne', this.InventoryMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/inventory/:parentId/rental/groupby/:columnName',this.InventoryMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/inventory/:parentId/rental/distribution/:columnName',this.InventoryMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/inventory/:parentId/rental/distinct/:columnName',this.InventoryMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/inventory/:parentId/rental/aggregate/:columnName',this.InventoryMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/inventory/:parentId/rental/count', this.InventoryMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/inventory/:parentId/rental/bulk',this.InventoryMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/inventory/:parentId/rental/bulk',this.InventoryMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/inventory/:parentId/rental/bulk',this.InventoryMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/inventory/:parentId/rental/:id', this.InventoryMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/inventory/:parentId/rental/:id', this.InventoryMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/inventory/:parentId/rental/:id', this.InventoryMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/inventory/:parentId/rental/:id/exists', this.InventoryMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = InventoryHmRentalRouter;