const {
  BaseService
} = require('xc-core');

class CategoryHmFilmCategoryService extends BaseService {

  constructor(app) {
    super(app);
    this.category = app.$dbs.primary.category;
    this.film_category = app.$dbs.primary.film_category;
  }



  async read(req, res) {
    let data = await this.film_category.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'category',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.film_category.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'category',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.film_category.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'category',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.film_category.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'category',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.film_category.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'category',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.film_category.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'category',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.film_category.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'category',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.category.hasManyChildren({
      child: 'film_category',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.category.hasManyList({
      ...req.query,
      childs: `film_category`
    })
  }

}

module.exports = CategoryHmFilmCategoryService;