const staff = require('../../../graphql/primary/types/staff.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class StaffService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.staff = app.$dbs.primary.staff;
  }

  async create(args) {
    let data = await this.staff.insert(args.data);
    return new staff(data, this.app);
  }

  async createb(args) {
    let data = await this.staff.insertb(args.data);
    return data;
  }

  async read(args) {
    let data = await this.staff.readByPk(args.id);
    return new staff(data, this.app);
  }

  async update(args) {
    let data = await this.staff.updateByPk(args.id, args.data);
    return data;
  }

  async delete(args) {
    let data = await this.staff.delByPk(args.id);
    return data;
  }

  async updateb(args) {
    let data = await this.staff.updateb(args.data);
    return data;
  }

  async deleteb(args) {
    let data = await this.staff.delb(args.data);
    return data;
  }

  async count(args) {
    let data = await this.staff.countByPk(args);
    return data.count;
  }

  async exists(args) {
    let data = await this.staff.exists(args.id);
    return data;
  }

  async groupBy(args) {
    let data = await this.staff.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.staff.aggregate(args);
    return data;
  }

  async list(args) {
    let data = (await this.staff.list(args)).map(d => new staff(d, this.app));
    return data;
  }

  async distribution(args) {
    let data = await this.staff.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = (await this.staff.distinct(args)).map(d => new staff(d, this.app));
    return data;
  }

  async findOne(args) {
    let data = await this.staff.findOne(args);
    return new staff(data, this.app);
  }

}

module.exports = StaffService;