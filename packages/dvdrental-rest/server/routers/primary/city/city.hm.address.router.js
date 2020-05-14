const {
  BaseRouter
} = require('xc-core');

class CityHmAddressRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.CityMiddleware = app.$middlewares.primary.CityMiddleware;
    this.CityHmAddressService = app.$services.primary.CityHmAddressService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('CityHmAddressRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.CityHmAddressService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.CityHmAddressService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.CityHmAddressService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.CityHmAddressService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.CityHmAddressService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.CityHmAddressService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.CityHmAddressService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.CityHmAddressService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.CityHmAddressService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/city*",this.CityMiddleware.default)

    router.get('/api/v1/city/has/address', this.CityMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/city/:parentId/address', this.CityMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/city/:parentId/address', this.CityMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/city/:parentId/address/findOne', this.CityMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/city/:parentId/address/groupby/:columnName',this.CityMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/city/:parentId/address/distribution/:columnName',this.CityMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/city/:parentId/address/distinct/:columnName',this.CityMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/city/:parentId/address/aggregate/:columnName',this.CityMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/city/:parentId/address/count', this.CityMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/city/:parentId/address/bulk',this.CityMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/city/:parentId/address/bulk',this.CityMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/city/:parentId/address/bulk',this.CityMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/city/:parentId/address/:id', this.CityMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/city/:parentId/address/:id', this.CityMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/city/:parentId/address/:id', this.CityMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/city/:parentId/address/:id/exists', this.CityMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = CityHmAddressRouter;