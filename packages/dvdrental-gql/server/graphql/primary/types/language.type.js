const {
  Loader,
  BaseType
} = require('xc-core');

class LanguageType extends BaseType {

  constructor(args = {}, app = {}) {
    super({
      app
    })

    Object.assign(this, args);

    if (!LanguageType.$loaders) {
      LanguageType.$loaders = LanguageType._mapLoaders(app);
    }


    /* has many middlewares */
    this.FilmMiddleware = this.app.$middlewares.primary.FilmMiddleware;

  }


  /* has many type in types */
  async FilmList(args, context, info) {
    return await LanguageType.$loaders._filmList.load([this.language_id, args, context, info]);
  }
  async FilmCount(args, context, info) {
    return await LanguageType.$loaders._filmCount.load([this.language_id, args, context, info]);
  }


  static _mapLoaders(app) {
    const _loaders = {};

    /* has many loaders */
    const languageHmFilmService = app.$services.primary.LanguageHmFilmService;

    _loaders._filmList = Loader.get(
      LanguageType.applyMiddlewareForLoader(
        [app.$middlewares.primary.FilmMiddleware.default],
        languageHmFilmService._filmList
      ))

    _loaders._filmCount = Loader.get(
      LanguageType.applyMiddlewareForLoader(
        [app.$middlewares.primary.FilmMiddleware.default],
        languageHmFilmService._filmCount
      ))

    return _loaders;
  }


}


exports.default = LanguageType;