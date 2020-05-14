const film = require('../../../graphql/primary/types/film.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class LanguageHmFilmService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.language = app.$dbs.primary.language;
  }

  async _filmList(ids) {
    let data = await this.language.hasManyListGQL({
      ids,
      child: 'film'
    })
    return ids.map(id => data[id] ? data[id].map(c => new film(c, this.app)) : []);
  }

  async _filmCount(ids) {
    let data = await this.language.hasManyListCount({
      ids,
      child: 'film'
    })
    return data;
  }

}

module.exports = LanguageHmFilmService;