const {
  BaseService
} = require('xc-core');

class StaffBtAddressService extends BaseService {

  constructor(app) {
    super(app);
    this.staff = app.$dbs.primary.staff;
  }

  async belongsTo(req, res) {
    return await this.staff.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = StaffBtAddressService;