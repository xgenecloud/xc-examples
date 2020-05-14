const {
  BaseModelSql
} = require('xc-data-mapper');

class payment extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./payment.meta.js')
    });

  }

}


module.exports = payment;