const {
  BaseService
} = require('xc-core');

class PaymentBtCustomerService extends BaseService {

  constructor(app) {
    super(app);
    this.payment = app.$dbs.primary.payment;
  }

  async belongsTo(req, res) {
    return await this.payment.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = PaymentBtCustomerService;