const {
  BaseService
} = require('xc-core');

class StoreBtAddressService extends BaseService {

  constructor(app) {
    super(app);
    this.store = app.$dbs.primary.store;
  }

  async belongsTo(req, res) {
    return await this.store.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = StoreBtAddressService;