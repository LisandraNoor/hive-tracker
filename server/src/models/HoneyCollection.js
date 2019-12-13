module.exports = (sequelize, DataTypes) => { 
  const HoneyCollection = sequelize.define('HoneyCollection', {
    date: DataTypes.DATE,
    amount: DataTypes.INTEGER
  })
  HoneyCollection.associate = function (models) {
    HoneyCollection.belongsTo(models.User)
  }
  return HoneyCollection
}