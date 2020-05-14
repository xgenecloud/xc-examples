const {
  BaseRouter
} = require('xc-core');

class FilmCategoryBtCategoryRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.FilmCategoryMiddleware = app.$middlewares.primary.FilmCategoryMiddleware;
    this.FilmCategoryBtCategoryService = app.$services.primary.FilmCategoryBtCategoryService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.FilmCategoryBtCategoryService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/film_category*",this.FilmCategoryMiddleware.default)
    router.get('/api/v1/film_category/belongs/:parents', this.FilmCategoryMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = FilmCategoryBtCategoryRouter;