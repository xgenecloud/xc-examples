const {
  BaseService
} = require('xc-core');

class StoreHmStaffService extends BaseService {

  constructor(app) {
    super(app);
    this.store = app.$dbs.primary.store;
    this.staff = app.$dbs.primary.staff;
  }



  async read(req, res) {
    let data = await this.staff.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'store',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.staff.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'store',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.staff.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'store',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.staff.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'store',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.staff.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'store',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.staff.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'store',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.staff.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'store',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.store.hasManyChildren({
      child: 'staff',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.store.hasManyList({
      ...req.query,
      childs: `staff`
    })
  }

}

module.exports = StoreHmStaffService;