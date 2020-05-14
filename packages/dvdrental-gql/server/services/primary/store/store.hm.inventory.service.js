const inventory = require('../../../graphql/primary/types/inventory.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class StoreHmInventoryService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.store = app.$dbs.primary.store;
  }

  async _inventoryList(ids) {
    let data = await this.store.hasManyListGQL({
      ids,
      child: 'inventory'
    })
    return ids.map(id => data[id] ? data[id].map(c => new inventory(c, this.app)) : []);
  }

  async _inventoryCount(ids) {
    let data = await this.store.hasManyListCount({
      ids,
      child: 'inventory'
    })
    return data;
  }

}

module.exports = StoreHmInventoryService;