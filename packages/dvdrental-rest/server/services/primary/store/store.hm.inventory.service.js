const {
  BaseService
} = require('xc-core');

class StoreHmInventoryService extends BaseService {

  constructor(app) {
    super(app);
    this.store = app.$dbs.primary.store;
    this.inventory = app.$dbs.primary.inventory;
  }



  async read(req, res) {
    let data = await this.inventory.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'store',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.inventory.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'store',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.inventory.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'store',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.inventory.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'store',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.inventory.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'store',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.inventory.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'store',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.inventory.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'store',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.store.hasManyChildren({
      child: 'inventory',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.store.hasManyList({
      ...req.query,
      childs: `inventory`
    })
  }

}

module.exports = StoreHmInventoryService;