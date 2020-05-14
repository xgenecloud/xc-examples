const _ = require('lodash')
const {
  BaseServiceGql
} = require('xc-core');

class CityBtCountryService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.country = app.$dbs.primary.country;
  }

  async _country(ids) {

    const data = await this.country.list({
      where: `(country_id,in,${ids.join(',')})`
    })

    let gs = _.groupBy(data, 'country_id')
    const country = require('../../../graphql/primary/types/country.type').default;
    return ids.map(async id => new country(gs[id][0], this.app))

  }

}

module.exports = CityBtCountryService;