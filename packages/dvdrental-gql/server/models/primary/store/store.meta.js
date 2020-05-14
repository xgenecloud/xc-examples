module.exports = {
  tableName: 'store',
  columns: [{
      columnName: 'store_id',
      type: 'integer',
      dataType: 'tinyint',
      notNull: true,
      unsigned: true,
      primaryKey: true,
      autoIncrement: true,
      data_type_x_precision: "3",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'manager_staff_id',
      type: 'integer',
      dataType: 'tinyint',
      notNull: true,
      unsigned: true,
      data_type_x_precision: "3",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'address_id',
      type: 'integer',
      dataType: 'smallint',
      notNull: true,
      unsigned: true,
      data_type_x_precision: "5",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'last_update',
      type: 'timestamp',
      dataType: 'timestamp',
      notNull: true,
      default: "CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP",
      columnDefault: "CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  ],
  pks: [],
  hasMany: [{
    "constraintName": "fk_customer_store",
    "tableName": "customer",
    "columnName": "store_id",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "store",
    "referencedColumnName": "store_id",
    "matchOption": "NONE",
    "updateRule": "CASCADE",
    "deleteRule": "RESTRICT",
    "tableSchema": "sakila"
  }, {
    "constraintName": "fk_inventory_store",
    "tableName": "inventory",
    "columnName": "store_id",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "store",
    "referencedColumnName": "store_id",
    "matchOption": "NONE",
    "updateRule": "CASCADE",
    "deleteRule": "RESTRICT",
    "tableSchema": "sakila"
  }, {
    "constraintName": "fk_staff_store",
    "tableName": "staff",
    "columnName": "store_id",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "store",
    "referencedColumnName": "store_id",
    "matchOption": "NONE",
    "updateRule": "CASCADE",
    "deleteRule": "RESTRICT",
    "tableSchema": "sakila"
  }],
  belongsTo: [{
    "constraintName": "fk_store_address",
    "tableName": "store",
    "columnName": "address_id",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "address",
    "referencedColumnName": "address_id",
    "matchOption": "NONE",
    "updateRule": "CASCADE",
    "deleteRule": "RESTRICT",
    "tableSchema": "sakila"
  }],
  dbType: 'mysql'
}