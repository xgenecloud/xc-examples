const {
  BaseModelSql
} = require('xc-data-mapper');

class category extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./category.meta.js')
    });

  }

}


module.exports = category;