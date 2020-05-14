const {
  BaseRouter
} = require('xc-core');

class AddressHmCustomerRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.AddressMiddleware = app.$middlewares.primary.AddressMiddleware;
    this.AddressHmCustomerService = app.$services.primary.AddressHmCustomerService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('AddressHmCustomerRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.AddressHmCustomerService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.AddressHmCustomerService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.AddressHmCustomerService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.AddressHmCustomerService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.AddressHmCustomerService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.AddressHmCustomerService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.AddressHmCustomerService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.AddressHmCustomerService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.AddressHmCustomerService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/address*",this.AddressMiddleware.default)

    router.get('/api/v1/address/has/customer', this.AddressMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/address/:parentId/customer', this.AddressMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/address/:parentId/customer', this.AddressMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/address/:parentId/customer/findOne', this.AddressMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/address/:parentId/customer/groupby/:columnName',this.AddressMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/address/:parentId/customer/distribution/:columnName',this.AddressMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/address/:parentId/customer/distinct/:columnName',this.AddressMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/address/:parentId/customer/aggregate/:columnName',this.AddressMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/address/:parentId/customer/count', this.AddressMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/address/:parentId/customer/bulk',this.AddressMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/address/:parentId/customer/bulk',this.AddressMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/address/:parentId/customer/bulk',this.AddressMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/address/:parentId/customer/:id', this.AddressMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/address/:parentId/customer/:id', this.AddressMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/address/:parentId/customer/:id', this.AddressMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/address/:parentId/customer/:id/exists', this.AddressMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = AddressHmCustomerRouter;