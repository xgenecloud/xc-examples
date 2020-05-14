const {
  BaseService
} = require('xc-core');

class LanguageHmFilmService extends BaseService {

  constructor(app) {
    super(app);
    this.language = app.$dbs.primary.language;
    this.film = app.$dbs.primary.film;
  }



  async read(req, res) {
    let data = await this.film.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'language',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.film.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'language',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.film.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'language',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.film.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'language',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.film.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'language',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.film.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'language',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.film.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'language',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.language.hasManyChildren({
      child: 'film',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.language.hasManyList({
      ...req.query,
      childs: `film`
    })
  }

}

module.exports = LanguageHmFilmService;