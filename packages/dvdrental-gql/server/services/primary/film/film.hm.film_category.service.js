const film_category = require('../../../graphql/primary/types/film_category.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class FilmHmFilmCategoryService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.film = app.$dbs.primary.film;
  }

  async _filmCategoryList(ids) {
    let data = await this.film.hasManyListGQL({
      ids,
      child: 'film_category'
    })
    return ids.map(id => data[id] ? data[id].map(c => new film_category(c, this.app)) : []);
  }

  async _filmCategoryCount(ids) {
    let data = await this.film.hasManyListCount({
      ids,
      child: 'film_category'
    })
    return data;
  }

}

module.exports = FilmHmFilmCategoryService;