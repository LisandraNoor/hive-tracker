module.exports = (sequelize, DataTypes) => { 
  const Feeding = sequelize.define('Feeding', {
    date: DataTypes.DATE,
    type: DataTypes.STRING,
    amount: DataTypes.INTEGER
  })
  return Feeding
}