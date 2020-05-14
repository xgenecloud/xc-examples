const language = require('../../../graphql/primary/types/language.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class LanguageService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.language = app.$dbs.primary.language;
  }

  async create(args) {
    let data = await this.language.insert(args.data);
    return new language(data, this.app);
  }

  async createb(args) {
    let data = await this.language.insertb(args.data);
    return data;
  }

  async read(args) {
    let data = await this.language.readByPk(args.id);
    return new language(data, this.app);
  }

  async update(args) {
    let data = await this.language.updateByPk(args.id, args.data);
    return data;
  }

  async delete(args) {
    let data = await this.language.delByPk(args.id);
    return data;
  }

  async updateb(args) {
    let data = await this.language.updateb(args.data);
    return data;
  }

  async deleteb(args) {
    let data = await this.language.delb(args.data);
    return data;
  }

  async count(args) {
    let data = await this.language.countByPk(args);
    return data.count;
  }

  async exists(args) {
    let data = await this.language.exists(args.id);
    return data;
  }

  async groupBy(args) {
    let data = await this.language.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.language.aggregate(args);
    return data;
  }

  async list(args) {
    let data = (await this.language.list(args)).map(d => new language(d, this.app));
    return data;
  }

  async distribution(args) {
    let data = await this.language.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = (await this.language.distinct(args)).map(d => new language(d, this.app));
    return data;
  }

  async findOne(args) {
    let data = await this.language.findOne(args);
    return new language(data, this.app);
  }

}

module.exports = LanguageService;