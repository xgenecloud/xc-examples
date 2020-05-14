const {
  BaseModelSql
} = require('xc-data-mapper');

class inventory extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./inventory.meta.js')
    });

  }

}


module.exports = inventory;