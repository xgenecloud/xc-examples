const {
  BaseModelSql
} = require('xc-data-mapper');

class film_text extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./film_text.meta.js')
    });

  }

}


module.exports = film_text;