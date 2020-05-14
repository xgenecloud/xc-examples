module.exports = {
  tableName: 'staff',
  columns: [{
      columnName: 'staff_id',
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
      columnName: 'picture',
      type: 'blob',
      dataType: 'blob',
      data_type_x_precision: "65535",
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
      columnName: 'username',
      type: 'string',
      dataType: 'varchar',
      notNull: true,
      data_type_x_precision: "16",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'password',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "40",
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
  }, {
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
  }],
  belongsTo: [{
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
  }, {
    "constraintName": "fk_staff_address",
    "tableName": "staff",
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