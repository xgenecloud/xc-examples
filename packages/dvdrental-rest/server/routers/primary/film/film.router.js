const {
  BaseRouter
} = require('xc-core');

class FilmRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.FilmService = app.$services.primary.FilmService;
    this.FilmMiddleware = app.$middlewares.primary.FilmMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.FilmService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.FilmService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.FilmService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.FilmService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.FilmService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.FilmService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.FilmService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.FilmService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.FilmService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.FilmService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.FilmService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.FilmService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.FilmService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.FilmService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.FilmService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/film*",this.FilmMiddleware.default)

    router.get('/api/v1/film', this.FilmMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/film', this.FilmMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/film/findOne', this.FilmMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/film/groupby/:columnName', this.FilmMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/film/distribution/:columnName', this.FilmMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/film/distinct/:columnName', this.FilmMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/film/aggregate/:columnName', this.FilmMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/film/count', this.FilmMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/film/bulk', this.FilmMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/film/bulk', this.FilmMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/film/bulk', this.FilmMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/film/:id', this.FilmMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/film/:id', this.FilmMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/film/:id', this.FilmMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/film/:id/exists', this.FilmMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = FilmRouter;