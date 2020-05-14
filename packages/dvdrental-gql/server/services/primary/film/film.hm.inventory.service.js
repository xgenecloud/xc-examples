const inventory = require('../../../graphql/primary/types/inventory.type').default;
const {
  BaseServiceGql
} = require('xc-core');

class FilmHmInventoryService extends BaseServiceGql {

  constructor(app = {}) {
    super(app)
    this.app = app;
    this.film = app.$dbs.primary.film;
  }

  async _inventoryList(ids) {
    let data = await this.film.hasManyListGQL({
      ids,
      child: 'inventory'
    })
    return ids.map(id => data[id] ? data[id].map(c => new inventory(c, this.app)) : []);
  }

  async _inventoryCount(ids) {
    let data = await this.film.hasManyListCount({
      ids,
      child: 'inventory'
    })
    return data;
  }

}

module.exports = FilmHmInventoryService;