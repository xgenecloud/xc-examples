const {
  BaseModelSql
} = require('xc-data-mapper');

class staff extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./staff.meta.js')
    });

  }

}


module.exports = staff;