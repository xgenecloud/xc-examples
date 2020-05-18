const {
  BaseResolver
} = require('xc-core');

class InventoryResolver extends BaseResolver {

  constructor(app = {}) {
    super(app);
    this.InventoryService = app.$services.primary.InventoryService;
    this.InventoryMiddleware = app.$middlewares.primary.InventoryMiddleware;
  }

  mw1(root, args, context, info) {
    // console.log('Within inventory Middleware mw1');
  }

  async list(args) {
    let data = await this.InventoryService.list(args)
    return data;
  }

  async read(args) {
    return await this.InventoryService.read(args);
  }

  async create(args) {
    return await this.InventoryService.create(args);
  }

  async update(args) {
    return await this.InventoryService.update(args);
  }

  async delete(args) {
    return await this.InventoryService.delete(args);
  }

  async count(args) {
    let data = await this.InventoryService.count(args);
    return data;
  }

  async exists(args) {
    let data = await this.InventoryService.exists(args);
    return data;
  }

  async groupBy(args) {
    let data = await this.InventoryService.groupBy(args);
    return data;
  }

  async aggregate(args) {
    let data = await this.InventoryService.aggregate(args);
    return data;
  }

  async distribution(args) {
    let data = await this.InventoryService.distribution(args);
    return data;
  }

  async distinct(args) {
    let data = await this.InventoryService.distinct(args);
    return data;
  }

  async findOne(args) {
    let data = await this.InventoryService.findOne(args);
    return data;
  }

  async createb(args) {
    let data = await this.InventoryService.createb(args);
    return data;
  }

  async updateb(args) {
    let data = await this.InventoryService.updateb(args);
    return data;
  }

  async deleteb(args) {
    let data = await this.InventoryService.deleteb(args);
    return data;
  }

  typedefs() {}

  resolvers() {
    return this.setupResolvers();
  }

  setupResolvers() {

    /* map resolvers */
    let _resolvers = {
      InventoryList: this.list.bind(this),
      Inventory: this.read.bind(this),
      InventoryCreate: this.create.bind(this),
      InventoryUpdate: this.update.bind(this),
      InventoryDelete: this.delete.bind(this),
      InventoryExists: this.exists.bind(this),
      InventoryFindOne: this.findOne.bind(this),
      InventoryCount: this.count.bind(this),
      InventoryDistinct: this.distinct.bind(this),
      InventoryGroupBy: this.groupBy.bind(this),
      InventoryAggregate: this.aggregate.bind(this),
      InventoryDistribution: this.distribution.bind(this),
      InventoryCreateBulk: this.createb.bind(this),
      InventoryUpdateBulk: this.updateb.bind(this),
      InventoryDeleteBulk: this.deleteb.bind(this),
    }

    /* applying middleware to resolvers */
    _resolvers = this.applyMiddlewares([this.InventoryMiddleware.default], _resolvers)

    return _resolvers;


  }


}

module.exports = InventoryResolver;