const {
  Loader,
  BaseType
} = require('xc-core');

class CategoryType extends BaseType {

  constructor(args = {}, app = {}) {
    super({
      app
    })

    Object.assign(this, args);

    if (!CategoryType.$loaders) {
      CategoryType.$loaders = CategoryType._mapLoaders(app);
    }


    this.FilmCategoryMiddleware = this.app.$middlewares.primary.FilmCategoryMiddleware;

  }

  async FilmCategoryList(args, context, info) {
    return await CategoryType.$loaders._filmCategoryList.load([this.category_id, args, context, info]);
  }
  async FilmCategoryCount(args, context, info) {
    return await CategoryType.$loaders._filmCategoryCount.load([this.category_id, args, context, info]);
  }


  static _mapLoaders(app) {
    const _loaders = {};

    const categoryHmFilmCategoryService = app.$services.primary.CategoryHmFilmCategoryService;

    _loaders._filmCategoryList = Loader.get(
      CategoryType.applyMiddlewareForLoader(
        [app.$middlewares.primary.FilmCategoryMiddleware.default],
        categoryHmFilmCategoryService._filmCategoryList
      ))

    _loaders._filmCategoryCount = Loader.get(
      CategoryType.applyMiddlewareForLoader(
        [app.$middlewares.primary.FilmCategoryMiddleware.default],
        categoryHmFilmCategoryService._filmCategoryCount
      ))

    return _loaders;
  }


}


exports.default = CategoryType;