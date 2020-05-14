const {
  BaseRouter
} = require('xc-core');

class CountryRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.CountryService = app.$services.primary.CountryService;
    this.CountryMiddleware = app.$middlewares.primary.CountryMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.CountryService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.CountryService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.CountryService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.CountryService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.CountryService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.CountryService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.CountryService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.CountryService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.CountryService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.CountryService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.CountryService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.CountryService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.CountryService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.CountryService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.CountryService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/country*",this.CountryMiddleware.default)

    router.get('/api/v1/country', this.CountryMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/country', this.CountryMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/country/findOne', this.CountryMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/country/groupby/:columnName', this.CountryMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/country/distribution/:columnName', this.CountryMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/country/distinct/:columnName', this.CountryMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/country/aggregate/:columnName', this.CountryMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/country/count', this.CountryMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/country/bulk', this.CountryMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/country/bulk', this.CountryMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/country/bulk', this.CountryMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/country/:id', this.CountryMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/country/:id', this.CountryMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/country/:id', this.CountryMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/country/:id/exists', this.CountryMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = CountryRouter;