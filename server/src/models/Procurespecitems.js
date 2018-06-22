module.exports = (sequelize, DataTypes) => {
  const Procurespecitem = sequelize.define('Procurespecitem', {
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
    MsrUnit: {
      type: DataTypes.CHAR
    },
    MinVal: {
      type: DataTypes.STRING
    },
    MaxVal: {
      type: DataTypes.STRING
    },
    Remark: {
      type: DataTypes.CHAR
    },
    Exception: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    ImgLoc: {
      type: DataTypes.CHAR
    }
  })

  Procurespecitem.associate = (models) => {
  }

  return Procurespecitem
}
