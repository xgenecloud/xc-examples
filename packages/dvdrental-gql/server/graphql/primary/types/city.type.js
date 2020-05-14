const {
  Loader,
  BaseType
} = require('xc-core');

class CityType extends BaseType {

  constructor(args = {}, app = {}) {
    super({
      app
    })

    Object.assign(this, args);

    if (!CityType.$loaders) {
      CityType.$loaders = CityType._mapLoaders(app);
    }


    this.AddressMiddleware = this.app.$middlewares.primary.AddressMiddleware;
    this.CountryMiddleware = this.app.$middlewares.primary.CountryMiddleware;

  }

  async AddressList(args, context, info) {
    return await CityType.$loaders._addressList.load([this.city_id, args, context, info]);
  }
  async AddressCount(args, context, info) {
    return await CityType.$loaders._addressCount.load([this.city_id, args, context, info]);
  }
  async Country(args, context, info) {
    return await CityType.$loaders._country_city.load([this.country_id, args, context, info]);
  }


  static _mapLoaders(app) {
    const _loaders = {};

    const cityHmAddressService = app.$services.primary.CityHmAddressService;

    _loaders._addressList = Loader.get(
      CityType.applyMiddlewareForLoader(
        [app.$middlewares.primary.AddressMiddleware.default],
        cityHmAddressService._addressList
      ))

    _loaders._addressCount = Loader.get(
      CityType.applyMiddlewareForLoader(
        [app.$middlewares.primary.AddressMiddleware.default],
        cityHmAddressService._addressCount
      ))


    const cityBtCountryService = app.$services.primary.CityBtCountryService;

    _loaders._country_city = Loader.get(
      CityType.applyMiddlewareForLoader(
        [app.$middlewares.primary.CountryMiddleware.default],
        cityBtCountryService._country
      ))


    return _loaders;
  }


}


exports.default = CityType;