const {
  BaseRouter
} = require('xc-core');

class CustomerRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.CustomerService = app.$services.primary.CustomerService;
    this.CustomerMiddleware = app.$middlewares.primary.CustomerMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.CustomerService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.CustomerService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.CustomerService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.CustomerService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.CustomerService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.CustomerService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.CustomerService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.CustomerService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.CustomerService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.CustomerService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.CustomerService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.CustomerService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.CustomerService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.CustomerService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.CustomerService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/customer*",this.CustomerMiddleware.default)

    router.get('/api/v1/customer', this.CustomerMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/customer', this.CustomerMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/customer/findOne', this.CustomerMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/customer/groupby/:columnName', this.CustomerMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/customer/distribution/:columnName', this.CustomerMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/customer/distinct/:columnName', this.CustomerMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/customer/aggregate/:columnName', this.CustomerMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/customer/count', this.CustomerMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/customer/bulk', this.CustomerMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/customer/bulk', this.CustomerMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/customer/bulk', this.CustomerMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/customer/:id', this.CustomerMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/customer/:id', this.CustomerMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/customer/:id', this.CustomerMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/customer/:id/exists', this.CustomerMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = CustomerRouter;