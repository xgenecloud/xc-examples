const _ = require('lodash')
const {
  BaseServiceGql
} = require('xc-core');

class CustomerBtStoreService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.store = app.$dbs.primary.store;
  }

  async _store(ids) {

    const data = await this.store.list({
      where: `(store_id,in,${ids.join(',')})`
    })

    let gs = _.groupBy(data, 'store_id')
    const store = require('../../../graphql/primary/types/store.type').default;
    return ids.map(async id => new store(gs[id][0], this.app))

  }

}

module.exports = CustomerBtStoreService;