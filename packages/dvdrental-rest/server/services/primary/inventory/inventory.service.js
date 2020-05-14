const {
  BaseService
} = require('xc-core');

class InventoryService extends BaseService {

  constructor(app) {
    super(app);
    this.inventory = app.$dbs.primary.inventory;
  }

  async list(req, res) {
    let data = await this.inventory.list(req.query);
    return data;
  }

  async create(req, res) {
    let data = await this.inventory.insert(req.body);
    return data;
  }

  async read(req, res) {
    let data = await this.inventory.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.inventory.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.inventory.delByPk(req.params.id);
    return data;
  }

  async count(req, res) {
    let data = await this.inventory.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.inventory.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.inventory.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.inventory.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.inventory.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.inventory.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async findOne(req, res) {
    let data = await this.inventory.findOne(req.query);
    return data;
  }

  async createb(req, res) {
    let data = await this.inventory.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.inventory.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.inventory.delb(req.body);
    return data;
  }

}

module.exports = InventoryService;