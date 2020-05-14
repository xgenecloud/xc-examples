const {
  BaseService
} = require('xc-core');

class CityHmAddressService extends BaseService {

  constructor(app) {
    super(app);
    this.city = app.$dbs.primary.city;
    this.address = app.$dbs.primary.address;
  }



  async read(req, res) {
    let data = await this.address.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'city',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.address.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'city',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.address.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'city',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.address.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'city',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.address.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'city',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.address.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'city',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.address.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'city',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.city.hasManyChildren({
      child: 'address',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.city.hasManyList({
      ...req.query,
      childs: `address`
    })
  }

}

module.exports = CityHmAddressService;