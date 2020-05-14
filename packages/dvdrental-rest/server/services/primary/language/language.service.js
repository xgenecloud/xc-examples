const {
  BaseService
} = require('xc-core');

class LanguageService extends BaseService {

  constructor(app) {
    super(app);
    this.language = app.$dbs.primary.language;
  }

  async list(req, res) {
    let data = await this.language.list(req.query);
    return data;
  }

  async create(req, res) {
    let data = await this.language.insert(req.body);
    return data;
  }

  async read(req, res) {
    let data = await this.language.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.language.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.language.delByPk(req.params.id);
    return data;
  }

  async count(req, res) {
    let data = await this.language.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.language.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.language.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.language.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.language.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.language.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async findOne(req, res) {
    let data = await this.language.findOne(req.query);
    return data;
  }

  async createb(req, res) {
    let data = await this.language.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.language.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.language.delb(req.body);
    return data;
  }

}

module.exports = LanguageService;