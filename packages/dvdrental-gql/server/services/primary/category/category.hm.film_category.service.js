const film_category = require('../../../graphql/primary/types/film_category.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class CategoryHmFilmCategoryService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.category = app.$dbs.primary.category;
  }

  async _filmCategoryList(ids) {
    let data = await this.category.hasManyListGQL({
      ids,
      child: 'film_category'
    })
    return ids.map(id => data[id] ? data[id].map(c => new film_category(c, this.app)) : []);
  }

  async _filmCategoryCount(ids) {
    let data = await this.category.hasManyListCount({
      ids,
      child: 'film_category'
    })
    return data;
  }

}

module.exports = CategoryHmFilmCategoryService;