const {
  BaseRouter
} = require('xc-core');

class FilmActorBtActorRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.FilmActorMiddleware = app.$middlewares.primary.FilmActorMiddleware;
    this.FilmActorBtActorService = app.$services.primary.FilmActorBtActorService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.FilmActorBtActorService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/film_actor*",this.FilmActorMiddleware.default)
    router.get('/api/v1/film_actor/belongs/:parents', this.FilmActorMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = FilmActorBtActorRouter;