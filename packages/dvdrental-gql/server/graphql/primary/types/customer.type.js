const {
  Loader,
  BaseType
} = require('xc-core');

class CustomerType extends BaseType {

  constructor(args = {}, app = {}) {
    super({
      app
    })

    Object.assign(this, args);

    if (!CustomerType.$loaders) {
      CustomerType.$loaders = CustomerType._mapLoaders(app);
    }


    /* has many middlewares */
    this.PaymentMiddleware = this.app.$middlewares.primary.PaymentMiddleware;
    this.RentalMiddleware = this.app.$middlewares.primary.RentalMiddleware;

    /* belongs to middlewares */
    this.AddressMiddleware = this.app.$middlewares.primary.AddressMiddleware;
    this.StoreMiddleware = this.app.$middlewares.primary.StoreMiddleware;

  }


  /* has many type in types */
  async PaymentList(args, context, info) {
    return await CustomerType.$loaders._paymentList.load([this.customer_id, args, context, info]);
  }
  async PaymentCount(args, context, info) {
    return await CustomerType.$loaders._paymentCount.load([this.customer_id, args, context, info]);
  }
  async RentalList(args, context, info) {
    return await CustomerType.$loaders._rentalList.load([this.customer_id, args, context, info]);
  }
  async RentalCount(args, context, info) {
    return await CustomerType.$loaders._rentalCount.load([this.customer_id, args, context, info]);
  }

  /* belongs to type in types */
  async Address(args, context, info) {
    return await CustomerType.$loaders._address_customer.load([this.address_id, args, context, info]);
  }
  async Store(args, context, info) {
    return await CustomerType.$loaders._store_customer.load([this.store_id, args, context, info]);
  }


  static _mapLoaders(app) {
    const _loaders = {};

    /* has many loaders */
    const customerHmPaymentService = app.$services.primary.CustomerHmPaymentService;

    _loaders._paymentList = Loader.get(
      CustomerType.applyMiddlewareForLoader(
        [app.$middlewares.primary.PaymentMiddleware.default],
        customerHmPaymentService._paymentList
      ))

    _loaders._paymentCount = Loader.get(
      CustomerType.applyMiddlewareForLoader(
        [app.$middlewares.primary.PaymentMiddleware.default],
        customerHmPaymentService._paymentCount
      ))

    const customerHmRentalService = app.$services.primary.CustomerHmRentalService;

    _loaders._rentalList = Loader.get(
      CustomerType.applyMiddlewareForLoader(
        [app.$middlewares.primary.RentalMiddleware.default],
        customerHmRentalService._rentalList
      ))

    _loaders._rentalCount = Loader.get(
      CustomerType.applyMiddlewareForLoader(
        [app.$middlewares.primary.RentalMiddleware.default],
        customerHmRentalService._rentalCount
      ))


    /* belongs to loaders */

    const customerBtAddressService = app.$services.primary.CustomerBtAddressService;

    _loaders._address_customer = Loader.get(
      CustomerType.applyMiddlewareForLoader(
        [app.$middlewares.primary.AddressMiddleware.default],
        customerBtAddressService._address
      ))



    const customerBtStoreService = app.$services.primary.CustomerBtStoreService;

    _loaders._store_customer = Loader.get(
      CustomerType.applyMiddlewareForLoader(
        [app.$middlewares.primary.StoreMiddleware.default],
        customerBtStoreService._store
      ))


    return _loaders;
  }


}


exports.default = CustomerType;