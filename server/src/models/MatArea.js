module.exports = (sequelize, DataTypes) => {
  const MatArea = sequelize.define('MatArea', {
    MaterialNum: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true
    },AreaCode: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true
    },
    VerifiedBy: DataTypes.STRING,
    VerifiedDate: DataTypes.DATE
  })

  MatArea.associate = function (models) {
    MatArea.belongsTo (models.Area, {
      foreignKey: 'AreaCode'
    })
  }

  return MatArea
}
