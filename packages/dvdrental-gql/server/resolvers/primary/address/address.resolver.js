const {
  BaseResolver
} = require('xc-core');

class AddressResolver extends BaseResolver {

  constructor(app = {}) {
    super(app);
    this.AddressService = app.$services.primary.AddressService;
    this.AddressMiddleware = app.$middlewares.primary.AddressMiddleware;
  }

  mw1(root, args, context, info) {
    // console.log('Within address Middleware mw1');
  }

  async list(args) {
    let data = await this.AddressService.list(args)
    return data;
  }

  async read(args) {
    return await this.AddressService.read(args);
  }

  async create(args) {
    return await this.AddressService.create(args);
  }

  async update(args) {
    return await this.AddressService.update(args);
  }

  async delete(args) {
    return await this.AddressService.delete(args);
  }

  async count(args) {
    let data = await this.AddressService.count(args);
    return data;
  }

  async exists(args) {
    let data = await this.AddressService.exists(args);
    return data;
  }

  async groupBy(args) {
    let data = await this.AddressService.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.AddressService.aggregate(args);
    return data;
  }

  async distribution(args) {
    let data = await this.AddressService.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = await this.AddressService.distinct(args);
    return data;
  }

  async findOne(args) {
    let data = await this.AddressService.findOne(args);
    return data;
  }

  async createb(args) {
    let data = await this.AddressService.createb(args);
    return data;
  }

  async updateb(args) {
    let data = await this.AddressService.updateb(args);
    return data;
  }

  async deleteb(args) {
    let data = await this.AddressService.deleteb(args);
    return data;
  }

  typedefs() {}

  resolvers() {
    return this.setupResolvers();
  }

  setupResolvers() {

    /* map resolvers */
    let _resolvers = {
      AddressList: this.list.bind(this),
      Address: this.read.bind(this),
      AddressCreate: this.create.bind(this),
      AddressUpdate: this.update.bind(this),
      AddressDelete: this.delete.bind(this),
      AddressExists: this.exists.bind(this),
      AddressFindOne: this.findOne.bind(this),
      AddressCount: this.count.bind(this),
      AddressDistinct: this.distinct.bind(this),
      AddressGroupBy: this.groupBy.bind(this),
      AddressAggregate: this.aggregate.bind(this),
      AddressDistribution: this.distribution.bind(this),
      AddressCreateBulk: this.createb.bind(this),
      AddressUpdateBulk: this.updateb.bind(this),
      AddressDeleteBulk: this.deleteb.bind(this),
    }

    /* applying middleware to resolvers */
    _resolvers = this.applyMiddlewares([this.AddressMiddleware.default], _resolvers)

    return _resolvers;


  }


}

module.exports = AddressResolver;