const {
  BaseService
} = require('xc-core');

class FilmActorBtActorService extends BaseService {

  constructor(app) {
    super(app);
    this.film_actor = app.$dbs.primary.film_actor;
  }

  async belongsTo(req, res) {
    return await this.film_actor.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = FilmActorBtActorService;