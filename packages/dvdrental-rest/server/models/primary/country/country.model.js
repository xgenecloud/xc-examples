const {
  BaseModelSql
} = require('xc-data-mapper');

class country extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./country.meta.js')
    });

  }

}


module.exports = country;