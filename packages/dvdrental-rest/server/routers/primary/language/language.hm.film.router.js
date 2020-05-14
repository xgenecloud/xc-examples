const {
  BaseRouter
} = require('xc-core');

class LanguageHmFilmRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.LanguageMiddleware = app.$middlewares.primary.LanguageMiddleware;
    this.LanguageHmFilmService = app.$services.primary.LanguageHmFilmService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('LanguageHmFilmRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.LanguageHmFilmService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.LanguageHmFilmService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.LanguageHmFilmService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.LanguageHmFilmService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.LanguageHmFilmService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.LanguageHmFilmService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.LanguageHmFilmService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.LanguageHmFilmService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.LanguageHmFilmService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/language*",this.LanguageMiddleware.default)

    router.get('/api/v1/language/has/film', this.LanguageMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/language/:parentId/film', this.LanguageMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/language/:parentId/film', this.LanguageMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/language/:parentId/film/findOne', this.LanguageMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/language/:parentId/film/groupby/:columnName',this.LanguageMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/language/:parentId/film/distribution/:columnName',this.LanguageMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/language/:parentId/film/distinct/:columnName',this.LanguageMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/language/:parentId/film/aggregate/:columnName',this.LanguageMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/language/:parentId/film/count', this.LanguageMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/language/:parentId/film/bulk',this.LanguageMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/language/:parentId/film/bulk',this.LanguageMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/language/:parentId/film/bulk',this.LanguageMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/language/:parentId/film/:id', this.LanguageMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/language/:parentId/film/:id', this.LanguageMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/language/:parentId/film/:id', this.LanguageMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/language/:parentId/film/:id/exists', this.LanguageMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = LanguageHmFilmRouter;