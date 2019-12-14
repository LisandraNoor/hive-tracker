module.exports = (sequelize, DataTypes) => { 
  const Hive = sequelize.define('Hive', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  })
  Hive.associate = function (models) {
    Hive.belongsTo(models.User)
    // Hive.belongsTo(models.Feeding)
  }
  return Hive
}