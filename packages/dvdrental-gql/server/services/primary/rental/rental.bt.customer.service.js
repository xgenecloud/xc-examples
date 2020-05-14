const _ = require('lodash')
const {
  BaseServiceGql
} = require('xc-core');

class RentalBtCustomerService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.customer = app.$dbs.primary.customer;
  }

  async _customer(ids) {

    const data = await this.customer.list({
      where: `(customer_id,in,${ids.join(',')})`
    })

    let gs = _.groupBy(data, 'customer_id')
    const customer = require('../../../graphql/primary/types/customer.type').default;
    return ids.map(async id => new customer(gs[id][0], this.app))

  }

}

module.exports = RentalBtCustomerService;