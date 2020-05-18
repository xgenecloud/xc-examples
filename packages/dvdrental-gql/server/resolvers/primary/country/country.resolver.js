const {
  BaseResolver
} = require('xc-core');

class CountryResolver extends BaseResolver {

  constructor(app = {}) {
    super(app);
    this.CountryService = app.$services.primary.CountryService;
    this.CountryMiddleware = app.$middlewares.primary.CountryMiddleware;
  }

  mw1(root, args, context, info) {
    // console.log('Within country Middleware mw1');
  }

  async list(args) {
    let data = await this.CountryService.list(args)
    return data;
  }

  async read(args) {
    return await this.CountryService.read(args);
  }

  async create(args) {
    return await this.CountryService.create(args);
  }

  async update(args) {
    return await this.CountryService.update(args);
  }

  async delete(args) {
    return await this.CountryService.delete(args);
  }

  async count(args) {
    let data = await this.CountryService.count(args);
    return data;
  }

  async exists(args) {
    let data = await this.CountryService.exists(args);
    return data;
  }

  async groupBy(args) {
    let data = await this.CountryService.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.CountryService.aggregate(args);
    return data;
  }

  async distribution(args) {
    let data = await this.CountryService.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = await this.CountryService.distinct(args);
    return data;
  }

  async findOne(args) {
    let data = await this.CountryService.findOne(args);
    return data;
  }

  async createb(args) {
    let data = await this.CountryService.createb(args);
    return data;
  }

  async updateb(args) {
    let data = await this.CountryService.updateb(args);
    return data;
  }

  async deleteb(args) {
    let data = await this.CountryService.deleteb(args);
    return data;
  }

  typedefs() {}

  resolvers() {
    return this.setupResolvers();
  }

  setupResolvers() {

    /* map resolvers */
    let _resolvers = {
      CountryList: this.list.bind(this),
      Country: this.read.bind(this),
      CountryCreate: this.create.bind(this),
      CountryUpdate: this.update.bind(this),
      CountryDelete: this.delete.bind(this),
      CountryExists: this.exists.bind(this),
      CountryFindOne: this.findOne.bind(this),
      CountryCount: this.count.bind(this),
      CountryDistinct: this.distinct.bind(this),
      CountryGroupBy: this.groupBy.bind(this),
      CountryAggregate: this.aggregate.bind(this),
      CountryDistribution: this.distribution.bind(this),
      CountryCreateBulk: this.createb.bind(this),
      CountryUpdateBulk: this.updateb.bind(this),
      CountryDeleteBulk: this.deleteb.bind(this),
    }

    /* applying middleware to resolvers */
    _resolvers = this.applyMiddlewares([this.CountryMiddleware.default], _resolvers)

    return _resolvers;


  }


}

module.exports = CountryResolver;