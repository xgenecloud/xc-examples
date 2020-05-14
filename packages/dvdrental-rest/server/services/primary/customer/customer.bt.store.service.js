const {
  BaseService
} = require('xc-core');

class CustomerBtStoreService extends BaseService {

  constructor(app) {
    super(app);
    this.customer = app.$dbs.primary.customer;
  }

  async belongsTo(req, res) {
    return await this.customer.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = CustomerBtStoreService;