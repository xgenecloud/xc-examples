const film_text = require('../../../graphql/primary/types/film_text.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class FilmTextService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.film_text = app.$dbs.primary.film_text;
  }

  async create(args) {
    let data = await this.film_text.insert(args.data);
    return new film_text(data, this.app);
  }

  async createb(args) {
    let data = await this.film_text.insertb(args.data);
    return data;
  }

  async read(args) {
    let data = await this.film_text.readByPk(args.id);
    return new film_text(data, this.app);
  }

  async update(args) {
    let data = await this.film_text.updateByPk(args.id, args.data);
    return data;
  }

  async delete(args) {
    let data = await this.film_text.delByPk(args.id);
    return data;
  }

  async updateb(args) {
    let data = await this.film_text.updateb(args.data);
    return data;
  }

  async deleteb(args) {
    let data = await this.film_text.delb(args.data);
    return data;
  }

  async count(args) {
    let data = await this.film_text.countByPk(args);
    return data.count;
  }

  async exists(args) {
    let data = await this.film_text.exists(args.id);
    return data;
  }

  async groupBy(args) {
    let data = await this.film_text.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.film_text.aggregate(args);
    return data;
  }

  async list(args) {
    let data = (await this.film_text.list(args)).map(d => new film_text(d, this.app));
    return data;
  }

  async distribution(args) {
    let data = await this.film_text.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = (await this.film_text.distinct(args)).map(d => new film_text(d, this.app));
    return data;
  }

  async findOne(args) {
    let data = await this.film_text.findOne(args);
    return new film_text(data, this.app);
  }

}

module.exports = FilmTextService;