const {
  BaseService
} = require('xc-core');

class FilmHmFilmCategoryService extends BaseService {

  constructor(app) {
    super(app);
    this.film = app.$dbs.primary.film;
    this.film_category = app.$dbs.primary.film_category;
  }



  async read(req, res) {
    let data = await this.film_category.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'film',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.film_category.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'film',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.film_category.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'film',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.film_category.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'film',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.film_category.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'film',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.film_category.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'film',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.film_category.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'film',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.film.hasManyChildren({
      child: 'film_category',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.film.hasManyList({
      ...req.query,
      childs: `film_category`
    })
  }

}

module.exports = FilmHmFilmCategoryService;