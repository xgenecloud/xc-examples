const {
  BaseRouter
} = require('xc-core');

class FilmHmFilmActorRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.FilmMiddleware = app.$middlewares.primary.FilmMiddleware;
    this.FilmHmFilmActorService = app.$services.primary.FilmHmFilmActorService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('FilmHmFilmActorRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.FilmHmFilmActorService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.FilmHmFilmActorService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.FilmHmFilmActorService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.FilmHmFilmActorService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.FilmHmFilmActorService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.FilmHmFilmActorService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.FilmHmFilmActorService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.FilmHmFilmActorService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.FilmHmFilmActorService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/film*",this.FilmMiddleware.default)

    router.get('/api/v1/film/has/film_actor', this.FilmMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/film/:parentId/film_actor', this.FilmMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/film/:parentId/film_actor', this.FilmMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/film/:parentId/film_actor/findOne', this.FilmMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/film/:parentId/film_actor/groupby/:columnName',this.FilmMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/film/:parentId/film_actor/distribution/:columnName',this.FilmMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/film/:parentId/film_actor/distinct/:columnName',this.FilmMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/film/:parentId/film_actor/aggregate/:columnName',this.FilmMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/film/:parentId/film_actor/count', this.FilmMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/film/:parentId/film_actor/bulk',this.FilmMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/film/:parentId/film_actor/bulk',this.FilmMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/film/:parentId/film_actor/bulk',this.FilmMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/film/:parentId/film_actor/:id', this.FilmMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/film/:parentId/film_actor/:id', this.FilmMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/film/:parentId/film_actor/:id', this.FilmMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/film/:parentId/film_actor/:id/exists', this.FilmMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = FilmHmFilmActorRouter;