module.exports = {
  tableName: 'film_text',
  columns: [{
      columnName: 'film_id',
      type: 'integer',
      dataType: 'smallint',
      notNull: true,
      primaryKey: true,
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
      data_type_x_precision: "255",
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
  ],
  pks: [],
  hasMany: [],
  belongsTo: [],
  dbType: 'mysql'
}