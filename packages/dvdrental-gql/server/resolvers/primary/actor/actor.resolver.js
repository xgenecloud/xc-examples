const {
  BaseResolver
} = require('xc-core');

class ActorResolver extends BaseResolver {

  constructor(app = {}) {
    super(app);
    this.ActorService = app.$services.primary.ActorService;
    this.ActorMiddleware = app.$middlewares.primary.ActorMiddleware;
  }

  mw1(root, args, context, info) {
    // console.log('Within actor Middleware mw1');
  }

  async list(args) {
    let data = await this.ActorService.list(args)
    return data;
  }

  async read(args) {
    return await this.ActorService.read(args);
  }

  async create(args) {
    return await this.ActorService.create(args);
  }

  async update(args) {
    return await this.ActorService.update(args);
  }

  async delete(args) {
    return await this.ActorService.delete(args);
  }

  async count(args) {
    let data = await this.ActorService.count(args);
    return data;
  }

  async exists(args) {
    let data = await this.ActorService.exists(args);
    return data;
  }

  async groupBy(args) {
    let data = await this.ActorService.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.ActorService.aggregate(args);
    return data;
  }

  async distribution(args) {
    let data = await this.ActorService.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = await this.ActorService.distinct(args);
    return data;
  }

  async findOne(args) {
    let data = await this.ActorService.findOne(args);
    return data;
  }

  async createb(args) {
    let data = await this.ActorService.createb(args);
    return data;
  }

  async updateb(args) {
    let data = await this.ActorService.updateb(args);
    return data;
  }

  async deleteb(args) {
    let data = await this.ActorService.deleteb(args);
    return data;
  }

  typedefs() {}

  resolvers() {
    return this.setupResolvers();
  }

  setupResolvers() {

    /* map resolvers */
    let _resolvers = {
      ActorList: this.list.bind(this),
      Actor: this.read.bind(this),
      ActorCreate: this.create.bind(this),
      ActorUpdate: this.update.bind(this),
      ActorDelete: this.delete.bind(this),
      ActorExists: this.exists.bind(this),
      ActorFindOne: this.findOne.bind(this),
      ActorCount: this.count.bind(this),
      ActorDistinct: this.distinct.bind(this),
      ActorGroupBy: this.groupBy.bind(this),
      ActorAggregate: this.aggregate.bind(this),
      ActorDistribution: this.distribution.bind(this),
      ActorCreateBulk: this.createb.bind(this),
      ActorUpdateBulk: this.updateb.bind(this),
      ActorDeleteBulk: this.deleteb.bind(this),
    }

    /* applying middleware to resolvers */
    _resolvers = this.applyMiddlewares([this.ActorMiddleware.default], _resolvers)

    return _resolvers;


  }


}

module.exports = ActorResolver;