const {
  BaseRouter
} = require('xc-core');

class FilmCategoryRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.FilmCategoryService = app.$services.primary.FilmCategoryService;
    this.FilmCategoryMiddleware = app.$middlewares.primary.FilmCategoryMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.FilmCategoryService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.FilmCategoryService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.FilmCategoryService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.FilmCategoryService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.FilmCategoryService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.FilmCategoryService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.FilmCategoryService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.FilmCategoryService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.FilmCategoryService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.FilmCategoryService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.FilmCategoryService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.FilmCategoryService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.FilmCategoryService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.FilmCategoryService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.FilmCategoryService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/film_category*",this.FilmCategoryMiddleware.default)

    router.get('/api/v1/film_category', this.FilmCategoryMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/film_category', this.FilmCategoryMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/film_category/findOne', this.FilmCategoryMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/film_category/groupby/:columnName', this.FilmCategoryMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/film_category/distribution/:columnName', this.FilmCategoryMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/film_category/distinct/:columnName', this.FilmCategoryMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/film_category/aggregate/:columnName', this.FilmCategoryMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/film_category/count', this.FilmCategoryMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/film_category/bulk', this.FilmCategoryMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/film_category/bulk', this.FilmCategoryMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/film_category/bulk', this.FilmCategoryMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/film_category/:id', this.FilmCategoryMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/film_category/:id', this.FilmCategoryMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/film_category/:id', this.FilmCategoryMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/film_category/:id/exists', this.FilmCategoryMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = FilmCategoryRouter;