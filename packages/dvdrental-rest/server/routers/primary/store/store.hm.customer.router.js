const {
  BaseRouter
} = require('xc-core');

class StoreHmCustomerRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.StoreMiddleware = app.$middlewares.primary.StoreMiddleware;
    this.StoreHmCustomerService = app.$services.primary.StoreHmCustomerService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('StoreHmCustomerRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.StoreHmCustomerService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.StoreHmCustomerService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.StoreHmCustomerService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.StoreHmCustomerService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.StoreHmCustomerService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.StoreHmCustomerService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.StoreHmCustomerService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.StoreHmCustomerService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.StoreHmCustomerService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/store*",this.StoreMiddleware.default)

    router.get('/api/v1/store/has/customer', this.StoreMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/store/:parentId/customer', this.StoreMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/store/:parentId/customer', this.StoreMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/store/:parentId/customer/findOne', this.StoreMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/store/:parentId/customer/groupby/:columnName',this.StoreMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/store/:parentId/customer/distribution/:columnName',this.StoreMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/store/:parentId/customer/distinct/:columnName',this.StoreMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/store/:parentId/customer/aggregate/:columnName',this.StoreMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/store/:parentId/customer/count', this.StoreMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/store/:parentId/customer/bulk',this.StoreMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/store/:parentId/customer/bulk',this.StoreMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/store/:parentId/customer/bulk',this.StoreMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/store/:parentId/customer/:id', this.StoreMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/store/:parentId/customer/:id', this.StoreMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/store/:parentId/customer/:id', this.StoreMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/store/:parentId/customer/:id/exists', this.StoreMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = StoreHmCustomerRouter;