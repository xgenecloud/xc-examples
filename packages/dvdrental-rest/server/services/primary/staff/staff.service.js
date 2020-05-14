const {
  BaseService
} = require('xc-core');

class StaffService extends BaseService {

  constructor(app) {
    super(app);
    this.staff = app.$dbs.primary.staff;
  }

  async list(req, res) {
    let data = await this.staff.list(req.query);
    return data;
  }

  async create(req, res) {
    let data = await this.staff.insert(req.body);
    return data;
  }

  async read(req, res) {
    let data = await this.staff.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.staff.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.staff.delByPk(req.params.id);
    return data;
  }

  async count(req, res) {
    let data = await this.staff.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.staff.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.staff.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.staff.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.staff.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.staff.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async findOne(req, res) {
    let data = await this.staff.findOne(req.query);
    return data;
  }

  async createb(req, res) {
    let data = await this.staff.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.staff.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.staff.delb(req.body);
    return data;
  }

}

module.exports = StaffService;