const {BaseComponent} = require('xc-core');
const path = require('path');
const glob = require('glob');



class Databases extends BaseComponent {

  constructor(app) {
    super(app);
    this.app = app;
    this.middlewares = {};
  }


  async init(app) {
    console.log('databases.init()', __dirname);

    try {

      glob.sync(path.join(__dirname, '**', '*.middleware.js')).forEach((file) => {
        const mw = require(file);
        app.$middlewares[mw.name] = new mw(app);
      });

    } catch (e) {
      console.log(e);
      throw e;
    }
  }


}


module.exports = Databases;