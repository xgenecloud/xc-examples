const {
  BaseResolver
} = require('xc-core');

class StoreResolver extends BaseResolver {

  constructor(app = {}) {
    super(app);
    this.StoreService = app.$services.primary.StoreService;
    this.StoreMiddleware = app.$middlewares.primary.StoreMiddleware;
  }

  mw1(root, args, context, info) {
    // console.log('Within store Middleware mw1');
  }

  async list(args) {
    let data = await this.StoreService.list(args)
    return data;
  }

  async read(args) {
    return await this.StoreService.read(args);
  }

  async create(args) {
    return await this.StoreService.create(args);
  }

  async update(args) {
    return await this.StoreService.update(args);
  }

  async delete(args) {
    return await this.StoreService.delete(args);
  }

  async count(args) {
    let data = await this.StoreService.count(args);
    return data;
  }

  async exists(args) {
    let data = await this.StoreService.exists(args);
    return data;
  }

  async groupBy(args) {
    let data = await this.StoreService.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.StoreService.aggregate(args);
    return data;
  }

  async distribution(args) {
    let data = await this.StoreService.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = await this.StoreService.distinct(args);
    return data;
  }

  async findOne(args) {
    let data = await this.StoreService.findOne(args);
    return data;
  }

  async createb(args) {
    let data = await this.StoreService.createb(args);
    return data;
  }

  async updateb(args) {
    let data = await this.StoreService.updateb(args);
    return data;
  }

  async deleteb(args) {
    let data = await this.StoreService.deleteb(args);
    return data;
  }

  typedefs() {}

  resolvers() {
    return this.setupResolvers();
  }

  setupResolvers() {

    /* map resolvers */
    let _resolvers = {
      StoreList: this.list.bind(this),
      Store: this.read.bind(this),
      StoreCreate: this.create.bind(this),
      StoreUpdate: this.update.bind(this),
      StoreDelete: this.delete.bind(this),
      StoreExists: this.exists.bind(this),
      StoreFindOne: this.findOne.bind(this),
      StoreCount: this.count.bind(this),
      StoreDistinct: this.distinct.bind(this),
      StoreGroupBy: this.groupBy.bind(this),
      StoreAggregate: this.aggregate.bind(this),
      StoreDistribution: this.distribution.bind(this),
      StoreCreateBulk: this.createb.bind(this),
      StoreUpdateBulk: this.updateb.bind(this),
      StoreDeleteBulk: this.deleteb.bind(this),
    }

    /* applying middleware to resolvers */
    _resolvers = this.applyMiddlewares([this.StoreMiddleware.default], _resolvers)

    return _resolvers;


  }


}

module.exports = StoreResolver;