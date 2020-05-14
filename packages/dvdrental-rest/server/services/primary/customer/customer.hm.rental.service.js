const {
  BaseService
} = require('xc-core');

class CustomerHmRentalService extends BaseService {

  constructor(app) {
    super(app);
    this.customer = app.$dbs.primary.customer;
    this.rental = app.$dbs.primary.rental;
  }



  async read(req, res) {
    let data = await this.rental.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'customer',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.rental.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'customer',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.rental.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'customer',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.rental.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'customer',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.rental.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'customer',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.rental.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'customer',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.rental.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'customer',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.customer.hasManyChildren({
      child: 'rental',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.customer.hasManyList({
      ...req.query,
      childs: `rental`
    })
  }

}

module.exports = CustomerHmRentalService;