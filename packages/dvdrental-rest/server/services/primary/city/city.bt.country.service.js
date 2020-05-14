const {
  BaseService
} = require('xc-core');

class CityBtCountryService extends BaseService {

  constructor(app) {
    super(app);
    this.city = app.$dbs.primary.city;
  }

  async belongsTo(req, res) {
    return await this.city.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = CityBtCountryService;