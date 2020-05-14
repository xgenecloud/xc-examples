const {
  BaseRouter
} = require('xc-core');

class FilmActorRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.FilmActorService = app.$services.primary.FilmActorService;
    this.FilmActorMiddleware = app.$middlewares.primary.FilmActorMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.FilmActorService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.FilmActorService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.FilmActorService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.FilmActorService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.FilmActorService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.FilmActorService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.FilmActorService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.FilmActorService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.FilmActorService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.FilmActorService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.FilmActorService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.FilmActorService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.FilmActorService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.FilmActorService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.FilmActorService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/film_actor*",this.FilmActorMiddleware.default)

    router.get('/api/v1/film_actor', this.FilmActorMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/film_actor', this.FilmActorMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/film_actor/findOne', this.FilmActorMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/film_actor/groupby/:columnName', this.FilmActorMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/film_actor/distribution/:columnName', this.FilmActorMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/film_actor/distinct/:columnName', this.FilmActorMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/film_actor/aggregate/:columnName', this.FilmActorMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/film_actor/count', this.FilmActorMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/film_actor/bulk', this.FilmActorMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/film_actor/bulk', this.FilmActorMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/film_actor/bulk', this.FilmActorMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/film_actor/:id', this.FilmActorMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/film_actor/:id', this.FilmActorMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/film_actor/:id', this.FilmActorMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/film_actor/:id/exists', this.FilmActorMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = FilmActorRouter;