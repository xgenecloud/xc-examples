const {
  BaseRouter
} = require('xc-core');

class AddressRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.AddressService = app.$services.primary.AddressService;
    this.AddressMiddleware = app.$middlewares.primary.AddressMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.AddressService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.AddressService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.AddressService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.AddressService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.AddressService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.AddressService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.AddressService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.AddressService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.AddressService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.AddressService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.AddressService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.AddressService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.AddressService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.AddressService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.AddressService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/address*",this.AddressMiddleware.default)

    router.get('/api/v1/address', this.AddressMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/address', this.AddressMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/address/findOne', this.AddressMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/address/groupby/:columnName', this.AddressMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/address/distribution/:columnName', this.AddressMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/address/distinct/:columnName', this.AddressMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/address/aggregate/:columnName', this.AddressMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/address/count', this.AddressMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/address/bulk', this.AddressMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/address/bulk', this.AddressMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/address/bulk', this.AddressMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/address/:id', this.AddressMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/address/:id', this.AddressMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/address/:id', this.AddressMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/address/:id/exists', this.AddressMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = AddressRouter;