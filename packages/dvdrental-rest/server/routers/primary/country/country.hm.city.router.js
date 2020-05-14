const {
  BaseRouter
} = require('xc-core');

class CountryHmCityRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.CountryMiddleware = app.$middlewares.primary.CountryMiddleware;
    this.CountryHmCityService = app.$services.primary.CountryHmCityService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('CountryHmCityRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.CountryHmCityService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.CountryHmCityService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.CountryHmCityService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.CountryHmCityService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.CountryHmCityService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.CountryHmCityService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.CountryHmCityService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.CountryHmCityService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.CountryHmCityService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/country*",this.CountryMiddleware.default)

    router.get('/api/v1/country/has/city', this.CountryMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/country/:parentId/city', this.CountryMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/country/:parentId/city', this.CountryMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/country/:parentId/city/findOne', this.CountryMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/country/:parentId/city/groupby/:columnName',this.CountryMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/country/:parentId/city/distribution/:columnName',this.CountryMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/country/:parentId/city/distinct/:columnName',this.CountryMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/country/:parentId/city/aggregate/:columnName',this.CountryMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/country/:parentId/city/count', this.CountryMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/country/:parentId/city/bulk',this.CountryMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/country/:parentId/city/bulk',this.CountryMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/country/:parentId/city/bulk',this.CountryMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/country/:parentId/city/:id', this.CountryMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/country/:parentId/city/:id', this.CountryMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/country/:parentId/city/:id', this.CountryMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/country/:parentId/city/:id/exists', this.CountryMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = CountryHmCityRouter;