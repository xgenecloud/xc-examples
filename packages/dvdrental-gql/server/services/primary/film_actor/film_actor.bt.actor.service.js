const _ = require('lodash')
const {
  BaseServiceGql
} = require('xc-core');

class FilmActorBtActorService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.actor = app.$dbs.primary.actor;
  }

  async _actor(ids) {

    const data = await this.actor.list({
      where: `(actor_id,in,${ids.join(',')})`
    })

    let gs = _.groupBy(data, 'actor_id')
    const actor = require('../../../graphql/primary/types/actor.type').default;
    return ids.map(async id => new actor(gs[id][0], this.app))

  }

}

module.exports = FilmActorBtActorService;