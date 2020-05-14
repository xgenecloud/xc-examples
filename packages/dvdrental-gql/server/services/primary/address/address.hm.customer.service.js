const customer = require('../../../graphql/primary/types/customer.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class AddressHmCustomerService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.address = app.$dbs.primary.address;
  }

  async _customerList(ids) {
    let data = await this.address.hasManyListGQL({
      ids,
      child: 'customer'
    })
    return ids.map(id => data[id] ? data[id].map(c => new customer(c, this.app)) : []);
  }

  async _customerCount(ids) {
    let data = await this.address.hasManyListCount({
      ids,
      child: 'customer'
    })
    return data;
  }

}

module.exports = AddressHmCustomerService;