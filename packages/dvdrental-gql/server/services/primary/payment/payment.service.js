const payment = require('../../../graphql/primary/types/payment.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class PaymentService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.payment = app.$dbs.primary.payment;
  }

  async create(args) {
    let data = await this.payment.insert(args.data);
    return new payment(data, this.app);
  }

  async createb(args) {
    let data = await this.payment.insertb(args.data);
    return data;
  }

  async read(args) {
    let data = await this.payment.readByPk(args.id);
    return new payment(data, this.app);
  }

  async update(args) {
    let data = await this.payment.updateByPk(args.id, args.data);
    return data;
  }

  async delete(args) {
    let data = await this.payment.delByPk(args.id);
    return data;
  }

  async updateb(args) {
    let data = await this.payment.updateb(args.data);
    return data;
  }

  async deleteb(args) {
    let data = await this.payment.delb(args.data);
    return data;
  }

  async count(args) {
    let data = await this.payment.countByPk(args);
    return data.count;
  }

  async exists(args) {
    let data = await this.payment.exists(args.id);
    return data;
  }

  async groupBy(args) {
    let data = await this.payment.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.payment.aggregate(args);
    return data;
  }

  async list(args) {
    let data = (await this.payment.list(args)).map(d => new payment(d, this.app));
    return data;
  }

  async distribution(args) {
    let data = await this.payment.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = (await this.payment.distinct(args)).map(d => new payment(d, this.app));
    return data;
  }

  async findOne(args) {
    let data = await this.payment.findOne(args);
    return new payment(data, this.app);
  }

}

module.exports = PaymentService;