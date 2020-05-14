const {
  BaseModelSql
} = require('xc-data-mapper');

class rental extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./rental.meta.js')
    });

  }

}


module.exports = rental;