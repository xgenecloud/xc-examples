const {
  BaseResolver
} = require('xc-core');

class RentalResolver extends BaseResolver {

  constructor(app = {}) {
    super(app);
    this.RentalService = app.$services.primary.RentalService;
    this.RentalMiddleware = app.$middlewares.primary.RentalMiddleware;
  }

  mw1(root, args, context, info) {
    // console.log('Within rental Middleware mw1');
  }

  async list(args) {
    let data = await this.RentalService.list(args)
    return data;
  }

  async read(args) {
    return await this.RentalService.read(args);
  }

  async create(args) {
    return await this.RentalService.create(args);
  }

  async update(args) {
    return await this.RentalService.update(args);
  }

  async delete(args) {
    return await this.RentalService.delete(args);
  }

  async count(args) {
    let data = await this.RentalService.count(args);
    return data;
  }

  async exists(args) {
    let data = await this.RentalService.exists(args);
    return data;
  }

  async groupBy(args) {
    let data = await this.RentalService.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.RentalService.aggregate(args);
    return data;
  }

  async distribution(args) {
    let data = await this.RentalService.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = await this.RentalService.distinct(args);
    return data;
  }

  async findOne(args) {
    let data = await this.RentalService.findOne(args);
    return data;
  }

  async createb(args) {
    let data = await this.RentalService.createb(args);
    return data;
  }

  async updateb(args) {
    let data = await this.RentalService.updateb(args);
    return data;
  }

  async deleteb(args) {
    let data = await this.RentalService.deleteb(args);
    return data;
  }

  typedefs() {}

  resolvers() {
    return this.setupResolvers();
  }

  setupResolvers() {

    /* map resolvers */
    let _resolvers = {
      RentalList: this.list.bind(this),
      Rental: this.read.bind(this),
      RentalCreate: this.create.bind(this),
      RentalUpdate: this.update.bind(this),
      RentalDelete: this.delete.bind(this),
      RentalExists: this.exists.bind(this),
      RentalFindOne: this.findOne.bind(this),
      RentalCount: this.count.bind(this),
      RentalDistinct: this.distinct.bind(this),
      RentalGroupBy: this.groupBy.bind(this),
      RentalAggregate: this.aggregate.bind(this),
      RentalDistribution: this.distribution.bind(this),
      RentalCreateBulk: this.createb.bind(this),
      RentalUpdateBulk: this.updateb.bind(this),
      RentalDeleteBulk: this.deleteb.bind(this),
    }

    /* applying middleware to resolvers */
    _resolvers = this.applyMiddlewares([this.RentalMiddleware.default], _resolvers)

    return _resolvers;


  }


}

module.exports = RentalResolver;