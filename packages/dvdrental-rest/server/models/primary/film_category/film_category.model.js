const {
  BaseModelSql
} = require('xc-data-mapper');

class film_category extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./film_category.meta.js')
    });

  }

}


module.exports = film_category;