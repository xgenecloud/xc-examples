module.exports = {
  tableName: 'category',
  columns: [{
      columnName: 'category_id',
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
      dataType: 'varchar',
      notNull: true,
      data_type_x_precision: "25",
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
  belongsTo: [],
  dbType: 'mysql'
}