const rental = require('../../../graphql/primary/types/rental.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class InventoryHmRentalService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.inventory = app.$dbs.primary.inventory;
  }

  async _rentalList(ids) {
    let data = await this.inventory.hasManyListGQL({
      ids,
      child: 'rental'
    })
    return ids.map(id => data[id] ? data[id].map(c => new rental(c, this.app)) : []);
  }

  async _rentalCount(ids) {
    let data = await this.inventory.hasManyListCount({
      ids,
      child: 'rental'
    })
    return data;
  }

}

module.exports = InventoryHmRentalService;