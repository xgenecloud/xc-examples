const _ = require('lodash')
const {
  BaseServiceGql
} = require('xc-core');

class RentalBtInventoryService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.inventory = app.$dbs.primary.inventory;
  }

  async _inventory(ids) {

    const data = await this.inventory.list({
      where: `(inventory_id,in,${ids.join(',')})`
    })

    let gs = _.groupBy(data, 'inventory_id')
    const inventory = require('../../../graphql/primary/types/inventory.type').default;
    return ids.map(async id => new inventory(gs[id][0], this.app))

  }

}

module.exports = RentalBtInventoryService;