const {
  BaseRouter
} = require('xc-core');

class StaffHmRentalRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.StaffMiddleware = app.$middlewares.primary.StaffMiddleware;
    this.StaffHmRentalService = app.$services.primary.StaffHmRentalService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('StaffHmRentalRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.StaffHmRentalService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.StaffHmRentalService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.StaffHmRentalService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.StaffHmRentalService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.StaffHmRentalService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.StaffHmRentalService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.StaffHmRentalService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.StaffHmRentalService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.StaffHmRentalService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/staff*",this.StaffMiddleware.default)

    router.get('/api/v1/staff/has/rental', this.StaffMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/staff/:parentId/rental', this.StaffMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/staff/:parentId/rental', this.StaffMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/staff/:parentId/rental/findOne', this.StaffMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/staff/:parentId/rental/groupby/:columnName',this.StaffMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/staff/:parentId/rental/distribution/:columnName',this.StaffMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/staff/:parentId/rental/distinct/:columnName',this.StaffMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/staff/:parentId/rental/aggregate/:columnName',this.StaffMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/staff/:parentId/rental/count', this.StaffMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/staff/:parentId/rental/bulk',this.StaffMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/staff/:parentId/rental/bulk',this.StaffMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/staff/:parentId/rental/bulk',this.StaffMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/staff/:parentId/rental/:id', this.StaffMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/staff/:parentId/rental/:id', this.StaffMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/staff/:parentId/rental/:id', this.StaffMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/staff/:parentId/rental/:id/exists', this.StaffMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = StaffHmRentalRouter;