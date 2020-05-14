const {
  BaseService
} = require('xc-core');

class AddressService extends BaseService {

  constructor(app) {
    super(app);
    this.address = app.$dbs.primary.address;
  }

  async list(req, res) {
    let data = await this.address.list(req.query);
    return data;
  }

  async create(req, res) {
    let data = await this.address.insert(req.body);
    return data;
  }

  async read(req, res) {
    let data = await this.address.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.address.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.address.delByPk(req.params.id);
    return data;
  }

  async count(req, res) {
    let data = await this.address.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.address.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.address.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.address.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.address.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.address.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async findOne(req, res) {
    let data = await this.address.findOne(req.query);
    return data;
  }

  async createb(req, res) {
    let data = await this.address.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.address.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.address.delb(req.body);
    return data;
  }

}

module.exports = AddressService;