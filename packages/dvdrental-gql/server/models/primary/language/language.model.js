const {
  BaseModelSql
} = require('xc-data-mapper');

class language extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./language.meta.js')
    });

  }

}


module.exports = language;