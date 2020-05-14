const {
  BaseRouter
} = require('xc-core');

class CityRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.CityService = app.$services.primary.CityService;
    this.CityMiddleware = app.$middlewares.primary.CityMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.CityService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.CityService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.CityService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.CityService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.CityService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.CityService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.CityService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.CityService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.CityService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.CityService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.CityService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.CityService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.CityService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.CityService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.CityService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/city*",this.CityMiddleware.default)

    router.get('/api/v1/city', this.CityMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/city', this.CityMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/city/findOne', this.CityMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/city/groupby/:columnName', this.CityMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/city/distribution/:columnName', this.CityMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/city/distinct/:columnName', this.CityMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/city/aggregate/:columnName', this.CityMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/city/count', this.CityMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/city/bulk', this.CityMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/city/bulk', this.CityMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/city/bulk', this.CityMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/city/:id', this.CityMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/city/:id', this.CityMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/city/:id', this.CityMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/city/:id/exists', this.CityMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = CityRouter;