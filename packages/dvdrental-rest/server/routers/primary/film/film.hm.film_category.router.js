const {
  BaseRouter
} = require('xc-core');

class FilmHmFilmCategoryRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.FilmMiddleware = app.$middlewares.primary.FilmMiddleware;
    this.FilmHmFilmCategoryService = app.$services.primary.FilmHmFilmCategoryService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('FilmHmFilmCategoryRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.FilmHmFilmCategoryService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.FilmHmFilmCategoryService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.FilmHmFilmCategoryService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.FilmHmFilmCategoryService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.FilmHmFilmCategoryService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.FilmHmFilmCategoryService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.FilmHmFilmCategoryService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.FilmHmFilmCategoryService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.FilmHmFilmCategoryService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/film*",this.FilmMiddleware.default)

    router.get('/api/v1/film/has/film_category', this.FilmMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/film/:parentId/film_category', this.FilmMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/film/:parentId/film_category', this.FilmMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/film/:parentId/film_category/findOne', this.FilmMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/film/:parentId/film_category/groupby/:columnName',this.FilmMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/film/:parentId/film_category/distribution/:columnName',this.FilmMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/film/:parentId/film_category/distinct/:columnName',this.FilmMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/film/:parentId/film_category/aggregate/:columnName',this.FilmMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/film/:parentId/film_category/count', this.FilmMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/film/:parentId/film_category/bulk',this.FilmMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/film/:parentId/film_category/bulk',this.FilmMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/film/:parentId/film_category/bulk',this.FilmMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/film/:parentId/film_category/:id', this.FilmMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/film/:parentId/film_category/:id', this.FilmMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/film/:parentId/film_category/:id', this.FilmMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/film/:parentId/film_category/:id/exists', this.FilmMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = FilmHmFilmCategoryRouter;