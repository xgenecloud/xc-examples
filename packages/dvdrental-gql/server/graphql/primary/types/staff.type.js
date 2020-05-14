const {
  Loader,
  BaseType
} = require('xc-core');

class StaffType extends BaseType {

  constructor(args = {}, app = {}) {
    super({
      app
    })

    Object.assign(this, args);

    if (!StaffType.$loaders) {
      StaffType.$loaders = StaffType._mapLoaders(app);
    }


    /* has many middlewares */
    this.PaymentMiddleware = this.app.$middlewares.primary.PaymentMiddleware;
    this.RentalMiddleware = this.app.$middlewares.primary.RentalMiddleware;

    /* belongs to middlewares */
    this.StoreMiddleware = this.app.$middlewares.primary.StoreMiddleware;
    this.AddressMiddleware = this.app.$middlewares.primary.AddressMiddleware;

  }


  /* has many type in types */
  async PaymentList(args, context, info) {
    return await StaffType.$loaders._paymentList.load([this.staff_id, args, context, info]);
  }
  async PaymentCount(args, context, info) {
    return await StaffType.$loaders._paymentCount.load([this.staff_id, args, context, info]);
  }
  async RentalList(args, context, info) {
    return await StaffType.$loaders._rentalList.load([this.staff_id, args, context, info]);
  }
  async RentalCount(args, context, info) {
    return await StaffType.$loaders._rentalCount.load([this.staff_id, args, context, info]);
  }

  /* belongs to type in types */
  async Store(args, context, info) {
    return await StaffType.$loaders._store_staff.load([this.store_id, args, context, info]);
  }
  async Address(args, context, info) {
    return await StaffType.$loaders._address_staff.load([this.address_id, args, context, info]);
  }


  static _mapLoaders(app) {
    const _loaders = {};

    /* has many loaders */
    const staffHmPaymentService = app.$services.primary.StaffHmPaymentService;

    _loaders._paymentList = Loader.get(
      StaffType.applyMiddlewareForLoader(
        [app.$middlewares.primary.PaymentMiddleware.default],
        staffHmPaymentService._paymentList
      ))

    _loaders._paymentCount = Loader.get(
      StaffType.applyMiddlewareForLoader(
        [app.$middlewares.primary.PaymentMiddleware.default],
        staffHmPaymentService._paymentCount
      ))

    const staffHmRentalService = app.$services.primary.StaffHmRentalService;

    _loaders._rentalList = Loader.get(
      StaffType.applyMiddlewareForLoader(
        [app.$middlewares.primary.RentalMiddleware.default],
        staffHmRentalService._rentalList
      ))

    _loaders._rentalCount = Loader.get(
      StaffType.applyMiddlewareForLoader(
        [app.$middlewares.primary.RentalMiddleware.default],
        staffHmRentalService._rentalCount
      ))


    /* belongs to loaders */

    const staffBtStoreService = app.$services.primary.StaffBtStoreService;

    _loaders._store_staff = Loader.get(
      StaffType.applyMiddlewareForLoader(
        [app.$middlewares.primary.StoreMiddleware.default],
        staffBtStoreService._store
      ))



    const staffBtAddressService = app.$services.primary.StaffBtAddressService;

    _loaders._address_staff = Loader.get(
      StaffType.applyMiddlewareForLoader(
        [app.$middlewares.primary.AddressMiddleware.default],
        staffBtAddressService._address
      ))


    return _loaders;
  }


}


exports.default = StaffType;