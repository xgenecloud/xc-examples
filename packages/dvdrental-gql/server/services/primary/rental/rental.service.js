const rental = require('../../../graphql/primary/types/rental.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class RentalService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.rental = app.$dbs.primary.rental;
  }

  async create(args) {
    let data = await this.rental.insert(args.data);
    return new rental(data, this.app);
  }

  async createb(args) {
    let data = await this.rental.insertb(args.data);
    return data;
  }

  async read(args) {
    let data = await this.rental.readByPk(args.id);
    return new rental(data, this.app);
  }

  async update(args) {
    let data = await this.rental.updateByPk(args.id, args.data);
    return data;
  }

  async delete(args) {
    let data = await this.rental.delByPk(args.id);
    return data;
  }

  async updateb(args) {
    let data = await this.rental.updateb(args.data);
    return data;
  }

  async deleteb(args) {
    let data = await this.rental.delb(args.data);
    return data;
  }

  async count(args) {
    let data = await this.rental.countByPk(args);
    return data.count;
  }

  async exists(args) {
    let data = await this.rental.exists(args.id);
    return data;
  }

  async groupBy(args) {
    let data = await this.rental.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.rental.aggregate(args);
    return data;
  }

  async list(args) {
    let data = (await this.rental.list(args)).map(d => new rental(d, this.app));
    return data;
  }

  async distribution(args) {
    let data = await this.rental.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = (await this.rental.distinct(args)).map(d => new rental(d, this.app));
    return data;
  }

  async findOne(args) {
    let data = await this.rental.findOne(args);
    return new rental(data, this.app);
  }

}

module.exports = RentalService;