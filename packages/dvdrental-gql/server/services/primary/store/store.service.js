const store = require('../../../graphql/primary/types/store.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class StoreService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.store = app.$dbs.primary.store;
  }

  async create(args) {
    let data = await this.store.insert(args.data);
    return new store(data, this.app);
  }

  async createb(args) {
    let data = await this.store.insertb(args.data);
    return data;
  }

  async read(args) {
    let data = await this.store.readByPk(args.id);
    return new store(data, this.app);
  }

  async update(args) {
    let data = await this.store.updateByPk(args.id, args.data);
    return data;
  }

  async delete(args) {
    let data = await this.store.delByPk(args.id);
    return data;
  }

  async updateb(args) {
    let data = await this.store.updateb(args.data);
    return data;
  }

  async deleteb(args) {
    let data = await this.store.delb(args.data);
    return data;
  }

  async count(args) {
    let data = await this.store.countByPk(args);
    return data.count;
  }

  async exists(args) {
    let data = await this.store.exists(args.id);
    return data;
  }

  async groupBy(args) {
    let data = await this.store.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.store.aggregate(args);
    return data;
  }

  async list(args) {
    let data = (await this.store.list(args)).map(d => new store(d, this.app));
    return data;
  }

  async distribution(args) {
    let data = await this.store.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = (await this.store.distinct(args)).map(d => new store(d, this.app));
    return data;
  }

  async findOne(args) {
    let data = await this.store.findOne(args);
    return new store(data, this.app);
  }

}

module.exports = StoreService;