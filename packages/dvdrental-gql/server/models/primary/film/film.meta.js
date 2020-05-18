module.exports = {
  tableName: 'film',
  columns: [{
      columnName: 'film_id',
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
      columnName: 'title',
      type: 'string',
      dataType: 'varchar',
      notNull: true,
      data_type_x_precision: "128",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'description',
      type: 'text',
      dataType: 'text',
      data_type_x_precision: "65535",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'release_year',
      type: 'year',
      dataType: 'year',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'language_id',
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
      columnName: 'original_language_id',
      type: 'integer',
      dataType: 'tinyint',
      unsigned: true,
      data_type_x_precision: "3",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'rental_duration',
      type: 'integer',
      dataType: 'tinyint',
      notNull: true,
      default: "3",
      columnDefault: "3",
      unsigned: true,
      data_type_x_precision: "3",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'rental_rate',
      type: 'decimal',
      dataType: 'decimal',
      notNull: true,
      default: "4.99",
      columnDefault: "4.99",
      data_type_x_precision: "4",
      data_type_x_scale: 2,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'length',
      type: 'integer',
      dataType: 'smallint',
      unsigned: true,
      data_type_x_precision: "5",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'replacement_cost',
      type: 'decimal',
      dataType: 'decimal',
      notNull: true,
      default: "19.99",
      columnDefault: "19.99",
      data_type_x_precision: "5",
      data_type_x_scale: 2,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'rating',
      type: 'enum',
      dataType: 'enum',
      default: "G",
      columnDefault: "G",
      data_type_x_precision: "'G','PG','PG-13','R','NC-17'",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'special_features',
      type: 'set',
      dataType: 'set',
      data_type_x_precision: "'Trailers','Commentaries','Deleted Scenes','Behind the Scenes'",
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
    "constraintName": "fk_film_actor_film",
    "tableName": "film_actor",
    "columnName": "film_id",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "film",
    "referencedColumnName": "film_id",
    "matchOption": "NONE",
    "updateRule": "CASCADE",
    "deleteRule": "RESTRICT",
    "tableSchema": "sakila"
  }, {
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
  belongsTo: [{
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
  dbType: 'mysql'
}