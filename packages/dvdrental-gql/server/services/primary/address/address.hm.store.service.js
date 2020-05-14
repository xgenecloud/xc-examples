const store = require('../../../graphql/primary/types/store.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class AddressHmStoreService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.address = app.$dbs.primary.address;
  }

  async _storeList(ids) {
    let data = await this.address.hasManyListGQL({
      ids,
      child: 'store'
    })
    return ids.map(id => data[id] ? data[id].map(c => new store(c, this.app)) : []);
  }

  async _storeCount(ids) {
    let data = await this.address.hasManyListCount({
      ids,
      child: 'store'
    })
    return data;
  }

}

module.exports = AddressHmStoreService;