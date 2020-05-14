const {
  BaseRouter
} = require('xc-core');

class FilmActorBtFilmRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.FilmActorMiddleware = app.$middlewares.primary.FilmActorMiddleware;
    this.FilmActorBtFilmService = app.$services.primary.FilmActorBtFilmService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.FilmActorBtFilmService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/film_actor*",this.FilmActorMiddleware.default)
    router.get('/api/v1/film_actor/belongs/:parents', this.FilmActorMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = FilmActorBtFilmRouter;