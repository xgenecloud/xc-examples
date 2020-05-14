const {
  BaseService
} = require('xc-core');

class RentalBtInventoryService extends BaseService {

  constructor(app) {
    super(app);
    this.rental = app.$dbs.primary.rental;
  }

  async belongsTo(req, res) {
    return await this.rental.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = RentalBtInventoryService;