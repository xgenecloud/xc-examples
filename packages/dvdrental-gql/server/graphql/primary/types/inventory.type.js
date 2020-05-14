const {
  Loader,
  BaseType
} = require('xc-core');

class InventoryType extends BaseType {

  constructor(args = {}, app = {}) {
    super({
      app
    })

    Object.assign(this, args);

    if (!InventoryType.$loaders) {
      InventoryType.$loaders = InventoryType._mapLoaders(app);
    }


    this.RentalMiddleware = this.app.$middlewares.primary.RentalMiddleware;

    /* belongs to middlewares */
    this.StoreMiddleware = this.app.$middlewares.primary.StoreMiddleware;
    this.FilmMiddleware = this.app.$middlewares.primary.FilmMiddleware;

  }

  async RentalList(args, context, info) {
    return await InventoryType.$loaders._rentalList.load([this.inventory_id, args, context, info]);
  }
  async RentalCount(args, context, info) {
    return await InventoryType.$loaders._rentalCount.load([this.inventory_id, args, context, info]);
  }

  /* belongs to type in types */
  async Store(args, context, info) {
    return await InventoryType.$loaders._store_inventory.load([this.store_id, args, context, info]);
  }
  async Film(args, context, info) {
    return await InventoryType.$loaders._film_inventory.load([this.film_id, args, context, info]);
  }


  static _mapLoaders(app) {
    const _loaders = {};

    const inventoryHmRentalService = app.$services.primary.InventoryHmRentalService;

    _loaders._rentalList = Loader.get(
      InventoryType.applyMiddlewareForLoader(
        [app.$middlewares.primary.RentalMiddleware.default],
        inventoryHmRentalService._rentalList
      ))

    _loaders._rentalCount = Loader.get(
      InventoryType.applyMiddlewareForLoader(
        [app.$middlewares.primary.RentalMiddleware.default],
        inventoryHmRentalService._rentalCount
      ))


    /* belongs to loaders */

    const inventoryBtStoreService = app.$services.primary.InventoryBtStoreService;

    _loaders._store_inventory = Loader.get(
      InventoryType.applyMiddlewareForLoader(
        [app.$middlewares.primary.StoreMiddleware.default],
        inventoryBtStoreService._store
      ))



    const inventoryBtFilmService = app.$services.primary.InventoryBtFilmService;

    _loaders._film_inventory = Loader.get(
      InventoryType.applyMiddlewareForLoader(
        [app.$middlewares.primary.FilmMiddleware.default],
        inventoryBtFilmService._film
      ))


    return _loaders;
  }


}


exports.default = InventoryType;