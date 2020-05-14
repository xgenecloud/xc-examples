const {
  BaseRouter
} = require('xc-core');

class ActorRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ActorService = app.$services.primary.ActorService;
    this.ActorMiddleware = app.$middlewares.primary.ActorMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.ActorService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.ActorService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.ActorService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ActorService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ActorService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ActorService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ActorService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.ActorService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.ActorService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.ActorService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.ActorService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.ActorService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.ActorService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.ActorService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.ActorService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/actor*",this.ActorMiddleware.default)

    router.get('/api/v1/actor', this.ActorMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/actor', this.ActorMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/actor/findOne', this.ActorMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/actor/groupby/:columnName', this.ActorMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/actor/distribution/:columnName', this.ActorMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/actor/distinct/:columnName', this.ActorMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/actor/aggregate/:columnName', this.ActorMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/actor/count', this.ActorMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/actor/bulk', this.ActorMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/actor/bulk', this.ActorMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/actor/bulk', this.ActorMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/actor/:id', this.ActorMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/actor/:id', this.ActorMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/actor/:id', this.ActorMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/actor/:id/exists', this.ActorMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = ActorRouter;