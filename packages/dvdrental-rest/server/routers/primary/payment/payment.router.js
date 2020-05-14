const {
  BaseRouter
} = require('xc-core');

class PaymentRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.PaymentService = app.$services.primary.PaymentService;
    this.PaymentMiddleware = app.$middlewares.primary.PaymentMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.PaymentService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.PaymentService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.PaymentService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.PaymentService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.PaymentService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.PaymentService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.PaymentService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.PaymentService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.PaymentService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.PaymentService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.PaymentService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.PaymentService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.PaymentService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.PaymentService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.PaymentService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/payment*",this.PaymentMiddleware.default)

    router.get('/api/v1/payment', this.PaymentMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/payment', this.PaymentMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/payment/findOne', this.PaymentMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/payment/groupby/:columnName', this.PaymentMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/payment/distribution/:columnName', this.PaymentMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/payment/distinct/:columnName', this.PaymentMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/payment/aggregate/:columnName', this.PaymentMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/payment/count', this.PaymentMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/payment/bulk', this.PaymentMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/payment/bulk', this.PaymentMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/payment/bulk', this.PaymentMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/payment/:id', this.PaymentMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/payment/:id', this.PaymentMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/payment/:id', this.PaymentMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/payment/:id/exists', this.PaymentMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = PaymentRouter;