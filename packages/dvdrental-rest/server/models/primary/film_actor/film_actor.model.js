const {
  BaseModelSql
} = require('xc-data-mapper');

class film_actor extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./film_actor.meta.js')
    });

  }

}


module.exports = film_actor;