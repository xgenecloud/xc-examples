const city = require('../../../graphql/primary/types/city.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class CityService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.city = app.$dbs.primary.city;
  }

  async create(args) {
    let data = await this.city.insert(args.data);
    return new city(data, this.app);
  }

  async createb(args) {
    let data = await this.city.insertb(args.data);
    return data;
  }

  async read(args) {
    let data = await this.city.readByPk(args.id);
    return new city(data, this.app);
  }

  async update(args) {
    let data = await this.city.updateByPk(args.id, args.data);
    return data;
  }

  async delete(args) {
    let data = await this.city.delByPk(args.id);
    return data;
  }

  async updateb(args) {
    let data = await this.city.updateb(args.data);
    return data;
  }

  async deleteb(args) {
    let data = await this.city.delb(args.data);
    return data;
  }

  async count(args) {
    let data = await this.city.countByPk(args);
    return data.count;
  }

  async exists(args) {
    let data = await this.city.exists(args.id);
    return data;
  }

  async groupBy(args) {
    let data = await this.city.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.city.aggregate(args);
    return data;
  }

  async list(args) {
    let data = (await this.city.list(args)).map(d => new city(d, this.app));
    return data;
  }

  async distribution(args) {
    let data = await this.city.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = (await this.city.distinct(args)).map(d => new city(d, this.app));
    return data;
  }

  async findOne(args) {
    let data = await this.city.findOne(args);
    return new city(data, this.app);
  }

}

module.exports = CityService;