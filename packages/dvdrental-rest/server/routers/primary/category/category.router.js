const {
  BaseRouter
} = require('xc-core');

class CategoryRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.CategoryService = app.$services.primary.CategoryService;
    this.CategoryMiddleware = app.$middlewares.primary.CategoryMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.CategoryService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.CategoryService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.CategoryService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.CategoryService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.CategoryService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.CategoryService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.CategoryService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.CategoryService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.CategoryService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.CategoryService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.CategoryService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.CategoryService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.CategoryService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.CategoryService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.CategoryService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/category*",this.CategoryMiddleware.default)

    router.get('/api/v1/category', this.CategoryMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/category', this.CategoryMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/category/findOne', this.CategoryMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/category/groupby/:columnName', this.CategoryMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/category/distribution/:columnName', this.CategoryMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/category/distinct/:columnName', this.CategoryMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/category/aggregate/:columnName', this.CategoryMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/category/count', this.CategoryMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/category/bulk', this.CategoryMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/category/bulk', this.CategoryMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/category/bulk', this.CategoryMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/category/:id', this.CategoryMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/category/:id', this.CategoryMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/category/:id', this.CategoryMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/category/:id/exists', this.CategoryMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = CategoryRouter;