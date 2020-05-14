const {
  BaseRouter
} = require('xc-core');

class RentalHmPaymentRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.RentalMiddleware = app.$middlewares.primary.RentalMiddleware;
    this.RentalHmPaymentService = app.$services.primary.RentalHmPaymentService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('RentalHmPaymentRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.RentalHmPaymentService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.RentalHmPaymentService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.RentalHmPaymentService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.RentalHmPaymentService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.RentalHmPaymentService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.RentalHmPaymentService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.RentalHmPaymentService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.RentalHmPaymentService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.RentalHmPaymentService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/rental*",this.RentalMiddleware.default)

    router.get('/api/v1/rental/has/payment', this.RentalMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/rental/:parentId/payment', this.RentalMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/rental/:parentId/payment', this.RentalMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/rental/:parentId/payment/findOne', this.RentalMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/rental/:parentId/payment/groupby/:columnName',this.RentalMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/rental/:parentId/payment/distribution/:columnName',this.RentalMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/rental/:parentId/payment/distinct/:columnName',this.RentalMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/rental/:parentId/payment/aggregate/:columnName',this.RentalMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/rental/:parentId/payment/count', this.RentalMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/rental/:parentId/payment/bulk',this.RentalMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/rental/:parentId/payment/bulk',this.RentalMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/rental/:parentId/payment/bulk',this.RentalMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/rental/:parentId/payment/:id', this.RentalMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/rental/:parentId/payment/:id', this.RentalMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/rental/:parentId/payment/:id', this.RentalMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/rental/:parentId/payment/:id/exists', this.RentalMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = RentalHmPaymentRouter;