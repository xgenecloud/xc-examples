const {
  BaseService
} = require('xc-core');

class FilmTextService extends BaseService {

  constructor(app) {
    super(app);
    this.film_text = app.$dbs.primary.film_text;
  }

  async list(req, res) {
    let data = await this.film_text.list(req.query);
    return data;
  }

  async create(req, res) {
    let data = await this.film_text.insert(req.body);
    return data;
  }

  async read(req, res) {
    let data = await this.film_text.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.film_text.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.film_text.delByPk(req.params.id);
    return data;
  }

  async count(req, res) {
    let data = await this.film_text.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.film_text.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.film_text.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.film_text.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.film_text.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.film_text.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async findOne(req, res) {
    let data = await this.film_text.findOne(req.query);
    return data;
  }

  async createb(req, res) {
    let data = await this.film_text.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.film_text.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.film_text.delb(req.body);
    return data;
  }

}

module.exports = FilmTextService;