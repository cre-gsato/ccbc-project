const Sequelize = require('sequelize')

exports.sequelize = new Sequelize(
  'postgres://postgres:pgadmin@localhost:5432/postgres',
  {
    dialect: 'postgres',
    operatorsAliases: false,
    timezone: '+09:00'
  }
)

exports.sequelize2 = new Sequelize(
  'postgres://postgres:pgadmin@localhost:5432/harvest-group',
  {
    dialect: 'postgres',
    operatorsAliases: false,
    timezone: '+09:00'
  }
)

exports.sequelize3 = function(db_name) {
  console.log('sequelize3')
  console.log('db_name:' + db_name)
  return new Sequelize(
    'postgres://postgres:pgadmin@localhost:5432/' + db_name,
    {
      dialect: 'postgres',
      operatorsAliases: false,
      timezone: '+09:00'
    }
  )
}
