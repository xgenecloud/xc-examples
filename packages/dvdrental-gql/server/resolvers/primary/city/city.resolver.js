const {
  BaseResolver
} = require('xc-core');

class CityResolver extends BaseResolver {

  constructor(app = {}) {
    super(app);
    this.CityService = app.$services.primary.CityService;
    this.CityMiddleware = app.$middlewares.primary.CityMiddleware;
  }

  mw1(root, args, context, info) {
    // console.log('Within city Middleware mw1');
  }

  async list(args) {
    let data = await this.CityService.list(args)
    return data;
  }

  async read(args) {
    return await this.CityService.read(args);
  }

  async create(args) {
    return await this.CityService.create(args);
  }

  async update(args) {
    return await this.CityService.update(args);
  }

  async delete(args) {
    return await this.CityService.delete(args);
  }

  async count(args) {
    let data = await this.CityService.count(args);
    return data;
  }

  async exists(args) {
    let data = await this.CityService.exists(args);
    return data;
  }

  async groupBy(args) {
    let data = await this.CityService.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.CityService.aggregate(args);
    return data;
  }

  async distribution(args) {
    let data = await this.CityService.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = await this.CityService.distinct(args);
    return data;
  }

  async findOne(args) {
    let data = await this.CityService.findOne(args);
    return data;
  }

  async createb(args) {
    let data = await this.CityService.createb(args);
    return data;
  }

  async updateb(args) {
    let data = await this.CityService.updateb(args);
    return data;
  }

  async deleteb(args) {
    let data = await this.CityService.deleteb(args);
    return data;
  }

  typedefs() {}

  resolvers() {
    return this.setupResolvers();
  }

  setupResolvers() {

    /* map resolvers */
    let _resolvers = {
      CityList: this.list.bind(this),
      City: this.read.bind(this),
      CityCreate: this.create.bind(this),
      CityUpdate: this.update.bind(this),
      CityDelete: this.delete.bind(this),
      CityExists: this.exists.bind(this),
      CityFindOne: this.findOne.bind(this),
      CityCount: this.count.bind(this),
      CityDistinct: this.distinct.bind(this),
      CityGroupBy: this.groupBy.bind(this),
      CityAggregate: this.aggregate.bind(this),
      CityDistribution: this.distribution.bind(this),
      CityCreateBulk: this.createb.bind(this),
      CityUpdateBulk: this.updateb.bind(this),
      CityDeleteBulk: this.deleteb.bind(this),
    }

    /* applying middleware to resolvers */
    _resolvers = this.applyMiddlewares([this.CityMiddleware.default], _resolvers)

    return _resolvers;


  }


}

module.exports = CityResolver;