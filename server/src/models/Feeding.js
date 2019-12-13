module.exports = (sequelize, DataTypes) => { 
  const Feeding = sequelize.define('Feeding', {
    date: DataTypes.DATE,
    type: DataTypes.STRING,
    amount: DataTypes.INTEGER
  })
  Feeding.associate = function (models) {
    Feeding.belongsTo(models.User)
    Feeding.belongsTo(models.Hive)
  }
  return Feeding
}