const {
  BaseService
} = require('xc-core');

class FilmService extends BaseService {

  constructor(app) {
    super(app);
    this.film = app.$dbs.primary.film;
  }

  async list(req, res) {
    let data = await this.film.list(req.query);
    return data;
  }

  async create(req, res) {
    let data = await this.film.insert(req.body);
    return data;
  }

  async read(req, res) {
    let data = await this.film.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.film.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.film.delByPk(req.params.id);
    return data;
  }

  async count(req, res) {
    let data = await this.film.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.film.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.film.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.film.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.film.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.film.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async findOne(req, res) {
    let data = await this.film.findOne(req.query);
    return data;
  }

  async createb(req, res) {
    let data = await this.film.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.film.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.film.delb(req.body);
    return data;
  }

}

module.exports = FilmService;