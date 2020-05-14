const {
  BaseRouter
} = require('xc-core');

class StoreRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.StoreService = app.$services.primary.StoreService;
    this.StoreMiddleware = app.$middlewares.primary.StoreMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.StoreService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.StoreService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.StoreService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.StoreService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.StoreService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.StoreService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.StoreService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.StoreService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.StoreService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.StoreService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.StoreService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.StoreService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.StoreService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.StoreService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.StoreService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/store*",this.StoreMiddleware.default)

    router.get('/api/v1/store', this.StoreMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/store', this.StoreMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/store/findOne', this.StoreMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/store/groupby/:columnName', this.StoreMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/store/distribution/:columnName', this.StoreMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/store/distinct/:columnName', this.StoreMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/store/aggregate/:columnName', this.StoreMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/store/count', this.StoreMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/store/bulk', this.StoreMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/store/bulk', this.StoreMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/store/bulk', this.StoreMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/store/:id', this.StoreMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/store/:id', this.StoreMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/store/:id', this.StoreMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/store/:id/exists', this.StoreMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = StoreRouter;