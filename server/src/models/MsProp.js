module.exports = (sequelize, DataTypes) => {
  const MsProp = sequelize.define('MsProp', {
    MSType: {
      type: DataTypes.CHAR,
      primaryKey: true
    },
    MSProperty: {
      type: DataTypes.CHAR,
      primaryKey: true
    },
    MSPropDesc: {
      type: DataTypes.CHAR,
      required: true
    },
    PSType: {
      type: DataTypes.CHAR,
      required: true
    }
  })

  MsProp.associate = (models) => {
  }

  return MsProp
}
