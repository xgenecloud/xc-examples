const country = require('../../../graphql/primary/types/country.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class CountryService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.country = app.$dbs.primary.country;
  }

  async create(args) {
    let data = await this.country.insert(args.data);
    return new country(data, this.app);
  }

  async createb(args) {
    let data = await this.country.insertb(args.data);
    return data;
  }

  async read(args) {
    let data = await this.country.readByPk(args.id);
    return new country(data, this.app);
  }

  async update(args) {
    let data = await this.country.updateByPk(args.id, args.data);
    return data;
  }

  async delete(args) {
    let data = await this.country.delByPk(args.id);
    return data;
  }

  async updateb(args) {
    let data = await this.country.updateb(args.data);
    return data;
  }

  async deleteb(args) {
    let data = await this.country.delb(args.data);
    return data;
  }

  async count(args) {
    let data = await this.country.countByPk(args);
    return data.count;
  }

  async exists(args) {
    let data = await this.country.exists(args.id);
    return data;
  }

  async groupBy(args) {
    let data = await this.country.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.country.aggregate(args);
    return data;
  }

  async list(args) {
    let data = (await this.country.list(args)).map(d => new country(d, this.app));
    return data;
  }

  async distribution(args) {
    let data = await this.country.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = (await this.country.distinct(args)).map(d => new country(d, this.app));
    return data;
  }

  async findOne(args) {
    let data = await this.country.findOne(args);
    return new country(data, this.app);
  }

}

module.exports = CountryService;