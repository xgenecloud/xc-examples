const _ = require('lodash')
const {
  BaseServiceGql
} = require('xc-core');

class FilmBtLanguageService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.language = app.$dbs.primary.language;
  }

  async _language(ids) {

    const data = await this.language.list({
      where: `(language_id,in,${ids.join(',')})`
    })

    let gs = _.groupBy(data, 'language_id')
    const language = require('../../../graphql/primary/types/language.type').default;
    return ids.map(async id => new language(gs[id][0], this.app))

  }

}

module.exports = FilmBtLanguageService;