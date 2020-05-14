const {
  BaseRouter
} = require('xc-core');

class InventoryRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.InventoryService = app.$services.primary.InventoryService;
    this.InventoryMiddleware = app.$middlewares.primary.InventoryMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.InventoryService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.InventoryService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.InventoryService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.InventoryService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.InventoryService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.InventoryService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.InventoryService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.InventoryService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.InventoryService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.InventoryService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.InventoryService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.InventoryService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.InventoryService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.InventoryService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.InventoryService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/inventory*",this.InventoryMiddleware.default)

    router.get('/api/v1/inventory', this.InventoryMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/inventory', this.InventoryMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/inventory/findOne', this.InventoryMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/inventory/groupby/:columnName', this.InventoryMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/inventory/distribution/:columnName', this.InventoryMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/inventory/distinct/:columnName', this.InventoryMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/inventory/aggregate/:columnName', this.InventoryMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/inventory/count', this.InventoryMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/inventory/bulk', this.InventoryMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/inventory/bulk', this.InventoryMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/inventory/bulk', this.InventoryMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/inventory/:id', this.InventoryMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/inventory/:id', this.InventoryMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/inventory/:id', this.InventoryMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/inventory/:id/exists', this.InventoryMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = InventoryRouter;