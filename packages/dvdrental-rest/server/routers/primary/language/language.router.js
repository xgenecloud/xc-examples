const {
  BaseRouter
} = require('xc-core');

class LanguageRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.LanguageService = app.$services.primary.LanguageService;
    this.LanguageMiddleware = app.$middlewares.primary.LanguageMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.LanguageService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.LanguageService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.LanguageService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.LanguageService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.LanguageService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.LanguageService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.LanguageService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.LanguageService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.LanguageService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.LanguageService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.LanguageService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.LanguageService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.LanguageService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.LanguageService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.LanguageService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/language*",this.LanguageMiddleware.default)

    router.get('/api/v1/language', this.LanguageMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/language', this.LanguageMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/language/findOne', this.LanguageMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/language/groupby/:columnName', this.LanguageMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/language/distribution/:columnName', this.LanguageMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/language/distinct/:columnName', this.LanguageMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/language/aggregate/:columnName', this.LanguageMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/language/count', this.LanguageMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/language/bulk', this.LanguageMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/language/bulk', this.LanguageMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/language/bulk', this.LanguageMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/language/:id', this.LanguageMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/language/:id', this.LanguageMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/language/:id', this.LanguageMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/language/:id/exists', this.LanguageMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = LanguageRouter;