const {
  BaseResolver
} = require('xc-core');

class PaymentResolver extends BaseResolver {

  constructor(app = {}) {
    super(app);
    this.PaymentService = app.$services.primary.PaymentService;
    this.PaymentMiddleware = app.$middlewares.primary.PaymentMiddleware;
  }

  mw1(root, args, context, info) {
    // console.log('Within payment Middleware mw1');
  }

  async list(args) {
    let data = await this.PaymentService.list(args)
    return data;
  }

  async read(args) {
    return await this.PaymentService.read(args);
  }

  async create(args) {
    return await this.PaymentService.create(args);
  }

  async update(args) {
    return await this.PaymentService.update(args);
  }

  async delete(args) {
    return await this.PaymentService.delete(args);
  }

  async count(args) {
    let data = await this.PaymentService.count(args);
    return data;
  }

  async exists(args) {
    let data = await this.PaymentService.exists(args);
    return data;
  }

  async groupBy(args) {
    let data = await this.PaymentService.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.PaymentService.aggregate(args);
    return data;
  }

  async distribution(args) {
    let data = await this.PaymentService.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = await this.PaymentService.distinct(args);
    return data;
  }

  async findOne(args) {
    let data = await this.PaymentService.findOne(args);
    return data;
  }

  async createb(args) {
    let data = await this.PaymentService.createb(args);
    return data;
  }

  async updateb(args) {
    let data = await this.PaymentService.updateb(args);
    return data;
  }

  async deleteb(args) {
    let data = await this.PaymentService.deleteb(args);
    return data;
  }

  typedefs() {}

  resolvers() {
    return this.setupResolvers();
  }

  setupResolvers() {

    /* map resolvers */
    let _resolvers = {
      PaymentList: this.list.bind(this),
      Payment: this.read.bind(this),
      PaymentCreate: this.create.bind(this),
      PaymentUpdate: this.update.bind(this),
      PaymentDelete: this.delete.bind(this),
      PaymentExists: this.exists.bind(this),
      PaymentFindOne: this.findOne.bind(this),
      PaymentCount: this.count.bind(this),
      PaymentDistinct: this.distinct.bind(this),
      PaymentGroupBy: this.groupBy.bind(this),
      PaymentAggregate: this.aggregate.bind(this),
      PaymentDistribution: this.distribution.bind(this),
      PaymentCreateBulk: this.createb.bind(this),
      PaymentUpdateBulk: this.updateb.bind(this),
      PaymentDeleteBulk: this.deleteb.bind(this),
    }

    /* applying middleware to resolvers */
    _resolvers = this.applyMiddlewares([this.PaymentMiddleware.default], _resolvers)

    return _resolvers;


  }


}

module.exports = PaymentResolver;