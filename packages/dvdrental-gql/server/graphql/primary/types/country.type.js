const {
  Loader,
  BaseType
} = require('xc-core');

class CountryType extends BaseType {

  constructor(args = {}, app = {}) {
    super({
      app
    })

    Object.assign(this, args);

    if (!CountryType.$loaders) {
      CountryType.$loaders = CountryType._mapLoaders(app);
    }


    this.CityMiddleware = this.app.$middlewares.primary.CityMiddleware;

  }

  async CityList(args, context, info) {
    return await CountryType.$loaders._cityList.load([this.country_id, args, context, info]);
  }
  async CityCount(args, context, info) {
    return await CountryType.$loaders._cityCount.load([this.country_id, args, context, info]);
  }


  static _mapLoaders(app) {
    const _loaders = {};

    const countryHmCityService = app.$services.primary.CountryHmCityService;

    _loaders._cityList = Loader.get(
      CountryType.applyMiddlewareForLoader(
        [app.$middlewares.primary.CityMiddleware.default],
        countryHmCityService._cityList
      ))

    _loaders._cityCount = Loader.get(
      CountryType.applyMiddlewareForLoader(
        [app.$middlewares.primary.CityMiddleware.default],
        countryHmCityService._cityCount
      ))

    return _loaders;
  }


}


exports.default = CountryType;