const {
  BaseResolver
} = require('xc-core');

class UsersResolver extends BaseResolver {

  constructor(app = {}) {
    super(app);
    this.UsersService = app.$services.primary.UsersService;
    this.UsersMiddleware = app.$middlewares.primary.UsersMiddleware;
  }

  mw1(root, args, context, info) {
    // console.log('Within users Middleware mw1');
  }

  async list(args) {
    let data = await this.UsersService.list(args)
    return data;
  }

  async read(args) {
    return await this.UsersService.read(args);
  }

  async create(args) {
    return await this.UsersService.create(args);
  }

  async update(args) {
    return await this.UsersService.update(args);
  }

  async delete(args) {
    return await this.UsersService.delete(args);
  }

  async count(args) {
    let data = await this.UsersService.count(args);
    return data;
  }

  async exists(args) {
    let data = await this.UsersService.exists(args);
    return data;
  }

  async groupBy(args) {
    let data = await this.UsersService.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.UsersService.aggregate(args);
    return data;
  }

  async distribution(args) {
    let data = await this.UsersService.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = await this.UsersService.distinct(args);
    return data;
  }

  async findOne(args) {
    let data = await this.UsersService.findOne(args);
    return data;
  }

  async createb(args) {
    let data = await this.UsersService.createb(args);
    return data;
  }

  async updateb(args) {
    let data = await this.UsersService.updateb(args);
    return data;
  }

  async deleteb(args) {
    let data = await this.UsersService.deleteb(args);
    return data;
  }

  typedefs() {}

  resolvers() {
    return this.setupResolvers();
  }

  setupResolvers() {

    /* map resolvers */
    let _resolvers = {
      UsersList: this.list.bind(this),
      Users: this.read.bind(this),
      UsersCreate: this.create.bind(this),
      UsersUpdate: this.update.bind(this),
      UsersDelete: this.delete.bind(this),
      UsersExists: this.exists.bind(this),
      UsersFindOne: this.findOne.bind(this),
      UsersCount: this.count.bind(this),
      UsersDistinct: this.distinct.bind(this),
      UsersGroupBy: this.groupBy.bind(this),
      UsersAggregate: this.aggregate.bind(this),
      UsersDistribution: this.distribution.bind(this),
      UsersCreateBulk: this.createb.bind(this),
      UsersUpdateBulk: this.updateb.bind(this),
      UsersDeleteBulk: this.deleteb.bind(this),
    }

    /* applying middleware to resolvers */
    _resolvers = this.applyMiddlewares([this.UsersMiddleware.default], _resolvers)

    return _resolvers;


  }


}

module.exports = UsersResolver;