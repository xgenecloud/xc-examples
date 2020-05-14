const {
  BaseRouter
} = require('xc-core');

class StaffRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.StaffService = app.$services.primary.StaffService;
    this.StaffMiddleware = app.$middlewares.primary.StaffMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.StaffService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.StaffService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.StaffService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.StaffService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.StaffService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.StaffService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.StaffService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.StaffService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.StaffService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.StaffService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.StaffService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.StaffService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.StaffService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.StaffService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.StaffService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/staff*",this.StaffMiddleware.default)

    router.get('/api/v1/staff', this.StaffMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/staff', this.StaffMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/staff/findOne', this.StaffMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/staff/groupby/:columnName', this.StaffMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/staff/distribution/:columnName', this.StaffMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/staff/distinct/:columnName', this.StaffMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/staff/aggregate/:columnName', this.StaffMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/staff/count', this.StaffMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/staff/bulk', this.StaffMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/staff/bulk', this.StaffMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/staff/bulk', this.StaffMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/staff/:id', this.StaffMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/staff/:id', this.StaffMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/staff/:id', this.StaffMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/staff/:id/exists', this.StaffMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = StaffRouter;