const {
  BaseRouter
} = require('xc-core');

class CustomerHmPaymentRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.CustomerMiddleware = app.$middlewares.primary.CustomerMiddleware;
    this.CustomerHmPaymentService = app.$services.primary.CustomerHmPaymentService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('CustomerHmPaymentRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.CustomerHmPaymentService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.CustomerHmPaymentService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.CustomerHmPaymentService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.CustomerHmPaymentService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.CustomerHmPaymentService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.CustomerHmPaymentService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.CustomerHmPaymentService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.CustomerHmPaymentService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.CustomerHmPaymentService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/customer*",this.CustomerMiddleware.default)

    router.get('/api/v1/customer/has/payment', this.CustomerMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/customer/:parentId/payment', this.CustomerMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/customer/:parentId/payment', this.CustomerMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/customer/:parentId/payment/findOne', this.CustomerMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/customer/:parentId/payment/groupby/:columnName',this.CustomerMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/customer/:parentId/payment/distribution/:columnName',this.CustomerMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/customer/:parentId/payment/distinct/:columnName',this.CustomerMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/customer/:parentId/payment/aggregate/:columnName',this.CustomerMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/customer/:parentId/payment/count', this.CustomerMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/customer/:parentId/payment/bulk',this.CustomerMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/customer/:parentId/payment/bulk',this.CustomerMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/customer/:parentId/payment/bulk',this.CustomerMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/customer/:parentId/payment/:id', this.CustomerMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/customer/:parentId/payment/:id', this.CustomerMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/customer/:parentId/payment/:id', this.CustomerMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/customer/:parentId/payment/:id/exists', this.CustomerMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = CustomerHmPaymentRouter;