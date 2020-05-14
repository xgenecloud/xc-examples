const {
  BaseService
} = require('xc-core');

class StaffHmPaymentService extends BaseService {

  constructor(app) {
    super(app);
    this.staff = app.$dbs.primary.staff;
    this.payment = app.$dbs.primary.payment;
  }



  async read(req, res) {
    let data = await this.payment.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'staff',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.payment.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'staff',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.payment.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'staff',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.payment.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'staff',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.payment.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'staff',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.payment.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'staff',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.payment.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'staff',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.staff.hasManyChildren({
      child: 'payment',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.staff.hasManyList({
      ...req.query,
      childs: `payment`
    })
  }

}

module.exports = StaffHmPaymentService;