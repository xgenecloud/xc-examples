const {
  BaseResolver
} = require('xc-core');

class FilmCategoryResolver extends BaseResolver {

  constructor(app = {}) {
    super(app);
    this.FilmCategoryService = app.$services.primary.FilmCategoryService;
    this.FilmCategoryMiddleware = app.$middlewares.primary.FilmCategoryMiddleware;
  }

  mw1(root, args, context, info) {
    // console.log('Within film_category Middleware mw1');
  }

  async list(args) {
    let data = await this.FilmCategoryService.list(args)
    return data;
  }

  async read(args) {
    return await this.FilmCategoryService.read(args);
  }

  async create(args) {
    return await this.FilmCategoryService.create(args);
  }

  async update(args) {
    return await this.FilmCategoryService.update(args);
  }

  async delete(args) {
    return await this.FilmCategoryService.delete(args);
  }

  async count(args) {
    let data = await this.FilmCategoryService.count(args);
    return data;
  }

  async exists(args) {
    let data = await this.FilmCategoryService.exists(args);
    return data;
  }

  async groupBy(args) {
    let data = await this.FilmCategoryService.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.FilmCategoryService.aggregate(args);
    return data;
  }

  async distribution(args) {
    let data = await this.FilmCategoryService.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = await this.FilmCategoryService.distinct(args);
    return data;
  }

  async findOne(args) {
    let data = await this.FilmCategoryService.findOne(args);
    return data;
  }

  async createb(args) {
    let data = await this.FilmCategoryService.createb(args);
    return data;
  }

  async updateb(args) {
    let data = await this.FilmCategoryService.updateb(args);
    return data;
  }

  async deleteb(args) {
    let data = await this.FilmCategoryService.deleteb(args);
    return data;
  }

  typedefs() {}

  resolvers() {
    return this.setupResolvers();
  }

  setupResolvers() {

    /* map resolvers */
    let _resolvers = {
      FilmCategoryList: this.list.bind(this),
      FilmCategory: this.read.bind(this),
      FilmCategoryCreate: this.create.bind(this),
      FilmCategoryUpdate: this.update.bind(this),
      FilmCategoryDelete: this.delete.bind(this),
      FilmCategoryExists: this.exists.bind(this),
      FilmCategoryFindOne: this.findOne.bind(this),
      FilmCategoryCount: this.count.bind(this),
      FilmCategoryDistinct: this.distinct.bind(this),
      FilmCategoryGroupBy: this.groupBy.bind(this),
      FilmCategoryAggregate: this.aggregate.bind(this),
      FilmCategoryDistribution: this.distribution.bind(this),
      FilmCategoryCreateBulk: this.createb.bind(this),
      FilmCategoryUpdateBulk: this.updateb.bind(this),
      FilmCategoryDeleteBulk: this.deleteb.bind(this),
    }

    /* applying middleware to resolvers */
    _resolvers = this.applyMiddlewares([this.FilmCategoryMiddleware.default], _resolvers)

    return _resolvers;


  }


}

module.exports = FilmCategoryResolver;