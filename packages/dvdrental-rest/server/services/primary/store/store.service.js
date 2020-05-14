const {
  BaseService
} = require('xc-core');

class StoreService extends BaseService {

  constructor(app) {
    super(app);
    this.store = app.$dbs.primary.store;
  }

  async list(req, res) {
    let data = await this.store.list(req.query);
    return data;
  }

  async create(req, res) {
    let data = await this.store.insert(req.body);
    return data;
  }

  async read(req, res) {
    let data = await this.store.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.store.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.store.delByPk(req.params.id);
    return data;
  }

  async count(req, res) {
    let data = await this.store.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.store.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.store.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.store.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.store.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.store.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async findOne(req, res) {
    let data = await this.store.findOne(req.query);
    return data;
  }

  async createb(req, res) {
    let data = await this.store.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.store.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.store.delb(req.body);
    return data;
  }

}

module.exports = StoreService;