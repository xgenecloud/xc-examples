const payment = require('../../../graphql/primary/types/payment.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class CustomerHmPaymentService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.customer = app.$dbs.primary.customer;
  }

  async _paymentList(ids) {
    let data = await this.customer.hasManyListGQL({
      ids,
      child: 'payment'
    })
    return ids.map(id => data[id] ? data[id].map(c => new payment(c, this.app)) : []);
  }

  async _paymentCount(ids) {
    let data = await this.customer.hasManyListCount({
      ids,
      child: 'payment'
    })
    return data;
  }

}

module.exports = CustomerHmPaymentService;