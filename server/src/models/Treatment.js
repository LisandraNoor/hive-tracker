module.exports = (sequelize, DataTypes) => { 
  const Treatment = sequelize.define('Treatment', {
    date: DataTypes.DATE,
    type: DataTypes.STRING,
    amount: DataTypes.INTEGER
  })
  return Treatment
}