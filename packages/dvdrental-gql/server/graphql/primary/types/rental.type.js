const {
  Loader,
  BaseType
} = require('xc-core');

class RentalType extends BaseType {

  constructor(args = {}, app = {}) {
    super({
      app
    })

    Object.assign(this, args);

    if (!RentalType.$loaders) {
      RentalType.$loaders = RentalType._mapLoaders(app);
    }


    this.PaymentMiddleware = this.app.$middlewares.primary.PaymentMiddleware;

    /* belongs to middlewares */
    this.StaffMiddleware = this.app.$middlewares.primary.StaffMiddleware;
    this.InventoryMiddleware = this.app.$middlewares.primary.InventoryMiddleware;
    this.CustomerMiddleware = this.app.$middlewares.primary.CustomerMiddleware;

  }

  async PaymentList(args, context, info) {
    return await RentalType.$loaders._paymentList.load([this.rental_id, args, context, info]);
  }
  async PaymentCount(args, context, info) {
    return await RentalType.$loaders._paymentCount.load([this.rental_id, args, context, info]);
  }

  /* belongs to type in types */
  async Staff(args, context, info) {
    return await RentalType.$loaders._staff_rental.load([this.staff_id, args, context, info]);
  }
  async Inventory(args, context, info) {
    return await RentalType.$loaders._inventory_rental.load([this.inventory_id, args, context, info]);
  }
  async Customer(args, context, info) {
    return await RentalType.$loaders._customer_rental.load([this.customer_id, args, context, info]);
  }


  static _mapLoaders(app) {
    const _loaders = {};

    const rentalHmPaymentService = app.$services.primary.RentalHmPaymentService;

    _loaders._paymentList = Loader.get(
      RentalType.applyMiddlewareForLoader(
        [app.$middlewares.primary.PaymentMiddleware.default],
        rentalHmPaymentService._paymentList
      ))

    _loaders._paymentCount = Loader.get(
      RentalType.applyMiddlewareForLoader(
        [app.$middlewares.primary.PaymentMiddleware.default],
        rentalHmPaymentService._paymentCount
      ))


    /* belongs to loaders */

    const rentalBtStaffService = app.$services.primary.RentalBtStaffService;

    _loaders._staff_rental = Loader.get(
      RentalType.applyMiddlewareForLoader(
        [app.$middlewares.primary.StaffMiddleware.default],
        rentalBtStaffService._staff
      ))



    const rentalBtInventoryService = app.$services.primary.RentalBtInventoryService;

    _loaders._inventory_rental = Loader.get(
      RentalType.applyMiddlewareForLoader(
        [app.$middlewares.primary.InventoryMiddleware.default],
        rentalBtInventoryService._inventory
      ))



    const rentalBtCustomerService = app.$services.primary.RentalBtCustomerService;

    _loaders._customer_rental = Loader.get(
      RentalType.applyMiddlewareForLoader(
        [app.$middlewares.primary.CustomerMiddleware.default],
        rentalBtCustomerService._customer
      ))


    return _loaders;
  }


}


exports.default = RentalType;