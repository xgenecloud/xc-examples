const {
  BaseService
} = require('xc-core');

class FilmBtLanguageService extends BaseService {

  constructor(app) {
    super(app);
    this.film = app.$dbs.primary.film;
  }

  async belongsTo(req, res) {
    return await this.film.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = FilmBtLanguageService;