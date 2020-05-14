const {
  BaseModelSql
} = require('xc-data-mapper');

class actor extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./actor.meta.js')
    });

  }

}


module.exports = actor;