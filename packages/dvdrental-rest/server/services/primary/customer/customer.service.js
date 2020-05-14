const {
  BaseService
} = require('xc-core');

class CustomerService extends BaseService {

  constructor(app) {
    super(app);
    this.customer = app.$dbs.primary.customer;
  }

  async list(req, res) {
    let data = await this.customer.list(req.query);
    return data;
  }

  async create(req, res) {
    let data = await this.customer.insert(req.body);
    return data;
  }

  async read(req, res) {
    let data = await this.customer.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.customer.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.customer.delByPk(req.params.id);
    return data;
  }

  async count(req, res) {
    let data = await this.customer.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.customer.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.customer.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.customer.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.customer.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.customer.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async findOne(req, res) {
    let data = await this.customer.findOne(req.query);
    return data;
  }

  async createb(req, res) {
    let data = await this.customer.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.customer.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.customer.delb(req.body);
    return data;
  }

}

module.exports = CustomerService;