const {
  BaseService
} = require('xc-core');

class CategoryService extends BaseService {

  constructor(app) {
    super(app);
    this.category = app.$dbs.primary.category;
  }

  async list(req, res) {
    let data = await this.category.list(req.query);
    return data;
  }

  async create(req, res) {
    let data = await this.category.insert(req.body);
    return data;
  }

  async read(req, res) {
    let data = await this.category.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.category.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.category.delByPk(req.params.id);
    return data;
  }

  async count(req, res) {
    let data = await this.category.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.category.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.category.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.category.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.category.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.category.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async findOne(req, res) {
    let data = await this.category.findOne(req.query);
    return data;
  }

  async createb(req, res) {
    let data = await this.category.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.category.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.category.delb(req.body);
    return data;
  }

}

module.exports = CategoryService;