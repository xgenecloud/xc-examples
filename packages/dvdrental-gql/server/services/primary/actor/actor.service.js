const actor = require('../../../graphql/primary/types/actor.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class ActorService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.actor = app.$dbs.primary.actor;
  }

  async create(args) {
    let data = await this.actor.insert(args.data);
    return new actor(data, this.app);
  }

  async createb(args) {
    let data = await this.actor.insertb(args.data);
    return data;
  }

  async read(args) {
    let data = await this.actor.readByPk(args.id);
    return new actor(data, this.app);
  }

  async update(args) {
    let data = await this.actor.updateByPk(args.id, args.data);
    return data;
  }

  async delete(args) {
    let data = await this.actor.delByPk(args.id);
    return data;
  }

  async updateb(args) {
    let data = await this.actor.updateb(args.data);
    return data;
  }

  async deleteb(args) {
    let data = await this.actor.delb(args.data);
    return data;
  }

  async count(args) {
    let data = await this.actor.countByPk(args);
    return data.count;
  }

  async exists(args) {
    let data = await this.actor.exists(args.id);
    return data;
  }

  async groupBy(args) {
    let data = await this.actor.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.actor.aggregate(args);
    return data;
  }

  async list(args) {
    let data = (await this.actor.list(args)).map(d => new actor(d, this.app));
    return data;
  }

  async distribution(args) {
    let data = await this.actor.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = (await this.actor.distinct(args)).map(d => new actor(d, this.app));
    return data;
  }

  async findOne(args) {
    let data = await this.actor.findOne(args);
    return new actor(data, this.app);
  }

}

module.exports = ActorService;