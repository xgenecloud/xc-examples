module.exports = {
  tableName: 'payment',
  columns: [{
      columnName: 'payment_id',
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
      columnName: 'customer_id',
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
      columnName: 'staff_id',
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
      columnName: 'rental_id',
      type: 'integer',
      dataType: 'int',
      data_type_x_precision: "11",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'amount',
      type: 'decimal',
      dataType: 'decimal',
      notNull: true,
      data_type_x_precision: "5",
      data_type_x_scale: 2,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'payment_date',
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
  hasMany: [],
  belongsTo: [{
    "constraintName": "fk_payment_rental",
    "tableName": "payment",
    "columnName": "rental_id",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "rental",
    "referencedColumnName": "rental_id",
    "matchOption": "NONE",
    "updateRule": "CASCADE",
    "deleteRule": "SET NULL",
    "tableSchema": "sakila"
  }, {
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
    "constraintName": "fk_payment_staff",
    "tableName": "payment",
    "columnName": "staff_id",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "staff",
    "referencedColumnName": "staff_id",
    "matchOption": "NONE",
    "updateRule": "CASCADE",
    "deleteRule": "RESTRICT",
    "tableSchema": "sakila"
  }],
  dbType: 'mysql'
}