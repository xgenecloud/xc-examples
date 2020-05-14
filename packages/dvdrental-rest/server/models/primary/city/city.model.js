const {
  BaseModelSql
} = require('xc-data-mapper');

class city extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./city.meta.js')
    });

  }

}


module.exports = city;