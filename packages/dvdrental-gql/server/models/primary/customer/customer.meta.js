module.exports = {
  tableName: 'customer',
  columns: [{
      columnName: 'customer_id',
      type: 'integer',
      dataType: 'smallint',
      notNull: true,
      unsigned: true,
      primaryKey: true,
      autoIncrement: true,
      data_type_x_precision: "5",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'store_id',
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
      columnName: 'first_name',
      type: 'string',
      dataType: 'varchar',
      notNull: true,
      data_type_x_precision: "45",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'last_name',
      type: 'string',
      dataType: 'varchar',
      notNull: true,
      data_type_x_precision: "45",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'email',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "50",
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
      columnName: 'active',
      type: 'integer',
      dataType: 'tinyint',
      notNull: true,
      default: "1",
      columnDefault: "1",
      data_type_x_precision: "1",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'create_date',
      type: 'datetime',
      dataType: 'datetime',
      notNull: true,
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
    "constraintName": "fk_payment_customer",
    "tableName": "payment",
    "columnName": "customer_id",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "customer",
    "referencedColumnName": "customer_id",
    "matchOption": "NONE",
    "updateRule": "CASCADE",
    "deleteRule": "RESTRICT",
    "tableSchema": "sakila"
  }, {
    "constraintName": "fk_rental_customer",
    "tableName": "rental",
    "columnName": "customer_id",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "customer",
    "referencedColumnName": "customer_id",
    "matchOption": "NONE",
    "updateRule": "CASCADE",
    "deleteRule": "RESTRICT",
    "tableSchema": "sakila"
  }],
  belongsTo: [{
    "constraintName": "fk_customer_address",
    "tableName": "customer",
    "columnName": "address_id",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "address",
    "referencedColumnName": "address_id",
    "matchOption": "NONE",
    "updateRule": "CASCADE",
    "deleteRule": "RESTRICT",
    "tableSchema": "sakila"
  }, {
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
  }],
  dbType: 'mysql'
}