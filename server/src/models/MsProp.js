module.exports = (sequelize, DataTypes) => {
  const MsProp = sequelize.define('MsProp', {
    MSType: {
      type: DataTypes.CHAR,
      unique: true,
      primaryKey: true
    },
    MSProperty: {
      type: DataTypes.CHAR,
      unique: true,
      primaryKey: true
    },
    MSPropDesc: {
      type: DataTypes.CHAR,
      unique: true,
      required: true
    },
    PSType: {
      type: DataTypes.CHAR,
      required: true,
      unique: true,
    }
  })

  MsProp.associate = function (models) {
  }

  return MsProp
}
