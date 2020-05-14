const film_category = require('../../../graphql/primary/types/film_category.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class FilmCategoryService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.film_category = app.$dbs.primary.film_category;
  }

  async create(args) {
    let data = await this.film_category.insert(args.data);
    return new film_category(data, this.app);
  }

  async createb(args) {
    let data = await this.film_category.insertb(args.data);
    return data;
  }

  async read(args) {
    let data = await this.film_category.readByPk(args.id);
    return new film_category(data, this.app);
  }

  async update(args) {
    let data = await this.film_category.updateByPk(args.id, args.data);
    return data;
  }

  async delete(args) {
    let data = await this.film_category.delByPk(args.id);
    return data;
  }

  async updateb(args) {
    let data = await this.film_category.updateb(args.data);
    return data;
  }

  async deleteb(args) {
    let data = await this.film_category.delb(args.data);
    return data;
  }

  async count(args) {
    let data = await this.film_category.countByPk(args);
    return data.count;
  }

  async exists(args) {
    let data = await this.film_category.exists(args.id);
    return data;
  }

  async groupBy(args) {
    let data = await this.film_category.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.film_category.aggregate(args);
    return data;
  }

  async list(args) {
    let data = (await this.film_category.list(args)).map(d => new film_category(d, this.app));
    return data;
  }

  async distribution(args) {
    let data = await this.film_category.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = (await this.film_category.distinct(args)).map(d => new film_category(d, this.app));
    return data;
  }

  async findOne(args) {
    let data = await this.film_category.findOne(args);
    return new film_category(data, this.app);
  }

}

module.exports = FilmCategoryService;