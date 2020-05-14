const {
  BaseRouter
} = require('xc-core');

class FilmTextRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.FilmTextService = app.$services.primary.FilmTextService;
    this.FilmTextMiddleware = app.$middlewares.primary.FilmTextMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.FilmTextService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.FilmTextService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.FilmTextService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.FilmTextService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.FilmTextService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.FilmTextService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.FilmTextService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.FilmTextService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.FilmTextService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.FilmTextService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.FilmTextService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.FilmTextService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.FilmTextService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.FilmTextService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.FilmTextService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/film_text*",this.FilmTextMiddleware.default)

    router.get('/api/v1/film_text', this.FilmTextMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/film_text', this.FilmTextMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/film_text/findOne', this.FilmTextMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/film_text/groupby/:columnName', this.FilmTextMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/film_text/distribution/:columnName', this.FilmTextMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/film_text/distinct/:columnName', this.FilmTextMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/film_text/aggregate/:columnName', this.FilmTextMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/film_text/count', this.FilmTextMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/film_text/bulk', this.FilmTextMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/film_text/bulk', this.FilmTextMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/film_text/bulk', this.FilmTextMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/film_text/:id', this.FilmTextMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/film_text/:id', this.FilmTextMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/film_text/:id', this.FilmTextMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/film_text/:id/exists', this.FilmTextMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = FilmTextRouter;