const {
  BaseService
} = require('xc-core');

class InventoryBtFilmService extends BaseService {

  constructor(app) {
    super(app);
    this.inventory = app.$dbs.primary.inventory;
  }

  async belongsTo(req, res) {
    return await this.inventory.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = InventoryBtFilmService;