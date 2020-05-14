const {
  BaseService
} = require('xc-core');

class AddressBtCityService extends BaseService {

  constructor(app) {
    super(app);
    this.address = app.$dbs.primary.address;
  }

  async belongsTo(req, res) {
    return await this.address.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = AddressBtCityService;