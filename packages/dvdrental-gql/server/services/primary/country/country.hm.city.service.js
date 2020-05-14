const city = require('../../../graphql/primary/types/city.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class CountryHmCityService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.country = app.$dbs.primary.country;
  }

  async _cityList(ids) {
    let data = await this.country.hasManyListGQL({
      ids,
      child: 'city'
    })
    return ids.map(id => data[id] ? data[id].map(c => new city(c, this.app)) : []);
  }

  async _cityCount(ids) {
    let data = await this.country.hasManyListCount({
      ids,
      child: 'city'
    })
    return data;
  }

}

module.exports = CountryHmCityService;