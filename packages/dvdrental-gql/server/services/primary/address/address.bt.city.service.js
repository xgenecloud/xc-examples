const _ = require('lodash')
const {
  BaseServiceGql
} = require('xc-core');

class AddressBtCityService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.city = app.$dbs.primary.city;
  }

  async _city(ids) {

    const data = await this.city.list({
      where: `(city_id,in,${ids.join(',')})`
    })

    let gs = _.groupBy(data, 'city_id')
    const city = require('../../../graphql/primary/types/city.type').default;
    return ids.map(async id => new city(gs[id][0], this.app))

  }

}

module.exports = AddressBtCityService;