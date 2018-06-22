module.exports = (sequelize, DataTypes) => {
  const Procurespecdoc = sequelize.define('Procurespecdoc', {
    MSType: {
      type: DataTypes.CHAR,
      primaryKey: true
    },
    MSProperty: {
      type: DataTypes.CHAR,
      primaryKey: true
    },
    OptionNum: {
      type: DataTypes.CHAR,
      required: true,
      primaryKey: true
    },
    RefNum: {
      type: DataTypes.CHAR,
      primaryKey: true
    },
    DocContent: {
      type: DataTypes.STRING
    },
    ImgLoc: {
      type: DataTypes.CHAR
    }
  })

  Procurespecdoc.associate = (models) => {
  }

  return Procurespecdoc
}
