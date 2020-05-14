module.exports = {
  tableName: 'inventory',
  columns: [{
      columnName: 'inventory_id',
      type: 'integer',
      dataType: 'mediumint',
      notNull: true,
      unsigned: true,
      primaryKey: true,
      autoIncrement: true,
      data_type_x_precision: "8",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'film_id',
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
  }],
  belongsTo: [{
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
    "constraintName": "fk_inventory_film",
    "tableName": "inventory",
    "columnName": "film_id",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "film",
    "referencedColumnName": "film_id",
    "matchOption": "NONE",
    "updateRule": "CASCADE",
    "deleteRule": "RESTRICT",
    "tableSchema": "sakila"
  }],
  dbType: 'mysql'
}