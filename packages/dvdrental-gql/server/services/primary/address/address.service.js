const address = require('../../../graphql/primary/types/address.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class AddressService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.address = app.$dbs.primary.address;
  }

  async create(args) {
    let data = await this.address.insert(args.data);
    return new address(data, this.app);
  }

  async createb(args) {
    let data = await this.address.insertb(args.data);
    return data;
  }

  async read(args) {
    let data = await this.address.readByPk(args.id);
    return new address(data, this.app);
  }

  async update(args) {
    let data = await this.address.updateByPk(args.id, args.data);
    return data;
  }

  async delete(args) {
    let data = await this.address.delByPk(args.id);
    return data;
  }

  async updateb(args) {
    let data = await this.address.updateb(args.data);
    return data;
  }

  async deleteb(args) {
    let data = await this.address.delb(args.data);
    return data;
  }

  async count(args) {
    let data = await this.address.countByPk(args);
    return data.count;
  }

  async exists(args) {
    let data = await this.address.exists(args.id);
    return data;
  }

  async groupBy(args) {
    let data = await this.address.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.address.aggregate(args);
    return data;
  }

  async list(args) {
    let data = (await this.address.list(args)).map(d => new address(d, this.app));
    return data;
  }

  async distribution(args) {
    let data = await this.address.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = (await this.address.distinct(args)).map(d => new address(d, this.app));
    return data;
  }

  async findOne(args) {
    let data = await this.address.findOne(args);
    return new address(data, this.app);
  }

}

module.exports = AddressService;