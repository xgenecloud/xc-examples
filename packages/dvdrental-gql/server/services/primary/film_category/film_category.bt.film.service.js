const _ = require('lodash')
const {
  BaseServiceGql
} = require('xc-core');

class FilmCategoryBtFilmService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.film = app.$dbs.primary.film;
  }

  async _film(ids) {

    const data = await this.film.list({
      where: `(film_id,in,${ids.join(',')})`
    })

    let gs = _.groupBy(data, 'film_id')
    const film = require('../../../graphql/primary/types/film.type').default;
    return ids.map(async id => new film(gs[id][0], this.app))

  }

}

module.exports = FilmCategoryBtFilmService;