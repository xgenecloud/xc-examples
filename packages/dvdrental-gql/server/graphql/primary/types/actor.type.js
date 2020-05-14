const {
  Loader,
  BaseType
} = require('xc-core');

class ActorType extends BaseType {

  constructor(args = {}, app = {}) {
    super({
      app
    })

    Object.assign(this, args);

    if (!ActorType.$loaders) {
      ActorType.$loaders = ActorType._mapLoaders(app);
    }


    this.FilmActorMiddleware = this.app.$middlewares.primary.FilmActorMiddleware;

  }

  async FilmActorList(args, context, info) {
    return await ActorType.$loaders._filmActorList.load([this.actor_id, args, context, info]);
  }
  async FilmActorCount(args, context, info) {
    return await ActorType.$loaders._filmActorCount.load([this.actor_id, args, context, info]);
  }


  static _mapLoaders(app) {
    const _loaders = {};

    const actorHmFilmActorService = app.$services.primary.ActorHmFilmActorService;

    _loaders._filmActorList = Loader.get(
      ActorType.applyMiddlewareForLoader(
        [app.$middlewares.primary.FilmActorMiddleware.default],
        actorHmFilmActorService._filmActorList
      ))

    _loaders._filmActorCount = Loader.get(
      ActorType.applyMiddlewareForLoader(
        [app.$middlewares.primary.FilmActorMiddleware.default],
        actorHmFilmActorService._filmActorCount
      ))

    return _loaders;
  }


}


exports.default = ActorType;