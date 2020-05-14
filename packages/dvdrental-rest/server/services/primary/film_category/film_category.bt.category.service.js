const {
  BaseService
} = require('xc-core');

class FilmCategoryBtCategoryService extends BaseService {

  constructor(app) {
    super(app);
    this.film_category = app.$dbs.primary.film_category;
  }

  async belongsTo(req, res) {
    return await this.film_category.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = FilmCategoryBtCategoryService;