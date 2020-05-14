const {
  BaseModelSql
} = require('xc-data-mapper');

class address extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./address.meta.js')
    });

  }

}


module.exports = address;