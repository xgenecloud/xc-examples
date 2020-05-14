const {
  BaseModelSql
} = require('xc-data-mapper');

class store extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./store.meta.js')
    });

  }

}


module.exports = store;