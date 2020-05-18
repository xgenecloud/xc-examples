const {
  BaseResolver
} = require('xc-core');

class CustomerResolver extends BaseResolver {

  constructor(app = {}) {
    super(app);
    this.CustomerService = app.$services.primary.CustomerService;
    this.CustomerMiddleware = app.$middlewares.primary.CustomerMiddleware;
  }

  mw1(root, args, context, info) {
    // console.log('Within customer Middleware mw1');
  }

  async list(args) {
    let data = await this.CustomerService.list(args)
    return data;
  }

  async read(args) {
    return await this.CustomerService.read(args);
  }

  async create(args) {
    return await this.CustomerService.create(args);
  }

  async update(args) {
    return await this.CustomerService.update(args);
  }

  async delete(args) {
    return await this.CustomerService.delete(args);
  }

  async count(args) {
    let data = await this.CustomerService.count(args);
    return data;
  }

  async exists(args) {
    let data = await this.CustomerService.exists(args);
    return data;
  }

  async groupBy(args) {
    let data = await this.CustomerService.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.CustomerService.aggregate(args);
    return data;
  }

  async distribution(args) {
    let data = await this.CustomerService.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = await this.CustomerService.distinct(args);
    return data;
  }

  async findOne(args) {
    let data = await this.CustomerService.findOne(args);
    return data;
  }

  async createb(args) {
    let data = await this.CustomerService.createb(args);
    return data;
  }

  async updateb(args) {
    let data = await this.CustomerService.updateb(args);
    return data;
  }

  async deleteb(args) {
    let data = await this.CustomerService.deleteb(args);
    return data;
  }

  typedefs() {}

  resolvers() {
    return this.setupResolvers();
  }

  setupResolvers() {

    /* map resolvers */
    let _resolvers = {
      CustomerList: this.list.bind(this),
      Customer: this.read.bind(this),
      CustomerCreate: this.create.bind(this),
      CustomerUpdate: this.update.bind(this),
      CustomerDelete: this.delete.bind(this),
      CustomerExists: this.exists.bind(this),
      CustomerFindOne: this.findOne.bind(this),
      CustomerCount: this.count.bind(this),
      CustomerDistinct: this.distinct.bind(this),
      CustomerGroupBy: this.groupBy.bind(this),
      CustomerAggregate: this.aggregate.bind(this),
      CustomerDistribution: this.distribution.bind(this),
      CustomerCreateBulk: this.createb.bind(this),
      CustomerUpdateBulk: this.updateb.bind(this),
      CustomerDeleteBulk: this.deleteb.bind(this),
    }

    /* applying middleware to resolvers */
    _resolvers = this.applyMiddlewares([this.CustomerMiddleware.default], _resolvers)

    return _resolvers;


  }


}

module.exports = CustomerResolver;