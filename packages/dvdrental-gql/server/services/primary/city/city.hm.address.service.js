const address = require('../../../graphql/primary/types/address.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class CityHmAddressService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.city = app.$dbs.primary.city;
  }

  async _addressList(ids) {
    let data = await this.city.hasManyListGQL({
      ids,
      child: 'address'
    })
    return ids.map(id => data[id] ? data[id].map(c => new address(c, this.app)) : []);
  }

  async _addressCount(ids) {
    let data = await this.city.hasManyListCount({
      ids,
      child: 'address'
    })
    return data;
  }

}

module.exports = CityHmAddressService;