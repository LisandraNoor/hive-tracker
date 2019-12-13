module.exports = (sequelize, DataTypes) => { 
  const Inspection = sequelize.define('Inspection', {
    //misc
    date: DataTypes.DATE,
    attitude: DataTypes.STRING,
    strength: DataTypes.STRING,
    feedAmount: DataTypes.STRING,
    frameCoverage: DataTypes.STRING,
    //queen
    queen: DataTypes.STRING,
    queenColor: DataTypes.STRING,
    //frames
    stringFrame: DataTypes.INTEGER, //traadiga
    bottomFrame: DataTypes.INTEGER, //p6hjaga
    fullFrame: DataTypes.INTEGER, //ylesehitatud
    removedFramed: DataTypes.INTEGER,
    //weather
    degrees: DataTypes.INTEGER,
    weather: DataTypes.STRING,
    //eggs
    eggs: DataTypes.STRING,
    eggAmount: DataTypes.STRING,
    //disease
    disease: DataTypes.STRING,
    diseaseType: DataTypes.STRING,
    //furros
    furros: DataTypes.STRING,
    furrosAmount: DataTypes.STRING,
    //haue
    haue: DataTypes.STRING,
    haueAmount: DataTypes.STRING
  })
  Inspection.associate = function (models) {
    Inspection.belongsTo(models.User)
    Inspection.belongsTo(models.Hive)
  }
  return Inspection
}