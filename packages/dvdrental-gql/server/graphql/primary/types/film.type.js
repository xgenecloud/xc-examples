const {
  Loader,
  BaseType
} = require('xc-core');

class FilmType extends BaseType {

  constructor(args = {}, app = {}) {
    super({
      app
    })

    Object.assign(this, args);

    if (!FilmType.$loaders) {
      FilmType.$loaders = FilmType._mapLoaders(app);
    }


    /* has many middlewares */
    this.FilmActorMiddleware = this.app.$middlewares.primary.FilmActorMiddleware;
    this.FilmCategoryMiddleware = this.app.$middlewares.primary.FilmCategoryMiddleware;
    this.InventoryMiddleware = this.app.$middlewares.primary.InventoryMiddleware;

    /* belongs to middlewares */
    this.LanguageMiddleware = this.app.$middlewares.primary.LanguageMiddleware;

  }


  /* has many type in types */
  async FilmActorList(args, context, info) {
    return await FilmType.$loaders._filmActorList.load([this.film_id, args, context, info]);
  }
  async FilmActorCount(args, context, info) {
    return await FilmType.$loaders._filmActorCount.load([this.film_id, args, context, info]);
  }
  async FilmCategoryList(args, context, info) {
    return await FilmType.$loaders._filmCategoryList.load([this.film_id, args, context, info]);
  }
  async FilmCategoryCount(args, context, info) {
    return await FilmType.$loaders._filmCategoryCount.load([this.film_id, args, context, info]);
  }
  async InventoryList(args, context, info) {
    return await FilmType.$loaders._inventoryList.load([this.film_id, args, context, info]);
  }
  async InventoryCount(args, context, info) {
    return await FilmType.$loaders._inventoryCount.load([this.film_id, args, context, info]);
  }

  /* belongs to type in types */
  async Language(args, context, info) {
    return await FilmType.$loaders._language_film.load([this.language_id, args, context, info]);
  }


  static _mapLoaders(app) {
    const _loaders = {};

    /* has many loaders */
    const filmHmFilmActorService = app.$services.primary.FilmHmFilmActorService;

    _loaders._filmActorList = Loader.get(
      FilmType.applyMiddlewareForLoader(
        [app.$middlewares.primary.FilmActorMiddleware.default],
        filmHmFilmActorService._filmActorList
      ))

    _loaders._filmActorCount = Loader.get(
      FilmType.applyMiddlewareForLoader(
        [app.$middlewares.primary.FilmActorMiddleware.default],
        filmHmFilmActorService._filmActorCount
      ))

    const filmHmFilmCategoryService = app.$services.primary.FilmHmFilmCategoryService;

    _loaders._filmCategoryList = Loader.get(
      FilmType.applyMiddlewareForLoader(
        [app.$middlewares.primary.FilmCategoryMiddleware.default],
        filmHmFilmCategoryService._filmCategoryList
      ))

    _loaders._filmCategoryCount = Loader.get(
      FilmType.applyMiddlewareForLoader(
        [app.$middlewares.primary.FilmCategoryMiddleware.default],
        filmHmFilmCategoryService._filmCategoryCount
      ))

    const filmHmInventoryService = app.$services.primary.FilmHmInventoryService;

    _loaders._inventoryList = Loader.get(
      FilmType.applyMiddlewareForLoader(
        [app.$middlewares.primary.InventoryMiddleware.default],
        filmHmInventoryService._inventoryList
      ))

    _loaders._inventoryCount = Loader.get(
      FilmType.applyMiddlewareForLoader(
        [app.$middlewares.primary.InventoryMiddleware.default],
        filmHmInventoryService._inventoryCount
      ))


    /* belongs to loaders */

    const filmBtLanguageService = app.$services.primary.FilmBtLanguageService;

    _loaders._language_film = Loader.get(
      FilmType.applyMiddlewareForLoader(
        [app.$middlewares.primary.LanguageMiddleware.default],
        filmBtLanguageService._language
      ))


    return _loaders;
  }


}


exports.default = FilmType;