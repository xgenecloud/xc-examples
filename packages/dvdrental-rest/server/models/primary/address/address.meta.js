module.exports = {
  tableName: 'address',
  columns: [{
      columnName: 'address_id',
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
      columnName: 'address',
      type: 'string',
      dataType: 'varchar',
      notNull: true,
      data_type_x_precision: "50",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'address2',
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
      columnName: 'district',
      type: 'string',
      dataType: 'varchar',
      notNull: true,
      data_type_x_precision: "20",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'city_id',
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
      columnName: 'postal_code',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "10",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'phone',
      type: 'string',
      dataType: 'varchar',
      notNull: true,
      data_type_x_precision: "20",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'location',
      type: 'geometry',
      dataType: 'geometry',
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
  }, {
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
  belongsTo: [{
    "constraintName": "fk_address_city",
    "tableName": "address",
    "columnName": "city_id",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "city",
    "referencedColumnName": "city_id",
    "matchOption": "NONE",
    "updateRule": "CASCADE",
    "deleteRule": "RESTRICT",
    "tableSchema": "sakila"
  }],
  dbType: 'mysql'
}