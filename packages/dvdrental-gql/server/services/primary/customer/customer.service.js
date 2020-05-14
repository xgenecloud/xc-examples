const customer = require('../../../graphql/primary/types/customer.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class CustomerService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.customer = app.$dbs.primary.customer;
  }

  async create(args) {
    let data = await this.customer.insert(args.data);
    return new customer(data, this.app);
  }

  async createb(args) {
    let data = await this.customer.insertb(args.data);
    return data;
  }

  async read(args) {
    let data = await this.customer.readByPk(args.id);
    return new customer(data, this.app);
  }

  async update(args) {
    let data = await this.customer.updateByPk(args.id, args.data);
    return data;
  }

  async delete(args) {
    let data = await this.customer.delByPk(args.id);
    return data;
  }

  async updateb(args) {
    let data = await this.customer.updateb(args.data);
    return data;
  }

  async deleteb(args) {
    let data = await this.customer.delb(args.data);
    return data;
  }

  async count(args) {
    let data = await this.customer.countByPk(args);
    return data.count;
  }

  async exists(args) {
    let data = await this.customer.exists(args.id);
    return data;
  }

  async groupBy(args) {
    let data = await this.customer.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.customer.aggregate(args);
    return data;
  }

  async list(args) {
    let data = (await this.customer.list(args)).map(d => new customer(d, this.app));
    return data;
  }

  async distribution(args) {
    let data = await this.customer.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = (await this.customer.distinct(args)).map(d => new customer(d, this.app));
    return data;
  }

  async findOne(args) {
    let data = await this.customer.findOne(args);
    return new customer(data, this.app);
  }

}

module.exports = CustomerService;