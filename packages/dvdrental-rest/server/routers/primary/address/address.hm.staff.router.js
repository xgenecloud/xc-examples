const {
  BaseRouter
} = require('xc-core');

class AddressHmStaffRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.AddressMiddleware = app.$middlewares.primary.AddressMiddleware;
    this.AddressHmStaffService = app.$services.primary.AddressHmStaffService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('AddressHmStaffRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.AddressHmStaffService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.AddressHmStaffService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.AddressHmStaffService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.AddressHmStaffService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.AddressHmStaffService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.AddressHmStaffService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.AddressHmStaffService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.AddressHmStaffService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.AddressHmStaffService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/address*",this.AddressMiddleware.default)

    router.get('/api/v1/address/has/staff', this.AddressMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/address/:parentId/staff', this.AddressMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/address/:parentId/staff', this.AddressMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/address/:parentId/staff/findOne', this.AddressMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/address/:parentId/staff/groupby/:columnName',this.AddressMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/address/:parentId/staff/distribution/:columnName',this.AddressMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/address/:parentId/staff/distinct/:columnName',this.AddressMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/address/:parentId/staff/aggregate/:columnName',this.AddressMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/address/:parentId/staff/count', this.AddressMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/address/:parentId/staff/bulk',this.AddressMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/address/:parentId/staff/bulk',this.AddressMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/address/:parentId/staff/bulk',this.AddressMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/address/:parentId/staff/:id', this.AddressMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/address/:parentId/staff/:id', this.AddressMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/address/:parentId/staff/:id', this.AddressMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/address/:parentId/staff/:id/exists', this.AddressMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = AddressHmStaffRouter;