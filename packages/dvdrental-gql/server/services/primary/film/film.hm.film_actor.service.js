const film_actor = require('../../../graphql/primary/types/film_actor.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class FilmHmFilmActorService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.film = app.$dbs.primary.film;
  }

  async _filmActorList(ids) {
    let data = await this.film.hasManyListGQL({
      ids,
      child: 'film_actor'
    })
    return ids.map(id => data[id] ? data[id].map(c => new film_actor(c, this.app)) : []);
  }

  async _filmActorCount(ids) {
    let data = await this.film.hasManyListCount({
      ids,
      child: 'film_actor'
    })
    return data;
  }

}

module.exports = FilmHmFilmActorService;