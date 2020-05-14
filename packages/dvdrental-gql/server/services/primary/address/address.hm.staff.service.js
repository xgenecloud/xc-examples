const staff = require('../../../graphql/primary/types/staff.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class AddressHmStaffService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.address = app.$dbs.primary.address;
  }

  async _staffList(ids) {
    let data = await this.address.hasManyListGQL({
      ids,
      child: 'staff'
    })
    return ids.map(id => data[id] ? data[id].map(c => new staff(c, this.app)) : []);
  }

  async _staffCount(ids) {
    let data = await this.address.hasManyListCount({
      ids,
      child: 'staff'
    })
    return data;
  }

}

module.exports = AddressHmStaffService;