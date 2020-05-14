module.exports = {
  tableName: 'users',
  columns: [{
      columnName: 'id',
      type: 'integer',
      dataType: 'int',
      notNull: true,
      unsigned: true,
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
      columnName: 'email',
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
      columnName: 'password',
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
      columnName: 'salt',
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
      columnName: 'firstname',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "255",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'lastname',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "255",
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
      data_type_x_precision: "45",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'roles',
      type: 'string',
      dataType: 'varchar',
      default: "user",
      columnDefault: "user",
      data_type_x_precision: "255",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'created_at',
      type: 'timestamp',
      dataType: 'timestamp',
      default: "CURRENT_TIMESTAMP",
      columnDefault: "CURRENT_TIMESTAMP",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'updated_at',
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
    {
      columnName: 'provider',
      type: 'string',
      dataType: 'varchar',
      default: "local",
      columnDefault: "local",
      data_type_x_precision: "255",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'provider_data',
      type: 'text',
      dataType: 'mediumtext',
      data_type_x_precision: "16777215",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'provider_data_plus',
      type: 'text',
      dataType: 'mediumtext',
      data_type_x_precision: "16777215",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'provider_ids',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "1024",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'reset_password_token',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "45",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'reset_password_expires',
      type: 'timestamp',
      dataType: 'timestamp',
      data_type_x_precision: "6",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'email_verification_token',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "255",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'email_verified',
      type: 'integer',
      dataType: 'tinyint',
      default: "0",
      columnDefault: "0",
      data_type_x_precision: "1",
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