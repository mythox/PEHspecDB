module.exports = (sequelize, DataTypes) => {
  const MsType = sequelize.define('MsType', {
    MSType: {
      type: DataTypes.CHAR,
      primaryKey: true
    },
    MSTitle: {
      type: DataTypes.CHAR,
      allowNull: false
    }
  })

  MsType.associate = (models) => {
  }

  return MsType
}
