const {
  BaseService
} = require('xc-core');

class StoreHmCustomerService extends BaseService {

  constructor(app) {
    super(app);
    this.store = app.$dbs.primary.store;
    this.customer = app.$dbs.primary.customer;
  }



  async read(req, res) {
    let data = await this.customer.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'store',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.customer.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'store',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.customer.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'store',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.customer.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'store',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.customer.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'store',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.customer.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'store',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.customer.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'store',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.store.hasManyChildren({
      child: 'customer',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.store.hasManyList({
      ...req.query,
      childs: `customer`
    })
  }

}

module.exports = StoreHmCustomerService;