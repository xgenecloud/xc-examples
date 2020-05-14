const _ = require('lodash')
const {
  BaseServiceGql
} = require('xc-core');

class FilmCategoryBtCategoryService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.category = app.$dbs.primary.category;
  }

  async _category(ids) {

    const data = await this.category.list({
      where: `(category_id,in,${ids.join(',')})`
    })

    let gs = _.groupBy(data, 'category_id')
    const category = require('../../../graphql/primary/types/category.type').default;
    return ids.map(async id => new category(gs[id][0], this.app))

  }

}

module.exports = FilmCategoryBtCategoryService;