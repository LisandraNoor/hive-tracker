module.exports = (sequelize, DataTypes) => { 
    const Bookkeeping = sequelize.define('Bookkeeping', {
      date: DataTypes.DATE,
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      amount: DataTypes.INTEGER
    })
    return Bookkeeping
  }