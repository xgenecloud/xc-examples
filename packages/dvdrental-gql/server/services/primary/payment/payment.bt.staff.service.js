const _ = require('lodash')
const {
  BaseServiceGql
} = require('xc-core');

class PaymentBtStaffService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.staff = app.$dbs.primary.staff;
  }

  async _staff(ids) {

    const data = await this.staff.list({
      where: `(staff_id,in,${ids.join(',')})`
    })

    let gs = _.groupBy(data, 'staff_id')
    const staff = require('../../../graphql/primary/types/staff.type').default;
    return ids.map(async id => new staff(gs[id][0], this.app))

  }

}

module.exports = PaymentBtStaffService;