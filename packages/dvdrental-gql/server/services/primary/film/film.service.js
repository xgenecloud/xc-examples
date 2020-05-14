const film = require('../../../graphql/primary/types/film.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class FilmService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.film = app.$dbs.primary.film;
  }

  async create(args) {
    let data = await this.film.insert(args.data);
    return new film(data, this.app);
  }

  async createb(args) {
    let data = await this.film.insertb(args.data);
    return data;
  }

  async read(args) {
    let data = await this.film.readByPk(args.id);
    return new film(data, this.app);
  }

  async update(args) {
    let data = await this.film.updateByPk(args.id, args.data);
    return data;
  }

  async delete(args) {
    let data = await this.film.delByPk(args.id);
    return data;
  }

  async updateb(args) {
    let data = await this.film.updateb(args.data);
    return data;
  }

  async deleteb(args) {
    let data = await this.film.delb(args.data);
    return data;
  }

  async count(args) {
    let data = await this.film.countByPk(args);
    return data.count;
  }

  async exists(args) {
    let data = await this.film.exists(args.id);
    return data;
  }

  async groupBy(args) {
    let data = await this.film.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.film.aggregate(args);
    return data;
  }

  async list(args) {
    let data = (await this.film.list(args)).map(d => new film(d, this.app));
    return data;
  }

  async distribution(args) {
    let data = await this.film.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = (await this.film.distinct(args)).map(d => new film(d, this.app));
    return data;
  }

  async findOne(args) {
    let data = await this.film.findOne(args);
    return new film(data, this.app);
  }

}

module.exports = FilmService;