const payment = require('../../../graphql/primary/types/payment.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class RentalHmPaymentService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.rental = app.$dbs.primary.rental;
  }

  async _paymentList(ids) {
    let data = await this.rental.hasManyListGQL({
      ids,
      child: 'payment'
    })
    return ids.map(id => data[id] ? data[id].map(c => new payment(c, this.app)) : []);
  }

  async _paymentCount(ids) {
    let data = await this.rental.hasManyListCount({
      ids,
      child: 'payment'
    })
    return data;
  }

}

module.exports = RentalHmPaymentService;