const {
  BaseService
} = require('xc-core');

class AddressHmStoreService extends BaseService {

  constructor(app) {
    super(app);
    this.address = app.$dbs.primary.address;
    this.store = app.$dbs.primary.store;
  }



  async read(req, res) {
    let data = await this.store.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'address',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.store.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'address',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.store.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'address',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.store.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'address',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.store.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'address',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.store.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'address',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.store.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'address',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.address.hasManyChildren({
      child: 'store',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.address.hasManyList({
      ...req.query,
      childs: `store`
    })
  }

}

module.exports = AddressHmStoreService;