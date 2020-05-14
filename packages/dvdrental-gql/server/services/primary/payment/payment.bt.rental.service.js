const _ = require('lodash')
const {
  BaseServiceGql
} = require('xc-core');

class PaymentBtRentalService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.rental = app.$dbs.primary.rental;
  }

  async _rental(ids) {

    const data = await this.rental.list({
      where: `(rental_id,in,${ids.join(',')})`
    })

    let gs = _.groupBy(data, 'rental_id')
    const rental = require('../../../graphql/primary/types/rental.type').default;
    return ids.map(async id => new rental(gs[id][0], this.app))

  }

}

module.exports = PaymentBtRentalService;