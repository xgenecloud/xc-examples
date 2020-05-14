const {
  BaseService
} = require('xc-core');

class PaymentService extends BaseService {

  constructor(app) {
    super(app);
    this.payment = app.$dbs.primary.payment;
  }

  async list(req, res) {
    let data = await this.payment.list(req.query);
    return data;
  }

  async create(req, res) {
    let data = await this.payment.insert(req.body);
    return data;
  }

  async read(req, res) {
    let data = await this.payment.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.payment.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.payment.delByPk(req.params.id);
    return data;
  }

  async count(req, res) {
    let data = await this.payment.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.payment.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.payment.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.payment.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.payment.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.payment.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async findOne(req, res) {
    let data = await this.payment.findOne(req.query);
    return data;
  }

  async createb(req, res) {
    let data = await this.payment.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.payment.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.payment.delb(req.body);
    return data;
  }

}

module.exports = PaymentService;