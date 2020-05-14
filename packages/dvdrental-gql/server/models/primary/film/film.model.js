const {
  BaseModelSql
} = require('xc-data-mapper');

class film extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./film.meta.js')
    });

  }

}


module.exports = film;