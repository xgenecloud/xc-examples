const film_actor = require('../../../graphql/primary/types/film_actor.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class ActorHmFilmActorService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.actor = app.$dbs.primary.actor;
  }

  async _filmActorList(ids) {
    let data = await this.actor.hasManyListGQL({
      ids,
      child: 'film_actor'
    })
    return ids.map(id => data[id] ? data[id].map(c => new film_actor(c, this.app)) : []);
  }

  async _filmActorCount(ids) {
    let data = await this.actor.hasManyListCount({
      ids,
      child: 'film_actor'
    })
    return data;
  }

}

module.exports = ActorHmFilmActorService;