module.exports = (sequelize, DataTypes) => {
  const Dimension = sequelize.define('Dimension', {
    DimensionNum: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true
    },
    Thickness: {
      type: DataTypes.DECIMAL,
      unique: true
    },
    Thickness0: DataTypes.DECIMAL,
    Thickness1: DataTypes.DECIMAL,
    Width: {
      type: DataTypes.DECIMAL,
      required: true
    },
    LastChangeBy: {
      type: DataTypes.CHAR,
      required: true
    },
    LastChangeDate: {
      type: DataTypes.DATE,
      required: true
    }
  })

  Dimension.associate = function (models) {
  }

  return Dimension
}
