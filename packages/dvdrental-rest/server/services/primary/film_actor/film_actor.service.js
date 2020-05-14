const {
  BaseService
} = require('xc-core');

class FilmActorService extends BaseService {

  constructor(app) {
    super(app);
    this.film_actor = app.$dbs.primary.film_actor;
  }

  async list(req, res) {
    let data = await this.film_actor.list(req.query);
    return data;
  }

  async create(req, res) {
    let data = await this.film_actor.insert(req.body);
    return data;
  }

  async read(req, res) {
    let data = await this.film_actor.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.film_actor.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.film_actor.delByPk(req.params.id);
    return data;
  }

  async count(req, res) {
    let data = await this.film_actor.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.film_actor.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.film_actor.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.film_actor.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.film_actor.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.film_actor.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async findOne(req, res) {
    let data = await this.film_actor.findOne(req.query);
    return data;
  }

  async createb(req, res) {
    let data = await this.film_actor.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.film_actor.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.film_actor.delb(req.body);
    return data;
  }

}

module.exports = FilmActorService;