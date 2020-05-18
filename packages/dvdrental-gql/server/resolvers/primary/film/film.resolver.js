const {
  BaseResolver
} = require('xc-core');

class FilmResolver extends BaseResolver {

  constructor(app = {}) {
    super(app);
    this.FilmService = app.$services.primary.FilmService;
    this.FilmMiddleware = app.$middlewares.primary.FilmMiddleware;
  }

  mw1(root, args, context, info) {
    // console.log('Within film Middleware mw1');
  }

  async list(args) {
    let data = await this.FilmService.list(args)
    return data;
  }

  async read(args) {
    return await this.FilmService.read(args);
  }

  async create(args) {
    return await this.FilmService.create(args);
  }

  async update(args) {
    return await this.FilmService.update(args);
  }

  async delete(args) {
    return await this.FilmService.delete(args);
  }

  async count(args) {
    let data = await this.FilmService.count(args);
    return data;
  }

  async exists(args) {
    let data = await this.FilmService.exists(args);
    return data;
  }

  async groupBy(args) {
    let data = await this.FilmService.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.FilmService.aggregate(args);
    return data;
  }

  async distribution(args) {
    let data = await this.FilmService.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = await this.FilmService.distinct(args);
    return data;
  }

  async findOne(args) {
    let data = await this.FilmService.findOne(args);
    return data;
  }

  async createb(args) {
    let data = await this.FilmService.createb(args);
    return data;
  }

  async updateb(args) {
    let data = await this.FilmService.updateb(args);
    return data;
  }

  async deleteb(args) {
    let data = await this.FilmService.deleteb(args);
    return data;
  }

  typedefs() {}

  resolvers() {
    return this.setupResolvers();
  }

  setupResolvers() {

    /* map resolvers */
    let _resolvers = {
      FilmList: this.list.bind(this),
      Film: this.read.bind(this),
      FilmCreate: this.create.bind(this),
      FilmUpdate: this.update.bind(this),
      FilmDelete: this.delete.bind(this),
      FilmExists: this.exists.bind(this),
      FilmFindOne: this.findOne.bind(this),
      FilmCount: this.count.bind(this),
      FilmDistinct: this.distinct.bind(this),
      FilmGroupBy: this.groupBy.bind(this),
      FilmAggregate: this.aggregate.bind(this),
      FilmDistribution: this.distribution.bind(this),
      FilmCreateBulk: this.createb.bind(this),
      FilmUpdateBulk: this.updateb.bind(this),
      FilmDeleteBulk: this.deleteb.bind(this),
    }

    /* applying middleware to resolvers */
    _resolvers = this.applyMiddlewares([this.FilmMiddleware.default], _resolvers)

    return _resolvers;


  }


}

module.exports = FilmResolver;