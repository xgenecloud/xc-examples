const {
  BaseService
} = require('xc-core');

class CountryService extends BaseService {

  constructor(app) {
    super(app);
    this.country = app.$dbs.primary.country;
  }

  async list(req, res) {
    let data = await this.country.list(req.query);
    return data;
  }

  async create(req, res) {
    let data = await this.country.insert(req.body);
    return data;
  }

  async read(req, res) {
    let data = await this.country.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.country.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.country.delByPk(req.params.id);
    return data;
  }

  async count(req, res) {
    let data = await this.country.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.country.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.country.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.country.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.country.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.country.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async findOne(req, res) {
    let data = await this.country.findOne(req.query);
    return data;
  }

  async createb(req, res) {
    let data = await this.country.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.country.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.country.delb(req.body);
    return data;
  }

}

module.exports = CountryService;