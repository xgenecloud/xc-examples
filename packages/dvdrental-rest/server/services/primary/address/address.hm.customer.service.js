const {
  BaseService
} = require('xc-core');

class AddressHmCustomerService extends BaseService {

  constructor(app) {
    super(app);
    this.address = app.$dbs.primary.address;
    this.customer = app.$dbs.primary.customer;
  }



  async read(req, res) {
    let data = await this.customer.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'address',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.customer.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'address',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.customer.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'address',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.customer.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'address',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.customer.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'address',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.customer.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'address',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.customer.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'address',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.address.hasManyChildren({
      child: 'customer',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.address.hasManyList({
      ...req.query,
      childs: `customer`
    })
  }

}

module.exports = AddressHmCustomerService;