const {
  BaseResolver
} = require('xc-core');

class StaffResolver extends BaseResolver {

  constructor(app = {}) {
    super(app);
    this.StaffService = app.$services.primary.StaffService;
    this.StaffMiddleware = app.$middlewares.primary.StaffMiddleware;
  }

  mw1(root, args, context, info) {
    // console.log('Within staff Middleware mw1');
  }

  async list(args) {
    let data = await this.StaffService.list(args)
    return data;
  }

  async read(args) {
    return await this.StaffService.read(args);
  }

  async create(args) {
    return await this.StaffService.create(args);
  }

  async update(args) {
    return await this.StaffService.update(args);
  }

  async delete(args) {
    return await this.StaffService.delete(args);
  }

  async count(args) {
    let data = await this.StaffService.count(args);
    return data;
  }

  async exists(args) {
    let data = await this.StaffService.exists(args);
    return data;
  }

  async groupBy(args) {
    let data = await this.StaffService.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.StaffService.aggregate(args);
    return data;
  }

  async distribution(args) {
    let data = await this.StaffService.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = await this.StaffService.distinct(args);
    return data;
  }

  async findOne(args) {
    let data = await this.StaffService.findOne(args);
    return data;
  }

  async createb(args) {
    let data = await this.StaffService.createb(args);
    return data;
  }

  async updateb(args) {
    let data = await this.StaffService.updateb(args);
    return data;
  }

  async deleteb(args) {
    let data = await this.StaffService.deleteb(args);
    return data;
  }

  typedefs() {}

  resolvers() {
    return this.setupResolvers();
  }

  setupResolvers() {

    /* map resolvers */
    let _resolvers = {
      StaffList: this.list.bind(this),
      Staff: this.read.bind(this),
      StaffCreate: this.create.bind(this),
      StaffUpdate: this.update.bind(this),
      StaffDelete: this.delete.bind(this),
      StaffExists: this.exists.bind(this),
      StaffFindOne: this.findOne.bind(this),
      StaffCount: this.count.bind(this),
      StaffDistinct: this.distinct.bind(this),
      StaffGroupBy: this.groupBy.bind(this),
      StaffAggregate: this.aggregate.bind(this),
      StaffDistribution: this.distribution.bind(this),
      StaffCreateBulk: this.createb.bind(this),
      StaffUpdateBulk: this.updateb.bind(this),
      StaffDeleteBulk: this.deleteb.bind(this),
    }

    /* applying middleware to resolvers */
    _resolvers = this.applyMiddlewares([this.StaffMiddleware.default], _resolvers)

    return _resolvers;


  }


}

module.exports = StaffResolver;