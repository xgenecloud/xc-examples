const {
  BaseService
} = require('xc-core');

class ActorService extends BaseService {

  constructor(app) {
    super(app);
    this.actor = app.$dbs.primary.actor;
  }

  async list(req, res) {
    let data = await this.actor.list(req.query);
    return data;
  }

  async create(req, res) {
    let data = await this.actor.insert(req.body);
    return data;
  }

  async read(req, res) {
    let data = await this.actor.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.actor.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.actor.delByPk(req.params.id);
    return data;
  }

  async count(req, res) {
    let data = await this.actor.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.actor.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.actor.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.actor.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.actor.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.actor.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async findOne(req, res) {
    let data = await this.actor.findOne(req.query);
    return data;
  }

  async createb(req, res) {
    let data = await this.actor.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.actor.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.actor.delb(req.body);
    return data;
  }

}

module.exports = ActorService;