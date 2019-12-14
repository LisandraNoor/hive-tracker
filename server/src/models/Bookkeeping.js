module.exports = (sequelize, DataTypes) => { 
    const Bookkeeping = sequelize.define('Bookkeeping', {
      date: DataTypes.DATE,
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      amount: DataTypes.INTEGER
    })
    Bookkeeping.associate = function (models) {
      Bookkeeping.belongsTo(models.User)
    }
    return Bookkeeping
  }