const {
  Loader,
  BaseType
} = require('xc-core');

class FilmTextType extends BaseType {

  constructor(args = {}, app = {}) {
    super({
      app
    })

    Object.assign(this, args);

    if (!FilmTextType.$loaders) {
      FilmTextType.$loaders = FilmTextType._mapLoaders(app);
    }



  }




  static _mapLoaders(app) {
    const _loaders = {};

    return _loaders;
  }


}


exports.default = FilmTextType;