const rental = require('../../../graphql/primary/types/rental.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class StaffHmRentalService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.staff = app.$dbs.primary.staff;
  }

  async _rentalList(ids) {
    let data = await this.staff.hasManyListGQL({
      ids,
      child: 'rental'
    })
    return ids.map(id => data[id] ? data[id].map(c => new rental(c, this.app)) : []);
  }

  async _rentalCount(ids) {
    let data = await this.staff.hasManyListCount({
      ids,
      child: 'rental'
    })
    return data;
  }

}

module.exports = StaffHmRentalService;