const {
  BaseRouter
} = require('xc-core');

class RentalRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.RentalService = app.$services.primary.RentalService;
    this.RentalMiddleware = app.$middlewares.primary.RentalMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.RentalService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.RentalService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.RentalService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.RentalService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.RentalService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.RentalService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.RentalService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.RentalService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.RentalService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.RentalService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.RentalService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.RentalService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.RentalService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.RentalService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.RentalService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/rental*",this.RentalMiddleware.default)

    router.get('/api/v1/rental', this.RentalMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/rental', this.RentalMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/rental/findOne', this.RentalMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/rental/groupby/:columnName', this.RentalMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/rental/distribution/:columnName', this.RentalMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/rental/distinct/:columnName', this.RentalMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/rental/aggregate/:columnName', this.RentalMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/rental/count', this.RentalMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/rental/bulk', this.RentalMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/rental/bulk', this.RentalMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/rental/bulk', this.RentalMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/rental/:id', this.RentalMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/rental/:id', this.RentalMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/rental/:id', this.RentalMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/rental/:id/exists', this.RentalMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = RentalRouter;