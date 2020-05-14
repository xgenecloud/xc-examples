module.exports = {
  tableName: 'language',
  columns: [{
      columnName: 'language_id',
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
      columnName: 'name',
      type: 'string',
      dataType: 'char',
      notNull: true,
      data_type_x_precision: "20",
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
    "constraintName": "fk_film_language",
    "tableName": "film",
    "columnName": "language_id",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "language",
    "referencedColumnName": "language_id",
    "matchOption": "NONE",
    "updateRule": "CASCADE",
    "deleteRule": "RESTRICT",
    "tableSchema": "sakila"
  }, {
    "constraintName": "fk_film_language_original",
    "tableName": "film",
    "columnName": "original_language_id",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "language",
    "referencedColumnName": "language_id",
    "matchOption": "NONE",
    "updateRule": "CASCADE",
    "deleteRule": "RESTRICT",
    "tableSchema": "sakila"
  }],
  belongsTo: [],
  dbType: 'mysql'
}