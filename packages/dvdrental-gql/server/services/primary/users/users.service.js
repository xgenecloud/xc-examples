const users = require('../../../graphql/primary/types/users.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class UsersService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.users = app.$dbs.primary.users;
  }

  async create(args) {
    let data = await this.users.insert(args.data);
    return new users(data, this.app);
  }

  async createb(args) {
    let data = await this.users.insertb(args.data);
    return data;
  }

  async read(args) {
    let data = await this.users.readByPk(args.id);
    return new users(data, this.app);
  }

  async update(args) {
    let data = await this.users.updateByPk(args.id, args.data);
    return data;
  }

  async delete(args) {
    let data = await this.users.delByPk(args.id);
    return data;
  }

  async updateb(args) {
    let data = await this.users.updateb(args.data);
    return data;
  }

  async deleteb(args) {
    let data = await this.users.delb(args.data);
    return data;
  }

  async count(args) {
    let data = await this.users.countByPk(args);
    return data.count;
  }

  async exists(args) {
    let data = await this.users.exists(args.id);
    return data;
  }

  async groupBy(args) {
    let data = await this.users.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.users.aggregate(args);
    return data;
  }

  async list(args) {
    let data = (await this.users.list(args)).map(d => new users(d, this.app));
    return data;
  }

  async distribution(args) {
    let data = await this.users.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = (await this.users.distinct(args)).map(d => new users(d, this.app));
    return data;
  }

  async findOne(args) {
    let data = await this.users.findOne(args);
    return new users(data, this.app);
  }

}

module.exports = UsersService;