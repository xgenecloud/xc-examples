const {
  BaseRouter
} = require('xc-core');

class StaffHmPaymentRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.StaffMiddleware = app.$middlewares.primary.StaffMiddleware;
    this.StaffHmPaymentService = app.$services.primary.StaffHmPaymentService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('StaffHmPaymentRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.StaffHmPaymentService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.StaffHmPaymentService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.StaffHmPaymentService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.StaffHmPaymentService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.StaffHmPaymentService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.StaffHmPaymentService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.StaffHmPaymentService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.StaffHmPaymentService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.StaffHmPaymentService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/staff*",this.StaffMiddleware.default)

    router.get('/api/v1/staff/has/payment', this.StaffMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/staff/:parentId/payment', this.StaffMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/staff/:parentId/payment', this.StaffMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/staff/:parentId/payment/findOne', this.StaffMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/staff/:parentId/payment/groupby/:columnName',this.StaffMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/staff/:parentId/payment/distribution/:columnName',this.StaffMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/staff/:parentId/payment/distinct/:columnName',this.StaffMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/staff/:parentId/payment/aggregate/:columnName',this.StaffMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/staff/:parentId/payment/count', this.StaffMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/staff/:parentId/payment/bulk',this.StaffMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/staff/:parentId/payment/bulk',this.StaffMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/staff/:parentId/payment/bulk',this.StaffMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/staff/:parentId/payment/:id', this.StaffMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/staff/:parentId/payment/:id', this.StaffMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/staff/:parentId/payment/:id', this.StaffMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/staff/:parentId/payment/:id/exists', this.StaffMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = StaffHmPaymentRouter;