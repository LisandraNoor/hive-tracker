module.exports = (sequelize, DataTypes) => { 
  const Treatment = sequelize.define('Treatment', {
    date: DataTypes.DATE,
    type: DataTypes.STRING,
    amount: DataTypes.INTEGER
  })
  Treatment.associate = function (models) {
    Treatment.belongsTo(models.User)
    Treatment.belongsTo(models.Hive)
  }
  return Treatment
}