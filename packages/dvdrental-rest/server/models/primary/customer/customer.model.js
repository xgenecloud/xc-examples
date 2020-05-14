const {
  BaseModelSql
} = require('xc-data-mapper');

class customer extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./customer.meta.js')
    });

  }

}


module.exports = customer;