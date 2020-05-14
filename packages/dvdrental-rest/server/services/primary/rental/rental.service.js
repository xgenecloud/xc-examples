const {
  BaseService
} = require('xc-core');

class RentalService extends BaseService {

  constructor(app) {
    super(app);
    this.rental = app.$dbs.primary.rental;
  }

  async list(req, res) {
    let data = await this.rental.list(req.query);
    return data;
  }

  async create(req, res) {
    let data = await this.rental.insert(req.body);
    return data;
  }

  async read(req, res) {
    let data = await this.rental.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.rental.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.rental.delByPk(req.params.id);
    return data;
  }

  async count(req, res) {
    let data = await this.rental.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.rental.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.rental.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.rental.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.rental.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.rental.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async findOne(req, res) {
    let data = await this.rental.findOne(req.query);
    return data;
  }

  async createb(req, res) {
    let data = await this.rental.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.rental.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.rental.delb(req.body);
    return data;
  }

}

module.exports = RentalService;