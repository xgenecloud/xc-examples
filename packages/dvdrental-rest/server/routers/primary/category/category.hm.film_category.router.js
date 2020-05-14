const {
  BaseRouter
} = require('xc-core');

class CategoryHmFilmCategoryRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.CategoryMiddleware = app.$middlewares.primary.CategoryMiddleware;
    this.CategoryHmFilmCategoryService = app.$services.primary.CategoryHmFilmCategoryService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('CategoryHmFilmCategoryRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.CategoryHmFilmCategoryService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.CategoryHmFilmCategoryService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.CategoryHmFilmCategoryService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.CategoryHmFilmCategoryService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.CategoryHmFilmCategoryService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.CategoryHmFilmCategoryService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.CategoryHmFilmCategoryService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.CategoryHmFilmCategoryService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.CategoryHmFilmCategoryService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/category*",this.CategoryMiddleware.default)

    router.get('/api/v1/category/has/film_category', this.CategoryMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/category/:parentId/film_category', this.CategoryMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/category/:parentId/film_category', this.CategoryMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/category/:parentId/film_category/findOne', this.CategoryMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/category/:parentId/film_category/groupby/:columnName',this.CategoryMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/category/:parentId/film_category/distribution/:columnName',this.CategoryMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/category/:parentId/film_category/distinct/:columnName',this.CategoryMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/category/:parentId/film_category/aggregate/:columnName',this.CategoryMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/category/:parentId/film_category/count', this.CategoryMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/category/:parentId/film_category/bulk',this.CategoryMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/category/:parentId/film_category/bulk',this.CategoryMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/category/:parentId/film_category/bulk',this.CategoryMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/category/:parentId/film_category/:id', this.CategoryMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/category/:parentId/film_category/:id', this.CategoryMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/category/:parentId/film_category/:id', this.CategoryMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/category/:parentId/film_category/:id/exists', this.CategoryMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = CategoryHmFilmCategoryRouter;