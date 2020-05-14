const customer = require('../../../graphql/primary/types/customer.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class StoreHmCustomerService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.store = app.$dbs.primary.store;
  }

  async _customerList(ids) {
    let data = await this.store.hasManyListGQL({
      ids,
      child: 'customer'
    })
    return ids.map(id => data[id] ? data[id].map(c => new customer(c, this.app)) : []);
  }

  async _customerCount(ids) {
    let data = await this.store.hasManyListCount({
      ids,
      child: 'customer'
    })
    return data;
  }

}

module.exports = StoreHmCustomerService;