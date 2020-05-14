const inventory = require('../../../graphql/primary/types/inventory.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class InventoryService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.inventory = app.$dbs.primary.inventory;
  }

  async create(args) {
    let data = await this.inventory.insert(args.data);
    return new inventory(data, this.app);
  }

  async createb(args) {
    let data = await this.inventory.insertb(args.data);
    return data;
  }

  async read(args) {
    let data = await this.inventory.readByPk(args.id);
    return new inventory(data, this.app);
  }

  async update(args) {
    let data = await this.inventory.updateByPk(args.id, args.data);
    return data;
  }

  async delete(args) {
    let data = await this.inventory.delByPk(args.id);
    return data;
  }

  async updateb(args) {
    let data = await this.inventory.updateb(args.data);
    return data;
  }

  async deleteb(args) {
    let data = await this.inventory.delb(args.data);
    return data;
  }

  async count(args) {
    let data = await this.inventory.countByPk(args);
    return data.count;
  }

  async exists(args) {
    let data = await this.inventory.exists(args.id);
    return data;
  }

  async groupBy(args) {
    let data = await this.inventory.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.inventory.aggregate(args);
    return data;
  }

  async list(args) {
    let data = (await this.inventory.list(args)).map(d => new inventory(d, this.app));
    return data;
  }

  async distribution(args) {
    let data = await this.inventory.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = (await this.inventory.distinct(args)).map(d => new inventory(d, this.app));
    return data;
  }

  async findOne(args) {
    let data = await this.inventory.findOne(args);
    return new inventory(data, this.app);
  }

}

module.exports = InventoryService;