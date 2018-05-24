module.exports = (sequelize, DataTypes) => {
  const MatProp = sequelize.define('MatProp', {
    MaterialNum: {
      type: DataTypes.CHAR,
      unique: true,
      primaryKey: true
    },
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
    RefNum: {
      type: DataTypes.CHAR,
      required: true
    },
    OptionNum: {
      type: DataTypes.CHAR,
      required: true
    },
    PSType: {
      type: DataTypes.DATE,
      required: true
    }
  })

  MatProp.associate = function (models) {
  }

  return MatProp
}
