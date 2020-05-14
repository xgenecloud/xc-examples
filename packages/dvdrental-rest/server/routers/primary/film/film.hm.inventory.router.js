const {
  BaseRouter
} = require('xc-core');

class FilmHmInventoryRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.FilmMiddleware = app.$middlewares.primary.FilmMiddleware;
    this.FilmHmInventoryService = app.$services.primary.FilmHmInventoryService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('FilmHmInventoryRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.FilmHmInventoryService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.FilmHmInventoryService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.FilmHmInventoryService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.FilmHmInventoryService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.FilmHmInventoryService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.FilmHmInventoryService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.FilmHmInventoryService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.FilmHmInventoryService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.FilmHmInventoryService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/film*",this.FilmMiddleware.default)

    router.get('/api/v1/film/has/inventory', this.FilmMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/film/:parentId/inventory', this.FilmMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/film/:parentId/inventory', this.FilmMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/film/:parentId/inventory/findOne', this.FilmMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/film/:parentId/inventory/groupby/:columnName',this.FilmMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/film/:parentId/inventory/distribution/:columnName',this.FilmMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/film/:parentId/inventory/distinct/:columnName',this.FilmMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/film/:parentId/inventory/aggregate/:columnName',this.FilmMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/film/:parentId/inventory/count', this.FilmMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/film/:parentId/inventory/bulk',this.FilmMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/film/:parentId/inventory/bulk',this.FilmMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/film/:parentId/inventory/bulk',this.FilmMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/film/:parentId/inventory/:id', this.FilmMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/film/:parentId/inventory/:id', this.FilmMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/film/:parentId/inventory/:id', this.FilmMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/film/:parentId/inventory/:id/exists', this.FilmMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = FilmHmInventoryRouter;