const {
  BaseResolver
} = require('xc-core');

class FilmActorResolver extends BaseResolver {

  constructor(app = {}) {
    super(app);
    this.FilmActorService = app.$services.primary.FilmActorService;
    this.FilmActorMiddleware = app.$middlewares.primary.FilmActorMiddleware;
  }

  mw1(root, args, context, info) {
    // console.log('Within film_actor Middleware mw1');
  }

  async list(args) {
    let data = await this.FilmActorService.list(args)
    return data;
  }

  async read(args) {
    return await this.FilmActorService.read(args);
  }

  async create(args) {
    return await this.FilmActorService.create(args);
  }

  async update(args) {
    return await this.FilmActorService.update(args);
  }

  async delete(args) {
    return await this.FilmActorService.delete(args);
  }

  async count(args) {
    let data = await this.FilmActorService.count(args);
    return data;
  }

  async exists(args) {
    let data = await this.FilmActorService.exists(args);
    return data;
  }

  async groupBy(args) {
    let data = await this.FilmActorService.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.FilmActorService.aggregate(args);
    return data;
  }

  async distribution(args) {
    let data = await this.FilmActorService.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = await this.FilmActorService.distinct(args);
    return data;
  }

  async findOne(args) {
    let data = await this.FilmActorService.findOne(args);
    return data;
  }

  async createb(args) {
    let data = await this.FilmActorService.createb(args);
    return data;
  }

  async updateb(args) {
    let data = await this.FilmActorService.updateb(args);
    return data;
  }

  async deleteb(args) {
    let data = await this.FilmActorService.deleteb(args);
    return data;
  }

  typedefs() {}

  resolvers() {
    return this.setupResolvers();
  }

  setupResolvers() {

    /* map resolvers */
    let _resolvers = {
      FilmActorList: this.list.bind(this),
      FilmActor: this.read.bind(this),
      FilmActorCreate: this.create.bind(this),
      FilmActorUpdate: this.update.bind(this),
      FilmActorDelete: this.delete.bind(this),
      FilmActorExists: this.exists.bind(this),
      FilmActorFindOne: this.findOne.bind(this),
      FilmActorCount: this.count.bind(this),
      FilmActorDistinct: this.distinct.bind(this),
      FilmActorGroupBy: this.groupBy.bind(this),
      FilmActorAggregate: this.aggregate.bind(this),
      FilmActorDistribution: this.distribution.bind(this),
      FilmActorCreateBulk: this.createb.bind(this),
      FilmActorUpdateBulk: this.updateb.bind(this),
      FilmActorDeleteBulk: this.deleteb.bind(this),
    }

    /* applying middleware to resolvers */
    _resolvers = this.applyMiddlewares([this.FilmActorMiddleware.default], _resolvers)

    return _resolvers;


  }


}

module.exports = FilmActorResolver;