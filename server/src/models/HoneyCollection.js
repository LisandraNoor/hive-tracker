module.exports = (sequelize, DataTypes) => { 
  const HoneyCollection = sequelize.define('HoneyCollection', {
    date: DataTypes.DATE,
    amount: DataTypes.INTEGER
  })
  return HoneyCollection
}