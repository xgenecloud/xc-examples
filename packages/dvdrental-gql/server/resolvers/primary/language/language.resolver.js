const {
  BaseResolver
} = require('xc-core');

class LanguageResolver extends BaseResolver {

  constructor(app = {}) {
    super(app);
    this.LanguageService = app.$services.primary.LanguageService;
    this.LanguageMiddleware = app.$middlewares.primary.LanguageMiddleware;
  }

  mw1(root, args, context, info) {
    // console.log('Within language Middleware mw1');
  }

  async list(args) {
    let data = await this.LanguageService.list(args)
    return data;
  }

  async read(args) {
    return await this.LanguageService.read(args);
  }

  async create(args) {
    return await this.LanguageService.create(args);
  }

  async update(args) {
    return await this.LanguageService.update(args);
  }

  async delete(args) {
    return await this.LanguageService.delete(args);
  }

  async count(args) {
    let data = await this.LanguageService.count(args);
    return data;
  }

  async exists(args) {
    let data = await this.LanguageService.exists(args);
    return data;
  }

  async groupBy(args) {
    let data = await this.LanguageService.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.LanguageService.aggregate(args);
    return data;
  }

  async distribution(args) {
    let data = await this.LanguageService.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = await this.LanguageService.distinct(args);
    return data;
  }

  async findOne(args) {
    let data = await this.LanguageService.findOne(args);
    return data;
  }

  async createb(args) {
    let data = await this.LanguageService.createb(args);
    return data;
  }

  async updateb(args) {
    let data = await this.LanguageService.updateb(args);
    return data;
  }

  async deleteb(args) {
    let data = await this.LanguageService.deleteb(args);
    return data;
  }

  typedefs() {}

  resolvers() {
    return this.setupResolvers();
  }

  setupResolvers() {

    /* map resolvers */
    let _resolvers = {
      LanguageList: this.list.bind(this),
      Language: this.read.bind(this),
      LanguageCreate: this.create.bind(this),
      LanguageUpdate: this.update.bind(this),
      LanguageDelete: this.delete.bind(this),
      LanguageExists: this.exists.bind(this),
      LanguageFindOne: this.findOne.bind(this),
      LanguageCount: this.count.bind(this),
      LanguageDistinct: this.distinct.bind(this),
      LanguageGroupBy: this.groupBy.bind(this),
      LanguageAggregate: this.aggregate.bind(this),
      LanguageDistribution: this.distribution.bind(this),
      LanguageCreateBulk: this.createb.bind(this),
      LanguageUpdateBulk: this.updateb.bind(this),
      LanguageDeleteBulk: this.deleteb.bind(this),
    }

    /* applying middleware to resolvers */
    _resolvers = this.applyMiddlewares([this.LanguageMiddleware.default], _resolvers)

    return _resolvers;


  }


}

module.exports = LanguageResolver;