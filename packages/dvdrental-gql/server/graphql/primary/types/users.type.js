const {
  // eslint-disable-next-line no-unused-vars
  Loader
} = require('xc-core');


class UsersType {

  constructor(args = {}, app = {}) {

    Object.assign(this, args);
    this.app = app;



  }



}


exports.default = UsersType;