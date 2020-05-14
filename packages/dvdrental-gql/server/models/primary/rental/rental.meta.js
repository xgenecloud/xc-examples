module.exports = {
  tableName: 'rental',
  columns: [{
      columnName: 'rental_id',
      type: 'integer',
      dataType: 'int',
      notNull: true,
      primaryKey: true,
      autoIncrement: true,
      data_type_x_precision: "11",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'rental_date',
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
      columnName: 'inventory_id',
      type: 'integer',
      dataType: 'mediumint',
      notNull: true,
      unsigned: true,
      data_type_x_precision: "8",
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
      columnName: 'return_date',
      type: 'datetime',
      dataType: 'datetime',
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
  }],
  belongsTo: [{
    "constraintName": "fk_rental_staff",
    "tableName": "rental",
    "columnName": "staff_id",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "staff",
    "referencedColumnName": "staff_id",
    "matchOption": "NONE",
    "updateRule": "CASCADE",
    "deleteRule": "RESTRICT",
    "tableSchema": "sakila"
  }, {
    "constraintName": "fk_rental_inventory",
    "tableName": "rental",
    "columnName": "inventory_id",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "inventory",
    "referencedColumnName": "inventory_id",
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
  dbType: 'mysql'
}