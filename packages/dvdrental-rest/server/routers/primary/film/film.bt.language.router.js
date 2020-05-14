const {
  BaseRouter
} = require('xc-core');

class FilmBtLanguageRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.FilmMiddleware = app.$middlewares.primary.FilmMiddleware;
    this.FilmBtLanguageService = app.$services.primary.FilmBtLanguageService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.FilmBtLanguageService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/film*",this.FilmMiddleware.default)
    router.get('/api/v1/film/belongs/:parents', this.FilmMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = FilmBtLanguageRouter;