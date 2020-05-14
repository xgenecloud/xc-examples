const {
  BaseRouter
} = require('xc-core');

class FilmCategoryBtFilmRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.FilmCategoryMiddleware = app.$middlewares.primary.FilmCategoryMiddleware;
    this.FilmCategoryBtFilmService = app.$services.primary.FilmCategoryBtFilmService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.FilmCategoryBtFilmService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/film_category*",this.FilmCategoryMiddleware.default)
    router.get('/api/v1/film_category/belongs/:parents', this.FilmCategoryMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = FilmCategoryBtFilmRouter;