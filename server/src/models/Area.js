module.exports = (sequelize, DataTypes) => {
  const Area = sequelize.define('Area', {
    AreaCode: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true
    },
    AreaDesc: DataTypes.STRING,
    PrintSeq: DataTypes.CHAR
  })

  Area.associate = function (models) {
  }

  return Area
}
