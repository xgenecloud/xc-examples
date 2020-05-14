const {
  Loader,
  BaseType
} = require('xc-core');

class AddressType extends BaseType {

  constructor(args = {}, app = {}) {
    super({
      app
    })

    Object.assign(this, args);

    if (!AddressType.$loaders) {
      AddressType.$loaders = AddressType._mapLoaders(app);
    }


    /* has many middlewares */
    this.CustomerMiddleware = this.app.$middlewares.primary.CustomerMiddleware;
    this.StaffMiddleware = this.app.$middlewares.primary.StaffMiddleware;
    this.StoreMiddleware = this.app.$middlewares.primary.StoreMiddleware;
    this.CityMiddleware = this.app.$middlewares.primary.CityMiddleware;

  }


  /* has many type in types */
  async CustomerList(args, context, info) {
    return await AddressType.$loaders._customerList.load([this.address_id, args, context, info]);
  }
  async CustomerCount(args, context, info) {
    return await AddressType.$loaders._customerCount.load([this.address_id, args, context, info]);
  }
  async StaffList(args, context, info) {
    return await AddressType.$loaders._staffList.load([this.address_id, args, context, info]);
  }
  async StaffCount(args, context, info) {
    return await AddressType.$loaders._staffCount.load([this.address_id, args, context, info]);
  }
  async StoreList(args, context, info) {
    return await AddressType.$loaders._storeList.load([this.address_id, args, context, info]);
  }
  async StoreCount(args, context, info) {
    return await AddressType.$loaders._storeCount.load([this.address_id, args, context, info]);
  }
  async City(args, context, info) {
    return await AddressType.$loaders._city_address.load([this.city_id, args, context, info]);
  }


  static _mapLoaders(app) {
    const _loaders = {};

    /* has many loaders */
    const addressHmCustomerService = app.$services.primary.AddressHmCustomerService;

    _loaders._customerList = Loader.get(
      AddressType.applyMiddlewareForLoader(
        [app.$middlewares.primary.CustomerMiddleware.default],
        addressHmCustomerService._customerList
      ))

    _loaders._customerCount = Loader.get(
      AddressType.applyMiddlewareForLoader(
        [app.$middlewares.primary.CustomerMiddleware.default],
        addressHmCustomerService._customerCount
      ))

    const addressHmStaffService = app.$services.primary.AddressHmStaffService;

    _loaders._staffList = Loader.get(
      AddressType.applyMiddlewareForLoader(
        [app.$middlewares.primary.StaffMiddleware.default],
        addressHmStaffService._staffList
      ))

    _loaders._staffCount = Loader.get(
      AddressType.applyMiddlewareForLoader(
        [app.$middlewares.primary.StaffMiddleware.default],
        addressHmStaffService._staffCount
      ))

    const addressHmStoreService = app.$services.primary.AddressHmStoreService;

    _loaders._storeList = Loader.get(
      AddressType.applyMiddlewareForLoader(
        [app.$middlewares.primary.StoreMiddleware.default],
        addressHmStoreService._storeList
      ))

    _loaders._storeCount = Loader.get(
      AddressType.applyMiddlewareForLoader(
        [app.$middlewares.primary.StoreMiddleware.default],
        addressHmStoreService._storeCount
      ))


    const addressBtCityService = app.$services.primary.AddressBtCityService;

    _loaders._city_address = Loader.get(
      AddressType.applyMiddlewareForLoader(
        [app.$middlewares.primary.CityMiddleware.default],
        addressBtCityService._city
      ))


    return _loaders;
  }


}


exports.default = AddressType;