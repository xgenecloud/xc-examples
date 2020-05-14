const film_actor = require('../../../graphql/primary/types/film_actor.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class FilmActorService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.film_actor = app.$dbs.primary.film_actor;
  }

  async create(args) {
    let data = await this.film_actor.insert(args.data);
    return new film_actor(data, this.app);
  }

  async createb(args) {
    let data = await this.film_actor.insertb(args.data);
    return data;
  }

  async read(args) {
    let data = await this.film_actor.readByPk(args.id);
    return new film_actor(data, this.app);
  }

  async update(args) {
    let data = await this.film_actor.updateByPk(args.id, args.data);
    return data;
  }

  async delete(args) {
    let data = await this.film_actor.delByPk(args.id);
    return data;
  }

  async updateb(args) {
    let data = await this.film_actor.updateb(args.data);
    return data;
  }

  async deleteb(args) {
    let data = await this.film_actor.delb(args.data);
    return data;
  }

  async count(args) {
    let data = await this.film_actor.countByPk(args);
    return data.count;
  }

  async exists(args) {
    let data = await this.film_actor.exists(args.id);
    return data;
  }

  async groupBy(args) {
    let data = await this.film_actor.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.film_actor.aggregate(args);
    return data;
  }

  async list(args) {
    let data = (await this.film_actor.list(args)).map(d => new film_actor(d, this.app));
    return data;
  }

  async distribution(args) {
    let data = await this.film_actor.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = (await this.film_actor.distinct(args)).map(d => new film_actor(d, this.app));
    return data;
  }

  async findOne(args) {
    let data = await this.film_actor.findOne(args);
    return new film_actor(data, this.app);
  }

}

module.exports = FilmActorService;