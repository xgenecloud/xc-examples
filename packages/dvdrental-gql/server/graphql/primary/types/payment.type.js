const {
  Loader,
  BaseType
} = require('xc-core');

class PaymentType extends BaseType {

  constructor(args = {}, app = {}) {
    super({
      app
    })

    Object.assign(this, args);

    if (!PaymentType.$loaders) {
      PaymentType.$loaders = PaymentType._mapLoaders(app);
    }



    /* belongs to middlewares */
    this.RentalMiddleware = this.app.$middlewares.primary.RentalMiddleware;
    this.CustomerMiddleware = this.app.$middlewares.primary.CustomerMiddleware;
    this.StaffMiddleware = this.app.$middlewares.primary.StaffMiddleware;

  }



  /* belongs to type in types */
  async Rental(args, context, info) {
    return await PaymentType.$loaders._rental_payment.load([this.rental_id, args, context, info]);
  }
  async Customer(args, context, info) {
    return await PaymentType.$loaders._customer_payment.load([this.customer_id, args, context, info]);
  }
  async Staff(args, context, info) {
    return await PaymentType.$loaders._staff_payment.load([this.staff_id, args, context, info]);
  }


  static _mapLoaders(app) {
    const _loaders = {};


    /* belongs to loaders */

    const paymentBtRentalService = app.$services.primary.PaymentBtRentalService;

    _loaders._rental_payment = Loader.get(
      PaymentType.applyMiddlewareForLoader(
        [app.$middlewares.primary.RentalMiddleware.default],
        paymentBtRentalService._rental
      ))



    const paymentBtCustomerService = app.$services.primary.PaymentBtCustomerService;

    _loaders._customer_payment = Loader.get(
      PaymentType.applyMiddlewareForLoader(
        [app.$middlewares.primary.CustomerMiddleware.default],
        paymentBtCustomerService._customer
      ))



    const paymentBtStaffService = app.$services.primary.PaymentBtStaffService;

    _loaders._staff_payment = Loader.get(
      PaymentType.applyMiddlewareForLoader(
        [app.$middlewares.primary.StaffMiddleware.default],
        paymentBtStaffService._staff
      ))


    return _loaders;
  }


}


exports.default = PaymentType;