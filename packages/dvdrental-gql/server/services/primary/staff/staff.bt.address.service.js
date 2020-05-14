const _ = require('lodash')
const {
  BaseServiceGql
} = require('xc-core');

class StaffBtAddressService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.address = app.$dbs.primary.address;
  }

  async _address(ids) {

    const data = await this.address.list({
      where: `(address_id,in,${ids.join(',')})`
    })

    let gs = _.groupBy(data, 'address_id')
    const address = require('../../../graphql/primary/types/address.type').default;
    return ids.map(async id => new address(gs[id][0], this.app))

  }

}

module.exports = StaffBtAddressService;