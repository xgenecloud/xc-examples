const {
  Loader,
  BaseType
} = require('xc-core');

class FilmActorType extends BaseType {

  constructor(args = {}, app = {}) {
    super({
      app
    })

    Object.assign(this, args);

    if (!FilmActorType.$loaders) {
      FilmActorType.$loaders = FilmActorType._mapLoaders(app);
    }



    /* belongs to middlewares */
    this.ActorMiddleware = this.app.$middlewares.primary.ActorMiddleware;
    this.FilmMiddleware = this.app.$middlewares.primary.FilmMiddleware;

  }



  /* belongs to type in types */
  async Actor(args, context, info) {
    return await FilmActorType.$loaders._actor_filmActor.load([this.actor_id, args, context, info]);
  }
  async Film(args, context, info) {
    return await FilmActorType.$loaders._film_filmActor.load([this.film_id, args, context, info]);
  }


  static _mapLoaders(app) {
    const _loaders = {};


    /* belongs to loaders */

    const filmActorBtActorService = app.$services.primary.FilmActorBtActorService;

    _loaders._actor_filmActor = Loader.get(
      FilmActorType.applyMiddlewareForLoader(
        [app.$middlewares.primary.ActorMiddleware.default],
        filmActorBtActorService._actor
      ))



    const filmActorBtFilmService = app.$services.primary.FilmActorBtFilmService;

    _loaders._film_filmActor = Loader.get(
      FilmActorType.applyMiddlewareForLoader(
        [app.$middlewares.primary.FilmMiddleware.default],
        filmActorBtFilmService._film
      ))


    return _loaders;
  }


}


exports.default = FilmActorType;