const {
  BaseService
} = require('xc-core');

class CountryHmCityService extends BaseService {

  constructor(app) {
    super(app);
    this.country = app.$dbs.primary.country;
    this.city = app.$dbs.primary.city;
  }



  async read(req, res) {
    let data = await this.city.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'country',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.city.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'country',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.city.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'country',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.city.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'country',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.city.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'country',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.city.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'country',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.city.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'country',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.country.hasManyChildren({
      child: 'city',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.country.hasManyList({
      ...req.query,
      childs: `city`
    })
  }

}

module.exports = CountryHmCityService;