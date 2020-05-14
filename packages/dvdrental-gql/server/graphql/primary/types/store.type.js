const {
  Loader,
  BaseType
} = require('xc-core');

class StoreType extends BaseType {

  constructor(args = {}, app = {}) {
    super({
      app
    })

    Object.assign(this, args);

    if (!StoreType.$loaders) {
      StoreType.$loaders = StoreType._mapLoaders(app);
    }


    /* has many middlewares */
    this.CustomerMiddleware = this.app.$middlewares.primary.CustomerMiddleware;
    this.InventoryMiddleware = this.app.$middlewares.primary.InventoryMiddleware;
    this.StaffMiddleware = this.app.$middlewares.primary.StaffMiddleware;
    this.AddressMiddleware = this.app.$middlewares.primary.AddressMiddleware;

  }


  /* has many type in types */
  async CustomerList(args, context, info) {
    return await StoreType.$loaders._customerList.load([this.store_id, args, context, info]);
  }
  async CustomerCount(args, context, info) {
    return await StoreType.$loaders._customerCount.load([this.store_id, args, context, info]);
  }
  async InventoryList(args, context, info) {
    return await StoreType.$loaders._inventoryList.load([this.store_id, args, context, info]);
  }
  async InventoryCount(args, context, info) {
    return await StoreType.$loaders._inventoryCount.load([this.store_id, args, context, info]);
  }
  async StaffList(args, context, info) {
    return await StoreType.$loaders._staffList.load([this.store_id, args, context, info]);
  }
  async StaffCount(args, context, info) {
    return await StoreType.$loaders._staffCount.load([this.store_id, args, context, info]);
  }
  async Address(args, context, info) {
    return await StoreType.$loaders._address_store.load([this.address_id, args, context, info]);
  }


  static _mapLoaders(app) {
    const _loaders = {};

    /* has many loaders */
    const storeHmCustomerService = app.$services.primary.StoreHmCustomerService;

    _loaders._customerList = Loader.get(
      StoreType.applyMiddlewareForLoader(
        [app.$middlewares.primary.CustomerMiddleware.default],
        storeHmCustomerService._customerList
      ))

    _loaders._customerCount = Loader.get(
      StoreType.applyMiddlewareForLoader(
        [app.$middlewares.primary.CustomerMiddleware.default],
        storeHmCustomerService._customerCount
      ))

    const storeHmInventoryService = app.$services.primary.StoreHmInventoryService;

    _loaders._inventoryList = Loader.get(
      StoreType.applyMiddlewareForLoader(
        [app.$middlewares.primary.InventoryMiddleware.default],
        storeHmInventoryService._inventoryList
      ))

    _loaders._inventoryCount = Loader.get(
      StoreType.applyMiddlewareForLoader(
        [app.$middlewares.primary.InventoryMiddleware.default],
        storeHmInventoryService._inventoryCount
      ))

    const storeHmStaffService = app.$services.primary.StoreHmStaffService;

    _loaders._staffList = Loader.get(
      StoreType.applyMiddlewareForLoader(
        [app.$middlewares.primary.StaffMiddleware.default],
        storeHmStaffService._staffList
      ))

    _loaders._staffCount = Loader.get(
      StoreType.applyMiddlewareForLoader(
        [app.$middlewares.primary.StaffMiddleware.default],
        storeHmStaffService._staffCount
      ))


    const storeBtAddressService = app.$services.primary.StoreBtAddressService;

    _loaders._address_store = Loader.get(
      StoreType.applyMiddlewareForLoader(
        [app.$middlewares.primary.AddressMiddleware.default],
        storeBtAddressService._address
      ))


    return _loaders;
  }


}


exports.default = StoreType;