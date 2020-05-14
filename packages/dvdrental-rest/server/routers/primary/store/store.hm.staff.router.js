const {
  BaseRouter
} = require('xc-core');

class StoreHmStaffRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.StoreMiddleware = app.$middlewares.primary.StoreMiddleware;
    this.StoreHmStaffService = app.$services.primary.StoreHmStaffService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('StoreHmStaffRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.StoreHmStaffService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.StoreHmStaffService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.StoreHmStaffService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.StoreHmStaffService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.StoreHmStaffService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.StoreHmStaffService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.StoreHmStaffService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.StoreHmStaffService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.StoreHmStaffService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/store*",this.StoreMiddleware.default)

    router.get('/api/v1/store/has/staff', this.StoreMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/store/:parentId/staff', this.StoreMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/store/:parentId/staff', this.StoreMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/store/:parentId/staff/findOne', this.StoreMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/store/:parentId/staff/groupby/:columnName',this.StoreMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/store/:parentId/staff/distribution/:columnName',this.StoreMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/store/:parentId/staff/distinct/:columnName',this.StoreMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/store/:parentId/staff/aggregate/:columnName',this.StoreMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/store/:parentId/staff/count', this.StoreMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/store/:parentId/staff/bulk',this.StoreMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/store/:parentId/staff/bulk',this.StoreMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/store/:parentId/staff/bulk',this.StoreMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/store/:parentId/staff/:id', this.StoreMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/store/:parentId/staff/:id', this.StoreMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/store/:parentId/staff/:id', this.StoreMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/store/:parentId/staff/:id/exists', this.StoreMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = StoreHmStaffRouter;