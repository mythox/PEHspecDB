module.exports = (sequelize, DataTypes) => {
  const AlloyCode = sequelize.define('AlloyCode', {
    AlloyCode: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true
    },
    AlloyStandardName: {
      type: DataTypes.STRING,
      required: true,
      unique: true
    },
    TradeName: DataTypes.STRING,
    Remark: DataTypes.STRING,
    LastChangeDate: {
      type: DataTypes.DATE,
      required: true
    }
  })

  AlloyCode.associate = function (models) {
  }

  return AlloyCode
}
