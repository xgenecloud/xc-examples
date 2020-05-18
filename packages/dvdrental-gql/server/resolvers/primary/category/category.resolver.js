const {
  BaseResolver
} = require('xc-core');

class CategoryResolver extends BaseResolver {

  constructor(app = {}) {
    super(app);
    this.CategoryService = app.$services.primary.CategoryService;
    this.CategoryMiddleware = app.$middlewares.primary.CategoryMiddleware;
  }

  mw1(root, args, context, info) {
    // console.log('Within category Middleware mw1');
  }

  async list(args) {
    let data = await this.CategoryService.list(args)
    return data;
  }

  async read(args) {
    return await this.CategoryService.read(args);
  }

  async create(args) {
    return await this.CategoryService.create(args);
  }

  async update(args) {
    return await this.CategoryService.update(args);
  }

  async delete(args) {
    return await this.CategoryService.delete(args);
  }

  async count(args) {
    let data = await this.CategoryService.count(args);
    return data;
  }

  async exists(args) {
    let data = await this.CategoryService.exists(args);
    return data;
  }

  async groupBy(args) {
    let data = await this.CategoryService.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.CategoryService.aggregate(args);
    return data;
  }

  async distribution(args) {
    let data = await this.CategoryService.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = await this.CategoryService.distinct(args);
    return data;
  }

  async findOne(args) {
    let data = await this.CategoryService.findOne(args);
    return data;
  }

  async createb(args) {
    let data = await this.CategoryService.createb(args);
    return data;
  }

  async updateb(args) {
    let data = await this.CategoryService.updateb(args);
    return data;
  }

  async deleteb(args) {
    let data = await this.CategoryService.deleteb(args);
    return data;
  }

  typedefs() {}

  resolvers() {
    return this.setupResolvers();
  }

  setupResolvers() {

    /* map resolvers */
    let _resolvers = {
      CategoryList: this.list.bind(this),
      Category: this.read.bind(this),
      CategoryCreate: this.create.bind(this),
      CategoryUpdate: this.update.bind(this),
      CategoryDelete: this.delete.bind(this),
      CategoryExists: this.exists.bind(this),
      CategoryFindOne: this.findOne.bind(this),
      CategoryCount: this.count.bind(this),
      CategoryDistinct: this.distinct.bind(this),
      CategoryGroupBy: this.groupBy.bind(this),
      CategoryAggregate: this.aggregate.bind(this),
      CategoryDistribution: this.distribution.bind(this),
      CategoryCreateBulk: this.createb.bind(this),
      CategoryUpdateBulk: this.updateb.bind(this),
      CategoryDeleteBulk: this.deleteb.bind(this),
    }

    /* applying middleware to resolvers */
    _resolvers = this.applyMiddlewares([this.CategoryMiddleware.default], _resolvers)

    return _resolvers;


  }


}

module.exports = CategoryResolver;