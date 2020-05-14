const staff = require('../../../graphql/primary/types/staff.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class StoreHmStaffService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.store = app.$dbs.primary.store;
  }

  async _staffList(ids) {
    let data = await this.store.hasManyListGQL({
      ids,
      child: 'staff'
    })
    return ids.map(id => data[id] ? data[id].map(c => new staff(c, this.app)) : []);
  }

  async _staffCount(ids) {
    let data = await this.store.hasManyListCount({
      ids,
      child: 'staff'
    })
    return data;
  }

}

module.exports = StoreHmStaffService;