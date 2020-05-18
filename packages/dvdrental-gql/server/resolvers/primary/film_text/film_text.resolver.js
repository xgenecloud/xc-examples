const {
  BaseResolver
} = require('xc-core');

class FilmTextResolver extends BaseResolver {

  constructor(app = {}) {
    super(app);
    this.FilmTextService = app.$services.primary.FilmTextService;
    this.FilmTextMiddleware = app.$middlewares.primary.FilmTextMiddleware;
  }

  mw1(root, args, context, info) {
    // console.log('Within film_text Middleware mw1');
  }

  async list(args) {
    let data = await this.FilmTextService.list(args)
    return data;
  }

  async read(args) {
    return await this.FilmTextService.read(args);
  }

  async create(args) {
    return await this.FilmTextService.create(args);
  }

  async update(args) {
    return await this.FilmTextService.update(args);
  }

  async delete(args) {
    return await this.FilmTextService.delete(args);
  }

  async count(args) {
    let data = await this.FilmTextService.count(args);
    return data;
  }

  async exists(args) {
    let data = await this.FilmTextService.exists(args);
    return data;
  }

  async groupBy(args) {
    let data = await this.FilmTextService.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.FilmTextService.aggregate(args);
    return data;
  }

  async distribution(args) {
    let data = await this.FilmTextService.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = await this.FilmTextService.distinct(args);
    return data;
  }

  async findOne(args) {
    let data = await this.FilmTextService.findOne(args);
    return data;
  }

  async createb(args) {
    let data = await this.FilmTextService.createb(args);
    return data;
  }

  async updateb(args) {
    let data = await this.FilmTextService.updateb(args);
    return data;
  }

  async deleteb(args) {
    let data = await this.FilmTextService.deleteb(args);
    return data;
  }

  typedefs() {}

  resolvers() {
    return this.setupResolvers();
  }

  setupResolvers() {

    /* map resolvers */
    let _resolvers = {
      FilmTextList: this.list.bind(this),
      FilmText: this.read.bind(this),
      FilmTextCreate: this.create.bind(this),
      FilmTextUpdate: this.update.bind(this),
      FilmTextDelete: this.delete.bind(this),
      FilmTextExists: this.exists.bind(this),
      FilmTextFindOne: this.findOne.bind(this),
      FilmTextCount: this.count.bind(this),
      FilmTextDistinct: this.distinct.bind(this),
      FilmTextGroupBy: this.groupBy.bind(this),
      FilmTextAggregate: this.aggregate.bind(this),
      FilmTextDistribution: this.distribution.bind(this),
      FilmTextCreateBulk: this.createb.bind(this),
      FilmTextUpdateBulk: this.updateb.bind(this),
      FilmTextDeleteBulk: this.deleteb.bind(this),
    }

    /* applying middleware to resolvers */
    _resolvers = this.applyMiddlewares([this.FilmTextMiddleware.default], _resolvers)

    return _resolvers;


  }


}

module.exports = FilmTextResolver;