module.exports = (sequelize, DataTypes) => { 
  const Hive = sequelize.define('Hive', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  })
  return Hive
}