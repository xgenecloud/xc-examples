const {
  BaseRouter
} = require('xc-core');

class ActorHmFilmActorRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ActorMiddleware = app.$middlewares.primary.ActorMiddleware;
    this.ActorHmFilmActorService = app.$services.primary.ActorHmFilmActorService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('ActorHmFilmActorRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.ActorHmFilmActorService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ActorHmFilmActorService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.ActorHmFilmActorService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ActorHmFilmActorService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.ActorHmFilmActorService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ActorHmFilmActorService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ActorHmFilmActorService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.ActorHmFilmActorService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.ActorHmFilmActorService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/actor*",this.ActorMiddleware.default)

    router.get('/api/v1/actor/has/film_actor', this.ActorMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/actor/:parentId/film_actor', this.ActorMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/actor/:parentId/film_actor', this.ActorMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/actor/:parentId/film_actor/findOne', this.ActorMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/actor/:parentId/film_actor/groupby/:columnName',this.ActorMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/actor/:parentId/film_actor/distribution/:columnName',this.ActorMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/actor/:parentId/film_actor/distinct/:columnName',this.ActorMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/actor/:parentId/film_actor/aggregate/:columnName',this.ActorMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/actor/:parentId/film_actor/count', this.ActorMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/actor/:parentId/film_actor/bulk',this.ActorMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/actor/:parentId/film_actor/bulk',this.ActorMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/actor/:parentId/film_actor/bulk',this.ActorMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/actor/:parentId/film_actor/:id', this.ActorMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/actor/:parentId/film_actor/:id', this.ActorMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/actor/:parentId/film_actor/:id', this.ActorMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/actor/:parentId/film_actor/:id/exists', this.ActorMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = ActorHmFilmActorRouter;