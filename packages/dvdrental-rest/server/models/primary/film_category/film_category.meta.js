module.exports = {
  tableName: 'film_category',
  columns: [{
      columnName: 'film_id',
      type: 'integer',
      dataType: 'smallint',
      notNull: true,
      unsigned: true,
      primaryKey: true,
      data_type_x_precision: "5",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'category_id',
      type: 'integer',
      dataType: 'tinyint',
      notNull: true,
      unsigned: true,
      primaryKey: true,
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
  hasMany: [],
  belongsTo: [{
    "constraintName": "fk_film_category_film",
    "tableName": "film_category",
    "columnName": "film_id",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "film",
    "referencedColumnName": "film_id",
    "matchOption": "NONE",
    "updateRule": "CASCADE",
    "deleteRule": "RESTRICT",
    "tableSchema": "sakila"
  }, {
    "constraintName": "fk_film_category_category",
    "tableName": "film_category",
    "columnName": "category_id",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "category",
    "referencedColumnName": "category_id",
    "matchOption": "NONE",
    "updateRule": "CASCADE",
    "deleteRule": "RESTRICT",
    "tableSchema": "sakila"
  }],
  dbType: 'mysql'
}