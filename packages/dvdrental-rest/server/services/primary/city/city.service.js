const {
  BaseService
} = require('xc-core');

class CityService extends BaseService {

  constructor(app) {
    super(app);
    this.city = app.$dbs.primary.city;
  }

  async list(req, res) {
    let data = await this.city.list(req.query);
    return data;
  }

  async create(req, res) {
    let data = await this.city.insert(req.body);
    return data;
  }

  async read(req, res) {
    let data = await this.city.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.city.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.city.delByPk(req.params.id);
    return data;
  }

  async count(req, res) {
    let data = await this.city.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.city.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.city.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.city.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.city.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.city.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async findOne(req, res) {
    let data = await this.city.findOne(req.query);
    return data;
  }

  async createb(req, res) {
    let data = await this.city.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.city.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.city.delb(req.body);
    return data;
  }

}

module.exports = CityService;