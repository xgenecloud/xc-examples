const category = require('../../../graphql/primary/types/category.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class CategoryService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.category = app.$dbs.primary.category;
  }

  async create(args) {
    let data = await this.category.insert(args.data);
    return new category(data, this.app);
  }

  async createb(args) {
    let data = await this.category.insertb(args.data);
    return data;
  }

  async read(args) {
    let data = await this.category.readByPk(args.id);
    return new category(data, this.app);
  }

  async update(args) {
    let data = await this.category.updateByPk(args.id, args.data);
    return data;
  }

  async delete(args) {
    let data = await this.category.delByPk(args.id);
    return data;
  }

  async updateb(args) {
    let data = await this.category.updateb(args.data);
    return data;
  }

  async deleteb(args) {
    let data = await this.category.delb(args.data);
    return data;
  }

  async count(args) {
    let data = await this.category.countByPk(args);
    return data.count;
  }

  async exists(args) {
    let data = await this.category.exists(args.id);
    return data;
  }

  async groupBy(args) {
    let data = await this.category.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.category.aggregate(args);
    return data;
  }

  async list(args) {
    let data = (await this.category.list(args)).map(d => new category(d, this.app));
    return data;
  }

  async distribution(args) {
    let data = await this.category.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = (await this.category.distinct(args)).map(d => new category(d, this.app));
    return data;
  }

  async findOne(args) {
    let data = await this.category.findOne(args);
    return new category(data, this.app);
  }

}

module.exports = CategoryService;