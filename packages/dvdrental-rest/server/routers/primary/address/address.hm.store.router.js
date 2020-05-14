const {
  BaseRouter
} = require('xc-core');

class AddressHmStoreRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.AddressMiddleware = app.$middlewares.primary.AddressMiddleware;
    this.AddressHmStoreService = app.$services.primary.AddressHmStoreService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('AddressHmStoreRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.AddressHmStoreService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.AddressHmStoreService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.AddressHmStoreService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.AddressHmStoreService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.AddressHmStoreService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.AddressHmStoreService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.AddressHmStoreService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.AddressHmStoreService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.AddressHmStoreService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/address*",this.AddressMiddleware.default)

    router.get('/api/v1/address/has/store', this.AddressMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/address/:parentId/store', this.AddressMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/address/:parentId/store', this.AddressMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/address/:parentId/store/findOne', this.AddressMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/address/:parentId/store/groupby/:columnName',this.AddressMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/address/:parentId/store/distribution/:columnName',this.AddressMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/address/:parentId/store/distinct/:columnName',this.AddressMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/address/:parentId/store/aggregate/:columnName',this.AddressMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/address/:parentId/store/count', this.AddressMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/address/:parentId/store/bulk',this.AddressMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/address/:parentId/store/bulk',this.AddressMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/address/:parentId/store/bulk',this.AddressMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/address/:parentId/store/:id', this.AddressMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/address/:parentId/store/:id', this.AddressMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/address/:parentId/store/:id', this.AddressMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/address/:parentId/store/:id/exists', this.AddressMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = AddressHmStoreRouter;