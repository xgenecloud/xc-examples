const {
  Loader,
  BaseType
} = require('xc-core');

class FilmCategoryType extends BaseType {

  constructor(args = {}, app = {}) {
    super({
      app
    })

    Object.assign(this, args);

    if (!FilmCategoryType.$loaders) {
      FilmCategoryType.$loaders = FilmCategoryType._mapLoaders(app);
    }



    /* belongs to middlewares */
    this.FilmMiddleware = this.app.$middlewares.primary.FilmMiddleware;
    this.CategoryMiddleware = this.app.$middlewares.primary.CategoryMiddleware;

  }



  /* belongs to type in types */
  async Film(args, context, info) {
    return await FilmCategoryType.$loaders._film_filmCategory.load([this.film_id, args, context, info]);
  }
  async Category(args, context, info) {
    return await FilmCategoryType.$loaders._category_filmCategory.load([this.category_id, args, context, info]);
  }


  static _mapLoaders(app) {
    const _loaders = {};


    /* belongs to loaders */

    const filmCategoryBtFilmService = app.$services.primary.FilmCategoryBtFilmService;

    _loaders._film_filmCategory = Loader.get(
      FilmCategoryType.applyMiddlewareForLoader(
        [app.$middlewares.primary.FilmMiddleware.default],
        filmCategoryBtFilmService._film
      ))



    const filmCategoryBtCategoryService = app.$services.primary.FilmCategoryBtCategoryService;

    _loaders._category_filmCategory = Loader.get(
      FilmCategoryType.applyMiddlewareForLoader(
        [app.$middlewares.primary.CategoryMiddleware.default],
        filmCategoryBtCategoryService._category
      ))


    return _loaders;
  }


}


exports.default = FilmCategoryType;