const rental = require('../../../graphql/primary/types/rental.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class CustomerHmRentalService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.customer = app.$dbs.primary.customer;
  }

  async _rentalList(ids) {
    let data = await this.customer.hasManyListGQL({
      ids,
      child: 'rental'
    })
    return ids.map(id => data[id] ? data[id].map(c => new rental(c, this.app)) : []);
  }

  async _rentalCount(ids) {
    let data = await this.customer.hasManyListCount({
      ids,
      child: 'rental'
    })
    return data;
  }

}

module.exports = CustomerHmRentalService;