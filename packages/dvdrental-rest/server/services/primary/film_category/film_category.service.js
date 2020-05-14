const {
  BaseService
} = require('xc-core');

class FilmCategoryService extends BaseService {

  constructor(app) {
    super(app);
    this.film_category = app.$dbs.primary.film_category;
  }

  async list(req, res) {
    let data = await this.film_category.list(req.query);
    return data;
  }

  async create(req, res) {
    let data = await this.film_category.insert(req.body);
    return data;
  }

  async read(req, res) {
    let data = await this.film_category.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.film_category.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.film_category.delByPk(req.params.id);
    return data;
  }

  async count(req, res) {
    let data = await this.film_category.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.film_category.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.film_category.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.film_category.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.film_category.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.film_category.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async findOne(req, res) {
    let data = await this.film_category.findOne(req.query);
    return data;
  }

  async createb(req, res) {
    let data = await this.film_category.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.film_category.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.film_category.delb(req.body);
    return data;
  }

}

module.exports = FilmCategoryService;