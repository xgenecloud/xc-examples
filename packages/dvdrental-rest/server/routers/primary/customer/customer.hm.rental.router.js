const {
  BaseRouter
} = require('xc-core');

class CustomerHmRentalRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.CustomerMiddleware = app.$middlewares.primary.CustomerMiddleware;
    this.CustomerHmRentalService = app.$services.primary.CustomerHmRentalService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('CustomerHmRentalRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.CustomerHmRentalService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.CustomerHmRentalService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.CustomerHmRentalService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.CustomerHmRentalService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.CustomerHmRentalService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.CustomerHmRentalService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.CustomerHmRentalService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.CustomerHmRentalService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.CustomerHmRentalService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/customer*",this.CustomerMiddleware.default)

    router.get('/api/v1/customer/has/rental', this.CustomerMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/customer/:parentId/rental', this.CustomerMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/customer/:parentId/rental', this.CustomerMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/customer/:parentId/rental/findOne', this.CustomerMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/customer/:parentId/rental/groupby/:columnName',this.CustomerMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/customer/:parentId/rental/distribution/:columnName',this.CustomerMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/customer/:parentId/rental/distinct/:columnName',this.CustomerMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/customer/:parentId/rental/aggregate/:columnName',this.CustomerMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/customer/:parentId/rental/count', this.CustomerMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/customer/:parentId/rental/bulk',this.CustomerMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/customer/:parentId/rental/bulk',this.CustomerMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/customer/:parentId/rental/bulk',this.CustomerMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/customer/:parentId/rental/:id', this.CustomerMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/customer/:parentId/rental/:id', this.CustomerMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/customer/:parentId/rental/:id', this.CustomerMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/customer/:parentId/rental/:id/exists', this.CustomerMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = CustomerHmRentalRouter;